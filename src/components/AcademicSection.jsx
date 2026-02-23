import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiAward, FiCalendar, FiMapPin, FiX } from 'react-icons/fi'

const education = [
  {
    id: '01',
    degree: 'Ingeniería en Sistemas Computacionales',
    institution: 'ESCOM - IPN',
    location: 'CDMX, México',
    period: '2021 — Presente',
    status: 'EN CURSO',
    statusColor: 'var(--accent-green)',
    description: 'Soy estudiante de Ingeniería en Sistemas Computacionales en la ESCOM, actualmente en el ultimo semestre. Mi enfoque académico está orientado a la infraestructura de TI y redes de computadoras. He trabajado en proyectos académicos relacionados con configuración básica de redes y servicios en la nube.',
    skills: ['Redes de computadoras', 'Infraestructura de TI', 'Protocolos de red', 'Seguridad informática básica', 'Sistemas operativos (Linux y Windows)', 'Servicios en la nube (nivel básico)'],
  },
  {
    id: '02',
    degree: 'BACHILLERATO / PREPARATORIA',
    institution: 'CECYT 1 "Gonzalo Vázquez Vela"',
    location: 'CDMX, México',
    period: '2018 — 2021',
    status: 'COMPLETADO',
    statusColor: 'var(--accent-cyan)',
    description: 'Realicé mis estudios de nivel medio superior en el CECyT 1 "Gonzalo Vázquez Vela" del Instituto Politécnico Nacional, con la carrera en Técnico en Sistemas Digitales. Durante mi formación adquirí conocimientos básicos en electrónica digital y fundamentos de redes.',
    skills: ['Matemáticas', 'Física', 'Electrónica'],
  },
]

const certifications = [
  {
    name: 'Conceptos básicos de redes (En proceso)',
    issuer: 'Cisco Networking Academy',
    year: '2026',
    color: 'var(--accent-cyan)',
    pdf: null,
  },
  {
    name: 'Introducción a Cisco Packet Tracer',
    issuer: 'Cisco Networking Academy',
    year: '2026',
    color: 'var(--accent-green)',
    pdf: '/certificaciones/Introduccion_CPT.png',
  },
]

