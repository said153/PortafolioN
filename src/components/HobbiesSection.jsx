import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiPlay } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const items = [
  {
    id: '01',
    title: 'Escuchar música',
    description: 'Escuchar música es una actividad que me ayuda a mantener la concentración y la motivación durante mis estudios y proyectos. Me permite crear un ambiente productivo y equilibrado.',
    type: 'image',
    src: '/hobbies/Hobby1.jpg',
    tag: 'MÚSICA',
  },
  {
    id: '02',
    title: 'Aprender sobre redes e infraestructura',
    description: 'Me interesa ampliar constantemente mis conocimientos en redes e infraestructura tecnológica, explorando conceptos de conectividad, servidores y arquitectura de sistemas.',
    type: 'image',
    src: '/hobbies/hobby2.jpg',
    tag: 'TECNOLOGÍA',
  },
  {
    id: '03',
    title: 'Aprender inglés',
    description: 'El aprendizaje del idioma inglés forma parte de mi desarrollo profesional, ya que me permite comprender documentación técnica, cursos y recursos tecnológicos de forma más eficiente.',
    type: 'image',
    src: '/hobbies/hobby3.png',
    tag: 'IDIOMAS',
  },
  {
    id: '04',
    title: 'Natación',
    description: 'La natación es una actividad que contribuye a mi bienestar físico y mental.',
    type: 'image',
    src: '/hobbies/hobby4.jpg',
    tag: 'DEPORTE',
  },
  {
    id: '05',
    title: 'Videojuegos',
    description: 'Los videojuegos fortalecen habilidades como la resolución de problemas, la estrategia y la toma de decisiones, además de fomentar la creatividad y el trabajo en equipo.',
    type: 'image',
    src: '/hobbies/hobby5.jpg',
    tag: 'GAMING',
  },
  {
    id: '06',
    title: 'Experiencias y Actividades Recreativas',
    description: 'Este video presenta una recopilación de lugares, conciertos y eventos que he visitado. Refleja mis principales hobbies y el interés por conocer nuevos espacios, participar en actividades culturales y disfrutar experiencias que contribuyen a mi desarrollo personal y recreativo.',
    type: 'video',
    src: '/videos/video1.mp4',
    tag: 'VIDEO',
  },
  {
    id: '07',
    title: 'Momentos Compartidos con Personas Importantes',
    description: 'En este video se muestran fotografías junto a mi novia y amigos, destacando la importancia de convivir con ellos y fortalecer los vínculos personales. Estas experiencias representan la amistad y el tiempo de calidad en mi vida.',
    type: 'video',
    src: '/videos/video2.mp4',
    tag: 'VIDEO',
  },
]

