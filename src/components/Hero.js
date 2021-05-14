import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// Animations
const transition = {
  duration: 1.5,
  ease: [0, 0.55, 0.45, 1],
}

const heroInner = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4,
    },
  },
}

const heroLine = {
  initial: {
    y: 250,
    skewY: 5,
  },
  animate: {
    y: 0,
    skewY: 0,
    transition: {
      ...transition,
    },
  },
}

function Hero() {
  return (
    <AnimatePresence>
      <section className="hero" id="hero" data-scroll-section>
        <motion.div
          className="hero__inner"
          id="sticky-target"
          initial="initial"
          animate="animate"
          variants={heroInner}
        >
          <div className="line">
            <motion.div className="title first" variants={heroLine}>
              Hi, I'm Leon,
            </motion.div>
          </div>
          <div className="line">
            <motion.div className="title second" variants={heroLine}>
              a developer based
            </motion.div>
          </div>
          <div className="line">
            <motion.div className="title third" variants={heroLine}>
              in the UK.
            </motion.div>
          </div>
        </motion.div>
      </section>
    </AnimatePresence>
  )
}

export default Hero
