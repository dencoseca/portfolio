import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

function Hero() {
  return (
    <section className="hero" data-scroll-section>
      <div className="container">
        <div className="text">
          <h1 data-scroll>
            <span data-scroll data-scroll-speed="-2" data-scroll-position="top">
              H
            </span>
            <span data-scroll data-scroll-speed="-1.9" data-scroll-position="top">
              i
            </span>
            <span
              data-scroll
              data-scroll-speed="-1.8"
              data-scroll-position="top"
            >
              ,
            </span>{' '}
            <span data-scroll data-scroll-speed="-1.7" data-scroll-position="top">
              I
            </span>
            <span data-scroll data-scroll-speed="-1.6" data-scroll-position="top">
              '
            </span>
            <span
              data-scroll
              data-scroll-speed="-1.5"
              data-scroll-position="top"
            >
              m
            </span>{' '}
            <span data-scroll data-scroll-speed="-1.4" data-scroll-position="top">
              L
            </span>
            <span data-scroll data-scroll-speed="-1.3" data-scroll-position="top">
              e
            </span>
            <span data-scroll data-scroll-speed="-1.2" data-scroll-position="top">
              o
            </span>
            <span data-scroll data-scroll-speed="-1" data-scroll-position="top">
              n
            </span>
          </h1>
          <p className="tagline">A developer based in Sheffield, UK.</p>
        </div>
      </div>
      <StaticImage
        className="image"
        src="https://images.unsplash.com/photo-1519219788971-8d9797e0928e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2528&q=80"
        alt="desk"
        layout="fullWidth"
      />
    </section>
  )
}

export default Hero
