import { useState } from 'react'
import { navItems } from '../data/nav'

function NavLinks({ onNavigate }) {
  return (
    <ul className="nav-list">
      {navItems.map((item) => (
        <li key={item.id}>
          {item.placeholder ? (
            <a
              href={item.href}
              className="is-placeholder"
              aria-disabled="true"
              aria-label={`${item.label}, coming soon`}
              onClick={(event) => event.preventDefault()}
            >
              {item.label}
            </a>
          ) : (
            <a href={item.href} onClick={onNavigate}>
              {item.label}
            </a>
          )}
        </li>
      ))}
    </ul>
  )
}

function Header() {
  const [requestedLanguage, setRequestedLanguage] = useState('en')

  return (
    <header className="site-header">
      <a className="wordmark" href="/">
        Mongolian History
      </a>

      <nav className="site-nav-desktop" aria-label="Primary">
        <NavLinks />
      </nav>

      <details className="nav-drawer">
        <summary>Menu</summary>
        <nav aria-label="Primary mobile">
          <NavLinks
            onNavigate={(event) => {
              event.currentTarget.closest('details')?.removeAttribute('open')
            }}
          />
        </nav>
      </details>

      <div className="lang-switch" role="group" aria-label="Language">
        <button type="button" aria-pressed={requestedLanguage === 'en'} lang="en" onClick={() => setRequestedLanguage('en')}>
          EN
        </button>
        <span className="lang-rule" aria-hidden="true">
          |
        </span>
        <button type="button" aria-pressed={requestedLanguage === 'mn'} lang="mn" onClick={() => setRequestedLanguage('mn')}>
          МН
        </button>
        {requestedLanguage === 'mn' ? <span className="language-status" role="status">Mongolian version in development</span> : null}
      </div>
    </header>
  )
}

export default Header
