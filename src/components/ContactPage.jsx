'use client'

import { useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { CONTACT_TYPES, isContactType, parseContactFields, sanitizeRelatedPage } from '../contact'
import { MeanderLine } from './Ornament'
import { useLocale } from '../i18n/useLocale'
import '../contact.css'

function relatedPageFromQuery(value) {
  const raw = String(value ?? '').trim()
  if (!raw) return ''
  const local = sanitizeRelatedPage(raw)
  if (local.ok) return local.page
  try {
    const url = new URL(raw)
    const fromPath = sanitizeRelatedPage(`${url.pathname}${url.search}`)
    return fromPath.ok ? fromPath.page : ''
  } catch {
    return ''
  }
}

const FIELD_ERROR = {
  type: 'errorType',
  name: 'errorName',
  email: 'errorEmail',
  message: 'errorMessage',
  page: 'errorPage',
}

export default function ContactPage() {
  const searchParams = useSearchParams()
  const { t } = useLocale()
  const copy = t('contact')
  const requestedType = searchParams.get('type')
  const initialType = isContactType(requestedType) ? requestedType : 'general'
  const initialPage = relatedPageFromQuery(searchParams.get('page'))
  const [type, setType] = useState(initialType)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [wantReply, setWantReply] = useState(false)
  const [message, setMessage] = useState('')
  const [page, setPage] = useState(initialPage)
  const [website, setWebsite] = useState('')
  const [status, setStatus] = useState('ready')
  const [errorField, setErrorField] = useState('')

  const typeOptions = useMemo(
    () => CONTACT_TYPES.map((id) => ({ id, label: copy.types[id] })),
    [copy.types],
  )
  const sending = status === 'sending'
  const statusMessage = errorField ? copy[FIELD_ERROR[errorField]] ?? copy.validationError
    : status === 'invalid' ? copy.validationError
    : status === 'delivery' ? copy.deliveryError
    : ''

  async function onSubmit(event) {
    event.preventDefault()
    if (sending) return

    const parsed = parseContactFields({ type, name, email, wantReply, message, page, website })
    if (!parsed.ok) {
      setStatus('invalid')
      setErrorField(parsed.field === 'spam' ? '' : parsed.field)
      return
    }

    setStatus('sending')
    setErrorField('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: parsed.data.type,
          name: parsed.data.name,
          email: parsed.data.email,
          wantReply: parsed.data.wantReply,
          message: parsed.data.message,
          page: parsed.data.page,
          website,
        }),
      })
      const result = await response.json().catch(() => ({}))
      if (response.ok && result.ok) {
        setName('')
        setEmail('')
        setWantReply(false)
        setMessage('')
        setWebsite('')
        setPage(parsed.data.page)
        setStatus('success')
        return
      }
      if (response.status === 400 || result.error === 'invalid') {
        setStatus('invalid')
        setErrorField(FIELD_ERROR[result.field] ? result.field : '')
        return
      }
      setStatus('delivery')
    } catch {
      setStatus('delivery')
    }
  }

  return (
    <article className="contact-page">
      <div className="section-inner contact-inner">
        <p className="section-label">{copy.kicker}</p>
        <MeanderLine />
        <h1>{copy.title}</h1>
        <p className="contact-lead">{copy.lead}</p>

        <form className="contact-form" onSubmit={onSubmit} noValidate>
          <label className={`contact-field${errorField === 'type' ? ' is-invalid' : ''}`}>
            <span>{copy.typesLabel}</span>
            <select
              name="type"
              value={type}
              disabled={sending}
              aria-invalid={errorField === 'type'}
              onChange={(event) => setType(event.target.value)}
            >
              {typeOptions.map((option) => (
                <option key={option.id} value={option.id}>{option.label}</option>
              ))}
            </select>
          </label>

          <label className={`contact-field${errorField === 'name' ? ' is-invalid' : ''}`}>
            <span>{copy.nameLabel} <em>{copy.nameOptional}</em></span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              value={name}
              maxLength={120}
              disabled={sending}
              aria-invalid={errorField === 'name'}
              onChange={(event) => setName(event.target.value)}
            />
          </label>

          <label className="contact-honeypot" aria-hidden="true">
            <span>{copy.honeypot}</span>
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={website}
              onChange={(event) => setWebsite(event.target.value)}
            />
          </label>

          <label className="contact-check">
            <input
              type="checkbox"
              name="wantReply"
              checked={wantReply}
              disabled={sending}
              onChange={(event) => setWantReply(event.target.checked)}
            />
            <span>{copy.wantReply}</span>
          </label>

          <label className={`contact-field${errorField === 'email' ? ' is-invalid' : ''}`}>
            <span>{copy.emailLabel} {wantReply ? null : <em>{copy.nameOptional}</em>}</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              value={email}
              required={wantReply}
              aria-required={wantReply}
              aria-invalid={errorField === 'email'}
              disabled={sending}
              onChange={(event) => setEmail(event.target.value)}
            />
            <small>{wantReply ? copy.emailRequired : copy.emailHint}</small>
          </label>

          <label className={`contact-field${errorField === 'message' ? ' is-invalid' : ''}`}>
            <span>{copy.messageLabel}</span>
            <textarea
              name="message"
              rows={8}
              required
              aria-required="true"
              aria-invalid={errorField === 'message'}
              value={message}
              maxLength={8000}
              disabled={sending}
              onChange={(event) => setMessage(event.target.value)}
            />
            <small>{copy.messageRequired}</small>
          </label>

          <label className={`contact-field${errorField === 'page' ? ' is-invalid' : ''}`}>
            <span>{copy.pageLabel}</span>
            <input
              type="text"
              name="page"
              inputMode="url"
              value={page}
              disabled={sending}
              aria-invalid={errorField === 'page'}
              onChange={(event) => setPage(event.target.value)}
            />
            <small>{copy.pageHint}</small>
          </label>

          {status === 'success' ? (
            <div className="contact-status" role="status">
              <h2>{copy.successTitle}</h2>
              <p>{copy.successLead}</p>
            </div>
          ) : statusMessage ? (
            <p className="contact-status is-error" role="alert">{statusMessage}</p>
          ) : null}

          <button type="submit" className="btn-primary" disabled={sending}>
            {sending ? copy.sending : copy.submit}
          </button>
        </form>
      </div>
    </article>
  )
}
