import React from 'react'

function Hero() {
  return (
    <div className="container">
      <section className="hero" data-scroll-section>
        <div id="sticky-target">
          <div
            className="sentence sentence--start"
            data-scroll
            data-scroll-sticky
            data-scroll-target="#sticky-target"
          >
            Hi, I'm
          </div>
          <div className="sentence sentence--end">
            <div>a developer</div>
            <div>based in Sheffield, UK</div>
            <div>looking for my first position</div>
            <div>self-taught</div>
            <div>hard-working</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
