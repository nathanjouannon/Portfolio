import type { ReactElement } from 'react'

export type ProjectItem = {
  name: string
  slug: string
  icon: ReactElement
}

export const projects: ProjectItem[] = [
  {
    name: 'Admin hbond',
    slug: 'admin-hbond',
    icon: (
      <svg className="project-icon" viewBox="0 0 24 24" fill="none">
        <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
        <path d="M3.5 8.5h17" />
        <circle cx="6" cy="6.5" r="0.9" />
        <circle cx="8.6" cy="6.5" r="0.9" />
        <circle cx="11.2" cy="6.5" r="0.9" />
        <rect x="6.5" y="11" width="5" height="5.5" rx="0.8" />
        <path d="M13 11h4.5M13 13.3h4.5M13 15.6h3" />
      </svg>
    ),
  },
  {
    name: 'MPMT',
    slug: 'mpmt',
    icon: (
      <svg className="project-icon" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="5" width="16" height="14" rx="2" />
        <circle cx="8" cy="10" r="1.2" />
        <circle cx="12" cy="14" r="1.2" />
        <circle cx="16" cy="10" r="1.2" />
        <path d="M9.2 10h5.6M8.8 10.9l2.4 2.2M15.2 10.9l-2.4 2.2" />
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
    name: 'Application hbond',
    slug: 'application-hbond',
    icon: (
      <svg className="project-icon" viewBox="0 0 24 24" fill="none">
        <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
        <path d="M10 5.5h4" />
        <circle cx="12" cy="18.5" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
]
