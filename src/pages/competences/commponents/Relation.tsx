import { Link } from 'react-router-dom'
import '../style/competenceItem.css'

export default function Relation() {
  return (
    <>
      <article className="competence-detail" aria-labelledby="organisation-title">
        <h1 id="organisation-title">Gestion de la relation client en ingénierie du logicielle</h1>
        <section className="competence-sub-item">
          <h2>Ma définition</h2>
          <p>
            La <strong>gestion de la relation client</strong> en ingénierie logicielle désigne la
            capacité à <strong>comprendre</strong>, <strong>cadrer</strong> et{' '}
            <strong>entretenir les échanges</strong> avec un client tout au long d'un projet de
            développement. Elle constitue le lien entre les <strong>besoins exprimés</strong> et les{' '}
            <strong>solutions techniques</strong> produites.
            <br />
            <br />
            Cette compétence repose avant tout sur <strong>l'écoute</strong> et la
            <strong> reformulation</strong>. Un client exprime rarement ses besoins en termes
            techniques : il décrit un <strong>problème métier</strong>, une
            <strong> contrainte organisationnelle</strong> ou un{' '}
            <strong>objectif de performance</strong>. Le rôle de l'ingénieur logiciel est de
            traduire ces attentes en <strong>exigences concrètes</strong> et de s'assurer que la
            solution développée y répond réellement. Cela passe par des{' '}
            <strong>pratiques structurées</strong> telles que la rédaction de
            <strong> cahiers des charges</strong>, la conduite d'
            <strong>ateliers de recueil des besoins</strong> ou la{' '}
            <strong>validation itérative des livrables</strong>.
            <br />
            <br />
            Au-delà du recueil initial, la relation client s'entretient sur la{' '}
            <strong>durée</strong>. Gérer les <strong>évolutions de périmètre</strong>, communiquer
            sur les avancées et les blocages, ou encore savoir{' '}
            <strong>formuler un refus technique de manière constructive</strong>, sont autant de
            situations auxquelles un ingénieur logiciel est régulièrement confronté. C'est une
            compétence qui s'apprend autant par la <strong>pratique</strong> que par la
            <strong> technique</strong>.
          </p>
        </section>
        <section className="competence-sub-item">
          <h2>Mes éléments de preuve</h2>
          <p>
            Depuis le début de mon <strong>alternance chez hbond</strong>, j'anime chaque semaine
            une réunion technique appelée <strong>"point tech"</strong>, qui rassemble l'ensemble de
            l'équipe de développement ainsi que le CEO. Cette réunion est un moment
            <strong> central</strong> dans la gestion de la relation client interne : elle permet de{' '}
            <strong>synchroniser les avancées</strong>, de <strong>remonter les blocages</strong> et
            de recueillir les <strong>nouveaux besoins</strong> exprimés par le CEO.
            <br />
            <br />
            Je prépare systématiquement ces réunions <strong>en amont</strong>. Je relis les comptes
            rendus des semaines précédentes pour identifier les points en suspens, et je constitue
            un <strong>ordre du jour structuré</strong>. Pendant la réunion, chaque développeur
            présente ses tâches réalisées et ses éventuels blocages. Lorsqu'une décision doit être
            prise, c'est le CEO qui tranche, et mon rôle consiste à lui présenter les éléments de
            manière <strong>claire et accessible</strong>. Cela implique d'
            <strong>adapter le niveau de discours</strong> : les termes techniques sont
            systématiquement expliqués pour qu'il puisse comprendre les <strong>enjeux</strong> et
            décider en
            <strong> connaissance de cause</strong>.
            <br />
            <br />
            Cette posture d'intermédiaire entre l'équipe technique et le CEO m'a permis de
            développer une réelle capacité à{' '}
            <strong>vulgariser des problématiques complexes</strong> et à maintenir une{' '}
            <strong>communication fluide</strong> sur la durée.
          </p>
        </section>
        <section className="competence-sub-item">
          <h2>Mon autocritique</h2>
          <p>
            Cette compétence s'est principalement exercée dans un cadre hebdomadaire et avec un
            interlocuteur unique : le CEO de hbond. Si cette régularité m'a permis de structurer ma
            pratique, elle reste un contexte relativement contrôlé. Je n'ai pas encore eu l'occasion
            de gérer des <strong>situations de tension</strong>, des <strong>désaccords</strong> ou
            des <strong>attentes irréalistes</strong>, ce qui constitue pourtant une partie
            importante de la relation client en <strong>contexte professionnel réel</strong>.
            <br />
            <br />
            Je suis conscient que la fréquence d'exposition à ces situations est un facteur
            déterminant dans la progression sur cette compétence. Mon niveau actuel me permet d'être
            à l'aise dans un cadre structuré, mais il me reste à{' '}
            <strong>gagner en expérience</strong> sur les aspects plus délicats de la
            <strong> négociation</strong> et de la{' '}
            <strong>gestion des imprévus relationnels</strong>.
          </p>
        </section>
        <section className="competence-sub-item">
          <h2>Mon évolution dans cette compétence</h2>
          <p>
            Mon ambition est de progresser vers des postes à plus forte responsabilité, où la
            relation client occupe une <strong>place centrale</strong>. Dans ces contextes, il ne
            s'agira plus seulement d'animer des <strong>points de synchronisation</strong>, mais de
            porter la relation client dans toute sa complexité : <strong>cadrage initial</strong>,
            <strong> gestion des évolutions de périmètre</strong>,{' '}
            <strong>communication en situation de crise</strong>.
            <br />
            <br />
            Je considère chaque réunion d'équipe comme une opportunité d'affiner cette compétence,
            notamment dans ma capacité à <strong>reformuler</strong>, à <strong>synthétiser</strong>{' '}
            et à <strong>adapter mon discours</strong>. La progression sur ce point est pour moi{' '}
            <strong>indissociable</strong> de l'évolution de mes responsabilités professionnelles.
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
            <Link className="project-skill-link project-skill-link-tech" to="/projet/mpmt">
              MPMT
            </Link>
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
