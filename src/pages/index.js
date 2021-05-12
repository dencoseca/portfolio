import React, { useRef } from 'react'
import Footer from '../components/Footer'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

// Components
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

function Index() {
  let containerRef = useRef(null)

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        scrollFromAnywhere: true,
        multiplier: 0.75,
      }}
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <Footer />
      </main>
    </LocomotiveScrollProvider>
  )
}

export default Index
