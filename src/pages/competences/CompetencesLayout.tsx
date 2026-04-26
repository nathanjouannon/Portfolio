import { Link } from 'react-router-dom'
import './style/competenceLayout.css'

export default function CompetencesLayout() {
  return (
    <section className="competences-page" aria-labelledby="competences-title">
      <div className="competences-shell">
        <h1 id="competences-title" className="competences-title">
          Compétences
        </h1>

        <div className="competences-grid">
          <section className="competence-block" aria-labelledby="human-skills-title">
            <h2 id="human-skills-title" className="competence-block-title">
              Compétences humaines
            </h2>
            <ul className="competence-list">
              <li className="competence-item">
                <Link className="competence-link" to="/competences/organisation">
                  <span className="competence-logo" aria-hidden="true">
                    <svg className="competence-icon" viewBox="0 0 24 24" fill="none">
                      <rect x="6" y="5" width="12" height="14" rx="2" />
                      <path d="M9 3v4M15 3v4M9 11h6M9 15h6" />
                    </svg>
                  </span>
                  <span className="competence-label">Organisation</span>
                </Link>
              </li>
              <li className="competence-item">
                <Link className="competence-link" to="/competences/communication">
                  <span className="competence-logo" aria-hidden="true">
                    <svg className="competence-icon" viewBox="0 0 24 24" fill="none">
                      <path d="M4 6h16v9H9l-5 4V6z" />
                      <path d="M8 10h8M8 13h5" />
                    </svg>
                  </span>
                  <span className="competence-label">Communication</span>
                </Link>
              </li>
              <li className="competence-item">
                <Link className="competence-link" to="/competences/autonomie">
                  <span className="competence-logo" aria-hidden="true">
                    <svg className="competence-icon" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="7" />
                      <path d="M12 8v8M8 12h8" />
                    </svg>
                  </span>
                  <span className="competence-label">Autonomie</span>
                </Link>
              </li>
              <li className="competence-item">
                <Link className="competence-link" to="/competences/flexibilite">
                  <span className="competence-logo" aria-hidden="true">
                    <svg className="competence-icon" viewBox="0 0 24 24" fill="none">
                      <path d="M6 8a4 4 0 0 1 8 0v1a4 4 0 1 1 0 8H9" />
                      <path d="M9 7l-3 3 3 3" />
                    </svg>
                  </span>
                  <span className="competence-label">Flexibilité</span>
                </Link>
              </li>
            </ul>
          </section>

          <section className="competence-block" aria-labelledby="technical-skills-title">
            <h2 id="technical-skills-title" className="competence-block-title">
              Compétences techniques
            </h2>
            <ul className="competence-list">
              <li className="competence-item">
                <Link
                  className="competence-link"
                  to="/competences/conception-architecture-logicielle"
                >
                  <span className="competence-logo" aria-hidden="true">
                    <svg className="competence-icon" viewBox="0 0 24 24" fill="none">
                      <path d="M4 10l8-6 8 6" />
                      <path d="M6 9v9h12V9" />
                      <path d="M9 18v-4h6v4" />
                    </svg>
                  </span>
                  <span className="competence-label">
                    Conception d&apos;architecture logicielle
                  </span>
                </Link>
              </li>
              <li className="competence-item">
                <Link
                  className="competence-link"
                  to="/competences/integration-industrialisation-deploiement-logicielle"
                >
                  <span className="competence-logo" aria-hidden="true">
                    <svg className="competence-icon" viewBox="0 0 24 24" fill="none">
                      <rect x="4" y="6" width="7" height="5" rx="1" />
                      <rect x="13" y="13" width="7" height="5" rx="1" />
                      <path d="M11 8h2v7M11 15h2" />
                    </svg>
                  </span>
                  <span className="competence-label">
                    Intégration, industrialisatien et déploiement de logicielle
                  </span>
                </Link>
              </li>
              <li className="competence-item">
                <Link
                  className="competence-link"
                  to="/competences/pilotage-projet-ingenierie-logicielle"
                >
                  <span className="competence-logo" aria-hidden="true">
                    <svg className="competence-icon" viewBox="0 0 24 24" fill="none">
                      <rect x="4" y="5" width="16" height="14" rx="2" />
                      <path d="M8 10h8M8 14h5" />
                      <circle cx="17" cy="8" r="2" />
                    </svg>
                  </span>
                  <span className="competence-label">
                    Pilotage de projet d&apos;ingénieurie logicielle
                  </span>
                </Link>
              </li>
              <li className="competence-item">
                <Link
                  className="competence-link"
                  to="/competences/gestion-relation-client-ingenierie-logicielle"
                >
                  <span className="competence-logo" aria-hidden="true">
                    <svg className="competence-icon" viewBox="0 0 24 24" fill="none">
                      <circle cx="9" cy="9" r="3" />
                      <circle cx="15" cy="14" r="3" />
                      <path d="M11.5 10.5l1 1" />
                      <path d="M6 18c.8-1.6 2.2-2.5 4-2.5M13 18c.7-.9 1.6-1.5 3-1.8" />
                    </svg>
                  </span>
                  <span className="competence-label">
                    Gestion de la relation client en ingénierie logicielle.
                  </span>
                </Link>
              </li>

              <li className="competence-item">
                <Link
                  className="competence-link"
                  to="/competences/developpement-mobile-react-native"
                >
                  <span className="competence-logo" aria-hidden="true">
                    <svg className="competence-icon" viewBox="0 0 24 24" fill="none">
                      <circle cx="9" cy="9" r="3" />
                      <circle cx="15" cy="14" r="3" />
                      <path d="M11.5 10.5l1 1" />
                      <path d="M6 18c.8-1.6 2.2-2.5 4-2.5M13 18c.7-.9 1.6-1.5 3-1.8" />
                    </svg>
                  </span>
                  <span className="competence-label">Développement mobile en React-native</span>
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  )
}
