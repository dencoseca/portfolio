import React from 'react'

function Skills() {
  return (
    <section className="skills" id="skills" data-scroll-section>
      <div className="container">
        <p className="statement">
          I love to design beautiful, intuitive and responsive stuffs on the
          web. My developer journey has been a fun and brain-recking year of
          self-tuition after deciding to make the career change into something
          I'm hugely passionate about.
        </p>
      </div>
      <div className="list">
        <div className="list__item">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="1"
            data-scroll-delay="0.05"
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
          >
            Framer Motion
          </span>
        </div>
      </div>
    </section>
  )
}

export default Skills
