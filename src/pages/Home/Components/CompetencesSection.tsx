import { Link } from 'react-router-dom'
import { competenceGroups } from '../../competences/competenceData'
import '../style/competencesSection.css'

export default function CompetencesSection() {
  return (
    <section className="home-section-competences" aria-labelledby="home-competences">
      <h1 id="home-competences">Compétences</h1>

      <div className="home-competences-groups">
        {competenceGroups.map((group) => (
          <div key={group.id}>
            <h2>{group.title}</h2>
            <ul>
              {group.items.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="home-competence-item-link">
                    <span className="home-competence-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none">
                        {item.icon}
                      </svg>
                    </span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Link to="/competences" className="home-competences-cta">
        Voir la page des compétences
      </Link>
    </section>
  )
}
