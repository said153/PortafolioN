import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiKey, FiShield, FiVideo, FiLock, FiCopy, FiCheck } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const cryptoInfo = {
  title: 'Friedrich Kasiski (1805–1881)',
  subtitle: 'Biografía de un criptógrafo y el análisis del cifrado de Vigenère',
  sections: [
    {
      id: '01',
      heading: 'INTRODUCCIÓN',
      content: 'Friedrich Kasiski fue un criptógrafo y militar prusiano reconocido por desarrollar uno de los primeros métodos científicos de criptoanálisis. Su trabajo demostró que los sistemas de cifrado considerados seguros podían ser vulnerables al análisis matemático y estadístico.',
    },
    {
      id: '02',
      heading: 'DESARROLLO',
      content: 'En 1863, Kasiski publicó un método para romper el cifrado de Vigenère, el cual había sido considerado irrompible durante más de tres siglos. Su técnica se basaba en identificar patrones repetidos dentro del texto cifrado para estimar la longitud de la clave y posteriormente aplicar análisis de frecuencia a cada segmento del mensaje.',
    },
    {
      id: '03',
      heading: 'RELEVANCIA HOY',
      content: 'El método de Kasiski es una base fundamental del criptoanálisis moderno y continúa siendo estudiado en cursos de seguridad informática. Sus principios influyen en la evaluación de la fortaleza de los algoritmos actuales y en la comprensión de por qué los sistemas criptográficos deben apoyarse en bases matemáticas sólidas.',
    },
    {
      id: '04',
      heading: 'EL CIFRADO DE VIGENÈRE',
      content: 'El cifrado de Vigenère es un sistema de cifrado polialfabético que utiliza una palabra clave para desplazar cada letra del mensaje original según diferentes alfabetos. A diferencia del cifrado César, que usa un solo desplazamiento, Vigenère emplea varios desplazamientos basados en la clave, lo que lo hizo parecer más seguro. Durante siglos fue conocido como “el cifrado indescifrable”, hasta que Kasiski demostró que podía romperse mediante el análisis de patrones y repeticiones.',
    },
  ],
}

