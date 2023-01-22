import React, { useRef, useEffect } from 'react'
import Footer from '../components/Footer'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

// Components
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Seo from '../components/Seo'

function Index() {
  let containerRef = useRef(null)

  useEffect(() => {
    // Grab inner height of window
    let vh = window.innerHeight * 0.01
    // Set css variable vh
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }, [])

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
        scrollFromAnywhere: true,
        multiplier: 0.75,
        touchMultiplier: 2.5,
      }}
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        <>
          <Seo />
          <Hero />
          <Skills />
          <Projects />
          <Footer />
        </>
      </main>
    </LocomotiveScrollProvider>
  )
}

export default Index
