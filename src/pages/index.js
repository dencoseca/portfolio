import React, { useRef } from 'react'
import Footer from '../components/Footer'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

// Components
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
        <Hero />
        <Skills />
        <Projects />
        <Footer />
      </main>
    </LocomotiveScrollProvider>
  )
}

export default Index
