import { Link } from 'react-router-dom'
import '../style/competenceItem.css'

export default function Conception() {
  return (
    <>
      <article className="competence-detail" aria-labelledby="organisation-title">
        <h1 id="organisation-title">Conception d’architecture logicielle</h1>
        <section className="competence-sub-item">
          <h2>Ma définition</h2>
          <p>
            La <strong>conception d'architecture logicielle</strong> regroupe l'ensemble des
            <strong> décisions structurelles</strong> prises en amont du développement : comment les
            composants d'un système s'organisent, communiquent et pourront évoluer. C'est une{' '}
            <strong>compétence déterminante</strong> car une mauvaise architecture génère des{' '}
            <strong>coûts importants</strong> et peut rendre un système impossible à maintenir sur
            le <strong>long terme</strong>.
            <br />
            Plusieurs <strong>styles architecturaux</strong> existent, de l'architecture
            monolithique aux microservices, en passant par des approches distribuées dans le Cloud.
            Chacun répond à des contraintes différentes en termes de <strong>scalabilité</strong>,
            de <strong>maintenabilité</strong> ou de <strong>complexité opérationnelle</strong>. Ces
            styles s'appuient sur des principes de conception comme <strong>SOLID</strong> ou le{' '}
            <strong>Domain-Driven Design</strong>, qui permettent de produire un{' '}
            <strong>code modulaire</strong> et aligné sur les réalités métier du projet.
            <br />
            Cette compétence se distingue par sa <strong>dimension de compromis</strong> : chaque
            décision architecturale répond à des contraintes précises de{' '}
            <strong>performance</strong>, de <strong>coût</strong> et de{' '}
            <strong>contexte organisationnel</strong>. Il n'existe pas de solution universellement
            supérieure, seulement des <strong>solutions adaptées</strong> à un projet donné.
          </p>
        </section>
        <section className="competence-sub-item">
          <h2>Mes éléments de preuve</h2>
          <p>
            Deux projets réalisés en solitaire dans le cadre de mes cours m'ont permis de mettre en
            pratique la <strong>conception d'architecture logicielle</strong> de manière concrète.
            <br />
            <br />
            Le premier, MPMT, consistait à créer de zéro un outil de gestion de tâches et de projets
            à partir d'un scénario et d'un brief fournis. J'ai dû concevoir une architecture{' '}
            <strong>complète et évolutive</strong>, en choisissant <strong>Angular</strong> pour le
            frontend et <strong>Spring Boot</strong> pour le backend. Ce projet m'a amené à
            réfléchir à l'<strong>organisation globale du système</strong> avant d'écrire la moindre
            ligne de code : définition des <strong>couches applicatives</strong>,
            <strong> séparation des responsabilités</strong>, et conception d'un
            <strong> schéma de base de données</strong> cohérent avec les besoins fonctionnels. J'ai
            également produit un <strong>script SQL</strong> permettant de générer la structure de
            la base ainsi que des <strong>données de test</strong>, ce qui m'a obligé à anticiper
            les <strong>relations entre entités</strong> dès la phase de conception.
            <br />
            <br />
            Le second projet, ShopWise, s'inscrivait dans un contexte différent : il s'agissait de
            reprendre une application existante dont l'architecture n'atteignait pas un niveau
            satisfaisant, puis de la restructurer. J'ai commencé par définir clairement les
            responsabilités de chaque module ( flux de données, dépendances entre composants ) et
            par produire un <strong>diagramme de composants</strong> pour formaliser cette
            organisation. J'ai ensuite conçu un <strong>schéma de base de données</strong> intégrant
            une nouvelle fonctionnalité de <strong>gestion des ventes</strong>, permettant
            d'enregistrer informatiquement les transactions avec leurs produits associés. Ce projet
            m'a confronté à une problématique fréquente en entreprise : reprendre et faire évoluer
            une <strong>base de code existante</strong> sans déstabiliser l'ensemble.
          </p>
        </section>
        <section className="competence-sub-item">
          <h2>Mon autocritique</h2>
          <p>
            La conception d'architecture logicielle est la compétence sur laquelle je porte le
            regard le plus critique. Si les projets scolaires m'ont permis d'en acquérir les bases,
            je ne me sens pas encore suffisamment à l'aise pour l'exercer avec{' '}
            <strong>fluidité et autonomie</strong> dans un contexte professionnel.
            <br />
            <br />
            En alternance chez hbond, cette compétence est restée en retrait. En arrivant sur un
            projet déjà engagé, avec des ressources humaines limitées et un produit final encore en
            construction, les décisions architecturales n'étaient pas une priorité immédiate. J'ai
            pu prendre du recul sur la structure globale du système, mais sans jamais formaliser
            cette réflexion à travers des <strong>diagrammes</strong> ou des{' '}
            <strong>livrables de conception</strong>.
            <br />
            <br />
            Sur le plan technique, c'est la <strong>modélisation des bases de données</strong> (
            MCD, MLD, MPD ) qui représente aujourd'hui mon{' '}
            <strong>principal axe de progression</strong>. Ces schémas sont pourtant{' '}
            <strong>fondamentaux</strong> dans toute démarche de conception sérieuse, et je mesure
            encore trop souvent l'effort que cela me demande de les produire correctement. Mon
            aisance avec <strong>UML</strong> reste également <strong>perfectible</strong>, même si
            j'y suis davantage exercé.
            <br />
            <br />
            Ces lacunes sont identifiées et assumées. Elles ne freinent pas mon travail au
            quotidien, mais elles constituent un plafond que je souhaite lever, notamment par la
            pratique sur des <strong>projets personnels</strong> qui me permettront d'expérimenter
            sans contrainte de délai ou de contexte professionnel.
          </p>
        </section>
        <section className="competence-sub-item">
          <h2>Mon évolution dans cette compétence</h2>
          <p>
            Lorsque j'ai débuté ma formation, j'avais des notions sur la conception d'architecture
            logicielle, mais sans <strong>méthode structurée</strong> pour les appliquer. Je
            percevais l'intérêt de bien concevoir un système, sans savoir comment traduire cette
            intuition en <strong>décisions concrètes et documentées</strong>.
            <br />
            <br />
            C'est au cours de mon RNCP 6 ( Concepteur développeur d'applications web et mobiles )
            qu'un premier tournant s'est opéré, notamment grâce au module dédié aux bases de la
            modélisation de bases de données. Ce module m'a donné un premier{' '}
            <strong>cadre méthodologique</strong> et m'a permis de{' '}
            <strong>progresser sensiblement</strong>, même si je restais encore hésitant sur
            certains aspects.
            <br />
            <br />
            C'est précisément ce sentiment d'inachevé qui m'a poussé à poursuivre avec un RNCP 7 en
            ingénierie du logiciel. Je souhaitais aller plus loin, consolider ce qui restait fragile
            et aborder la conception avec davantage de <strong>rigueur</strong> et de{' '}
            <strong>confiance</strong>. Mon objectif est de continuer à pratiquer cette compétence,
            notamment à travers des <strong>projets personnels</strong>, jusqu'à ce qu'elle devienne
            un <strong>réflexe naturel</strong> dans mon approche du développement.
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
            <Link className="project-skill-link project-skill-link-tech" to="/projet/shopwise">
              ShopWise
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
