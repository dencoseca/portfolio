import React from 'react'

function Hero() {
  return (
    <section className="hero" id="hero" data-scroll-section>
      <div className="hero__inner" id="sticky-target">
        <div
          className="sentence sentence--start"
          data-scroll
          data-scroll-sticky
          data-scroll-target="#sticky-target"
        >
          Hi, I'm
        </div>
        <div className="sentence sentence--end">
          <div className="line">Leon</div>
          <div className="line">a developer</div>
          <div className="line">based in Sheffield, UK</div>
          <div className="line">looking for my first position</div>
          <div className="line">self-taught</div>
          <div className="line">hard-working</div>
        </div>
      </div>
    </section>
  )
}

export default Hero
