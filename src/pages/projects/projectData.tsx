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
        <rect x="3.5" y="4" width="17" height="16" rx="2" />
        <path d="M3.5 8.2h17" />
        <circle cx="5.8" cy="6.1" r="0.55" fill="currentColor" stroke="none" />
        <circle cx="7.6" cy="6.1" r="0.55" fill="currentColor" stroke="none" />
        <path d="M7 16v-4M11 16v-6.5M15 16v-2.5M18.5 16v-5" />
      </svg>
    ),
  },
  {
    name: 'MPMT',
    slug: 'mpmt',
    icon: (
      <svg className="project-icon" viewBox="0 0 24 24" fill="none">
        <circle cx="6" cy="7" r="2" />
        <circle cx="18" cy="7" r="2" />
        <circle cx="12" cy="17" r="2" />
        <path d="M7.6 8.3L10.5 15.2M16.4 8.3L13.5 15.2M8 7h8" />
      </svg>
    ),
  },
  {
    name: 'ShopWise',
    slug: 'shopwise',
    icon: (
      <svg className="project-icon" viewBox="0 0 24 24" fill="none">
        <circle cx="9.5" cy="19" r="1.2" />
        <circle cx="16.5" cy="19" r="1.2" />
        <path d="M3.5 4.5h2.2l2.1 10.3a1.6 1.6 0 0 0 1.6 1.3h7.4a1.6 1.6 0 0 0 1.6-1.3L20 8H7" />
        <path d="M9 8v3.5M12 8v3.5M15 8v3.5" />
      </svg>
    ),
  },
  {
    name: "O'Fit",
    slug: 'o-fit',
    icon: (
      <svg className="project-icon" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M6.5 12h2l1.4-3.4 2.2 6.8 1.6-3.4h3.8" />
      </svg>
    ),
  },
  {
    name: 'Application hbond',
    slug: 'application-hbond',
    icon: (
      <svg className="project-icon" viewBox="0 0 24 24" fill="none">
        <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
        <path d="M9.8 5.5h4.4" />
        <path d="M12 9.5c-1.6-1.7-4.3-0.4-4.3 1.6 0 1.9 2.3 3.4 4.3 5.1 2-1.7 4.3-3.2 4.3-5.1 0-2-2.7-3.3-4.3-1.6z" />
        <circle cx="12" cy="18.7" r="0.55" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
]
