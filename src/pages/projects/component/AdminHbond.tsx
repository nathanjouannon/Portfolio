export default function AdminHbond() {
  return (
    <article className="competence-detail" aria-labelledby="organisation-title">
      <h1 id="organisation-title">Projet admin hbond®</h1>
      <section className="competence-sub-item">
        <h2>Introduction</h2>
        <p>
          Cette réalisation s'inscrit dans le cadre de mon master "Expert en ingénierie du logiciel"
          au sein de l'ISCOD, effectué en alternance sur deux ans au sein de l'entreprise hbond.
          <br />
          <br />
          hbond est une start-up basée à Annecy, fondée il y a quatre ans. Elle occupe une position
          unique sur son marché : elle organise la vente de matériel sportif à tarif préférentiel
          pour les professionnels du sport, permettant à ces derniers de s'équiper à moindre coût,
          tandis que les marques partenaires bénéficient en retour de leur influence comme levier
          marketing. Pour garantir l'exclusivité de la plateforme, la création d'un compte est
          conditionnée à la possession d'un diplôme d'éducateur sportif reconnu par l'État. La
          vérification peut s'effectuer de deux manières : soit automatiquement via une connexion à
          l'API publique du ministère des Sports grâce à la carte professionnelle d'éducateur
          sportif, soit manuellement par l'upload d'un justificatif vérifié par un administrateur
          hbond.
          <br />
          <br />
          Mon poste est celui de développeur full stack, avec une dominante frontend. J'ai été en
          charge de la modification des pages existantes, de la création des pages manquantes, de
          l'écriture des tests et de la mise en production de l'application.
        </p>
      </section>

      <section className="competence-sub-item">
        <h2>Les objectifs</h2>
        <p>
          Le projet fait également face à des objectifs techniques. Nous pouvons notament citer
          l’objectf de mettre à disposition une application web pour les admin de l’entreprise.
          L’objectif est que l’application respect les normes en terme de sécurité. Elle doit aussi
          être facile d’utilisation et apporté une solutions aux demandes et fonctionnalités
          demandé. Sa mise en production doit être faite de manière fluide sans ajout de bugs.
          <br />
          <br />
          Ce projet s'est étalé sur l'ensemble de mes deux ans d'alternance chez hbond, en tant que
          projet de fond mené en parallèle des autres missions. Il n'a pas constitué la charge
          principale de mon temps, mais a progressé de manière continue tout au long de la période,
          et est toujours en cours aujourd'hui.
          <br />
          <br />
          Le projet poursuit des objectifs à la fois humains et techniques. Sur le plan humain, il
          m'a conduit à interagir régulièrement avec différents acteurs : le CEO et le responsable
          commercial et marketing pour recueillir leurs besoins et obtenir des retours sur le
          travail réalisé, le développeur backend pour échanger autour de la documentation de l'API
          et lui signaler les éventuels bugs rencontrés lors de l'implémentation, et enfin un second
          développeur pour les sessions de review de code. Un objectif transversal était également
          de coordonner efficacement ces différentes parties prenantes pour maintenir une avancée
          fluide sur le projet malgré une équipe distribuée.
          <br />
          Sur le plan technique, l'objectif est de mettre à disposition des équipes internes une
          application web d'administration complète, sécurisée et facile à prendre en main. Elle
          doit répondre aux fonctionnalités demandées et être déployée en production sans introduire
          de régressions.
        </p>
      </section>

      <section className="competence-sub-item">
        <h2>Contexte</h2>
        <h3>Contexte humain</h3>
        <p>
          L’équipe qui réalise le projet est composée de 4 personnes. Il y a un developpeur backend,
          il assure seul la maintenance et la création de nouvelles fonctionnalités. Il y a
          également le CEO, son but est de nous transmettre ses besoins afin qu’ils soient mit en
          place. De plus, le responsable commercial et marketing fait partie du projet car il est
          l’utilisateur principale de cette outils d’admin. Et enfin un deuxième développeur est
          dans le projet pour compléter mon travail et pour review une partie du code produit.
          <br />
          <br />
          Le contexte humain est une équipe avec des lieux de travails mixtes. Les personnes qui
          exprimes leurs besoins sont dans les bureau de l’entreprise à temps pleins. Le developpeur
          backend lui est complètement en télétravail. Je suis sur un emploi du temps qui mixte le
          télétravail ( 1 à 2 jour par semaine ) et la présence au bureau les autres jours. Et le
          deuxième développeur travail pour l’entreprise 2 jours par semaines. Nous avons donc un
          contexte humains ou les équipe sont assez éloigné, il y a un enjeux de garder de la
          communication.
        </p>
        <h3>Contexte technique</h3>
        <p>
          Sur le plan technique, l'application web est composée de deux services distincts : un
          backend et une interface utilisateur (frontend).
          <br />
          <br />
          Juste avant le début de ce projet, le frontend a fait l'objet d'une refonte complète, sans
          ajout de nouvelles fonctionnalités. L'objectif était de moderniser une base de code
          Angular vieillissante et accumulant de nombreuses mauvaises pratiques, en migrant vers
          React avec TypeScript. Ce choix technologique permet de bénéficier d'une meilleure
          maintenabilité, d'un typage statique réduisant les erreurs à la compilation et d'un
          écosystème plus moderne. Cette migration a également été l'occasion de repenser
          entièrement le design UI/UX de l'application.
          <br />
          <br />
          L'interface utilisateur s'articule autour d'un dashboard principal et d'un menu de
          navigation vertical, donnant tous deux accès aux différentes pages de l'application. Ces
          pages couvrent les fonctionnalités suivantes : la gestion des discounts, la validation des
          certifications, la visualisation des statistiques et la gestion des codes d'invitation.
          <br />
          <br />
          Du côté de l'organisation du code, le repository frontend suit une architecture orientée
          "feature" : chaque fonctionnalité dispose de son propre dossier, contenant un fichier
          <code>.tsx</code> racine qui en constitue le point d'entrée. Ce dossier est ensuite
          subdivisé en trois sous-dossiers : components, qui regroupe les composants React
          réutilisables propres à la fonctionnalité, styles, qui contient les fichiers de mise en
          forme associés, et hooks, qui centralise les hooks personnalisés. Les hooks sont des
          fonctions spécifiques à React permettant d'encapsuler de la logique réutilisable,
          notamment les appels à l'API backend. Ils permettent ainsi de découpler la logique métier
          des composants d'affichage, rendant le code plus lisible et plus facile à tester.
          <br />
          <br />
          Le backend lui est en C# et repose sur le framework .NET. Il utilise une organisation des
          fichiers différente qui repose sur les principes du clean code. Le clean code est une
          approche de développement logiciel qui vise à produire un code lisible, maintenable et
          compréhensible par n'importe quel développeur. Il repose sur des principes tels que la
          séparation des responsabilités, le nommage explicite des variables et des fonctions, la
          réduction de la complexité cyclomatique, et l'organisation du code en couches distinctes
          (comme les couches Domain, Application, Infrastructure et Presentation dans une
          architecture Clean Architecture). L'objectif est de rendre le code auto-documenté, facile
          à tester et évolutif sur le long terme.
        </p>
      </section>

      <section className="competence-sub-item">
        <h2>Les enjeux</h2>
        <p>
          L'enjeu principal de ce projet est d'offrir une autonomie complète aux équipes
          non-techniques de l'entreprise. Avant la mise en place de cet outil, toute manipulation de
          données nécessitait une intervention directe en base de données, une pratique risquée,
          chronophage et inaccessible aux profils non-développeurs. L'admin doit donc servir
          d'interface sécurisée entre ces équipes et l'API backend, leur permettant de réaliser
          elles-mêmes les opérations du quotidien : création et gestion des discounts, validation
          des certifications, gestion des codes d'invitation ou encore suivi des statistiques.
          Au-delà de l'autonomie opérationnelle, l'outil représente également un enjeu stratégique
          pour le CEO, qui a besoin de suivre en temps réel les indicateurs clés de la plateforme
          afin de piloter les décisions commerciales et marketing. L'outil admin devient ainsi un
          point central de l'organisation interne de l'entreprise, utilisé quotidiennement par
          plusieurs membres de l'équipe aux profils variés.
        </p>
      </section>

      <section className="competence-sub-item">
        <h2>Les risques</h2>
        <p>
          Le projet présente plusieurs risques qu'il est important d'identifier et de maîtriser tout
          au long du développement. Le premier risque est celui de l'introduction de régressions
          lors des mises en production. Chaque nouvelle fonctionnalité ou modification du code peut
          potentiellement introduire des bugs et engendrer une perte de service pour les
          utilisateurs de l'admin, voire impacter indirectement la plateforme principale.
          <br />
          Le deuxième risque est lié à la sécurité de l'application. L'outil admin donne accès à des
          données sensibles de l'entreprise et de ses utilisateurs. Une faille de sécurité pourrait
          permettre à des personnes non autorisées d'accéder à ces informations, de les modifier ou
          de les supprimer, mettant en danger l'intégrité des données et la confiance des
          partenaires et des professionnels inscrits sur la plateforme. Enfin, le troisième risque
          concerne la cybersécurité de manière plus large. En tant qu'application exposée sur le
          web, l'admin est une surface d'attaque potentielle. Il est donc essentiel de s'assurer que
          les mécanismes d'authentification, de gestion des rôles et de communication avec le
          backend respectent les bonnes pratiques en vigueur pour limiter les vecteurs d'attaque.
        </p>
      </section>

      <section className="competence-sub-item">
        <h2>Travail réalisé</h2>
        <h3>Changement du login pour un login plus sécurisé</h3>
        <p>
          La première étape du projet a consisté à refondre le système d'authentification de
          l'application admin. En effet, le système en place présentait une faille organisationnelle
          importante : l'ensemble des utilisateurs de l'admin se connectaient via un unique compte
          partagé, sans identité propre. Il était donc impossible de savoir quelle personne avait
          réalisé quelle action, ce qui posait un problème évident de traçabilité et de
          responsabilité.
          <br />
          Pour remédier à cela, j'ai modifié l'endpoint de connexion afin de migrer vers un système
          de sessions côté serveur, permettant à chaque utilisateur de disposer de son propre
          compte. Cette modification a également impliqué une refonte de la gestion du cache et du
          localStorage côté frontend, pour s'assurer que les données de session soient correctement
          initialisées et nettoyées à la connexion et à la déconnexion.
        </p>
        <h3>Mise en place d’un client http</h3>
        <p>
          Lors des premiers développements, il est apparu que la gestion des appels API manquait de
          structure : le code était dupliqué à chaque nouvel appel, les réponses n'étaient pas
          typées et les erreurs n'étaient pas traitées de manière centralisée. Pour y remédier, j'ai
          conçu et développé une librairie cliente HTTP propre à hbond, construite sur la base du
          <code>fetch</code> natif et publiée en tant que package privé sur GitHub Packages. Ce
          choix permet à n'importe quel projet frontend de l'entreprise de l'installer et de
          l'utiliser comme une dépendance standard, tout en gardant le code source privé.
          <br />
          <br />
          Cette librairie introduit plusieurs améliorations structurelles. D'abord, elle uniformise
          tous les appels API en un point d'entrée unique, évitant la duplication de code et
          garantissant une cohérence dans la façon dont les requêtes sont construites et envoyées.
          Ensuite, elle apporte un typage complet des réponses grâce à TypeScript, réduisant les
          erreurs à la compilation et améliorant l'expérience de développement.
          <br />
          <br />
          Le point central de cette librairie est l'<code>ErrorFactory</code>, un mécanisme qui
          intercepte tous les échecs d'appels API pour les transformer en objets
          <code>ApiError</code> normalisés. Elle applique des handlers spécifiques selon le
          contexte, puis des traductions en fonction du code d'erreur ou du statut HTTP retourné,
          afin de fournir à l'utilisateur un message clair et pertinent. Toutes les erreurs de
          l'application transitent par ce système, ce qui garantit une expérience utilisateur
          cohérente et facilite grandement le débogage. En parallèle, j'ai travaillé avec le
          développeur backend pour uniformiser le format des erreurs retournées par l'API, condition
          nécessaire pour que l'<code>ErrorFactory</code>
          puisse les traiter de manière fiable.
        </p>
        <h3>Récolte des besoins</h3>
        <p>
          La récolte des besoins est une activité qui s'est étalée sur l'ensemble de la durée du
          projet, en cohérence avec son mode de développement itératif. Les fonctionnalités n'ont
          pas été définies en une seule fois au départ, mais ont émergé et évolué progressivement au
          fil des échanges avec les parties prenantes.
          <br />
          <br />
          Ces échanges prenaient plusieurs formes selon les situations : des réunions dédiées pour
          cadrer les grandes évolutions, des discussions informelles au bureau pour des ajustements
          rapides, ou des échanges écrits via les outils de communication de l'équipe. Une fois les
          besoins identifiés, ils étaient formalisés sous forme d'issues dans Linear, notre outil de
          gestion de projet, ce qui permettait de les prioriser, de les suivre et d'en garder une
          trace écrite.
          <br />
          <br />
          Un aspect important de cette étape était la capacité à interpréter des besoins souvent
          exprimés de manière succincte ou peu précise. Il m'est régulièrement arrivé de devoir
          reformuler une demande pour m'assurer d'en avoir bien compris l'intention, ou de
          challenger certains besoins lorsqu'ils semblaient techniquement complexes à implémenter
          tels quels. Ces allers-retours avec le CEO et le responsable commercial ont été essentiels
          pour aboutir à des spécifications réalistes et cohérentes avec les contraintes techniques
          du projet. J'impliquais également le développeur backend dans ces échanges, notamment pour
          valider la faisabilité côté API avant de commencer le développement.
        </p>
        <h3>Développement de la solution</h3>
        <p>
          Le développement des pages a été réalisé de manière itérative, par ordre de priorité
          métier, en cohérence avec la récolte des besoins décrite précédemment. Chaque nouvelle
          fonctionnalité débutait par une modification du router React pour y intégrer les nouvelles
          routes, avant de passer à l'implémentation de la page elle-même.
          <br />
          <br />
          N'ayant pas de maquettes à disposition. Le CEO ayant fait le choix de concentrer les
          efforts de design sur l'application utilisateur. J'ai conçu moi-même l'interface de chaque
          page, en plaçant l'expérience utilisateur au centre de mes décisions. L'objectif était de
          produire une interface claire, cohérente et agréable à utiliser pour des personnes
          non-techniques amenées à s'en servir quotidiennement.
          <br />
          <br />
          Chaque page suit une structure commune : un fichier <code>.tsx</code> racine comme point
          d'entrée, des composants React dans le dossier components, la mise en forme dans styles,
          et la logique métier encapsulée dans des hooks personnalisés dans le dossier hooks. Ces
          hooks maison centralisent les appels à l'API backend via le client HTTP développé en
          amont, et gèrent l'état local des données affichées, ce qui permet de garder les
          composants d'affichage légers et focalisés sur leur rôle.
          <br />
          <br />
          Parmi les pages développées, on peut citer trois exemples représentatifs de la diversité
          des fonctionnalités implémentées :
          <br />
          <br />
          La page de validation des certifications affiche les demandes de validation de diplôme qui
          n'ont pas pu être traitées automatiquement via la connexion avec l'API du ministère des
          Sports. Les demandes sont organisées en quatre statuts (en attente, en cours, terminé et
          archivé) et chaque demande dispose d'une page dédiée regroupant toutes les informations
          utiles à l'administrateur : informations du compte, parrain éventuel, tags d'activité
          demandés, pièces justificatives, autres demandes en cours et diplômes déjà validés.
          <br />
          <br />
          La page de gestion des discounts permet de créer et gérer les remises accordées aux
          professionnels en fonction de leurs tags (pays, organisation, activité). Les discounts
          peuvent être temporaires ou permanentes, et chacune dispose d'une page de détail affichant
          l'ensemble de ses caractéristiques : marque concernée, type, état, pourcentage de
          réduction, tags éligibles et statistiques d'utilisation des coupons associés. Un second
          onglet permet de suivre la disponibilité des coupons par type de source (connexion API
          e-commerce, import CSV...) et de les régénérer si nécessaire.
          <br />
          <br />
          La page de gestion des communications permet de créer et programmer des campagnes de
          communication multicanal. Une fois une campagne créée, il est possible d'y associer
          jusqu'à trois contenus de types différents : email, notification in-app ou notification
          push. L'envoi peut ensuite être programmé et ciblé précisément en fonction des tags des
          utilisateurs destinataires (pays, organisation, activité) ou de leurs identifiants.
        </p>
        <h3>Ajout des tests</h3>
        <p>
          L'ajout de tests a été réalisé de manière ciblée, sans objectif de couverture de code
          défini, en concentrant les efforts sur les parties les plus sensibles et critiques de
          l'application.
          <br />
          <br />
          Les tests ont été écrits avec Jest et couvrent deux niveaux. Les tests unitaires portent
          sur des fonctions isolées à fort enjeu logique, notamment l'
          <code>ErrorFactory</code> et son système de transformation des erreurs API, ainsi que le
          système de construction de requêtes (<code>Query builder</code>) maison, qui détermine les
          règles d'éligibilité des utilisateurs à une discount. Ces fonctions étant au cœur du
          comportement de l'application, une erreur à ce niveau aurait des conséquences directes sur
          l'expérience utilisateur ou l'intégrité des données.
          <br />
          <br />
          Les tests d'intégration quant à eux portent sur les hooks personnalisés, testés en
          combinaison avec des appels API mockés. L'objectif est de vérifier que la logique métier
          encapsulée dans les hooks se comporte correctement face aux différents scénarios de
          réponse de l'API : succès, erreur métier, erreur réseau. Ce niveau de test permet de
          valider le bon fonctionnement des flux de données sans dépendre d'un backend réel, tout en
          restant proche des conditions d'utilisation réelles.
        </p>
        <h3>Mise en production</h3>
        <p>
          La mise en production de l'application a évolué au cours du projet, aussi bien dans les
          outils utilisés que dans la maturité du processus de déploiement.
          <br />
          <br />
          Le déploiement est entièrement automatisé via une pipeline CI/CD : chaque merge sur la
          branche principale déclenche automatiquement un build et un déploiement en production,
          sans intervention manuelle. Cette automatisation garantit une mise en production rapide et
          reproductible, limitant les risques d'erreurs humaines liées à un déploiement manuel.
          <br />
          <br />
          L'application a dans un premier temps été déployée sur Vercel. Cependant, le modèle
          tarifaire de cet outil s'est rapidement révélé contraignant : chaque nouvel utilisateur
          devait être explicitement ajouté à la liste des accès autorisés, sous peine de voir le
          déploiement bloqué, pour un coût de 20€ par utilisateur. Face à cette limitation, nous
          avons migré vers Cloudflare Pages, dont le coût global est inférieur à 20€ toutes options
          comprises, ce qui représente une économie significative pour une start-up.
          <br />
          <br />
          En l'absence d'environnement de staging ( qui constitue d'ailleurs l'une des prochaines
          étapes prévues du projet ) Cloudflare offre une fonctionnalité utile : chaque nouvelle
          branche poussée génère automatiquement un déploiement sur une URL dédiée et temporaire.
          Bien que cela ne remplace pas un véritable environnement de recette, cela permet de tester
          les développements dans des conditions proches de la production avant de merger.
        </p>
      </section>

      <section className="competence-sub-item">
        <h2>Conclusion du projet</h2>
        <h3>Les résultats obtenus</h3>
        <p>
          À l'issue de ces développements, l'application admin constitue aujourd'hui un outil web
          complet, sécurisé et pleinement fonctionnel, qui répond aux attentes exprimées par les
          équipes tout au long du projet.
          <br />
          Les retours des utilisateurs sont très positifs. L'outil leur permet désormais d'opérer en
          totale autonomie sur l'ensemble des tâches du quotidien, sans avoir à solliciter un
          développeur pour intervenir directement en base de données comme c'était le cas
          auparavant. Ce changement représente un gain de temps opérationnel significatif et a
          permis de réduire considérablement les risques d'erreurs de manipulation liés aux
          interventions manuelles. Pour l'entreprise, les bénéfices sont multiples. Le CEO dispose
          d'une visibilité en temps réel sur les indicateurs clés de la plateforme, ce qui facilite
          le pilotage des décisions stratégiques. Le responsable commercial et marketing peut gérer
          de manière autonome les discounts, les campagnes de communication et les certifications,
          sans dépendance technique. Enfin, la traçabilité introduite par les comptes individuels
          permet désormais de savoir précisément quelle action a été réalisée par quel utilisateur,
          un point essentiel pour une application manipulant des données sensibles.
        </p>
        <h3>Les lendemains du projet</h3>
        <p>
          L'application admin est aujourd'hui un outil central dans le fonctionnement quotidien de
          l'entreprise, utilisé plusieurs fois par jour par plusieurs membres de l'équipe. Son
          adoption rapide et son utilisation intensive témoignent de sa valeur opérationnelle.
          <br />
          Le projet est cependant toujours en cours d'évolution. Deux fonctionnalités restent à
          développer dans les semaines à venir : la gestion des fichiers CSV, qui permettra
          d'importer en base de données des coupons de réduction ainsi que des résultats de vente,
          et l’ajout de certains onglets manquants dans la page des statistiques, afin d'offrir une
          vision encore plus complète des performances de la plateforme. L'environnement de staging,
          évoqué précédemment, fait également partie des prochaines étapes techniques prévues.
          <br />À plus long terme, l'outil admin accompagnera l'expansion internationale de hbond,
          notamment avec l'ouverture prévue sur le marché européen. Cette évolution impliquera
          vraisemblablement de nouvelles fonctionnalités et adaptations, confirmant que
          l'application admin n'est pas un projet figé mais un outil vivant, qui grandira avec
          l'entreprise.
        </p>
      </section>

      <section className="competence-sub-item">
        <h2>Ce que je retiens</h2>
        <p>
          Ce projet représente pour moi une expérience complète de développement frontend, couvrant
          l'ensemble du cycle de vie d'une application : de la récolte des besoins jusqu'à la mise
          en production, en passant par la conception, le développement et les tests. C'est cette
          globalité qui en fait une réalisation particulièrement formatrice.
          <br />
          <br />
          Sur le plan technique, le projet m'a permis de monter en compétences sur des sujets variés
          et concrets : la sécurisation d'une application web, la conception d'une librairie HTTP
          réutilisable, l'écriture de tests ou encore la gestion d'une pipeline CI/CD. Travailler
          sans maquettes m'a également poussé à développer un sens du design et de l'UX que je
          n'aurais pas autant sollicité dans un contexte plus encadré.
          <br />
          <br />
          Sur le plan humain, ce projet m'a appris à naviguer dans une équipe distribuée, où la
          communication ne va pas toujours de soi. J'ai aussi développé une capacité à interpréter
          des besoins exprimés de manière floue ou incomplète, à poser les bonnes questions et à
          transformer une phrase courte en spécification technique exploitable. Ce sont des
          compétences que je considère aujourd'hui aussi importantes que les compétences purement
          techniques.
          <br />
          <br />
          Si je devais recommencer, je mettrais en place un environnement de staging dès le début du
          projet. Tester sur une URL de branche Cloudflare est utile mais insuffisant, et j'ai pris
          conscience au fil du temps que l'absence de recette représente un risque réel. J'aurais
          également investi davantage dans les tests dès les premières semaines, plutôt que de les
          ajouter progressivement : une base de tests solide dès le départ aurait rendu les mises en
          production encore plus sereines.
        </p>
      </section>
    </article>
  )
}
