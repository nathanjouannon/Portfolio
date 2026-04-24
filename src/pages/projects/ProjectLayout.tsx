import { Link } from 'react-router-dom'
import './style/projectLayout.css'

export default function ProjectLayout() {
  const projects = [
    {
      name: 'Admin hbond',
      slug: 'admin-hbond',
      icon: (
        <svg className="project-icon" viewBox="0 0 24 24" fill="none">
          <rect x="4" y="5" width="16" height="14" rx="2" />
          <path d="M8 9h8M8 13h5" />
          <circle cx="16.5" cy="15.5" r="2" />
        </svg>
      ),
    },
    {
      name: 'MPMT',
      slug: 'mpmt',
      icon: (
        <svg className="project-icon" viewBox="0 0 24 24" fill="none">
          <path d="M4 7h16v10H4z" />
          <path d="M8 7V5M16 7V5" />
          <path d="M8 12h3M13 12h3" />
        </svg>
      ),
    },
    {
      name: 'ShopWise',
      slug: 'shopwise',
      icon: (
        <svg className="project-icon" viewBox="0 0 24 24" fill="none">
          <circle cx="9" cy="18" r="1.5" />
          <circle cx="16" cy="18" r="1.5" />
          <path d="M4 6h2l2.2 8h8.4L19 9H8.7" />
        </svg>
      ),
    },
    {
      name: "O'Fit",
      slug: 'o-fit',
      icon: (
        <svg className="project-icon" viewBox="0 0 24 24" fill="none">
          <path d="M4 12h4l2-5 4 10 2-5h4" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      ),
    },
    {
      name: 'TODO',
      slug: 'todo',
      icon: (
        <svg className="project-icon" viewBox="0 0 24 24" fill="none">
          <rect x="5" y="4" width="14" height="16" rx="2" />
          <path d="M9 9h6M9 13h6M9 17h4" />
        </svg>
      ),
    },
  ]

  return (
    <section className="project-page" aria-labelledby="project-title">
      <div className="project-shell">
        <h1 id="project-title" className="project-title">
          Projets
        </h1>

        <div className="project-grid">
          <section className="project-block" aria-labelledby="project-list-title">
            <h2 id="project-list-title" className="project-block-title">
              Tous les projets
            </h2>

            <ul className="project-list">
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
          </section>
        </div>
      </div>
    </section>
  )
}
