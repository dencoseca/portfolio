import React from 'react'

function Skills() {
  return (
    <section className="skills" id="skills" data-scroll-section>
      <div className="container">
        <p
          className="statement statement--desktop"
          data-scroll
          data-scroll-offset="20%"
        >
          <span>I love to design beautiful, intuitive and responsive</span>
          <span>stuffs on the web. My developer journey has been a</span>
          <span>fun and brain-recking year of self-tuition after</span>
          <span>deciding to make the career change into something</span>
          <span>I'm hugely passionate about.</span>
        </p>
      </div>
      <div className="list">
        <div className="list__item">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="1"
            data-scroll-delay="0.05"
            data-scroll-offset="-30%"
          >
            React
          </span>
        </div>
        <div className="list__item">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="1.2"
            data-scroll-delay="0.05"
            data-scroll-offset="-30%"
          >
            Gatsby
          </span>
        </div>
        <div className="list__item">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="1.5"
            data-scroll-delay="0.05"
            data-scroll-offset="-30%"
          >
            SASS
          </span>
        </div>
        <div className="list__item">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="1.4"
            data-scroll-delay="0.05"
            data-scroll-offset="-30%"
          >
            Node
          </span>
        </div>
        <div className="list__item">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="2.5"
            data-scroll-delay="0.05"
            data-scroll-offset="-30%"
          >
            Express
          </span>
        </div>
        <div className="list__item">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="1.3"
            data-scroll-delay="0.05"
            data-scroll-offset="-30%"
          >
            MongoDB
          </span>
        </div>
        <div className="list__item">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="3"
            data-scroll-delay="0.05"
            data-scroll-offset="-30%"
          >
            GSAP
          </span>
        </div>
        <div className="list__item">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="1.6"
            data-scroll-delay="0.05"
            data-scroll-offset="-30%"
          >
            Framer Motion
          </span>
        </div>
      </div>
    </section>
  )
}

export default Skills
