import React, { useEffect } from 'react'
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

const scrollArrow = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      ...transition,
      delay: 1,
    },
  },
}

function Hero() {
  useEffect(() => {
    const lines = document.querySelectorAll('.hero__inner .line')

    setTimeout(() => {
      lines.forEach(line => {
        line.style.overflow = 'visible'
      })
    }, 1500)
  }, [])

  return (
    <AnimatePresence>
      <section className="hero" id="hero" data-scroll-section>
        <motion.div
          className="scroll-down scroll-down--bottom-left"
          initial="initial"
          animate="animate"
          variants={scrollArrow}
          data-scroll
          data-scroll-speed="4"
          data-scroll-position="top"
        >
          <span className="arrow-down"></span>
        </motion.div>
        <motion.div
          className="scroll-down scroll-down--top-right"
          initial="initial"
          animate="animate"
          variants={scrollArrow}
          data-scroll
          data-scroll-speed="4"
          data-scroll-position="top"
        >
          <span className="arrow-down"></span>
        </motion.div>
        <motion.div
          className="hero__inner"
          id="sticky-target"
          initial="initial"
          animate="animate"
          variants={heroInner}
        >
          <div className="line">
            <motion.div className="title first" variants={heroLine}>
              <span
                data-scroll
                data-scroll-position="top"
                data-scroll-speed="1"
                data-scroll-delay="0.05"
              >
                H
              </span>
              <span
                data-scroll
                data-scroll-position="top"
                data-scroll-speed="2"
                data-scroll-delay="0.05"
              >
                i,
              </span>{' '}
              <span
                data-scroll
                data-scroll-position="top"
                data-scroll-speed="4"
                data-scroll-delay="0.05"
              >
                I'
              </span>
              <span
                data-scroll
                data-scroll-position="top"
                data-scroll-speed="3"
                data-scroll-delay="0.05"
              >
                m
              </span>{' '}
              <span
                data-scroll
                data-scroll-position="top"
                data-scroll-speed="1"
                data-scroll-delay="0.05"
              >
                L
              </span>
              <span
                data-scroll
                data-scroll-position="top"
                data-scroll-speed="2"
                data-scroll-delay="0.05"
              >
                e
              </span>
              <span
                data-scroll
                data-scroll-position="top"
                data-scroll-speed="3"
                data-scroll-delay="0.05"
              >
                o
              </span>
              <span
                data-scroll
                data-scroll-position="top"
                data-scroll-speed="1"
                data-scroll-delay="0.05"
              >
                n,
              </span>
            </motion.div>
          </div>
          <div className="line">
            <motion.div className="title second" variants={heroLine}>
              <span
                data-scroll
                data-scroll-position="top"
                data-scroll-speed="2"
                data-scroll-delay="0.05"
              >
                a
              </span>{' '}
              <span
                data-scroll
                data-scroll-position="top"
                data-scroll-speed="1"
                data-scroll-delay="0.05"
              >
                d
              </span>
              <span
                data-scroll
                data-scroll-position="top"
                data-scroll-speed="3"
                data-scroll-delay="0.05"
              >
                e
              </span>
              <span
                data-scroll
                data-scroll-position="top"
                data-scroll-speed="4"
                data-scroll-delay="0.05"
              >
                v
              </span>
              <span
                data-scroll
                data-scroll-position="top"
                data-scroll-speed="2"
                data-scroll-delay="0.05"
              >
                e
              </span>
              <span
                data-scroll
                data-scroll-position="top"
                data-scroll-speed="3"
                data-scroll-delay="0.05"
              >
                l
              </span>
              <span
                data-scroll
                data-scroll-position="top"
                data-scroll-speed="1"
                data-scroll-delay="0.05"
              >
                o
              </span>
              <span
                data-scroll
                data-scroll-position="top"
                data-scroll-speed="2"
                data-scroll-delay="0.05"
              >
                p
              </span>
              <span
                data-scroll
                data-scroll-position="top"
                data-scroll-speed="4"
                data-scroll-delay="0.05"
              >
                e
              </span>
              <span
                data-scroll
                data-scroll-position="top"
                data-scroll-speed="1"
                data-scroll-delay="0.05"
              >
                r
              </span>{' '}
              <span
                data-scroll
                data-scroll-position="top"
                data-scroll-speed="3"
                data-scroll-delay="0.05"
              >
                b
              </span>
              <span
                data-scroll
                data-scroll-position="top"
                data-scroll-speed="2"
                data-scroll-delay="0.05"
              >
                a
              </span>
              <span
                data-scroll
                data-scroll-position="top"
                data-scroll-speed="3"
                data-scroll-delay="0.05"
              >
                s
              </span>
              <span
                data-scroll
                data-scroll-position="top"
                data-scroll-speed="1"
                data-scroll-delay="0.05"
              >
                e
              </span>
              <span
                data-scroll
                data-scroll-position="top"
                data-scroll-speed="4"
                data-scroll-delay="0.05"
              >
                d
              </span>
            </motion.div>
          </div>
          <div className="line">
            <motion.div className="title third" variants={heroLine}>
              <span
                data-scroll
                data-scroll-position="top"
                data-scroll-speed="3"
                data-scroll-delay="0.05"
              >
                i
              </span>
              <span
                data-scroll
                data-scroll-position="top"
                data-scroll-speed="1"
                data-scroll-delay="0.05"
              >
                n
              </span>{' '}
              <span
                data-scroll
                data-scroll-position="top"
                data-scroll-speed="2"
                data-scroll-delay="0.05"
              >
                t
              </span>
              <span
                data-scroll
                data-scroll-position="top"
                data-scroll-speed="1"
                data-scroll-delay="0.05"
              >
                h
              </span>
              <span
                data-scroll
                data-scroll-position="top"
                data-scroll-speed="4"
                data-scroll-delay="0.05"
              >
                e
              </span>{' '}
              <span
                data-scroll
                data-scroll-position="top"
                data-scroll-speed="3"
                data-scroll-delay="0.05"
              >
                u
              </span>
              <span
                data-scroll
                data-scroll-position="top"
                data-scroll-speed="2"
                data-scroll-delay="0.05"
              >
                k.
              </span>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </AnimatePresence>
  )
}

export default Hero
