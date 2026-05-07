import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal.js'
import { skills } from '../data.js'

function SkillBar({ name, level, visible }) {
  return (
    <div style={{ marginBottom: '1.1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: 'var(--color-text)' }}>
          {name}
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-muted)' }}>
          {level}%
        </span>
      </div>
      <div
        style={{
          height: '5px',
          background: 'var(--color-border)',
          borderRadius: '3px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            width: visible ? `${level}%` : '0%',
            background: 'linear-gradient(90deg, var(--color-pink-light), var(--color-pink-deep))',
            borderRadius: '3px',
            transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDelay: '0.2s',
          }}
        />
      </div>
    </div>
  )
}

function CategoryPanel({ category, index, isActive, onClick }) {
  const ref = useScrollReveal()
  const [visible, setVisible] = useState(false)

  // Trigger bar animation when panel becomes active
  if (isActive && !visible) setVisible(true)

  return (
    <div ref={ref} className={`reveal reveal-delay-${(index % 4) + 1}`}>
      <button
        onClick={onClick}
        style={{
          width: '100%',
          textAlign: 'left',
          padding: '1rem 1.25rem',
          background: isActive ? 'var(--color-pink-pale)' : 'var(--color-surface)',
          border: '1px solid',
          borderColor: isActive ? 'var(--color-pink)' : 'var(--color-border)',
          borderRadius: '4px',
          cursor: 'pointer',
          marginBottom: '0.5rem',
          transition: 'all 0.2s',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.15rem',
            fontWeight: isActive ? 500 : 400,
            color: isActive ? 'var(--color-pink-deep)' : 'var(--color-text)',
          }}
        >
          {category.category}
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke={isActive ? 'var(--color-pink-deep)' : 'var(--color-muted)'}
          strokeWidth="2"
          strokeLinecap="round"
          style={{ transform: isActive ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {isActive && (
        <div
          style={{
            padding: '1.5rem',
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderTop: 'none',
            borderRadius: '0 0 4px 4px',
            marginTop: '-0.5rem',
            marginBottom: '0.5rem',
          }}
        >
          {category.items.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} visible={visible} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(0)
  const headingRef = useScrollReveal()

  return (
    <section id="skills" style={{ padding: '7rem 0', background: '#FAF6F7' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div ref={headingRef} className="reveal" style={{ marginBottom: '3.5rem' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-pink-deep)', marginBottom: '0.75rem' }}>
            Technical Toolkit
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
            Skills
          </h2>
          <div style={{ width: '40px', height: '2px', background: 'var(--color-pink)', marginTop: '1rem' }} />
        </div>

        <div style={{ maxWidth: '720px' }}>
          {skills.map((category, i) => (
            <CategoryPanel
              key={category.category}
              category={category}
              index={i}
              isActive={activeIndex === i}
              onClick={() => setActiveIndex(activeIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
