import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { label: 'INICIO', to: '/', section: 'hero' },
  { label: 'ACADÉMICO', to: '/', section: 'academic' },
  { label: 'HOBBIES', to: '/', section: 'hobbies' },
  { label: 'CRYPTO', to: '/crypto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleScroll = (section) => {
    setMenuOpen(false)
    if (!section) return
    setTimeout(() => {
      const el = document.getElementById(section)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(5,8,16,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(0,212,255,0.1)' : '1px solid transparent',
      transition: 'all 0.3s ease',
      padding: '0 2rem',
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', height: '64px',
      }}>

        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img
              src="/logo.png"
              alt="Logo"
              style={{
                height: '36px',
                width: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 0 6px rgba(0,212,255,0.4))',
                borderRadius: '8px',
              }}
            />
            <span className="font-display" style={{
              color: 'var(--accent-cyan)', fontSize: '1rem',
              letterSpacing: '3px', fontWeight: '700',
            }}>
              SAID<span style={{ color: 'var(--text-primary)' }}>_IT</span>
            </span>
          </div>
        </Link>

        {/* Links desktop */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}
          className="hidden-mobile">
          {navLinks.map((link) => (
            link.to === '/crypto' ? (
              <Link
                key={link.label}
                to={link.to}
                style={{
                  fontFamily: 'Share Tech Mono, monospace',
                  fontSize: '0.75rem',
                  letterSpacing: '2px',
                  color: location.pathname === '/crypto' ? 'var(--accent-cyan)' : 'var(--text-muted)',
                  textDecoration: 'none',
                  transition: 'color 0.3s',
                  padding: '4px 8px',
                  border: location.pathname === '/crypto' ? '1px solid rgba(0,212,255,0.3)' : '1px solid transparent',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--accent-cyan)'}
                onMouseLeave={e => e.target.style.color = location.pathname === '/crypto' ? 'var(--accent-cyan)' : 'var(--text-muted)'}
              >
                {link.label}
              </Link>
            ) : (
              <button
                key={link.label}
                onClick={() => handleScroll(link.section)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: 'Share Tech Mono, monospace',
                  fontSize: '0.75rem', letterSpacing: '2px',
                  color: 'var(--text-muted)', transition: 'color 0.3s',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--accent-cyan)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
              >
                {link.label}
              </button>
            )
          ))}
        </div>

        {/* Status indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          className="hidden-mobile">
          <div style={{
            width: '6px', height: '6px', borderRadius: '50%',
            background: 'var(--accent-green)',
            boxShadow: '0 0 8px var(--accent-green)',
            animation: 'blink 2s infinite',
          }} />
          <span className="font-mono-tech" style={{ fontSize: '0.7rem', color: 'var(--accent-green)' }}>
            ONLINE
          </span>
        </div>

        {/* Menu mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: 'var(--accent-cyan)', fontSize: '1.5rem',
            display: 'none',
          }}
          className="show-mobile"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div style={{
          background: 'rgba(5,8,16,0.98)',
          borderTop: '1px solid rgba(0,212,255,0.1)',
          padding: '1rem 2rem',
          display: 'flex', flexDirection: 'column', gap: '1rem',
        }}>
          {navLinks.map((link) => (
            link.to === '/crypto' ? (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'Share Tech Mono, monospace',
                  fontSize: '0.85rem', letterSpacing: '2px',
                  color: 'var(--accent-cyan)', textDecoration: 'none',
                }}
              >
                {link.label}
              </Link>
            ) : (
              <button
                key={link.label}
                onClick={() => handleScroll(link.section)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: 'Share Tech Mono, monospace',
                  fontSize: '0.85rem', letterSpacing: '2px',
                  color: 'var(--text-muted)', textAlign: 'left',
                }}
              >
                {link.label}
              </button>
            )
          ))}
        </div>
      )}
    </nav>
  )
}