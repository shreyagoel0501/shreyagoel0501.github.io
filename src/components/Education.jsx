import useScrollReveal from '../hooks/useScrollReveal.js'
import { education } from '../data.js'

function EducationCard({ edu, index }) {
  const ref = useScrollReveal()
  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${index + 1}`}
      style={{
        padding: '2rem',
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: '4px',
        flex: '1 1 340px',
        transition: 'box-shadow 0.25s',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 24px rgba(255,179,198,0.18)')}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
        <div>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.35rem',
              fontWeight: 500,
              color: 'var(--color-text)',
              marginBottom: '0.25rem',
              lineHeight: 1.2,
            }}
          >
            {edu.school}
          </h3>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--color-pink-deep)', fontWeight: 500 }}>
            {edu.degree}
          </p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-muted)', marginTop: '0.15rem', letterSpacing: '0.03em' }}>
            {edu.location}
          </p>
        </div>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--color-muted)',
            background: 'var(--color-pink-pale)',
            padding: '0.3rem 0.75rem',
            borderRadius: '2px',
            whiteSpace: 'nowrap',
          }}
        >
          {edu.period}
        </span>
      </div>

      {edu.gpa && (
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--color-text)',
              background: 'var(--color-pink-pale)',
              border: '1px solid var(--color-pink-light)',
              padding: '0.25rem 0.6rem',
              borderRadius: '2px',
            }}
          >
            GPA {edu.gpa}
          </span>
          {edu.honors && (
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--color-pink-deep)',
                background: 'var(--color-pink-pale)',
                border: '1px solid var(--color-pink-light)',
                padding: '0.25rem 0.6rem',
                borderRadius: '2px',
              }}
            >
              {edu.honors}
            </span>
          )}
        </div>
      )}

      {edu.highlight && (
        <div
          style={{
            background: 'linear-gradient(135deg, var(--color-pink-pale), #fff)',
            border: '1px solid var(--color-pink-light)',
            borderLeft: '3px solid var(--color-pink)',
            borderRadius: '3px',
            padding: '0.75rem 1rem',
            marginBottom: '1rem',
          }}
        >
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--color-text)', lineHeight: 1.6 }}>
            🏆 {edu.highlight}
          </p>
        </div>
      )}

      {edu.coursework.length > 0 && (
        <div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: '0.6rem' }}>
            Relevant Coursework
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {edu.coursework.map((course) => (
              <span
                key={course}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.78rem',
                  color: 'var(--color-muted)',
                  background: '#F7F3F0',
                  padding: '0.2rem 0.55rem',
                  borderRadius: '2px',
                  border: '1px solid var(--color-border)',
                }}
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Education() {
  const headingRef = useScrollReveal()

  return (
    <section id="education" style={{ padding: '7rem 0', background: '#FAF6F7' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div ref={headingRef} className="reveal" style={{ marginBottom: '3.5rem' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-pink-deep)', marginBottom: '0.75rem' }}>
            Academic Background
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 300,
              color: 'var(--color-text)',
              lineHeight: 1.1,
            }}
          >
            Education
          </h2>
          <div style={{ width: '40px', height: '2px', background: 'var(--color-pink)', marginTop: '1rem' }} />
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
          {education.map((edu, i) => (
            <EducationCard key={edu.school} edu={edu} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
