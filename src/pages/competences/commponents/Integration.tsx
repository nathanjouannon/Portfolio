import { Link } from 'react-router-dom'
import '../style/competenceItem.css'

export default function Integration() {
  return (
    <>
      <article className="competence-detail" aria-labelledby="organisation-title">
        <h1 id="organisation-title">Intégration, industrialisation et déploiement de logicielle</h1>
        <section className="competence-sub-item">
          <h2>Ma définition</h2>
          <p>
            L'intégration, l'industrialisation et le déploiement logiciel désignent l'ensemble des{' '}
            <strong>pratiques et outils</strong> qui permettent d’écrire du code source et de le
            transformer en un <strong>logiciel fonctionnel, livrable et maintenable</strong>. Cette
            compétence prend le relais après la phase de conception et couvre un spectre large : du
            développement du code lui-même (qu'il s'agisse d'un frontend web ou mobile, ou d'un
            backend) jusqu'à sa <strong>mise en production</strong> et son{' '}
            <strong>cycle de vie applicatif</strong>.
            <br />
            <br />
            Elle englobe également tout ce qui structure et fiabilise le processus de développement
            : la <strong>gestion de version</strong> avec <strong>Git et GitHub</strong>, la mise en
            place de <strong>tests automatisés</strong>, et surtout l'
            <strong>intégration et le déploiement continus (CI/CD)</strong>. Ces pratiques
            permettent de <strong>réduire les risques</strong> liés aux livraisons, d'
            <strong>automatiser les tâches répétitives</strong> et de garantir une{' '}
            <strong>qualité constante</strong> du logiciel produit.
            <br />
            <br />
            C'est une compétence transversale, qui touche autant à la rigueur technique qu'à
            l'organisation du travail. Elle conditionne directement la capacité d'une équipe à{' '}
            <strong>livrer de la valeur</strong> de manière{' '}
            <strong>régulière, rapide et maîtrisée</strong>.
          </p>
        </section>
        <section className="competence-sub-item">
          <h2>Mes éléments de preuve</h2>
          <p>
            C'est la compétence sur laquelle j'ai le plus travaillé au cours de mon parcours, aussi
            bien en alternance qu'en formation, et celle où je me sens aujourd'hui le{' '}
            <strong>plus à l'aise</strong>.
            <br />
            <br />
            Chez hbond, j'ai contribué à deux projets distincts qui m'ont confronté à des contextes
            de déploiement très différents. Sur le projet d'administration interne, j'ai développé
            le frontend web en <strong>TypeScript avec React</strong>, et participé à la mise en
            place de <strong>tests automatisés</strong> pour fiabiliser les livraisons. Sur le
            projet d'application mobile, développée en <strong>TypeScript avec React Native</strong>
            , j'ai géré plusieurs <strong>mises en production</strong> sur l'
            <strong>App Store</strong> via App Store Connect et sur le <strong>Play Store</strong>{' '}
            via Google Play Console. J'ai également utilisé le mécanisme d'
            <strong>Expo OTA (Over The Air)</strong> qui permet de pousser des mises à jour mineures
            directement sur les appareils des utilisateurs, sans passer par le{' '}
            <strong>processus de validation des stores</strong>. C'est une approche particulièrement
            utile pour <strong>corriger rapidement des bugs</strong> ou déployer de petites
            évolutions sans friction.
            <br />
            <br />
            Le projet scolaire MPMT m'a permis d'aller plus loin sur la dimension industrialisation.
            Après une phase de conception complète, j'ai développé une{' '}
            <strong>API avec Spring Boot</strong> et un <strong>frontend avec Angular</strong>, que
            j'ai ensuite <strong>dockerisés dans un monorepo</strong> en utilisant{' '}
            <strong>Docker Compose</strong> pour orchestrer les services. J'ai ajouté des{' '}
            <strong>tests automatisés</strong> et mis en place un <strong>pipeline CI/CD</strong>{' '}
            qui publie automatiquement une image sur
            <strong> Docker Hub</strong> à chaque intégration. C'est sur ce projet que j'ai le mieux
            appréhendé la <strong>chaîne complète</strong>, de l'écriture du code jusqu'à la
            distribution automatisée d'un <strong>artefact prêt à déployer</strong>.
          </p>
        </section>
        <section className="competence-sub-item">
          <h2>Mon autocritique</h2>
          <p>
            C'est la compétence dans laquelle je me sens le plus confiant. La diversité des projets
            sur lesquels je l'ai pratiquée, aussi bien en alternance qu'en formation, m'a permis de
            développer des <strong>réflexes solides</strong>, notamment sur la mise en place de{' '}
            <strong>pipelines CI/CD</strong>, la <strong>gestion de version</strong> et le
            <strong> déploiement d'applications web et mobile</strong>.
            <br />
            <br />
            Le seul point sur lequel je reste plus réservé est la <strong>dockerisation</strong>.
            Non pas parce que le concept me pose problème, j'ai eu l'occasion de le mettre en
            pratique sur le projet MPMT, mais parce que je n'y reviens pas assez régulièrement pour
            que cela devienne un <strong>automatisme</strong>. La configuration d'environnements{' '}
            <strong>Docker</strong> et l'orchestration avec <strong>Docker Compose</strong>{' '}
            demandent une <strong>pratique soutenue</strong> pour être maîtrisées avec aisance, et
            le manque de fréquence se fait sentir dès que les cas d'usage deviennent un peu plus
            complexes.
            <br />
            <br />
            C'est un point isolé dans une compétence globalement bien ancrée, mais je le considère
            comme un <strong>axe de progression réel</strong>, d'autant que la{' '}
            <strong>conteneurisation</strong> est aujourd'hui <strong>incontournable</strong> dans
            les environnements professionnels.
          </p>
        </section>
        <section className="competence-sub-item">
          <h2>Mon évolution dans cette compétence</h2>
          <p>
            La découverte du <strong>CI/CD</strong> a représenté un <strong>tournant</strong> dans
            ma façon d'appréhender le développement logiciel.{' '}
            <strong>Automatiser les tests, les builds et les déploiements</strong> m'a donné une{' '}
            <strong>vision plus industrielle</strong> du métier, où la qualité et la fiabilité des
            livraisons ne reposent plus uniquement sur la rigueur manuelle du développeur mais sur
            des <strong>processus reproductibles et systématiques</strong>.
            <br />
            <br />
            Mon objectif est de continuer à monter en compétence pour atteindre un niveau senior sur
            l'ensemble de cette chaîne. Un projet concret se profile déjà dans ce sens chez hbond :
            l'entreprise souhaite <strong>déployer Expo sur un VPS</strong> afin de pouvoir
            distribuer des mises à jour de l'application mobile à l'ensemble des utilisateurs de
            manière <strong>autonome et économique</strong>, sans dépendre entièrement des stores.
            C'est un projet de déploiement <strong>plus complexe</strong> que ce que j'ai eu
            l'occasion de réaliser jusqu'ici, et je le vois comme une opportunité directe d'
            <strong>approfondir mes compétences</strong> sur des{' '}
            <strong>infrastructures réelles</strong> et des{' '}
            <strong>contraintes de production concrètes</strong>.
          </p>
        </section>
      </article>
      <section
        className="competence-sub-item project-skills project-skills-panel"
        aria-labelledby="admin-hbond-skills"
      >
        <h2 id="admin-hbond-skills">Projets associés à la compétence</h2>

        <div className="project-skills-group" aria-labelledby="organisation-projects-links">
          <div className="project-skills-links">
            <Link className="project-skill-link project-skill-link-tech" to="/projet/admin-hbond">
              Admin hbond
            </Link>
            <Link
              className="project-skill-link project-skill-link-tech"
              to="/projet/application-hbond"
            >
              Application hbond
            </Link>
            <Link className="project-skill-link project-skill-link-tech" to="/projet/mpmt">
              MPMT
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
