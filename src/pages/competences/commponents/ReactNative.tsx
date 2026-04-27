import { Link } from 'react-router-dom'
import '../style/competenceItem.css'

export default function ReactNative() {
  return (
    <>
      <article className="competence-detail" aria-labelledby="organisation-title">
        <h1 id="organisation-title">Développement mobile en React-native</h1>
        <section className="competence-sub-item">
          <h2>Ma définition</h2>
          <p>
            <strong>React Native</strong> est un <strong>framework open-source</strong> créé par
            Meta en 2015 qui permet de concevoir des <strong>applications mobiles</strong> pour
            <strong> iOS et Android</strong> à partir d'une{' '}
            <strong>seule et même base de code</strong>, écrite en{' '}
            <strong>JavaScript ou TypeScript</strong>. Il génère de véritables{' '}
            <strong>composants natifs</strong>, ce qui signifie que l'application finale se comporte
            et se ressent exactement comme une application développée spécifiquement pour chaque
            plateforme.
            <br />
            <br />
            Ce que React Native rend possible concrètement, c'est de construire une
            <strong> application mobile complète</strong>. Avec ses écrans, sa navigation, ses
            appels à des serveurs distants, l'accès à la caméra ou au GPS (sans avoir à développer
            deux fois la même chose pour iOS et Android). En moyenne, entre{' '}
            <strong>70 et 90 % du code est partagé</strong> entre les deux plateformes. C'est ce qui
            en fait un <strong>outil particulièrement prisé dans l'industrie</strong> : des
            entreprises comme Shopify, Microsoft ou Coinbase l'utilisent en production.
          </p>
        </section>
        <section className="competence-sub-item">
          <h2>Mes éléments de preuve</h2>
          <p>
            Ma principale expérience en développement mobile s'est déroulée durant mon{' '}
            <strong>alternance chez Hbond</strong>, où j'ai intégré une application React Native
            déjà existante, initialisée sans Expo. Une de mes premières
            <strong> missions structurantes</strong>, proposée avec mon collègue et validée par la
            direction technique, a été de <strong>migrer l'application vers Expo</strong>.
            L'objectif derrière ce choix était concret : permettre de{' '}
            <strong>pousser des mises à jour directement sur les téléphones</strong> des
            utilisateurs, sans qu'ils aient besoin de télécharger une nouvelle version depuis les
            stores. L'application se met à jour silencieusement à l'ouverture. L'utilisateur n'en
            sait rien, mais il est toujours sur la dernière version.
            <br />
            <br />
            Sur le plan du développement fonctionnel, j'ai notamment pris en charge l'intégralité de
            la section profil de l'application, composée de cinq blocs couvrant des fonctionnalités
            variées : gestion et actualisation des certifications, affichage des organisations avec
            possibilité de demande d'ajout, choix de la langue, consultation et modification des
            informations personnelles, gestion du mot de passe, déconnexion, suppression de compte,
            accès au support, et affichage de la version. Chaque bloc a été développé en respectant
            la maquette définie, avec des <strong>animations de chargement</strong> et les
            <strong> appels API</strong> correspondants. C'est le développement dont je suis le plus
            fier sur cette mission, car il m'a demandé de gérer à la fois la{' '}
            <strong>complexité fonctionnelle</strong>, la
            <strong> cohérence visuelle</strong> et la <strong>robustesse des interactions</strong>.
            <br />
            <br />
            J'ai également eu la responsabilité durant mon alternance, pour la première fois, de
            gérer des <strong>mises en production complètes</strong> sur les deux stores. De la
            génération du <strong>build</strong> jusqu'à la publication sur l'
            <strong>App Store</strong> via App Store Connect et sur <strong>Google Play</strong> via
            la Google Play Console. Enfin, nous configurons actuellement avec mon collègue un{' '}
            <strong>hébergement EAS sur un serveur privé virtuel</strong>, une alternative moins
            coûteuse aux offres cloud d'Expo, qui nous permettra de{' '}
            <strong>déployer des mises à jour instantanément</strong> sur l'ensemble des appareils
            utilisateurs tout en gardant un <strong>contrôle total</strong> sur l'infrastructure.
            <br />
            <br />
            Dans le cadre de mon titre Concepteur Développeur d'Applications, j'ai développé une
            application mobile React Native de A à Z, Nous étions une équipe de 4 étudiant. Bien que
            nous nous sommes partagé les taches j’ai été la personne laader sur la partie mobile et
            j’ai développé la plus part de l’application pendant que les autres étudiant se se
            consacraient à la partie web et design. L'application était un clone fonctionnel de
            BlaBlaCar, permettant à des utilisateurs de proposer ou de réserver des trajets de
            covoiturage.
            <br />
            <br />
            Contrairement à mon expérience chez Hbond où j'avais rejoint un projet existant, ce
            projet m'a donné une <strong>expérience complète de création from scratch</strong> avec
            Expo. Approche aujourd'hui recommandée par la documentation officielle de React Native.
            J'ai ainsi eu la charge de toute la <strong>mise en place initiale</strong> :
            configuration du projet Expo, mise en place du router, création des écrans
            d'authentification, configuration du client HTTP, et structuration de l'ensemble de l'
            <strong>architecture de l'application</strong>. Assumer le rôle de{' '}
            <strong>lead technique</strong> sur la partie mobile m'a également forcé à prendre des{' '}
            <strong>décisions d'architecture</strong>, ce qui a consolidé ma capacité à concevoir
            une application mobile <strong>cohérente dès ses fondations</strong>.
          </p>
        </section>
        <section className="competence-sub-item">
          <h2>Mon autocritique</h2>
          <p>
            Je pense avoir un <strong>niveau correct en développement mobile</strong>, en tout cas
            sur React Native. C'est le seul framework mobile que je maîtrise (je n'ai pas touché à
            Flutter) mais c'est aussi celui sur lequel j'ai vraiment construit une{' '}
            <strong>pratique solide</strong> au fil de mes expériences.
            <br />
            <br />
            Si je dois être honnête sur mes points faibles, je dirais que le débogage reste quelque
            chose qui me coûte encore de l'énergie. Sur le web, on a des outils très accessibles, la
            console, le network, les devtools. Sur mobile, c'est plus opaque. Les outils existent et
            je les utilise, mais quand une erreur est subtile, la trouver{' '}
            <strong>prend plus de temps</strong>. L'autre point, plus précis, c'est le
            <strong> mock dans les tests</strong>, qui fonctionne un peu différemment en React
            Native et qui peut me poser des problèmes ponctuellement.
            <br />
            <br />
            Mon analyse est que ces difficultés sont surtout liées à mon{' '}
            <strong>niveau junior</strong> plutôt qu'à une faiblesse particulière sur React Native.
            Je le vois clairement avec mon collègue senior : une erreur que je n'ai jamais
            rencontrée va me bloquer un moment, là où lui va la reconnaître immédiatement. C'est
            simplement une question d'expérience accumulée, et je sais que ça se construit avec le
            temps.
          </p>
        </section>
        <section className="competence-sub-item">
          <h2>Mon évolution dans cette compétence</h2>
          <p>
            Ces deux années d'alternance chez Hbond m'ont vraiment permis de me sentir à l'aise sur
            le développement mobile en React Native. C'est quelque chose dont je suis satisfait,
            parce que c'est une compétence qui est <strong>de plus en plus demandée</strong>, et
            pouvoir se dire qu'on est capable de développer une application mobile en plus d'une
            application web, c'est une <strong>vraie corde supplémentaire</strong> à son arc.
            <br />
            <br />
            Pour la suite, l'objectif est simple : <strong>continuer à pratiquer</strong>. La
            plupart de mes difficultés actuelles viennent du fait que je n'ai pas encore rencontré
            suffisamment de problèmes différents. Plus je vais pratiquer, plus je vais{' '}
            <strong>accumuler cette expérience</strong>, et naturellement je vais devenir{' '}
            <strong>plus autonome</strong>, jusqu'à ne plus avoir besoin d'un senior pour me
            débloquer sur des erreurs que je n'ai jamais vues. C'est le{' '}
            <strong>chemin normal pour progresser</strong>, et je suis conscient que je suis encore
            au début de ce chemin.
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
            <Link
              className="project-skill-link project-skill-link-tech"
              to="/projet/application-hbond"
            >
              Application hbond
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
