import { useLocale } from '../i18n/useLocale'

function Footer() {
  const { t } = useLocale()
  const copy = t('home.footer')
  return (
    <footer className="site-footer">
      <div className="section-inner footer-inner">
        <div>
          <p className="footer-mark">{copy.title}</p>
          <p className="footer-sub">{copy.subtitle}</p>
          <p className="footer-note">{copy.note}</p>
        </div>

        <ul className="footer-slots">
          <li>{copy.sources}</li>
          <li>{copy.methodology}</li>
          <li>{copy.github}</li>
          <li>{copy.about}</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
