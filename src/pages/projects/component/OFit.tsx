import { Link } from 'react-router-dom'

export default function OFit() {
  return (
    <>
      <article className="competence-detail" aria-labelledby="organisation-title">
        <h1 id="organisation-title">Projet O'Fit</h1>
        <section className="competence-sub-item">
          <h2>Introduction</h2>
          <p>
            Cette réalisation s'inscrit dans le cadre de mon master "Expert en ingénierie du
            logiciel" au sein de l'ISCOD, préparant un <strong>RNCP de niveau 7</strong>. Il s'agit
            d'un projet d'étude mené en <strong>autonomie</strong> et en solitaire, sans équipe
            réelle. Dans ce scénario fictif, je suis <strong>chef de projet</strong> de la start-up
            O'Fit, spécialisée dans le développement d'applications de santé connectée. À ce titre,
            je suis responsable de la coordination de toutes les phases du projet, de la
            communication avec les <strong>parties prenantes</strong> et de la gestion de l'équipe.
            Mon rôle est exclusivement orienté <strong>pilotage</strong> : je ne touche pas
            directement au code.
          </p>
        </section>

        <section className="competence-sub-item">
          <h2>Les objectifs</h2>
          <p>
            Le projet O'Fit poursuit des objectifs à la fois <strong>humains et techniques</strong>.
            Sur le plan humain, l'enjeu est de concevoir une application capable de répondre aux
            besoins d'un public varié, allant des jeunes adultes aux seniors en passant par les
            professionnels actifs. L'interface doit être suffisamment <strong>intuitive</strong>{' '}
            pour être prise en main sans friction, tout en restant engageante sur la durée pour
            favoriser l'<strong>adhésion des utilisateurs</strong>.
            <br />
            <br />
            Sur le plan technique, le projet vise à mettre à disposition une application mobile
            complète, sécurisée et <strong>conforme au RGPD</strong>, garantissant la protection des{' '}
            <strong>données personnelles de santé</strong>. Elle doit également proposer des
            fonctionnalités de <strong>personnalisation avancées</strong>, s'appuyant sur l'analyse
            des données utilisateurs pour délivrer des conseils de santé adaptés à chaque profil.
          </p>
        </section>

        <section className="competence-sub-item">
          <h2>Contexte</h2>
          <p>
            O'Fit est une <strong>start-up en croissance</strong>, portée par une culture agile mais
            encore peu formalisée. Le budget alloué au projet est conséquent, avec une
            <strong> carte blanche</strong> accordée par le CEO, mais des attentes élevées en termes
            de résultats et une pression forte pour livrer rapidement.
            <br />
            <br />
            L'équipe est composée de six personnes : un chef de projet, trois développeurs juniors
            dont un spécialisé mobile Android/iOS et deux full-stack, un designer UX/UI en
            alternance, et un responsable marketing junior. L'équipe est donc majoritairement
            junior, <strong>sans développeur senior</strong> pour assurer un encadrement technique.
            Le designer manque d'autonomie, notamment sur les tests utilisateurs, et certains
            membres s'impliquent peu dans les discussions collectives.
            <br />
            <br />
            Le mode de travail est principalement en <strong>télétravail</strong>, avec des réunions
            hebdomadaires en ligne. La communication repose sur les emails et les chats, sans outils
            collaboratifs structurés, ce qui génère des malentendus fréquents sur les
            spécifications, des retards et des révisions constantes des exigences. Le périmètre du
            projet reste
            <strong> instable</strong>, avec un risque réel de <strong>dette technique</strong> si
            la cadence de livraison prime sur la qualité.
            <br />
            <br />
            Sur le plan technique, <strong>tout est à construire</strong>. Aucune base de code
            n'existe encore. Une liste de fonctionnalités a néanmoins déjà été établie à l'issue
            d'un brainstorming initial, ce qui constitue le{' '}
            <strong>point de départ du projet</strong>.
          </p>
        </section>

        <section className="competence-sub-item">
          <h2>Les enjeux</h2>
          <p>
            L'enjeu principal du projet est de livrer une application mobile qui soit réellement
            utilisée au quotidien. Pour cela, elle doit être{' '}
            <strong>simple à prendre en main</strong>, quel que soit le profil de l'utilisateur,
            qu'il soit jeune adulte, professionnel actif ou senior. Une interface mal conçue ou trop
            complexe suffirait à décourager l'adoption, peu importe la qualité des fonctionnalités
            proposées.
            <br />
            <br />
            Au-delà de l'expérience utilisateur, le projet soulève un enjeu de sécurité non
            négligeable. L'application manipule des données de santé sensibles, ce qui impose une{' '}
            <strong>conformité stricte avec le RGPD</strong> dès les premières lignes de code. Une
            faille ou une non-conformité exposerait l'entreprise à des{' '}
            <strong>sanctions lourdes</strong> et briserait la confiance des utilisateurs avant même
            que le produit ne soit établi.
            <br />
            <br />
            Il y a également un enjeu organisationnel interne. L'équipe est jeune, distribuée, et
            les processus sont encore peu formalisés. Sans cadre de travail clair, le risque est de
            subir des retards à répétition, des révisions constantes des spécifications et une dette
            technique difficile à résorber. Structurer les méthodes de travail est donc aussi{' '}
            <strong>important que le développement lui-même</strong>.
            <br />
            <br />
            Enfin, l'intégration avec les <strong>wearables et services tiers</strong> représente un
            enjeu technique central. La valeur de l'application repose en grande partie sur sa
            capacité à centraliser les données de santé issues de plateformes externes comme Apple
            Health ou Google Fit. Cette synchronisation doit être fiable et transparente pour
            l'utilisateur.
          </p>
        </section>

        <section className="competence-sub-item">
          <h2>Les risques</h2>
          <p>
            Le premier risque est celui des <strong>retards de livraison</strong>. Avec une équipe
            majoritairement junior et un périmètre encore instable, les délais peuvent rapidement
            déraper. L'intégration des wearables est un exemple concret : plus complexe que prévu,
            elle pourrait à elle seule décaler le lancement de plusieurs mois, avec des conséquences
            directes sur le budget et les actions marketing planifiées.
            <br />
            <br />
            Le deuxième risque concerne la <strong>sécurité des données</strong>. L'application
            traite des informations de santé particulièrement sensibles. Sans expertise solide en{' '}
            <strong>chiffrement</strong> et en <strong>gestion des consentements</strong>, une
            faille est vite arrivée. Les conséquences seraient immédiates : plainte d'un
            utilisateur, <strong>enquête de la CNIL</strong>, et une image durablement abîmée auprès
            du grand public.
            <br />
            <br />
            Le troisième risque est celui d'une <strong>mauvaise adoption</strong> par les
            utilisateurs. Une interface mal pensée ou insuffisamment testée peut suffire à faire
            échouer le produit commercialement. Ce risque est particulièrement réel pour les
            personnes plus âgées, moins à l'aise avec les applications mobiles, qui n'hésiteront pas
            à désinstaller l'application au moindre blocage.
          </p>
        </section>

        <section className="competence-sub-item">
          <h2>Travail réalisé</h2>
          <h3>Établir et prioriser les fonctionnalités</h3>
          <p>
            La première étape du travail a été de cadrer précisément ce que l'application devait
            faire. Un <strong>document de spécification détaillé</strong> a été construit, listant
            l'ensemble des fonctionnalités envisagées. Chaque fonctionnalité a ensuite été classée
            par ordre de <strong>priorité</strong> et associée à une <strong>version cible</strong>{' '}
            (V1, V2, etc.), permettant de distinguer ce qui était indispensable au lancement de ce
            qui pouvait être reporté sans compromettre la valeur du produit.
          </p>
          <h3>Suivi du projet</h3>
          <p>
            Pour assurer un <strong>suivi structuré</strong> du projet, un{' '}
            <strong>rapport d'analyse des risques</strong> a été rédigé, accompagné d'une
            <strong> matrice de risques</strong> permettant de visualiser et hiérarchiser les
            menaces identifiées selon leur probabilité et leur impact. En parallèle, une liste de
            <strong> KPI</strong> a été définie afin de disposer d'indicateurs concrets pour mesurer
            l'avancement du projet tout au long de son développement.
          </p>
          <h3>Amélioration de l'environnement de travail</h3>
          <p>
            La première étape a été de réaliser un audit de l'environnement de travail existant afin
            d'identifier les points bloquants. Cet audit a mis en évidence deux manques majeurs.
            <br />
            <br />
            L'absence de développeur senior exposait l'équipe à plusieurs risques : un manque
            d'encadrement technique, une absence d'expertise sur l'architecture mobile, ainsi que
            des lacunes en <strong>sécurité</strong>, <strong>conformité RGPD</strong>,
            <strong> architecture logicielle</strong> et <strong>DevOps</strong>. Par ailleurs,
            l'absence de CTO posait un problème de structure, l'équipe n'étant pas formée aux{' '}
            <strong>méthodes agiles</strong> et manquant donc d'un{' '}
            <strong>cadre de travail clair</strong>. Enfin, l'audit a révélé des difficultés dans la
            communication et la collaboration au sein de l'équipe, avec un nombre de réunions
            insuffisant.
            <br />
            <br />
            Face à ces constats, des solutions ont été proposées pour combler les manques
            identifiés. Sur le plan des compétences, le renforcement de l'équipe avec un développeur
            senior mobile, un expert en sécurité et RGPD, ainsi qu'un ingénieur logiciel chargé
            d'apporter de la structure et de mettre en place des tests a été retenu.
            <br />
            <br />
            Un plan d'action concret a ensuite été défini pour mettre en œuvre ces améliorations. Le
            premier mois serait consacré au recrutement des compétences manquantes et aux
            formations, notamment sur les méthodes agiles. Le deuxième mois verrait la mise en place
            des outils et processus, avec l'adoption de Slack pour la communication et
            l'implémentation de tests et d'une <strong>pipeline CI/CD</strong>. Les mois suivants,
            de trois à six, seraient dédiés à la montée en compétence et à l'optimisation continue.
          </p>
        </section>

        <section className="competence-sub-item">
          <h2>Conclusion du projet</h2>
          <h3>Les résultats obtenus</h3>
          <p>
            Ce projet a permis d'aboutir à un plan clair articulé autour de deux aspects
            complémentaires. Sur le plan technique, les fonctionnalités ont été priorisées et
            ordonnées, offrant une vision claire de ce qui devait être développé en premier. Sur le
            plan humain, les points faibles de l'équipe ont été identifiés et un plan d'amélioration
            concret a été établi pour combler les lacunes de compétences et remédier aux
            dysfonctionnements de communication.
          </p>
          <h3>Les lendemains du projet</h3>
          <p>
            Concernant les lendemains du projet, celui-ci n'a pas eu de suite, s'agissant d'un
            projet fictif. Le plan préparé n'a donc pas pu être mis en application dans un contexte
            réel, ce qui ne permet pas d'évaluer concrètement son impact sur l'équipe et
            l'organisation.
          </p>
        </section>

        <section className="competence-sub-item">
          <h2>Ce que je retiens</h2>
          <p>
            Ce projet représente pour moi une <strong>bonne expérience de pilotage</strong>, aussi
            bien sur le plan des fonctionnalités que sur celui de l'équipe. Il m'a permis de
            comprendre qu'il ne faut pas négliger le <strong>pilotage humain</strong> : gérer les
            compétences, les dynamiques d'équipe et les dysfonctionnements de communication est tout
            aussi important que de piloter les développements techniques.
            <br />
            <br />
            J'aurais cependant aimé pouvoir mettre en application le plan construit sur une vraie
            équipe, afin de mesurer concrètement son <strong>efficacité</strong> et d'en tirer
            davantage d'expérience.
          </p>
        </section>
      </article>

      <section
        className="competence-sub-item project-skills project-skills-panel"
        aria-labelledby="admin-hbond-skills"
      >
        <h2 id="admin-hbond-skills">Compétences associées au projet</h2>

        <div className="project-skills-group" aria-labelledby="admin-hbond-human-skills">
          <h3 id="admin-hbond-human-skills">Compétences humaines</h3>
          <div className="project-skills-links">
            <Link
              className="project-skill-link project-skill-link-human"
              to="/competences/organisation"
            >
              Organisation
            </Link>
            <span className="project-skill-link project-skill-link-human">Rigeur</span>
          </div>
        </div>

        <div className="project-skills-group" aria-labelledby="admin-hbond-tech-skills">
          <h3 id="admin-hbond-tech-skills">Compétences techniques</h3>
          <div className="project-skills-links">
            <Link
              className="project-skill-link project-skill-link-tech"
              to="/competences/pilotage-projet-ingenierie-logicielle"
            >
              Pilotage de projet
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
