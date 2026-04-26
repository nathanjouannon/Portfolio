import { Link } from 'react-router-dom'
import { projects } from '../../projects/projectData'
import '../style/projectsSection.css'

export default function ProjectsSection() {
  return (
    <section className="home-section-projects" aria-labelledby="home-projects">
      <h1 id="home-projects">Projets</h1>

      <div className="home-projects-grid">
        {projects.map((project) => (
          <div key={project.slug}>
            <Link className="home-projects-item-link" to={`/projet/${project.slug}`}>
              <span className="home-projects-icon" aria-hidden="true">
                {project.icon}
              </span>
              <h2>{project.name}</h2>
              <p>Découvrir ce projet en détail</p>
            </Link>
          </div>
        ))}
      </div>

      <Link to="/projets" className="home-projects-cta">
        Voir la page des projets
      </Link>
    </section>
  )
}
