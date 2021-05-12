import React from 'react'

function Skills() {
  return (
    <section className="skills" data-scroll-section>
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
          >
            REACT
          </span>
        </div>
        <div className="list__item">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="1.2"
          >
            GATSBY
          </span>
        </div>
        <div className="list__item">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="1.5"
          >
            SASS
          </span>
        </div>
        <div className="list__item">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="1.4"
          >
            NODE
          </span>
        </div>
        <div className="list__item">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="2.5"
          >
            EXPRESS
          </span>
        </div>
        <div className="list__item">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="1.3"
          >
            MONGODB
          </span>
        </div>
        <div className="list__item">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="3"
          >
            GSAP
          </span>
        </div>
        <div className="list__item">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="1.6"
          >
            FRAMER MOTION
          </span>
        </div>
      </div>
    </section>
  )
}

export default Skills