export default function AcademicSection() {
  const [pdfAbierto, setPdfAbierto] = useState(null)

  return (
    <section id="academic" style={{ padding: '6rem 2rem', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Modal certificado */}
        {pdfAbierto && (
          <div
            onClick={() => setPdfAbierto(null)}
            style={{
              position: 'fixed',
              top: 0, left: 0, right: 0, bottom: 0,
              zIndex: 9999,
              background: 'rgba(5,8,16,0.97)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              padding: '1.5rem',
            }}
          >
            {/* Header modal */}
            <div
              onClick={e => e.stopPropagation()}
              style={{
                width: '100%', maxWidth: '800px',
                display: 'flex', justifyContent: 'space-between',
                alignItems: 'center', marginBottom: '1rem',
              }}
            >
              <span className="font-mono-tech" style={{
                color: 'var(--accent-cyan)', fontSize: '0.8rem', letterSpacing: '2px',
              }}>
                ◈ VISUALIZANDO CERTIFICADO
              </span>
              <button
                onClick={() => setPdfAbierto(null)}
                style={{
                  background: 'rgba(255,107,53,0.08)',
                  border: '1px solid rgba(255,107,53,0.3)',
                  color: 'var(--accent-orange)', cursor: 'pointer',
                  width: '36px', height: '36px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.1rem', transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,107,53,0.15)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,107,53,0.08)'}
              >
                <FiX />
              </button>
            </div>

            {/* Imagen protegida */}
            <div
              onClick={e => e.stopPropagation()}
              style={{
                width: '100%', maxWidth: '800px',
                maxHeight: '85vh',
                border: '1px solid rgba(0,212,255,0.2)',
                boxShadow: '0 0 40px rgba(0,212,255,0.1)',
                overflow: 'auto',
                position: 'relative',
                background: '#1a1a2e',
              }}
            >
              {/* Capa bloquea clic derecho */}
              <div
                onContextMenu={e => e.preventDefault()}
                style={{ position: 'absolute', inset: 0, zIndex: 10 }}
              />
              <img
                src={pdfAbierto}
                alt="Certificado"
                draggable={false}
                onContextMenu={e => e.preventDefault()}
                style={{
                  width: '100%', height: 'auto', display: 'block',
                  userSelect: 'none', WebkitUserSelect: 'none', pointerEvents: 'none',
                }}
              />
            </div>

            <p className="font-mono-tech" style={{
              marginTop: '1rem', fontSize: '0.65rem',
              color: 'var(--text-muted)', letterSpacing: '2px',
            }}>
              CLICK FUERA PARA CERRAR
            </p>
          </div>
        )}

        {/* Header sección */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem' }}
        >
          <div className="section-divider">
            <h2 className="font-display" style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
              fontWeight: '700', color: 'var(--text-primary)',
              whiteSpace: 'nowrap',
            }}>
              FORMACIÓN <span style={{ color: 'var(--accent-cyan)' }}>ACADÉMICA</span>
            </h2>
          </div>
        </motion.div>

        {/* Grid principal */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 380px',
          gap: '2rem', alignItems: 'start',
        }}>

          {/* Educación */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {education.map((item, i) => (
              <motion.div
                key={item.id}
                className="net-card"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                style={{ padding: '2rem' }}
              >
                <div style={{
                  display: 'flex', justifyContent: 'space-between',
                  alignItems: 'flex-start', marginBottom: '1.2rem',
                  flexWrap: 'wrap', gap: '0.5rem',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span className="font-mono-tech" style={{
                      color: 'rgba(0,212,255,0.3)', fontSize: '1.5rem', fontWeight: '700',
                    }}>
                      {item.id}
                    </span>
                    <div>
                      <h3 className="font-display" style={{
                        fontSize: '1rem', fontWeight: '700',
                        color: 'var(--text-primary)', letterSpacing: '1px',
                      }}>
                        {item.degree}
                      </h3>
                      <p style={{
                        color: 'var(--accent-cyan)', fontSize: '0.9rem',
                        fontFamily: 'Rajdhani, sans-serif', fontWeight: '500',
                      }}>
                        {item.institution}
                      </p>
                    </div>
                  </div>
                  <span style={{
                    fontFamily: 'Share Tech Mono, monospace',
                    fontSize: '0.65rem', letterSpacing: '2px',
                    color: item.statusColor,
                    background: `${item.statusColor}15`,
                    border: `1px solid ${item.statusColor}40`,
                    padding: '3px 10px',
                  }}>
                    {item.status}
                  </span>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <FiCalendar style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }} />
                    <span className="font-mono-tech" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {item.period}
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <FiMapPin style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }} />
                    <span className="font-mono-tech" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {item.location}
                    </span>
                  </div>
                </div>

                <p style={{
                  color: 'var(--text-muted)', fontSize: '0.95rem',
                  lineHeight: 1.6, marginBottom: '1.2rem',
                  fontFamily: 'Rajdhani, sans-serif',
                }}>
                  {item.description}
                </p>

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {item.skills.map((skill) => (
                    <span key={skill} className="ip-tag">{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Panel certificaciones */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="net-card" style={{ padding: '1.5rem' }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                marginBottom: '1.5rem', paddingBottom: '1rem',
                borderBottom: '1px solid rgba(0,212,255,0.1)',
              }}>
                <FiAward style={{ color: 'var(--accent-cyan)' }} />
                <span className="font-mono-tech" style={{
                  fontSize: '0.8rem', letterSpacing: '2px', color: 'var(--accent-cyan)',
                }}>
                  CERTIFICACIONES
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {certifications.map((cert, i) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    onClick={() => cert.pdf && setPdfAbierto(cert.pdf)}
                    style={{
                      padding: '1rem',
                      background: 'rgba(0,212,255,0.03)',
                      border: '1px solid rgba(0,212,255,0.08)',
                      borderLeft: `3px solid ${cert.color}`,
                      cursor: cert.pdf ? 'pointer' : 'default',
                      transition: 'all 0.2s ease',
                    }}
                    whileHover={cert.pdf ? { x: 4, background: 'rgba(0,212,255,0.06)' } : {}}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <p style={{
                        color: 'var(--text-primary)', fontSize: '0.9rem',
                        fontFamily: 'Rajdhani, sans-serif', fontWeight: '600',
                        marginBottom: '4px',
                      }}>
                        {cert.name}
                      </p>
                      {cert.pdf ? (
                        <span className="font-mono-tech" style={{
                          fontSize: '0.6rem', color: cert.color,
                          border: `1px solid ${cert.color}40`,
                          padding: '2px 6px', marginLeft: '8px', flexShrink: 0,
                        }}>
                          VER
                        </span>
                      ) : (
                        <span className="font-mono-tech" style={{
                          fontSize: '0.6rem', color: 'var(--accent-orange)',
                          border: '1px solid rgba(255,107,53,0.3)',
                          padding: '2px 6px', marginLeft: '8px', flexShrink: 0,
                        }}>
                          EN CURSO
                        </span>
                      )}
                    </div>
                    <p style={{
                      color: 'var(--text-muted)', fontSize: '0.8rem',
                      fontFamily: 'Share Tech Mono, monospace',
                    }}>
                      {cert.issuer}
                    </p>
                    <p style={{
                      color: cert.color, fontSize: '0.7rem',
                      fontFamily: 'Share Tech Mono, monospace', marginTop: '4px',
                    }}>
                      {cert.year}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <div style={{
                marginTop: '1.5rem', paddingTop: '1rem',
                borderTop: '1px solid rgba(0,212,255,0.1)',
                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem',
              }}>
                {[
                  { label: 'SEMESTRE', value: '8' },
                  { label: 'PROMEDIO', value: '8.67' },
                ].map((stat) => (
                  <div key={stat.label} style={{ textAlign: 'center' }}>
                    <p className="font-display" style={{
                      fontSize: '1.4rem', fontWeight: '700', color: 'var(--accent-cyan)',
                    }}>
                      {stat.value}
                    </p>
                    <p className="font-mono-tech" style={{
                      fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '1px',
                    }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}