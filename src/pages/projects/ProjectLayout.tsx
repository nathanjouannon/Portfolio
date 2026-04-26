import { Link } from 'react-router-dom'
import { projects } from './projectData'
import './style/projectLayout.css'

export default function ProjectLayout() {
  return (
    <section className="project-page" aria-labelledby="project-title">
      <div className="project-shell">
        <h1 id="project-title" className="project-title">
          Projets
        </h1>

        <div className="project-grid">
          <ul className="project-list project-list--five-columns">
            {projects.map((project) => (
              <li key={project.slug} className="project-item">
                <Link className="project-link" to={`/projet/${project.slug}`}>
                  <span className="project-logo" aria-hidden="true">
                    {project.icon}
                  </span>
                  <span className="project-label">{project.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
