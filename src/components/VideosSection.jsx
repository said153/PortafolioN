import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiPlay, FiMonitor } from 'react-icons/fi'

const videos = [
  {
    id: '01',
    title: 'TU VIDEO HOBBY 1',
    description: 'Descripción de tu primer video. Cuéntanos de qué trata y qué actividad muestra.',
    file: '/videos/video1.mp4',
    tag: 'HOBBY',
  },
  {
    id: '02',
    title: 'TU VIDEO HOBBY 2',
    description: 'Descripción de tu segundo video. Agrega contexto sobre la actividad o evento grabado.',
    file: '/videos/video2.mp4',
    tag: 'ACTIVIDAD',
  },
]

export default function VideosSection() {
  const [active, setActive] = useState(null)

  return (
    <section id="videos" style={{ padding: '6rem 2rem', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem' }}
        >
          <p className="font-mono-tech" style={{
            color: 'var(--accent-cyan)', fontSize: '0.8rem',
            letterSpacing: '4px', marginBottom: '0.5rem',
          }}>
          </p>
          <div className="section-divider">
            <h2 className="font-display" style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
              fontWeight: '700',
              color: 'var(--text-primary)',
              whiteSpace: 'nowrap',
            }}>
              VIDEOS <span style={{ color: 'var(--accent-cyan)' }}>& ACTIVIDADES</span>
            </h2>
          </div>
        </motion.div>

        {/* Grid de videos */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          {videos.map((video, i) => (
            <motion.div
              key={video.id}
              className="net-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              style={{ overflow: 'hidden' }}
            >
              {/* Video player */}
              <div style={{ position: 'relative', background: '#000' }}>
                {active === video.id ? (
                  <video
                    controls
                    autoPlay
                    style={{ width: '100%', aspectRatio: '16/9', display: 'block' }}
                    onEnded={() => setActive(null)}
                  >
                    <source src={video.file} type="video/mp4" />
                    Tu navegador no soporta video HTML5.
                  </video>
                ) : (
                  <div
                    onClick={() => setActive(video.id)}
                    style={{
                      width: '100%',
                      aspectRatio: '16/9',
                      background: 'var(--bg-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    {/* Grid pattern */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      backgroundImage: 'linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)',
                      backgroundSize: '30px 30px',
                    }} />

                    {/* Líneas de escaneo */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)',
                    }} />

                    <FiMonitor style={{
                      position: 'absolute', bottom: '12px', right: '12px',
                      color: 'rgba(0,212,255,0.2)', fontSize: '1.5rem',
                    }} />

                    <span className="font-mono-tech" style={{
                      position: 'absolute', top: '12px', left: '12px',
                      color: 'rgba(0,212,255,0.3)', fontSize: '0.7rem',
                    }}>
                      VID_{video.id}
                    </span>

                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        width: '64px', height: '64px',
                        border: '2px solid var(--accent-cyan)',
                        borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: 'rgba(0,212,255,0.1)',
                        boxShadow: '0 0 30px rgba(0,212,255,0.2)',
                        zIndex: 1,
                      }}
                    >
                      <FiPlay style={{
                        color: 'var(--accent-cyan)',
                        fontSize: '1.5rem',
                        marginLeft: '4px',
                      }} />
                    </motion.div>

                    <div style={{ position: 'absolute', top: '12px', right: '12px' }}>
                      <span className="ip-tag">{video.tag}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Info del video */}
              <div style={{ padding: '1.5rem' }}>
                <div style={{
                  display: 'flex', alignItems: 'center',
                  gap: '10px', marginBottom: '0.75rem',
                }}>
                  <span className="font-mono-tech" style={{
                    color: 'rgba(0,212,255,0.3)', fontSize: '0.85rem',
                  }}>
                    {video.id}
                  </span>
                  <div style={{ flex: 1, height: '1px', background: 'rgba(0,212,255,0.1)' }} />
                </div>

                <h3 className="font-display" style={{
                  fontSize: '1rem', fontWeight: '700',
                  color: 'var(--text-primary)', letterSpacing: '1px',
                  marginBottom: '0.6rem',
                }}>
                  {video.title}
                </h3>

                <p style={{
                  color: 'var(--text-muted)', fontSize: '0.9rem',
                  lineHeight: 1.6, fontFamily: 'Rajdhani, sans-serif',
                }}>
                  {video.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Botones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            marginTop: '4rem',
            display: 'flex', justifyContent: 'center',
            gap: '1.5rem', flexWrap: 'wrap',
          }}
        > 
          <a
            href="/crypto"
            className="btn-primary"
            style={{ borderColor: 'var(--accent-green)', color: 'var(--accent-green)' }}
          >
            ◈ CRYPTO & PGP →
          </a>
        </motion.div>

      </div>
    </section>
  )
}