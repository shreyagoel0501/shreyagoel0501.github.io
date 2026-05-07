import useScrollReveal from '../hooks/useScrollReveal.js'
import { experience } from '../data.js'

function ExperienceCard({ job, index }) {
  const ref = useScrollReveal()
  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${(index % 3) + 1}`}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '1rem',
        padding: '2rem',
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: '4px',
        marginBottom: '1.5rem',
        transition: 'box-shadow 0.25s',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 24px rgba(255,179,198,0.18)')}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              fontWeight: 500,
              color: 'var(--color-text)',
              marginBottom: '0.15rem',
            }}
          >
            {job.role}
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.95rem',
              fontWeight: 500,
              color: 'var(--color-pink-deep)',
              marginBottom: '0.25rem',
            }}
          >
            {job.company}
          </p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-muted)', letterSpacing: '0.03em' }}>
            {job.location}
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
            letterSpacing: '0.03em',
          }}
        >
          {job.period}
        </span>
      </div>

      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
        {job.bullets.map((bullet, i) => (
          <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
            <span style={{ color: 'var(--color-pink)', marginTop: '0.45rem', flexShrink: 0, fontSize: '0.5rem' }}>◆</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--color-muted)', lineHeight: 1.7 }}>
              {bullet}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Experience() {
  const headingRef = useScrollReveal()

  return (
    <section id="experience" style={{ padding: '7rem 0', background: 'var(--color-bg)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div ref={headingRef} className="reveal" style={{ marginBottom: '3.5rem' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-pink-deep)', marginBottom: '0.75rem' }}>
            Where I've Worked
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
            Experience
          </h2>
          <div style={{ width: '40px', height: '2px', background: 'var(--color-pink)', marginTop: '1rem' }} />
        </div>

        {experience.map((job, i) => (
          <ExperienceCard key={job.company + job.role} job={job} index={i} />
        ))}
      </div>
    </section>
  )
}
