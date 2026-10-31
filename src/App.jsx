
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import ScrollToTop from './ScrollToTop'
import Header from './components/Header'
import LandingPage from './pages/LandingPage'
import About from './pages/About'
import Skills from './pages/Skills'
import Hobbies from './pages/hobbies'
import Achievements from './pages/Achievements'
import Projects from './pages/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <ScrollToTop />

      <Header />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/projects" element={<Projects />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
