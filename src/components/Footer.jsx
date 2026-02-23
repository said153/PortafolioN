import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      position: 'relative', zIndex: 1,
      borderTop: '1px solid rgba(0,212,255,0.1)',
      padding: '3rem 2rem 2rem',
      background: 'rgba(5,8,16,0.8)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '2rem',
          marginBottom: '2rem',
          alignItems: 'start',
        }}>

          {/* Logo y descripción */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
              <img
                src="/logo.png"
                alt="Logo"
                style={{
                  height: '32px',
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 0 6px rgba(0,212,255,0.4))',
                  borderRadius: '8px',
                }}
              />
              <span className="font-display" style={{
                color: 'var(--accent-cyan)', fontSize: '0.9rem',
                letterSpacing: '3px', fontWeight: '700',
              }}>
                SAID<span style={{ color: 'var(--text-primary)' }}>_IT</span>
              </span>
            </div>
            <p style={{
              color: 'var(--text-muted)', fontSize: '0.85rem',
              lineHeight: 1.7, fontFamily: 'Rajdhani, sans-serif',
              maxWidth: '220px',
            }}>
              Portafolio personal de redes e infraestructura. Construyendo conexiones que importan.
            </p>
          </motion.div>

          {/* Links rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="font-mono-tech" style={{
              color: 'var(--accent-cyan)', fontSize: '0.7rem',
              letterSpacing: '3px', marginBottom: '1rem',
            }}>
              NAVEGACIÓN
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                { label: 'Inicio', section: 'hero' },
                { label: 'Formación Académica', section: 'academic' },
                { label: 'Hobbies', section: 'hobbies' },
                { label: 'Videos', section: 'videos' },
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    document.getElementById(link.section)?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    color: 'var(--text-muted)', fontSize: '0.9rem',
                    fontFamily: 'Rajdhani, sans-serif', textAlign: 'left',
                    transition: 'color 0.2s ease', padding: 0,
                    width: 'fit-content',
                  }}
                  onMouseEnter={e => e.target.style.color = 'var(--accent-cyan)'}
                  onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
                >
                  <span style={{ color: 'rgba(0,212,255,0.3)', marginRight: '6px' }}>›</span>
                  {link.label}
                </button>
              ))}
              <a
                href="/crypto"
                style={{
                  color: 'var(--text-muted)', fontSize: '0.9rem',
                  fontFamily: 'Rajdhani, sans-serif', textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--accent-cyan)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
              >
                <span style={{ color: 'rgba(0,212,255,0.3)', marginRight: '6px' }}>›</span>
                Crypto & PGP
              </a>
            </div>
          </motion.div>

          {/* Contacto y redes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="font-mono-tech" style={{
              color: 'var(--accent-cyan)', fontSize: '0.7rem',
              letterSpacing: '3px', marginBottom: '1rem',
            }}>
              CONTACTO
            </p>

            <a
              href="mailto:tucorreo@ejemplo.com"
              style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                color: 'var(--text-muted)', textDecoration: 'none',
                fontSize: '0.85rem', fontFamily: 'Share Tech Mono, monospace',
                marginBottom: '1.5rem', transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-cyan)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              <FiMail style={{ fontSize: '0.9rem' }} />
              saidestrada.153@gmail.com
            </a>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { icon: <FiGithub />, href: 'https://github.com/said153' },
                { icon: <FiLinkedin />, href: 'https://linkedin.com/in/omar-said-estrada-yepez-82769b2b2/' },
              ].map(({ icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '36px', height: '36px',
                    border: '1px solid rgba(0,212,255,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text-muted)', textDecoration: 'none',
                    fontSize: '1rem', transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--accent-cyan)'
                    e.currentTarget.style.color = 'var(--accent-cyan)'
                    e.currentTarget.style.boxShadow = '0 0 12px rgba(0,212,255,0.2)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(0,212,255,0.2)'
                    e.currentTarget.style.color = 'var(--text-muted)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Línea divisora */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.2), transparent)',
          margin: '1.5rem 0',
        }} />

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}>
          <span className="font-mono-tech" style={{
            fontSize: '0.7rem', color: 'var(--text-muted)',
          }}>
            © {year} Omar Said Estrada Yepez — Reservados todos los derechos
          </span>
        </div>

      </div>
    </footer>
  )
}