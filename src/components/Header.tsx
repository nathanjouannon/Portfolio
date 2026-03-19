export default function Header() {
  return (
    <>
      <section id="header">
        <div className="container">
          <h1 className="logo">Vite</h1>
          <ul>
            <li>
              <a href="/guide/">Guide</a>
            </li>
            <li>
              <a href="/api/">API</a>
            </li>
            <li>
              <a href="/plugins/">Plugins</a>
            </li>
            <li>
              <a href="/resources/">Resources</a>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
