import { useLocale } from '../i18n/useLocale'

function Footer() {
  const { t } = useLocale()
  const copy = t('home.footer')
  const navigation = t('common.navigation')

  return (
    <footer className="site-footer">
      <div className="section-inner footer-inner">
        <div>
          <p className="footer-mark">{copy.title}</p>
          <p className="footer-sub">{copy.subtitle}</p>
          <p className="footer-note">{copy.note}</p>
        </div>

        <nav className="footer-nav" aria-label={copy.explore}>
          <a href="/eras">{navigation.eras}</a>
          <a href="/timeline">{navigation.timeline}</a>
          <a href="/people">{navigation.people}</a>
          <a href="/family-tree">{navigation.familyTree}</a>
          <a href="/culture">{navigation.culture}</a>
          <a href="/experience">{navigation.experience}</a>
          <a href="/about">{navigation.about}</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
