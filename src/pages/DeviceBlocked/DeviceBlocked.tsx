import './deviceBlocked.css'

export default function DeviceBlocked() {
  return (
    <section className="device-blocked" role="alert" aria-labelledby="device-blocked-title">
      <div className="device-blocked__glow" aria-hidden="true" />

      <article className="device-blocked__card">
        <p className="device-blocked__kicker" style={{ marginBottom: 20 }}>
          Acces limité
        </p>
        <h1 id="device-blocked-title">Ce portfolio est disponible uniquement sur ordinateur</h1>
        <p>
          Pour une meilleure experience de navigation, ce site ne s&apos;affiche pas sur mobile ou
          tablette.
        </p>
        <p className="device-blocked__hint">Ouvre ce lien depuis un ordinateur pour continuer.</p>
      </article>
    </section>
  )
}
