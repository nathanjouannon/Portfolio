import { Link } from 'react-router-dom'
import './style/competenceLayout.css'
import { competenceGroups } from './competenceData'

export default function CompetencesLayout() {
  return (
    <section className="competences-page" aria-labelledby="competences-title">
      <div className="competences-shell">
        <h1 id="competences-title" className="competences-title">
          Compétence
        </h1>

        <div className="competences-grid">
          {competenceGroups.map((group) => (
            <>
              <h2 id={group.id} className="competence-block-title">
                {group.title}
              </h2>

              <ul aria-labelledby={group.id} className="competence-list">
                {group.items.map((item) => (
                  <li key={item.to} className="competence-item">
                    <Link className="competence-link" to={item.to}>
                      <span className="competence-logo" aria-hidden="true">
                        <svg className="competence-icon" viewBox="0 0 24 24" fill="none">
                          {item.icon}
                        </svg>
                      </span>
                      <span className="competence-label">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ))}
        </div>
      </div>
    </section>
  )
}
