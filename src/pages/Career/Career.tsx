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
    description: `
    L'ISCOD (Institut Supérieur des Compétences et du Digital) est une école de commerce et du digital spécialisée dans la formation en alternance, proposant des cursus allant du Bac+2 au Bac+5 dans des domaines tels que le marketing, le commerce, la communication et le digital. Elle se distingue par son approche 100% en ligne pour les cours théoriques, permettant aux étudiants de combiner efficacement leur formation académique avec une expérience professionnelle en entreprise.

      J’y ai réalisé une formation en alternance préparant au titre RNCP niveau 7. Le programme couvre l'analyse des besoins en architecture technique, la conception et le développement d'architectures logicielles, le management d'équipes de développement et le pilotage de projets avec les méthodes Agile et DevOps. La formation couvre l'ensemble du cycle de vie logiciel : recueil et analyse des besoins, conception de solutions, gestion de projet et maintien en conditions opérationnelles.`,
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
    description: `
      L’entreprise Hbond est une start-up basée à Annecy, fondée il y a quatre ans. Elle occupe une position unique sur son marché : elle organise la vente de matériel sportif à tarif préférentiel pour les professionnels du sport, permettant à ces derniers de s’équiper à moindre coût, tandis que les marques partenaires bénéficient en retour de leur influence comme levier marketing. Pour garantir l’exclusivité de la plateforme, la création d’un compte est conditionnée à la possession d’un diplôme d’éducateur sportif reconnu par l’État.
      
J’ai réalisé deux ans d’alternance dans cette entreprise dans le cadre de mon master à l’ISCOD. J’y avais déjà passé une année auparavant. J’y ai donc passé au total trois ans en alternance. J’y ai occupé le poste de développeur full stack, bien que mes missions aient été principalement frontend. J’ai néanmoins travaillé sur le backend, ainsi que sur la conception et la gestion de projet.`,
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
    description: `
      La Wild Code School est une école de coding qui forme des développeurs web et des professionnels du digital à travers des formations disponibles en présentiel ou à distance, dans plusieurs villes en Europe. Elle propose des programmes immersifs, de 5 mois ou 1 an, axés sur les technologies les plus demandées par le marché du travail, telles que JavaScript, React ou Python, avec une pédagogie basée sur des projets concrets et le travail collaboratif.

J’ai réalisé dans cette école une formation en alternance préparant au titre RNCP de niveau 6 « Concepteur développeur d’applications web et mobile ». Le programme développe les capacités de conception, développement et déploiement d’applications web et logicielles complexes, en maîtrisant aussi bien le développement front-end que back-end. Ce programme couvre des compétences telles que la modélisation de bases de données, la programmation orientée objet, la gestion de projets agiles ainsi que la sécurisation des applications.`,
  },
  {
    id: 'hbond-rncp6-alternance',
    type: 'experience',
    period: 'Avril 2023 - Avril 2024',
    title:
      'Alternance dans le cadre du titre RNCP de niveau 6 “Concepteur developper d’application web et mobile”',
    organisation: 'hbond®',
    location: 'Annecy',
    description: `
      L’entreprise Hbond est une start-up basée à Annecy, fondée il y a quatre ans. Elle occupe une position unique sur son marché en organisant la vente de matériel sportif à tarifs préférentiels pour les professionnels du sport. Cette approche permet à ces derniers de s’équiper à moindre coût, tandis que les marques partenaires bénéficient en retour de leur influence comme levier marketing. Pour garantir l’exclusivité de la plateforme, la création d’un compte est conditionnée à la possession d’un diplôme d’éducateur sportif reconnu par l’État.

J’ai réalisé un an d’alternance dans cette entreprise dans le cadre de mon master à l’ISCOD. J’y ai occupé le poste de développeur full stack, bien que mes missions aient été principalement frontend. J’ai néanmoins travaillé sur le backend et développé l’application mobile avec une technologie cross-platform.`,
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
    description: `
    L’École du Ski Français (ESF) est le premier réseau mondial de cours de ski, présent dans la quasi-totalité des stations de ski françaises, avec plus de 17 000 moniteurs diplômés d’État. Elle propose des cours collectifs et particuliers pour tous les niveaux et tous les âges, aussi bien en ski alpin, ski de fond, snowboard qu’en d’autres disciplines de glisse.
    
J’ai, au sein de l’ESF, encadré des cours collectifs et particuliers, tous niveaux, enfants et adultes. J’ai adapté la progression pédagogique et le discours au profil de chaque élève.`,
  },
  {
    id: 'uga-licence',
    type: 'formation',
    period: '2020 - 2022',
    title: 'Licence Physique chimie mathematique mecanique.',
    organisation: 'Universite Grenoble Alpes',
    location: 'Grenoble',
    logoSrc: UGA,
    description: `
      L’Université Grenoble Alpes (UGA) est un établissement public d’enseignement supérieur et de recherche situé à Grenoble, en Isère, au cœur de la région Auvergne-Rhône-Alpes. Fondée en 1339 sous le nom d’Université de Grenoble, elle figure parmi les plus anciennes universités de France. Après plusieurs fusions, notamment avec les universités Grenoble-I, II et III en 2016, elle prend le nom d’UGA et devient un acteur majeur de la recherche et de l’innovation en Europe.
      Classée parmi les 150 meilleures universités mondiales selon le QS World University Rankings 2024, l’UGA se distingue particulièrement dans les domaines des sciences et de l’ingénierie. Elle est également la première université française en sciences de l’environnement selon le Shanghai Ranking 2023.
      
      Au sein de cette université, j’ai obtenu une licence en sciences fondamentales, couvrant les disciplines de la physique, de la chimie, des mathématiques et de la mécanique. Les enseignements étaient orientés vers la modélisation, le raisonnement analytique, la démarche expérimentale et l’initiation à la programmation.`,
  },
  {
    id: 'cnsnm-brevet',
    type: 'formation',
    period: '2021',
    title: 'Brevet d’etat de moniteur de ski (1re partie)',
    organisation: 'CNSNM',
    location: 'Premanon',
    logoSrc: CNSNMM,
    description: `Le CNSNMM (Centre National de Ski Nordique et de Moyenne Montagne) est un centre d'entraînement et de formation situé à Prémanon dans le Jura, dédié au développement des sports nordiques tels que le ski de fond, le biathlon, le saut à ski et le combiné nordique. Il accueille des athlètes de haut niveau, des équipes de France, ainsi que des formations de moniteurs et d'entraîneurs, jouant un rôle clé dans la performance sportive française en montagne.
      
Dans ce cadre, le BE1 de ski nordique (Brevet d'État 1er degré) est une certification professionnelle qui permet d'enseigner le ski de fond et les disciplines nordiques en autonomie. Il forme des éducateurs sportifs capables d'encadrer des publics variés, du débutant au pratiquant confirmé, dans un cadre sécurisé et pédagogique.`,
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

  const renderDescription = (description: string) => {
    const lines = description.split(/(?:<br\s*\/?>|\r?\n)/gi)

    return lines.map((line, index) => (
      <span key={`${line.slice(0, 12)}-${index}`}>
        {line}
        {index < lines.length - 1 ? <br /> : null}
      </span>
    ))
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
              <p className="career-detail-description">
                {renderDescription(selectedEntry.description)}
              </p>
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
