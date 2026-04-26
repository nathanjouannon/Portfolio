import { useState } from 'react'
import ESF from '/CareerPictures/ESF.jpeg'
import ISCOD from '/CareerPictures/ISCOD.jpg'
import hbond from '/CareerPictures/hbond.png'
import WCS from '/CareerPictures/WCS.png'
import UGA from '/CareerPictures/UGA.jpg'
import CNSNMM from '/CareerPictures/CNSNMM.jpeg'
import './career.css'

type CareerType = 'formation' | 'experience'

type CareerEntry = {
  id: string
  type: CareerType
  period: string
  title: string
  organisation: string
  location?: string
  description: string
  logoAlt?: string
  logoText?: string
  logoSrc?: string
}

const careerEntries: CareerEntry[] = [
  {
    id: 'iscod-master',
    type: 'formation',
    period: 'Juillet 2024 - Juillet 2026',
    title: 'Master “Expert en Ingénierie du Logiciel”',
    organisation: 'Iscod',
    location: 'A distance',
    description:
      'Formation orientee architecture logicielle, qualite de code et pilotage de projets techniques. Elle renforce mes competences en conception d applications robustes et en industrialisation du developpement.',
    logoAlt: 'Logo Iscod',
    logoText: 'ISCOD',
    logoSrc: ISCOD,
  },
  {
    id: 'hbond-master-alternance',
    type: 'experience',
    period: 'Juillet 2024 - Juillet 2026',
    title: 'Alternance dans le cadre du master “Expert en Ingénierie du Logiciel”',
    organisation: 'hbond®',
    location: 'Annecy',
    description:
      'Alternance centree sur le developpement d applications web et mobiles, avec une attention particuliere a la fiabilite, a la maintenabilite et a l amelioration continue des fonctionnalites.',
    logoAlt: 'Logo hbond',
    logoText: 'hbond',
    logoSrc: hbond,
  },
  {
    id: 'wild-code-school-rncp6',
    type: 'formation',
    period: 'Avril 2023 - Avril 2024',
    title: 'Titre RNCP de niveau 6 “Concepteur developper d’application web et mobile”',
    organisation: 'Wild Code School',
    location: 'A distance',
    logoSrc: WCS,
    description:
      'Parcours professionnalisant axe sur la programmation full stack, l integration front-end, la conception d API et le travail en equipe sur des projets concrets.',
  },
  {
    id: 'hbond-rncp6-alternance',
    type: 'experience',
    period: 'Avril 2023 - Avril 2024',
    title:
      'Alternance dans le cadre du titre RNCP de niveau 6 “Concepteur developper d’application web et mobile”',
    organisation: 'hbond®',
    location: 'Annecy',
    description:
      'Premiere experience longue en alternance dans un environnement produit. Participation a la conception, au developpement et aux evolutions de solutions digitales orientees metier.',
    logoAlt: 'Logo hbond',
    logoText: 'hbond',
    logoSrc: hbond,
  },
  {
    id: 'esf-moniteur-ski',
    type: 'experience',
    period: 'Decembre 2022 - Mars 2023',
    title: 'Moniteur de ski ESF',
    organisation: 'ESF le Revard',
    logoSrc: ESF,
    description:
      'Encadrement de publics varies avec un fort besoin de pedagogie, d adaptation et de communication. Cette experience a consolide mon sens de l organisation et de la responsabilite.',
  },
  {
    id: 'uga-licence',
    type: 'formation',
    period: '2020 - 2022',
    title: 'Licence Physique chimie mathematique mecanique.',
    organisation: 'Universite Grenoble Alpes',
    location: 'Grenoble',
    logoSrc: UGA,
    description:
      'Formation scientifique generaliste ayant developpe ma rigueur analytique, ma logique de resolution de problemes et ma capacite a manipuler des concepts techniques complexes.',
  },
  {
    id: 'cnsnm-brevet',
    type: 'formation',
    period: '2021',
    title: 'Brevet d’etat de moniteur de ski (1re partie)',
    organisation: 'CNSNM',
    location: 'Premanon',
    logoSrc: CNSNMM,
    description:
      'Validation d un cursus exigeant combinant technique, securite et transmission de savoir-faire. Cette etape a confirme mon gout pour l apprentissage structure et l accompagnement.',
  },
]

export default function Career() {
  const [selectedEntryId, setSelectedEntryId] = useState<string | null>(
    careerEntries[0]?.id ?? null,
  )

  const selectedEntry = careerEntries.find((entry) => entry.id === selectedEntryId) ?? null

  const handleSelectEntry = (entryId: string) => {
    setSelectedEntryId((currentId) => (currentId === entryId ? null : entryId))
  }

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
              const isActive = selectedEntryId === entry.id

              return (
                <li className="career-item" key={entry.id} role="listitem">
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

                    <button
                      type="button"
                      className={`career-detail-button${isActive ? ' is-active' : ''}`}
                      onClick={() => handleSelectEntry(entry.id)}
                      aria-pressed={isActive}
                      aria-controls="career-detail-panel"
                    >
                      Plus de details
                    </button>
                  </article>
                </li>
              )
            })}
          </ol>
        </div>

        <section id="career-detail-panel" className="career-detail-panel" aria-live="polite">
          {selectedEntry ? (
            <>
              <p className="career-detail-kicker">
                {selectedEntry.type === 'formation' ? 'Formation' : 'Experience'}
              </p>
              <h2 className="career-detail-title">{selectedEntry.title}</h2>
              <p className="career-detail-meta">
                {selectedEntry.organisation}
                {selectedEntry.location ? ` · ${selectedEntry.location}` : ''}
                {` · ${selectedEntry.period}`}
              </p>
              <p className="career-detail-description">{selectedEntry.description}</p>
            </>
          ) : (
            <p className="career-detail-empty">
              Selectionnez une carte pour afficher sa description detaillee.
            </p>
          )}
        </section>
      </div>
    </section>
  )
}