export default function HobbiesSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [playing, setPlaying] = useState(false)

  const prev = () => {
    setDirection(-1)
    setPlaying(false)
    setCurrent((i) => (i - 1 + items.length) % items.length)
  }

  const next = () => {
    setDirection(1)
    setPlaying(false)
    setCurrent((i) => (i + 1) % items.length)
  }

  const goTo = (index) => {
    setDirection(index > current ? 1 : -1)
    setPlaying(false)
    setCurrent(index)
  }

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  }

  const currentItem = items[current]

  return (
    <section id="hobbies" style={{ padding: '6rem 2rem', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
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
              INTERESES <span style={{ color: 'var(--accent-cyan)' }}>& HOBBIES</span>
            </h2>
          </div>
        </motion.div>

        {/* Carrusel */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '3rem', alignItems: 'center',
        }}>

          {/* Lado izquierdo — media */}
          <div style={{ position: 'relative' }}>

            {/* Marco decorativo */}
            <div style={{
              position: 'absolute', inset: '-8px',
              border: '1px solid rgba(0,212,255,0.08)',
              pointerEvents: 'none', zIndex: 2,
            }} />
            {['topLeft','topRight','bottomLeft','bottomRight'].map((pos) => (
              <div key={pos} style={{
                position: 'absolute', zIndex: 3,
                width: '16px', height: '16px',
                ...(pos.includes('top') ? { top: '-8px' } : { bottom: '-8px' }),
                ...(pos.includes('Left') ? { left: '-8px' } : { right: '-8px' }),
                borderTop: pos.includes('top') ? '2px solid var(--accent-cyan)' : 'none',
                borderBottom: pos.includes('bottom') ? '2px solid var(--accent-cyan)' : 'none',
                borderLeft: pos.includes('Left') ? '2px solid var(--accent-cyan)' : 'none',
                borderRight: pos.includes('Right') ? '2px solid var(--accent-cyan)' : 'none',
              }} />
            ))}

            {/* Contenedor media */}
            <div style={{
              width: '100%',
              aspectRatio: currentItem.type === 'video' ? '16/11' : '4/3',
              overflow: 'hidden', position: 'relative',
              background: 'var(--bg-card)',
              border: '1px solid rgba(0,212,255,0.1)',
              transition: 'aspect-ratio 0.3s ease',
            }}>
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  style={{ position: 'absolute', inset: 0 }}
                >
                  {currentItem.type === 'image' ? (
                    <>
                      <img
                        src={currentItem.src}
                        alt={currentItem.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        onError={(e) => {
                          e.target.style.display = 'none'
                          e.target.nextSibling.style.display = 'flex'
                        }}
                      />
                      {/* Placeholder imagen */}
                      <div style={{
                        display: 'none', width: '100%', height: '100%',
                        alignItems: 'center', justifyContent: 'center',
                        flexDirection: 'column', gap: '1rem',
                        color: 'var(--text-muted)', background: 'var(--bg-card)',
                      }}>
                        <div style={{ fontSize: '3rem' }}>🖼️</div>
                        <span className="font-mono-tech" style={{ fontSize: '0.75rem' }}>
                          imagen no encontrada
                        </span>
                      </div>
                      {/* Overlay imagen */}
                      <div style={{
                        position: 'absolute', inset: 0,
                        background: 'linear-gradient(to top, rgba(5,8,16,0.7) 0%, transparent 60%)',
                        pointerEvents: 'none',
                      }} />
                    </>
                  ) : playing ? (
                    <video
                      controls autoPlay muted
                      preload="metadata"
                      style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', background: '#000' }}
                      onEnded={() => setPlaying(false)}
                    >
                      <source src={currentItem.src} type="video/mp4" />
                    </video>
                  ) : (
                    /* Thumbnail con primer frame */
                    <div
                      onClick={() => setPlaying(true)}
                      style={{
                        width: '100%', height: '100%',
                        background: 'var(--bg-secondary)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        cursor: 'pointer', position: 'relative',
                      }}
                    >
                      {/* Video oculto para primer frame */}
                      <video
                        src={currentItem.src}
                        preload="metadata"
                        muted
                        style={{
                          position: 'absolute', inset: 0,
                          width: '100%', height: '100%',
                          objectFit: 'cover', opacity: 1,
                          pointerEvents: 'none',
                        }}
                      />
                      {/* Grid pattern */}
                      <div style={{
                        position: 'absolute', inset: 0, zIndex: 1,
                        backgroundImage: 'linear-gradient(rgba(0,212,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.02) 1px, transparent 1px)',
                        backgroundSize: '30px 30px',
                      }} />
                      {/* Overlay oscuro */}
                      <div style={{
                        position: 'absolute', inset: 0, zIndex: 1,
                        background: 'rgba(5,8,16,0.45)',
                      }} />
                      {/* Botón play */}
                      <motion.div
                        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                        style={{
                          width: '72px', height: '72px',
                          border: '2px solid var(--accent-cyan)', borderRadius: '50%',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          background: 'rgba(0,212,255,0.1)',
                          boxShadow: '0 0 30px rgba(0,212,255,0.3)', zIndex: 2,
                        }}
                      >
                        <FiPlay style={{ color: 'var(--accent-cyan)', fontSize: '1.8rem', marginLeft: '4px' }} />
                      </motion.div>
                    </div>
                  )}

                  {/* Tag — solo cuando no está reproduciendo */}
                  {!playing && (
                    <div style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 4 }}>
                      <span className="ip-tag">{currentItem.tag}</span>
                    </div>
                  )}

                  {/* Contador — solo cuando no está reproduciendo */}
                  {!playing && (
                    <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', zIndex: 4 }}>
                      <span className="font-mono-tech" style={{
                        fontSize: '0.7rem', color: 'rgba(0,212,255,0.5)',
                      }}>
                        {String(current + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
                      </span>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controles */}
            <div style={{
              display: 'flex', justifyContent: 'center',
              gap: '1rem', marginTop: '1.5rem', alignItems: 'center',
            }}>
              <button onClick={prev} style={{
                background: 'transparent', border: '1px solid rgba(0,212,255,0.2)',
                color: 'var(--accent-cyan)', cursor: 'pointer',
                width: '36px', height: '36px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.2s ease', fontSize: '1.1rem',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,212,255,0.1)'; e.currentTarget.style.borderColor = 'var(--accent-cyan)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(0,212,255,0.2)' }}
              >
                <FiChevronLeft />
              </button>

              <div style={{ display: 'flex', gap: '8px' }}>
                {items.map((item, i) => (
                  <button key={i} onClick={() => goTo(i)} style={{
                    width: i === current ? '24px' : '8px', height: '8px',
                    background: i === current
                      ? (item.type === 'video' ? 'var(--accent-green)' : 'var(--accent-cyan)')
                      : 'rgba(0,212,255,0.2)',
                    border: 'none', cursor: 'pointer', borderRadius: '4px',
                    transition: 'all 0.3s ease', padding: 0,
                    boxShadow: i === current
                      ? `0 0 8px ${item.type === 'video' ? 'var(--accent-green)' : 'var(--accent-cyan)'}`
                      : 'none',
                  }} />
                ))}
              </div>

              <button onClick={next} style={{
                background: 'transparent', border: '1px solid rgba(0,212,255,0.2)',
                color: 'var(--accent-cyan)', cursor: 'pointer',
                width: '36px', height: '36px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.2s ease', fontSize: '1.1rem',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,212,255,0.1)'; e.currentTarget.style.borderColor = 'var(--accent-cyan)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(0,212,255,0.2)' }}
              >
                <FiChevronRight />
              </button>
            </div>
          </div>

          {/* Lado derecho — info */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
              >
                <span className="font-mono-tech" style={{
                  color: 'rgba(0,212,255,0.4)', fontSize: '3rem',
                  fontWeight: '700', lineHeight: 1, display: 'block',
                  marginBottom: '0.5rem',
                }}>
                  {currentItem.id}
                </span>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.75rem' }}>
                  <h3 className="font-display" style={{
                    fontSize: '1.6rem', fontWeight: '700',
                    color: 'var(--text-primary)', letterSpacing: '2px',
                  }}>
                    {currentItem.title}
                  </h3>
                  {currentItem.type === 'video' && (
                    <span style={{
                      fontFamily: 'Share Tech Mono, monospace', fontSize: '0.6rem',
                      color: 'var(--accent-green)', border: '1px solid rgba(0,255,136,0.3)',
                      padding: '2px 8px', flexShrink: 0,
                    }}>
                      VIDEO
                    </span>
                  )}
                </div>

                <div style={{
                  width: '40px', height: '2px',
                  background: currentItem.type === 'video' ? 'var(--accent-green)' : 'var(--accent-cyan)',
                  marginBottom: '1.5rem',
                  boxShadow: `0 0 8px ${currentItem.type === 'video' ? 'var(--accent-green)' : 'var(--accent-cyan)'}`,
                }} />

                <p style={{
                  color: 'var(--text-muted)', fontSize: '1rem',
                  lineHeight: 1.8, fontFamily: 'Rajdhani, sans-serif',
                }}>
                  {currentItem.description}
                </p>

                {/* Thumbnails */}
                <div style={{
                  display: 'flex', gap: '0.6rem', marginTop: '2rem', flexWrap: 'wrap',
                }}>
                  {items.map((item, i) => (
                    <button key={i} onClick={() => goTo(i)} style={{
                      width: '52px', height: '52px',
                      border: i === current
                        ? `2px solid ${item.type === 'video' ? 'var(--accent-green)' : 'var(--accent-cyan)'}`
                        : '1px solid rgba(0,212,255,0.15)',
                      overflow: 'hidden', cursor: 'pointer', padding: 0,
                      background: 'var(--bg-card)', transition: 'all 0.3s ease',
                      boxShadow: i === current
                        ? `0 0 12px ${item.type === 'video' ? 'rgba(0,255,136,0.3)' : 'rgba(0,212,255,0.3)'}`
                        : 'none',
                      position: 'relative', flexShrink: 0,
                    }}>
                      {item.type === 'image' ? (
                        <img
                          src={item.src} alt={item.title}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          onError={(e) => { e.target.style.display = 'none' }}
                        />
                      ) : (
                        <div style={{
                          width: '100%', height: '100%', position: 'relative',
                          overflow: 'hidden', display: 'flex',
                          alignItems: 'center', justifyContent: 'center',
                        }}>
                          <video
                            src={item.src}
                            preload="metadata"
                            muted
                            style={{
                              position: 'absolute', inset: 0,
                              width: '100%', height: '100%',
                              objectFit: 'cover', opacity: 0.7,
                              pointerEvents: 'none',
                            }}
                          />
                          <div style={{
                            position: 'absolute', inset: 0,
                            background: 'rgba(5,8,16,0.3)', zIndex: 1,
                          }} />
                          <FiPlay style={{
                            color: 'var(--accent-green)', fontSize: '1rem',
                            zIndex: 2, position: 'relative',
                          }} />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Botón Crypto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center' }}
        >
          <Link
            to="/crypto"
            className="btn-primary"
            style={{ borderColor: 'var(--accent-green)', color: 'var(--accent-green)' }}
          >
            ◈ CRYPTO & PGP →
          </Link>
        </motion.div>

      </div>
    </section>
  )
}