import Footer from './components/Footer'
import Header from './components/Header'
import Router from './router/Router'

export default function Layout() {
  return (
    <div className="layout-container">
      <Header />
      <main className="layout-content">
        <Router />
      </main>
      <Footer />
    </div>
  )
}
