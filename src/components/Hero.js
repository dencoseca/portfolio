import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// Animations
const transition = {
  duration: 1,
  ease: [0, 0.55, 0.45, 1],
}

function Hero() {
  return (
    <AnimatePresence>
      <section className="hero" id="hero" data-scroll-section>
        <div className="container">
          <div className="hero__inner" id="sticky-target">
            <motion.div className="title first">Hi, I'm Leon,</motion.div>
            <motion.div className="title second">a developer based</motion.div>
            <motion.div className="title third">in the UK.</motion.div>
          </div>
        </div>
      </section>
    </AnimatePresence>
  )
}

export default Hero
