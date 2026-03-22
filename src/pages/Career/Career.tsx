import './career.css'

type CareerType = 'formation' | 'experience'

type CareerEntry = {
  type: CareerType
  period: string
  title: string
  organisation: string
  location?: string
  logoAlt?: string
  logoText?: string
  logoSrc?: string
}

const careerEntries: CareerEntry[] = [
  {
    type: 'formation',
    period: 'Juillet 2024 - Juillet 2026',
    title: 'Master “Expert en Ingénierie du Logiciel”',
    organisation: 'Iscod',
    location: 'A distance',
    logoAlt: 'Logo Iscod',
    logoText: 'ISCOD',
  },
  {
    type: 'experience',
    period: 'Juillet 2024 - Juillet 2026',
    title: 'Alternance dans le cadre du master “Expert en Ingénierie du Logiciel”',
    organisation: 'hbond®',
    location: 'Annecy',
    logoAlt: 'Logo hbond',
    logoText: 'hbond',
  },
  {
    type: 'formation',
    period: 'Avril 2023 - Avril 2024',
    title: 'Titre RNCP de niveau 6 “Concepteur developper d’application web et mobile”',
    organisation: 'Wild Code School',
    location: 'A distance',
  },
  {
    type: 'experience',
    period: 'Avril 2023 - Avril 2024',
    title:
      'Alternance dans le cadre du titre RNCP de niveau 6 “Concepteur developper d’application web et mobile”',
    organisation: 'hbond®',
    location: 'Annecy',
    logoAlt: 'Logo hbond',
    logoText: 'hbond',
  },
  {
    type: 'experience',
    period: 'Decembre 2022 - Mars 2023',
    title: 'Moniteur de ski ESF',
    organisation: 'ESF le Revard',
  },
  {
    type: 'formation',
    period: '2020 - 2022',
    title: 'Licence Physique chimie mathematique mecanique.',
    organisation: 'Universite Grenoble Alpes',
    location: 'Grenoble',
  },
  {
    type: 'formation',
    period: '2021',
    title: 'Brevet d’etat de moniteur de ski (1re partie)',
    organisation: 'CNSNM',
    location: 'Premanon',
  },
]

export default function Career() {
  return (
    <section className="career-page" aria-labelledby="career-title">
      <div className="career-shell">
        <p className="career-kicker">Mon parcours professionnel</p>
        <h1 id="career-title" className="career-title">
          Carrière
        </h1>
        <p className="career-intro">
          Découvrez les étapes clés de mon parcours, du plus récent au plus ancien.
        </p>

        <div className="career-timeline-wrap" aria-label="Frise chronologique de parcours">
          <ol className="career-timeline" role="list">
            {careerEntries.map((entry) => {
              const anchorYear = entry.period.match(/\d{4}/)?.[0]

              return (
                <li className="career-item" key={`${entry.period}-${entry.title}`} role="listitem">
                  {anchorYear ? <span className="career-anchor-year">{anchorYear}</span> : null}

                  <article className="career-card">
                    <div className="career-topline">
                      <span className={`career-tag career-tag-${entry.type}`}>
                        {entry.type === 'formation' ? 'Formation' : 'Expérience'}
                      </span>
                      <p className="career-period">{entry.period}</p>
                    </div>

                    <h2 className="career-card-title">{entry.title}</h2>

                    <div className="career-organisation-row">
                      <div
                        className="career-logo"
                        aria-label={entry.logoAlt ?? `${entry.organisation} logo`}
                      >
                        {entry.logoSrc ? (
                          <img
                            src={entry.logoSrc}
                            alt={entry.logoAlt ?? `${entry.organisation} logo`}
                          />
                        ) : (
                          <span>{entry.logoText ?? entry.organisation.slice(0, 3)}</span>
                        )}
                      </div>

                      <div className="career-meta">
                        <p className="career-organisation">{entry.organisation}</p>
                        {entry.location ? (
                          <p className="career-location">{entry.location}</p>
                        ) : null}
                      </div>
                    </div>
                  </article>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
