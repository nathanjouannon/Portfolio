import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<h1>Bienvenue sur mon portfolio</h1>} />
            <Route path="/about" element={<h1>À propos</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
