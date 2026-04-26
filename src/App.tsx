import { BrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import DeviceBlocked from './pages/DeviceBlocked/DeviceBlocked'
import './App.css'

function App() {
  return (
    <>
      <div className="desktop-only" aria-hidden={false}>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </div>

      <div className="mobile-tablet-only" aria-hidden={false}>
        <DeviceBlocked />
      </div>
    </>
  )
}

export default App
