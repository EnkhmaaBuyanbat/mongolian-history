import { navItems } from '../data/nav'
import { useLocale } from '../i18n/useLocale'

function NavLinks({ onNavigate, labels }) {
  return (
    <ul className="nav-list">
      {navItems.map((item) => (
        <li key={item.id}>
          {item.placeholder ? (
            <a
              href={item.href}
              className="is-placeholder"
              aria-disabled="true"
              aria-label={labels[item.labelKey]}
              onClick={(event) => event.preventDefault()}
            >
              {labels[item.labelKey]}
            </a>
          ) : (
            <a href={item.href} onClick={onNavigate}>
              {labels[item.labelKey]}
            </a>
          )}
        </li>
      ))}
    </ul>
  )
}

function Header() {
  const { locale, setLocale, t } = useLocale()
  const navigation = t('common.navigation')

  return (
    <header className="site-header">
      <a className="wordmark" href="/">
        {t('home.footer.title')}
      </a>

      <nav className="site-nav-desktop" aria-label={t('common.accessibility.primaryNavigation')}>
        <NavLinks labels={navigation} />
      </nav>

      <details className="nav-drawer">
        <summary>{navigation.menu}</summary>
        <nav aria-label={t('common.accessibility.mobileNavigation')}>
          <NavLinks
            labels={navigation}
            onNavigate={(event) => {
              event.currentTarget.closest('details')?.removeAttribute('open')
            }}
          />
        </nav>
      </details>

      <div className="lang-switch" role="group" aria-label={t('common.accessibility.languageControl')}>
        <button type="button" aria-label={t('common.languages.english')} aria-pressed={locale === 'en'} lang="en" onClick={() => setLocale('en')}>
          EN
        </button>
        <span className="lang-rule" aria-hidden="true">
          |
        </span>
        <button type="button" aria-label={t('common.languages.mongolian')} aria-pressed={locale === 'mn'} lang="mn" onClick={() => setLocale('mn')}>
          МН
        </button>
      </div>
    </header>
  )
}

export default Header
