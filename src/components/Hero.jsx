import { meta } from '../data.js'

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--color-bg)',
      }}
    >
      {/* Decorative background blobs */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-80px',
          right: '-120px',
          width: '520px',
          height: '520px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #FFD6E0 0%, transparent 70%)',
          opacity: 0.55,
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '60px',
          left: '-80px',
          width: '340px',
          height: '340px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #FFB3C6 0%, transparent 70%)',
          opacity: 0.3,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
          paddingTop: '80px',
        }}
      >
        {/* Text */}
        <div>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--color-pink-deep)',
              marginBottom: '1.25rem',
            }}
          >
            Business Analytics · Data Science · BI
          </p>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 7vw, 5.5rem)',
              fontWeight: 300,
              lineHeight: 1.05,
              color: 'var(--color-text)',
              marginBottom: '0.5rem',
              letterSpacing: '-0.01em',
            }}
          >
            {meta.name}
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.1rem, 2.5vw, 1.55rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'var(--color-pink-deep)',
              marginBottom: '2rem',
              letterSpacing: '0.01em',
            }}
          >
            {meta.tagline}
          </p>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: 'var(--color-muted)',
              lineHeight: 1.75,
              maxWidth: '520px',
              marginBottom: '2.5rem',
            }}
          >
            {meta.heroDescription}
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="#experience"
              style={{
                display: 'inline-block',
                padding: '0.75rem 2rem',
                background: 'var(--color-pink)',
                color: '#1A1A1A',
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                fontWeight: 500,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                borderRadius: '2px',
                transition: 'background 0.2s, transform 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--color-pink-deep)'
                e.currentTarget.style.color = '#fff'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--color-pink)'
                e.currentTarget.style.color = '#1A1A1A'
              }}
            >
              View My Work
            </a>
            <a
              href={`mailto:${meta.email}`}
              style={{
                display: 'inline-block',
                padding: '0.75rem 2rem',
                background: 'transparent',
                color: 'var(--color-text)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                fontWeight: 500,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                borderRadius: '2px',
                border: '1px solid var(--color-border)',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--color-pink)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--color-border)')}
            >
              Get in Touch
            </a>
          </div>

          {/* Social links */}
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2.5rem', alignItems: 'center' }}>
            <a
              href={meta.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--color-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-pink-deep)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-muted)')}
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a
              href={meta.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--color-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-pink-deep)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-muted)')}
              aria-label="GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </a>
            <a
              href={`mailto:${meta.email}`}
              style={{ color: 'var(--color-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-pink-deep)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-muted)')}
              aria-label="Email"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          {/* Photo */}
          <div
            style={{
              width: '320px',
              height: '380px',
              borderRadius: '4px',
              background: 'linear-gradient(135deg, var(--color-pink-light) 0%, var(--color-pink) 100%)',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 20px 60px rgba(255,179,198,0.35)',
            }}
          >
            <img
              src="/assets/Saree.jpg"
              alt={meta.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => { e.currentTarget.style.display = 'none' }}
            />
            
          </div>

          {/* Stats — now directly under the photo */}
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { value: '3+', label: 'Years at Deloitte' },
              { value: '26+', label: 'Pipelines Built' },
              { value: '4.0', label: 'Graduate GPA' },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: 'center' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 500, color: 'var(--color-pink-deep)', lineHeight: 1 }}>
                  {stat.value}
                </p>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: '0.25rem' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          opacity: 0.45,
        }}
      >
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-muted)' }}>Scroll</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="var(--color-muted)" strokeWidth="1.5">
          <rect x="1" y="1" width="14" height="22" rx="7" />
          <circle cx="8" cy="7" r="2" fill="var(--color-muted)">
            <animate attributeName="cy" values="7;14;7" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
    </section>
  )
}
