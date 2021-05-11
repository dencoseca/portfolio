import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

// Components
import Header from '../components/Header'

function index() {
  return (
    <>
      <Header />
      <div className="hero">
        <h1>Hi, I'm Leon</h1>
        <p className="tagline">
          I'm a developer based in Sheffield in th UK, looking for my first
          developer position. Have a look at what I've done so far.
        </p>
        <StaticImage
          src="https://images.unsplash.com/photo-1519219788971-8d9797e0928e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2528&q=80"
          alt="desk"
        />
      </div>
    </>
  )
}

export default index
