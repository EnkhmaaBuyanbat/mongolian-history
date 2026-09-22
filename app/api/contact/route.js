import { CONTACT_LIMITS, CONTACT_TYPE_LABELS, parseContactFields } from '@/contact'

const RESEND_FROM = 'Mongolian History <onboarding@resend.dev>'

function jsonError(status, field) {
  const body = { error: status === 400 ? 'invalid' : 'delivery' }
  if (field) body.field = field
  return Response.json(body, { status })
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function emailLines(data, typeLabel) {
  return [
    `Feedback type: ${typeLabel}`,
    `Name: ${data.name || '—'}`,
    `Visitor email: ${data.email || '—'}`,
    `Wants reply: ${data.wantReply ? 'Yes' : 'No'}`,
    `Related page: ${data.page || '—'}`,
    '',
    data.message,
  ]
}

export async function POST(request) {
  const contentLength = Number(request.headers.get('content-length') || 0)
  if (Number.isFinite(contentLength) && contentLength > CONTACT_LIMITS.bodyBytes) {
    return jsonError(413)
  }

  let payload
  try {
    const text = await request.text()
    if (text.length > CONTACT_LIMITS.bodyBytes) return jsonError(413)
    payload = JSON.parse(text)
  } catch {
    return jsonError(400)
  }

  const parsed = parseContactFields(payload)
  if (!parsed.ok) {
    return jsonError(400, parsed.field === 'spam' ? undefined : parsed.field)
  }

  const apiKey = process.env.RESEND_API_KEY?.trim()
  const to = process.env.CONTACT_TO_EMAIL?.trim()
  if (!apiKey || !to) {
    return jsonError(503)
  }

  const typeLabel = CONTACT_TYPE_LABELS[parsed.data.type]
  const lines = emailLines(parsed.data, typeLabel)
  const body = {
    from: RESEND_FROM,
    to: [to],
    subject: `Mongolian History — ${typeLabel}`,
    text: lines.join('\n'),
    html: `<pre style="font:inherit;white-space:pre-wrap">${escapeHtml(lines.join('\n'))}</pre>`,
  }
  if (parsed.data.email) body.reply_to = parsed.data.email

  let response
  try {
    response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
  } catch {
    console.error('contact delivery failed')
    return jsonError(502)
  }

  if (!response.ok) {
    console.error('contact delivery failed', response.status)
    return jsonError(502)
  }

  return Response.json({ ok: true })
}
