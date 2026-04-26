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
            L'intégration, l'industrialisation et le déploiement logiciel désignent l'ensemble des
            pratiques et outils qui permettent d’écrire du code source et de le transformer en un
            logiciel fonctionnel, livrable et maintenable. Cette compétence prend le relais après la
            phase de conception et couvre un spectre large : du développement du code lui-même
            (qu'il s'agisse d'un frontend web ou mobile, ou d'un backend) jusqu'à sa mise en
            production et son cycle de vie applicatif.
            <br />
            <br />
            Elle englobe également tout ce qui structure et fiabilise le processus de développement
            : la gestion de version avec Git et GitHub, la mise en place de tests automatisés, et
            surtout l'intégration et le déploiement continus (CI/CD). Ces pratiques permettent de
            réduire les risques liés aux livraisons, d'automatiser les tâches répétitives et de
            garantir une qualité constante du logiciel produit.
            <br />
            <br />
            C'est une compétence transversale, qui touche autant à la rigueur technique qu'à
            l'organisation du travail. Elle conditionne directement la capacité d'une équipe à
            livrer de la valeur de manière régulière, rapide et maîtrisée.
          </p>
        </section>
        <section className="competence-sub-item">
          <h2>Mes éléments de preuve</h2>
          <p>
            C'est la compétence sur laquelle j'ai le plus travaillé au cours de mon parcours, aussi
            bien en alternance qu'en formation, et celle où je me sens aujourd'hui le plus à l'aise.
            <br />
            <br />
            Chez hbond, j'ai contribué à deux projets distincts qui m'ont confronté à des contextes
            de déploiement très différents. Sur le projet d'administration interne, j'ai développé
            le frontend web en TypeScript avec React, et participé à la mise en place de tests
            automatisés pour fiabiliser les livraisons. Sur le projet d'application mobile,
            développée en TypeScript avec React Native, j'ai géré plusieurs mises en production sur
            l'App Store via App Store Connect et sur le Play Store via Google Play Console. J'ai
            également utilisé le mécanisme d'Expo OTA (Over The Air) qui permet de pousser des mises
            à jour mineures directement sur les appareils des utilisateurs, sans passer par le
            processus de validation des stores. C'est une approche particulièrement utile pour
            corriger rapidement des bugs ou déployer de petites évolutions sans friction.
            <br />
            <br />
            Le projet scolaire MPMT m'a permis d'aller plus loin sur la dimension industrialisation.
            Après une phase de conception complète, j'ai développé une API avec Spring Boot et un
            frontend avec Angular, que j'ai ensuite dockerisés dans un monorepo en utilisant Docker
            Compose pour orchestrer les services. J'ai ajouté des tests automatisés et mis en place
            un pipeline CI/CD qui publie automatiquement une image sur Docker Hub à chaque
            intégration. C'est sur ce projet que j'ai le mieux appréhendé la chaîne complète, de
            l'écriture du code jusqu'à la distribution automatisée d'un artefact prêt à déployer.
          </p>
        </section>
        <section className="competence-sub-item">
          <h2>Mon autocritique</h2>
          <p>
            C'est la compétence dans laquelle je me sens le plus confiant. La diversité des projets
            sur lesquels je l'ai pratiquée, aussi bien en alternance qu'en formation, m'a permis de
            développer des réflexes solides, notamment sur la mise en place de pipelines CI/CD, la
            gestion de version et le déploiement d'applications web et mobile.
            <br />
            <br />
            Le seul point sur lequel je reste plus réservé est la dockerisation. Non pas parce que
            le concept me pose problème, j'ai eu l'occasion de le mettre en pratique sur le projet
            MPMT, mais parce que je n'y reviens pas assez régulièrement pour que cela devienne un
            automatisme. La configuration d'environnements Docker et l'orchestration avec Docker
            Compose demandent une pratique soutenue pour être maîtrisées avec aisance, et le manque
            de fréquence se fait sentir dès que les cas d'usage deviennent un peu plus complexes.
            <br />
            <br />
            C'est un point isolé dans une compétence globalement bien ancrée, mais je le considère
            comme un axe de progression réel, d'autant que la conteneurisation est aujourd'hui
            incontournable dans les environnements professionnels.
          </p>
        </section>
        <section className="competence-sub-item">
          <h2>Mon évolution dans cette compétence</h2>
          <p>
            La découverte du CI/CD a représenté un tournant dans ma façon d'appréhender le
            développement logiciel. Automatiser les tests, les builds et les déploiements m'a donné
            une vision plus industrielle du métier, où la qualité et la fiabilité des livraisons ne
            reposent plus uniquement sur la rigueur manuelle du développeur mais sur des processus
            reproductibles et systématiques.
            <br />
            <br />
            Mon objectif est de continuer à monter en compétence pour atteindre un niveau senior sur
            l'ensemble de cette chaîne. Un projet concret se profile déjà dans ce sens chez hbond :
            l'entreprise souhaite déployer Expo sur un VPS afin de pouvoir distribuer des mises à
            jour de l'application mobile à l'ensemble des utilisateurs de manière autonome et
            économique, sans dépendre entièrement des stores. C'est un projet de déploiement plus
            complexe que ce que j'ai eu l'occasion de réaliser jusqu'ici, et je le vois comme une
            opportunité directe d'approfondir mes compétences sur des infrastructures réelles et des
            contraintes de production concrètes.
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
