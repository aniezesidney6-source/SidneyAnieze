import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import Nav from './components/Nav'
import Hero from './components/Hero'
import SkyProps from './components/SkyProps'
import Benefits from './components/Benefits'
import Process from './components/Process'
import About from './components/About'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import WorksPage from './components/WorksPage'
import CaseStudy from './components/CaseStudy'

export default function App() {
  const [view, setView] = useState<'home' | 'works' | 'case'>('home')
  const [caseId, setCaseId] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2100)
    return () => clearTimeout(t)
  }, [])

  const openCase = (id: string) => {
    setCaseId(id)
    setView('case')
    window.scrollTo(0, 0)
  }

  return (
    <>
      <AnimatePresence>{loading && <LoadingScreen key="loading" />}</AnimatePresence>
      <AnimatePresence mode="wait">
      {view === 'case' && caseId ? (
        <CaseStudy
          key="case"
          id={caseId}
          onBack={() => setView('works')}
          onOpenCase={(id) => {
            setCaseId(id)
            window.scrollTo(0, 0)
          }}
        />
      ) : view === 'works' ? (
        <WorksPage key="works" onBack={() => setView('home')} onOpenCase={openCase} />
      ) : (
        <div key="home" className="relative min-h-screen overflow-x-clip bg-meadow-bg">
          <SkyProps />
          <Nav />
          <main className="relative z-10">
            <Hero onSeeAll={() => setView('works')} />
            <Benefits />
            <Process />
            <About />
            <Testimonials />
            <FAQ />
          </main>
          <Footer />
        </div>
      )}
      </AnimatePresence>
    </>
  )
}
