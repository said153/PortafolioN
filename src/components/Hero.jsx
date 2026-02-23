import { useEffect, useState } from 'react'
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { motion } from 'framer-motion'

const roles = [
  'Estudiante de Ingeniería en Sistemas',
  'Enfoque en redes e infraestructura',
  'Fundamentos de seguridad informática',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  // Efecto typewriter
  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1))
        }, 80)
      } else {
        timeout = setTimeout(() => setTyping(false), 1800)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1))
        }, 40)
      } else {
        setRoleIndex((i) => (i + 1) % roles.length)
        setTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 2rem',
      position: 'relative',
      zIndex: 1,
    }}>

      {/* Decoración de fondo — nodos de red */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {[...Array(6)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: '200px', height: '200px',
            border: '1px solid rgba(0,212,255,0.05)',
            borderRadius: '50%',
            top: `${10 + i * 15}%`,
            left: `${5 + i * 14}%`,
            animation: `scan ${6 + i * 2}s linear infinite`,
          }} />
        ))}
      </div>

      <div style={{
        maxWidth: '1200px',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center',
      }}>

        {/* Columna izquierda — texto */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Tag de estado */}
          <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span className="ip-tag">192.168.1.1</span>
            <span className="ip-tag">ESTATUS: ACTIVO</span>
          </div>

          {/* Saludo */}
          <p className="font-mono-tech" style={{
            color: 'var(--accent-cyan)',
            fontSize: '0.9rem',
            marginBottom: '0.5rem',
            letterSpacing: '3px',
          }}>
            {'>'} HOLA, MUNDO
          </p>

          {/* Nombre */}
          <h1 className="font-display" style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '900',
            lineHeight: 1.1,
            marginBottom: '1rem',
            color: 'var(--text-primary)',
          }}>
            Omar Said<br />
            <span style={{ color: 'var(--accent-cyan)' }} className="glow-cyan">
              Estrada Yepez
            </span>
          </h1>

          {/* Rol con typewriter */}
          <div style={{
            height: '32px',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
          }}>
            <span className="font-mono-tech" style={{
              color: 'var(--accent-green)',
              fontSize: '1.1rem',
            }}>
              {displayed}
              <span style={{
                borderRight: '2px solid var(--accent-cyan)',
                marginLeft: '2px',
                animation: 'blink 1s infinite',
              }}>&nbsp;</span>
            </span>
          </div>

          {/* Descripción */}
          <p style={{
            color: 'var(--text-muted)',
            fontSize: '1rem',
            lineHeight: 1.7,
            marginBottom: '2rem',
            maxWidth: '480px',
            fontFamily: 'Rajdhani, sans-serif',
            fontWeight: '400',
          }}>
            Estudiante de Ingeniería en Sistemas apasionado por las 
            redes e infraestructura. Construyendo 
            el futuro de las telecomunicaciones.
          </p>

          {/* Correo */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            marginBottom: '2rem',
            padding: '10px 16px',
            background: 'rgba(0,212,255,0.05)',
            border: '1px solid rgba(0,212,255,0.15)',
            borderRadius: '4px',
            width: 'fit-content',
          }}>
            <FiMail style={{ color: 'var(--accent-cyan)', fontSize: '1rem' }} />
            <span className="font-mono-tech" style={{
              color: 'var(--text-primary)', fontSize: '0.85rem',
            }}>
              saidestrada.153@gmail.com
            </span>
          </div>

          {/* Botones de acción */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <a href="/CV.pdf" download className="btn-primary">
              ↓ DESCARGAR CV
            </a>
            <a href="#academic" className="btn-primary" style={{
              borderColor: 'var(--accent-green)',
              color: 'var(--accent-green)',
            }}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('academic')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              VER PERFIL →
            </a>
          </div>

          {/* Redes sociales */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            {[
              { icon: <FiGithub />, href: 'https://github.com/said153', label: 'GitHub' },
              { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/omar-said-estrada-yepez-82769b2b2/', label: 'LinkedIn' },
            ].map(({ icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                style={{
                  width: '40px', height: '40px',
                  border: '1px solid rgba(0,212,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  fontSize: '1.1rem',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--accent-cyan)'
                  e.currentTarget.style.color = 'var(--accent-cyan)'
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(0,212,255,0.2)'
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

        {/* Columna derecha — foto */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <div style={{ position: 'relative' }}>

            {/* Anillos decorativos */}
            <div style={{
              position: 'absolute', inset: '-20px',
              border: '1px solid rgba(0,212,255,0.1)',
              borderRadius: '50%',
              animation: 'scan 6s linear infinite',
            }} />
            <div style={{
              position: 'absolute', inset: '-40px',
              border: '1px solid rgba(0,212,255,0.05)',
              borderRadius: '50%',
              animation: 'scan 10s linear infinite reverse',
            }} />

            {/* Esquinas decorativas */}
            {['topLeft','topRight','bottomLeft','bottomRight'].map((pos) => (
              <div key={pos} style={{
                position: 'absolute',
                width: '20px', height: '20px',
                ...(pos.includes('top') ? { top: '-1px' } : { bottom: '-1px' }),
                ...(pos.includes('Left') ? { left: '-1px' } : { right: '-1px' }),
                borderTop: pos.includes('top') ? '2px solid var(--accent-cyan)' : 'none',
                borderBottom: pos.includes('bottom') ? '2px solid var(--accent-cyan)' : 'none',
                borderLeft: pos.includes('Left') ? '2px solid var(--accent-cyan)' : 'none',
                borderRight: pos.includes('Right') ? '2px solid var(--accent-cyan)' : 'none',
              }} />
            ))}

            {/* Foto */}
            <div style={{
              width: '320px', height: '380px',
              background: 'var(--bg-card)',
              border: '1px solid rgba(0,212,255,0.2)',
              overflow: 'hidden',
              position: 'relative',
            }}>
              {/* Reemplaza src con tu foto real */}
              <img
                src="/Fotoperfil.jpg"
                alt="Tu nombre"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              {/* Placeholder si no hay foto */}
              <div style={{
                display: 'none',
                width: '100%', height: '100%',
                alignItems: 'center', justifyContent: 'center',
                flexDirection: 'column', gap: '1rem',
                color: 'var(--text-muted)',
              }}>
                <div style={{ fontSize: '4rem' }}>👤</div>
                <span className="font-mono-tech" style={{ fontSize: '0.75rem' }}>
                  FOTO.JPG
                </span>
              </div>

              {/* Overlay sutil */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(5,8,16,0.6) 0%, transparent 50%)',
              }} />
            </div>

            {/* Badge debajo de la foto */}
            <div style={{
              position: 'absolute', bottom: '-16px', left: '50%',
              transform: 'translateX(-50%)',
              background: 'var(--bg-card)',
              border: '1px solid rgba(0,212,255,0.3)',
              padding: '6px 16px',
              whiteSpace: 'nowrap',
            }}>
              <span className="font-mono-tech" style={{
                fontSize: '0.7rem', color: 'var(--accent-cyan)',
              }}>
                ◈ AVAILABLE FOR WORK
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: '8px',
      }}>
        <div style={{
          width: '1px', height: '40px',
          background: 'linear-gradient(to bottom, var(--accent-cyan), transparent)',
          animation: 'scan 2s linear infinite',
        }} />
      </div>
    </section>
  )
}