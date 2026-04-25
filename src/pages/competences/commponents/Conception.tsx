import '../style/competenceItem.css'

export default function Conception() {
  return (
    <article className="competence-detail" aria-labelledby="organisation-title">
      <h1 id="organisation-title">Conception d’architecture logicielle</h1>
      <section className="competence-sub-item">
        <h2>Ma définition</h2>
        <p>
          La conception d'architecture logicielle regroupe l'ensemble des décisions structurelles
          prises en amont du développement : comment les composants d'un système s'organisent,
          communiquent et pourront évoluer. C'est une compétence déterminante car une mauvaise
          architecture génère des coûts importants et peut rendre un système impossible à maintenir
          sur le long terme.
          <br />
          Plusieurs styles architecturaux existent, de l'architecture monolithique aux
          microservices, en passant par des approches distribuées dans le Cloud. Chacun répond à des
          contraintes différentes en termes de scalabilité, de maintenabilité ou de complexité
          opérationnelle. Ces styles s'appuient sur des principes de conception comme SOLID ou le
          Domain-Driven Design, qui permettent de produire un code modulaire et aligné sur les
          réalités métier du projet.
          <br />
          Cette compétence se distingue par sa dimension de compromis : chaque décision
          architecturale répond à des contraintes précises de performance, de coût et de contexte
          organisationnel. Il n'existe pas de solution universellement supérieure, seulement des
          solutions adaptées à un projet donné.
        </p>
      </section>
      <section className="competence-sub-item">
        <h2>Mes éléments de preuve</h2>
        <p>
          Deux projets réalisés en solitaire dans le cadre de mes cours m'ont permis de mettre en
          pratique la conception d'architecture logicielle de manière concrète.
          <br />
          <br />
          Le premier, MPMT, consistait à créer de zéro un outil de gestion de tâches et de projets à
          partir d'un scénario et d'un brief fournis. J'ai dû concevoir une architecture complète et
          évolutive, en choisissant Angular pour le frontend et Spring Boot pour le backend. Ce
          projet m'a amené à réfléchir à l'organisation globale du système avant d'écrire la moindre
          ligne de code : définition des couches applicatives, séparation des responsabilités, et
          conception d'un schéma de base de données cohérent avec les besoins fonctionnels. J'ai
          également produit un script SQL permettant de générer la structure de la base ainsi que
          des données de test, ce qui m'a obligé à anticiper les relations entre entités dès la
          phase de conception.
          <br />
          <br />
          Le second projet, ShopWise, s'inscrivait dans un contexte différent : il s'agissait de
          reprendre une application existante dont l'architecture n'atteignait pas un niveau
          satisfaisant, puis de la restructurer. J'ai commencé par définir clairement les
          responsabilités de chaque module ( flux de données, dépendances entre composants ) et par
          produire un diagramme de composants pour formaliser cette organisation. J'ai ensuite conçu
          un schéma de base de données intégrant une nouvelle fonctionnalité de gestion des ventes,
          permettant d'enregistrer informatiquement les transactions avec leurs produits associés.
          Ce projet m'a confronté à une problématique fréquente en entreprise : reprendre et faire
          évoluer une base de code existante sans déstabiliser l'ensemble.
        </p>
      </section>
      <section className="competence-sub-item">
        <h2>Mon autocritique</h2>
        <p>
          La conception d'architecture logicielle est la compétence sur laquelle je porte le regard
          le plus critique. Si les projets scolaires m'ont permis d'en acquérir les bases, je ne me
          sens pas encore suffisamment à l'aise pour l'exercer avec fluidité et autonomie dans un
          contexte professionnel.
          <br />
          <br />
          En alternance chez hbond, cette compétence est restée en retrait. En arrivant sur un
          projet déjà engagé, avec des ressources humaines limitées et un produit final encore en
          construction, les décisions architecturales n'étaient pas une priorité immédiate. J'ai pu
          prendre du recul sur la structure globale du système, mais sans jamais formaliser cette
          réflexion à travers des diagrammes ou des livrables de conception.
          <br />
          <br />
          Sur le plan technique, c'est la modélisation des bases de données ( MCD, MLD, MPD ) qui
          représente aujourd'hui mon principal axe de progression. Ces schémas sont pourtant
          fondamentaux dans toute démarche de conception sérieuse, et je mesure encore trop souvent
          l'effort que cela me demande de les produire correctement. Mon aisance avec UML reste
          également perfectible, même si j'y suis davantage exercé.
          <br />
          <br />
          Ces lacunes sont identifiées et assumées. Elles ne freinent pas mon travail au quotidien,
          mais elles constituent un plafond que je souhaite lever, notamment par la pratique sur des
          projets personnels qui me permettront d'expérimenter sans contrainte de délai ou de
          contexte professionnel.
        </p>
      </section>
      <section className="competence-sub-item">
        <h2>Mon évolution dans cette compétence</h2>
        <p>
          Lorsque j'ai débuté ma formation, j'avais des notions sur la conception d'architecture
          logicielle, mais sans méthode structurée pour les appliquer. Je percevais l'intérêt de
          bien concevoir un système, sans savoir comment traduire cette intuition en décisions
          concrètes et documentées.
          <br />
          <br />
          C'est au cours de mon RNCP 6 ( Concepteur développeur d'applications web et mobiles )
          qu'un premier tournant s'est opéré, notamment grâce au module dédié aux bases de la
          modélisation de bases de données. Ce module m'a donné un premier cadre méthodologique et
          m'a permis de progresser sensiblement, même si je restais encore hésitant sur certains
          aspects.
          <br />
          <br />
          C'est précisément ce sentiment d'inachevé qui m'a poussé à poursuivre avec un RNCP 7 en
          ingénierie du logiciel. Je souhaitais aller plus loin, consolider ce qui restait fragile
          et aborder la conception avec davantage de rigueur et de confiance. Mon objectif est de
          continuer à pratiquer cette compétence, notamment à travers des projets personnels,
          jusqu'à ce qu'elle devienne un réflexe naturel dans mon approche du développement.
        </p>
      </section>
    </article>
  )
}
