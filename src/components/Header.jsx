import { useEffect, useState } from 'react'
import { navItems } from '../data/nav'
import { useLocale } from '../i18n/useLocale'

function isCurrentPath(href, route, placeholder) {
  if (placeholder || !route) return false
  if (href === '/') return route === '/'
  return route === href || route.startsWith(`${href}/`)
}

function NavLinks({ onNavigate, labels, route }) {
  return (
    <ul className="nav-list">
      {navItems.map((item) => {
        const current = isCurrentPath(item.href, route, item.placeholder)
        return (
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
              <a
                href={item.href}
                aria-current={current ? 'page' : undefined}
                onClick={onNavigate}
              >
                {labels[item.labelKey]}
              </a>
            )}
          </li>
        )
      })}
    </ul>
  )
}

function Header({ route }) {
  const { locale, setLocale, t } = useLocale()
  const navigation = t('common.navigation')
  const [scrolled, setScrolled] = useState(false)
  const isHome = route === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header${isHome ? ' is-home' : ''}${scrolled ? ' is-scrolled' : ''}`}>
      <a className="wordmark" href="/">
        {t('home.footer.title')}
      </a>

      <nav className="site-nav-desktop" aria-label={t('common.accessibility.primaryNavigation')}>
        <NavLinks labels={navigation} route={route} />
      </nav>

      <details className="nav-drawer">
        <summary>{navigation.menu}</summary>
        <nav aria-label={t('common.accessibility.mobileNavigation')}>
          <NavLinks
            labels={navigation}
            route={route}
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
