import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// Animations
const transition = {
  duration: 1,
  ease: [0.22, 1, 0.36, 1],
}

const sentenceStart = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { ...transition },
  },
}

const sentenceEnd = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const line = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { ...transition },
  },
}

function Hero() {
  return (
    <AnimatePresence>
      <section className="hero" id="hero" data-scroll-section>
        <div className="hero__inner" id="sticky-target">
          <motion.div
            className="sentence sentence--start"
            data-scroll
            data-scroll-sticky
            data-scroll-target="#sticky-target"
            initial="initial"
            animate="animate"
            variants={sentenceStart}
          >
            Hi, I'm
          </motion.div>
          <motion.div
            className="sentence sentence--end"
            initial="initial"
            animate="animate"
            variants={sentenceEnd}
          >
            <motion.div className="line" variants={line}>
              Leon
            </motion.div>
            <motion.div className="line" variants={line}>
              a developer
            </motion.div>
            <motion.div className="line" variants={line}>
              based in Sheffield, UK
            </motion.div>
            <motion.div className="line" variants={line}>
              looking for my first position
            </motion.div>
            <motion.div className="line" variants={line}>
              self-taught
            </motion.div>
            <motion.div className="line" variants={line}>
              hard-working
            </motion.div>
          </motion.div>
        </div>
      </section>
    </AnimatePresence>
  )
}

export default Hero
