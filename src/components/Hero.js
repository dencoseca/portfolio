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

const scrollPrompt = {
  animate: {
    transition: {
      delayChildren: 2,
      staggerChildren: 0.2,
    },
  },
}

const scrollPromptLine = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ...transition,
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
          className="scroll-prompt scroll-prompt--top-right"
          initial="initial"
          animate="animate"
          variants={scrollPrompt}
          data-scroll
          data-scroll-speed="4"
          data-scroll-position="top"
        >
          <motion.span
            className="scroll-prompt__text scroll"
            variants={scrollPromptLine}
          >
            Scroll
          </motion.span>
          <motion.span
            className="scroll-prompt__text down"
            variants={scrollPromptLine}
          >
            Down
          </motion.span>
        </motion.div>
        <motion.div
          className="scroll-prompt scroll-prompt--bottom-left"
          initial="initial"
          animate="animate"
          variants={scrollPrompt}
          data-scroll
          data-scroll-speed="4"
          data-scroll-position="top"
        >
          <motion.span
            className="scroll-prompt__text scroll"
            variants={scrollPromptLine}
          >
            Scroll
          </motion.span>
          <motion.span
            className="scroll-prompt__text down"
            variants={scrollPromptLine}
          >
            Down
          </motion.span>
        </motion.div>
        <motion.div
          className="hero__inner hero__inner--desktop"
          id="sticky-target"
          initial="initial"
          animate="animate"
          variants={heroInner}
        >
          <div className="line">
            <motion.div className="title top" variants={heroLine}>
              <span
                data-scroll
                data-scroll-position="top"
                data-scroll-speed="-1"
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
                data-scroll-speed="-3"
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
                data-scroll-speed="-3"
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
            <motion.div className="title middle" variants={heroLine}>
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
                data-scroll-speed="-1"
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
                data-scroll-speed="-2"
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
                data-scroll-speed="-2"
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
                data-scroll-speed="-3"
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
                data-scroll-speed="-1"
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
            <motion.div className="title bottom" variants={heroLine}>
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
                data-scroll-speed="-1"
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
        <motion.div
          className="hero__inner hero__inner--tablet"
          id="sticky-target"
          initial="initial"
          animate="animate"
          variants={heroInner}
        >
          <div className="line">
            <motion.div className="title top" variants={heroLine}>
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
                data-scroll-speed="-2"
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
                data-scroll-speed="-1"
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
            <motion.div className="title middle" variants={heroLine}>
              <span
                data-scroll
                data-scroll-position="top"
                data-scroll-speed="-2"
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
                data-scroll-speed="-4"
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
                data-scroll-speed="-1"
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
              </span>
            </motion.div>
          </div>
          <div className="line">
            <motion.div className="title bottom" variants={heroLine}>
              <span
                data-scroll
                data-scroll-position="top"
                data-scroll-speed="-3"
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
                data-scroll-speed="-1"
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
              </span>{' '}
              <span
                data-scroll
                data-scroll-position="top"
                data-scroll-speed="-3"
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
              </span>
            </motion.div>
          </div>
          <div className="line">
            <motion.div className="title bottom" variants={heroLine}>
              <span
                data-scroll
                data-scroll-position="top"
                data-scroll-speed="-2"
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
                data-scroll-speed="-1"
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
