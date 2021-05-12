import React from 'react'

function Hero() {
  return (
    <div className="container">
      <section className="hero" data-scroll-section>
        <div id="sticky-target" data-scroll-offset="0, 20%">
          <div
            className="sentence sentence--start"
            data-scroll
            data-scroll-sticky
            data-scroll-target="#sticky-target"
          >
            Hi, I'm
          </div>
          <div className="sentence sentence--end">
            <div className="sentence--end__line">a developer</div>
            <div className="sentence--end__line">based in Sheffield, UK</div>
            <div className="sentence--end__line">
              looking for my first position
            </div>
            <div className="sentence--end__line">self-taught</div>
            <div className="sentence--end__line">hard-working</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