export default function CryptoPage() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEhTYUjZJhoMWzbH7CTuHFJoQI9KNCtV5oniMtdVQMEDFJ67zmZwrsi9UgTKiFB02BYqwsovZLuS4HXySuegjSfg==')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>

      {/* Header de página */}
      <div style={{
        borderBottom: '1px solid rgba(0,212,255,0.1)',
        background: 'rgba(5,8,16,0.9)',
        backdropFilter: 'blur(10px)',
        padding: '1rem 2rem',
        position: 'sticky', top: 0, zIndex: 100,
      }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <Link to="/" style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            color: 'var(--text-muted)', textDecoration: 'none',
            fontFamily: 'Share Tech Mono, monospace',
            fontSize: '0.8rem', letterSpacing: '2px',
            transition: 'color 0.2s ease',
          }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-cyan)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            <FiArrowLeft />
            VOLVER AL INICIO
          </Link>

          <span className="font-display" style={{
            color: 'var(--accent-cyan)', fontSize: '0.85rem', letterSpacing: '3px',
          }}>
            CRYPTO<span style={{ color: 'var(--text-muted)' }}></span>
          </span>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: '6px', height: '6px', borderRadius: '50%',
              background: 'var(--accent-green)',
              boxShadow: '0 0 6px var(--accent-green)',
            }} />
            <span className="font-mono-tech" style={{
              fontSize: '0.65rem', color: 'var(--accent-green)',
            }}>
              SECURE CONNECTION
            </span>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

        {/* ═══ SECCIÓN 1: VIDEO PGP ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '6rem' }}
        >
          <p className="font-mono-tech" style={{
            color: 'var(--accent-cyan)', fontSize: '0.8rem',
            letterSpacing: '4px', marginBottom: '0.5rem',
          }}>
            {'>'} SECTION_01
          </p>
          <div className="section-divider" style={{ marginBottom: '2rem' }}>
            <h2 className="font-display" style={{
              fontSize: 'clamp(1.3rem, 2.5vw, 2rem)',
              fontWeight: '700', color: 'var(--text-primary)',
              whiteSpace: 'nowrap',
              display: 'flex', alignItems: 'center', gap: '12px',
            }}>
              <FiVideo style={{ color: 'var(--accent-cyan)' }} />
              SELECTED TOPICS <span style={{ color: 'var(--accent-cyan)' }}>IN CRIPTOGRAPHY</span>
            </h2>
          </div>

          <div className="crypto-video-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr',
              gap: '2rem', alignItems: 'start',
            }}>
              
            {/* Video */}
            <div className="net-card" style={{ overflow: 'hidden' }}>
              <div style={{ position: 'relative' }}>
                <video
                  controls
                  style={{ width: '100%', aspectRatio: '16/9', display: 'block' }}
                >
                  <source src="/videos/PGM.mp4" type="video/mp4" />
                  Tu navegador no soporta video HTML5.
                </video>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 className="font-display" style={{
                  fontSize: '1rem', color: 'var(--text-primary)',
                  letterSpacing: '1px', marginBottom: '0.5rem',
                }}>
                  Video sobre PGP (Pretty Good Privacy)
                </h3>
                <p style={{
                  color: 'var(--text-muted)', fontSize: '0.9rem',
                  lineHeight: 1.6, fontFamily: 'Rajdhani, sans-serif',
                }}>
                </p>
              </div>
            </div>

            {/* Info lateral */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { icon: <FiShield />, label: 'PROTOCOLO', value: 'PGP / GPG' },
                { icon: <FiKey />, label: 'ALGORITMO', value: 'RSA / ECDSA' },
                { icon: <FiLock />, label: 'USO', value: 'Firma y Cifrado' },
              ].map((item) => (
                <div key={item.label} className="net-card" style={{ padding: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{
                      width: '36px', height: '36px',
                      border: '1px solid rgba(0,212,255,0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--accent-cyan)', fontSize: '1rem',
                      flexShrink: 0,
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-mono-tech" style={{
                        fontSize: '0.6rem', color: 'var(--text-muted)',
                        letterSpacing: '2px', marginBottom: '2px',
                      }}>
                        {item.label}
                      </p>
                      <p style={{
                        color: 'var(--text-primary)', fontSize: '0.9rem',
                        fontFamily: 'Rajdhani, sans-serif', fontWeight: '600',
                      }}>
                        {item.value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ═══ SECCIÓN 2: ACERCA DE CRIPTOGRAFÍA ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '6rem' }}
        >
          <p className="font-mono-tech" style={{
            color: 'var(--accent-cyan)', fontSize: '0.8rem',
            letterSpacing: '4px', marginBottom: '0.5rem',
          }}>
            {'>'} SECTION_02
          </p>
          <div className="section-divider" style={{ marginBottom: '2rem' }}>
            <h2 className="font-display" style={{
              fontSize: 'clamp(1.3rem, 2.5vw, 2rem)',
              fontWeight: '700', color: 'var(--text-primary)',
              whiteSpace: 'nowrap',
              display: 'flex', alignItems: 'center', gap: '12px',
            }}>
              <FiShield style={{ color: 'var(--accent-cyan)' }} />
              ACERCA DE <span style={{ color: 'var(--accent-cyan)' }}>CRIPTOGRAFÍA</span>
            </h2>
          </div>

          {/* Tema principal */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{
              padding: '1.5rem 2rem',
              background: 'rgba(0,212,255,0.03)',
              border: '1px solid rgba(0,212,255,0.15)',
              borderLeft: '4px solid var(--accent-cyan)',
              marginBottom: '2rem',
              display: 'flex', gap: '2rem', alignItems: 'center',
              flexWrap: 'wrap',
            }}>
              {/* Foto del criptógrafo */}
              <div style={{ position: 'relative', flexShrink: 0 }}>
                {/* Esquinas decorativas */}
                {['topLeft','topRight','bottomLeft','bottomRight'].map((pos) => (
                  <div key={pos} style={{
                    position: 'absolute', zIndex: 2,
                    width: '12px', height: '12px',
                    ...(pos.includes('top') ? { top: '-4px' } : { bottom: '-4px' }),
                    ...(pos.includes('Left') ? { left: '-4px' } : { right: '-4px' }),
                    borderTop: pos.includes('top') ? '2px solid var(--accent-cyan)' : 'none',
                    borderBottom: pos.includes('bottom') ? '2px solid var(--accent-cyan)' : 'none',
                    borderLeft: pos.includes('Left') ? '2px solid var(--accent-cyan)' : 'none',
                    borderRight: pos.includes('Right') ? '2px solid var(--accent-cyan)' : 'none',
                  }} />
                ))}
                <div style={{
                  width: '140px', height: '170px',
                  border: '1px solid rgba(0,212,255,0.2)',
                  overflow: 'hidden',
                  background: 'var(--bg-card)',
                  position: 'relative',
                }}>
                  <img
                    src="/crypto/kasiski.jpg"
                    alt="Friedrich Kasiski"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  {/* Placeholder si no hay foto */}
                  <div style={{
                    display: 'none', width: '100%', height: '100%',
                    alignItems: 'center', justifyContent: 'center',
                    flexDirection: 'column', gap: '8px',
                    color: 'var(--text-muted)',
                  }}>
                    <div style={{ fontSize: '2.5rem' }}>👤</div>
                    <span className="font-mono-tech" style={{ fontSize: '0.6rem', textAlign: 'center' }}>
                      kasiski.jpg
                    </span>
                  </div>
                  {/* Overlay sutil */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(5,8,16,0.5) 0%, transparent 60%)',
                  }} />
                </div>
                {/* Año debajo */}
                <div style={{
                  textAlign: 'center', marginTop: '6px',
                }}>
                  <span className="font-mono-tech" style={{
                    fontSize: '0.6rem', color: 'var(--accent-cyan)',
                    letterSpacing: '1px',
                  }}>
                    1805 — 1881
                  </span>
                </div>
              </div>

              {/* Texto */}
              <div style={{ flex: 1, minWidth: '200px' }}>
                <h3 className="font-display" style={{
                  fontSize: '1.3rem', color: 'var(--accent-cyan)',
                  marginBottom: '0.5rem', letterSpacing: '2px',
                }}>
                  {cryptoInfo.title}
                </h3>
                <p className="font-mono-tech" style={{
                  fontSize: '0.8rem', color: 'var(--text-muted)',
                }}>
                  {cryptoInfo.subtitle}
                </p>
              </div>
            </div>

            {/* Secciones de contenido */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {cryptoInfo.sections.map((sec, i) => (
                <motion.div
                  key={sec.id}
                  className="net-card"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  style={{ padding: '1.5rem 2rem' }}
                >
                  <div style={{
                    display: 'flex', alignItems: 'center',
                    gap: '12px', marginBottom: '1rem',
                  }}>
                    <span className="font-mono-tech" style={{
                      color: 'rgba(0,212,255,0.3)', fontSize: '1.2rem',
                    }}>
                      {sec.id}
                    </span>
                    <h4 className="font-display" style={{
                      fontSize: '0.9rem', color: 'var(--accent-cyan)',
                      letterSpacing: '2px',
                    }}>
                      {sec.heading}
                    </h4>
                  </div>
                  <p style={{
                    color: 'var(--text-muted)', fontSize: '1rem',
                    lineHeight: 1.8, fontFamily: 'Rajdhani, sans-serif',
                  }}>
                    {sec.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ═══ SECCIÓN 3: MI LLAVE PÚBLICA ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono-tech" style={{
            color: 'var(--accent-cyan)', fontSize: '0.8rem',
            letterSpacing: '4px', marginBottom: '0.5rem',
          }}>
            {'>'} SECTION_03
          </p>
          <div className="section-divider" style={{ marginBottom: '2rem' }}>
            <h2 className="font-display" style={{
              fontSize: 'clamp(1.3rem, 2.5vw, 2rem)',
              fontWeight: '700', color: 'var(--text-primary)',
              whiteSpace: 'nowrap',
              display: 'flex', alignItems: 'center', gap: '12px',
            }}>
              <FiKey style={{ color: 'var(--accent-cyan)' }} />
              MI LLAVE <span style={{ color: 'var(--accent-cyan)' }}>PÚBLICA</span>
            </h2>
          </div>

          <div className="net-card" style={{ padding: '2rem' }}>

            {/* Status badge */}
            <div style={{
              display: 'flex', alignItems: 'center',
              justifyContent: 'space-between', marginBottom: '1.5rem',
              flexWrap: 'wrap', gap: '1rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '10px', height: '10px', borderRadius: '50%',
                  background: 'var(--accent-orange)',
                  boxShadow: '0 0 8px var(--accent-orange)',
                }} />
                <span className="font-mono-tech" style={{
                  fontSize: '0.75rem', color: 'var(--accent-orange)',
                  letterSpacing: '2px',
                }}>
                  PRÁCTICA ECDSA
                </span>
              </div>
              <span className="ip-tag">ECDSA / P-256</span>
            </div>

            {/* Placeholder de la llave */}
            <div style={{
              background: 'rgba(0,0,0,0.4)',
              border: '1px solid rgba(0,212,255,0.1)',
              borderRadius: '2px',
              padding: '1.5rem',
              marginBottom: '1.5rem',
              position: 'relative',
              minHeight: '160px',
            }}>
              {/* Botón copiar */}
              <button
                onClick={handleCopy}
                style={{
                  position: 'absolute', top: '12px', right: '12px',
                  background: 'rgba(0,212,255,0.08)',
                  border: '1px solid rgba(0,212,255,0.2)',
                  color: copied ? 'var(--accent-green)' : 'var(--accent-cyan)',
                  cursor: 'pointer', padding: '6px 10px',
                  display: 'flex', alignItems: 'center', gap: '6px',
                  fontFamily: 'Share Tech Mono, monospace',
                  fontSize: '0.7rem', transition: 'all 0.2s ease',
                }}
              >
                {copied ? <FiCheck /> : <FiCopy />}
                {copied ? 'COPIADO' : 'COPIAR'}
              </button>

              <pre style={{
                fontFamily: 'Share Tech Mono, monospace',
                fontSize: '0.78rem',
                color: 'rgba(0,212,255,0.4)',
                lineHeight: 1.6,
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-all',
                margin: 0,
              }}>
            {`MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEhTYUjZJhoMWzbH7CTuHFJoQI9KNCtV5oniMtdVQMEDFJ67zmZwrsi9UgTKiFB02BYqwsovZLuS4HXySuegjSfg==`}
              </pre>
            </div>

            {/* Info de la llave */}
            <div className="crypto-key-grid"
              style={{
                display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
              }}>
              {[
                { label: 'ALGORITMO', value: 'ECDSA' },
                { label: 'CURVA', value: 'P-256' },
                { label: 'ESTADO', value: 'COMPLETO' },
              ].map((item) => (
                <div key={item.label} style={{
                  textAlign: 'center', padding: '0.75rem',
                  background: 'rgba(0,212,255,0.03)',
                  border: '1px solid rgba(0,212,255,0.08)',
                }}>
                  <p className="font-mono-tech" style={{
                    fontSize: '0.6rem', color: 'var(--text-muted)',
                    letterSpacing: '2px', marginBottom: '4px',
                  }}>
                    {item.label}
                  </p>
                  <p className="font-display" style={{
                    fontSize: '0.85rem', color: 'var(--accent-cyan)',
                    fontWeight: '700',
                  }}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}