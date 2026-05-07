import useScrollReveal from '../hooks/useScrollReveal.js'
import { meta } from '../data.js'

export default function About() {
  const ref = useScrollReveal()
  const quoteRef = useScrollReveal()

  const paragraphs = meta.about.split('\n\n')

  return (
    <section id="about" style={{ padding: '7rem 0', background: 'var(--color-bg)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '5rem',
            alignItems: 'center',
          }}
        >
          {/* Decorative left panel */}
          <div
            ref={quoteRef}
            className="reveal"
            style={{ position: 'relative' }}
          >
            <div
              style={{
                width: '280px',
                height: '280px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--color-pink-light) 0%, var(--color-pink) 100%)',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 20px 60px rgba(255,179,198,0.35)',
                margin: '0 auto',
              }}
            >
              <img
                src="/assets/LinkedIn.jpeg"
                alt={meta.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
            </div>
          </div>

          {/* Text content */}
          <div ref={ref} className="reveal reveal-delay-2">
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-pink-deep)', marginBottom: '0.75rem' }}>
              A Bit About Me
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 300,
                color: 'var(--color-text)',
                lineHeight: 1.1,
                marginBottom: '1rem',
              }}
            >
              About
            </h2>
            <div style={{ width: '40px', height: '2px', background: 'var(--color-pink)', marginBottom: '2rem' }} />

            {paragraphs.map((p, i) => (
              <p
                key={i}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.97rem',
                  color: 'var(--color-muted)',
                  lineHeight: 1.8,
                  marginBottom: '1.25rem',
                }}
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
