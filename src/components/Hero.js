import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="text">
          <h1>Hi, I'm Leon</h1>
          <p className="tagline">
            A developer based in Sheffield in the UK, looking for my first
            professional position. Have a look at what I've done so far.
          </p>
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
