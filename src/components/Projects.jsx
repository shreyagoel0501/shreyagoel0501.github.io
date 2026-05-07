import useScrollReveal from '../hooks/useScrollReveal.js'
import { projects } from '../data.js'

function ProjectCard({ project, index }) {
  const ref = useScrollReveal()
  return (
    <article
      ref={ref}
      className={`reveal reveal-delay-${(index % 3) + 1}`}
      style={{
        padding: '1.75rem',
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: '4px',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        transition: 'box-shadow 0.25s, transform 0.25s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 8px 30px rgba(255,179,198,0.22)'
        e.currentTarget.style.transform = 'translateY(-3px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.35rem',
            fontWeight: 500,
            color: 'var(--color-text)',
            lineHeight: 1.2,
          }}
        >
          {project.title}
        </h3>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-muted)', letterSpacing: '0.03em' }}>
          {project.period}
        </span>
      </div>

      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: 'var(--color-muted)', lineHeight: 1.75, flexGrow: 1 }}>
        {project.description}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: 'auto' }}>
        {project.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--color-pink-deep)',
              background: 'var(--color-pink-pale)',
              border: '1px solid var(--color-pink-light)',
              padding: '0.2rem 0.55rem',
              borderRadius: '2px',
              letterSpacing: '0.02em',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}

export default function Projects() {
  const headingRef = useScrollReveal()

  return (
    <section id="projects" style={{ padding: '7rem 0', background: 'var(--color-bg)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div ref={headingRef} className="reveal" style={{ marginBottom: '3.5rem' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-pink-deep)', marginBottom: '0.75rem' }}>
            Selected Work
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
            Projects
          </h2>
          <div style={{ width: '40px', height: '2px', background: 'var(--color-pink)', marginTop: '1rem' }} />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
