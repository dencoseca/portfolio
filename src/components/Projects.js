import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const arrowSVG = (
  <svg
    width="67"
    height="67"
    viewBox="0 0 67 67"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M64.3984 33.4803L52.5338 21.6548L48.592 25.6106L53.7147 30.7193L2.60205 30.7082V36.2915L53.7035 36.2971L48.6199 41.4002L52.5729 45.3421L64.3984 33.4775V33.4803Z"
      fill="black"
    />
  </svg>
)

function Projects() {
  return (
    <section className="projects">
      <div className="container">
        <div className="statement">
          I love to learn by building real things. Some of these projects are
          commissioned, some are just for fun.
        </div>
        <div className="project">
          <div className="info">
            <div className="content">
              <h3 className="content__title">Bragazzi's</h3>
              <p className="content__description">
                A marketing website for Bragazzi's cafe. Built with Gatsby to
                take advantage of their image optimization and make use of the
                client's professional photography.
              </p>
            </div>
            <div className="links">{arrowSVG}</div>
          </div>
          <div className="image">
            <StaticImage src="../images/bragazzis.jpg" alt="bragazzi's cafe" />
          </div>
        </div>
        <div className="project">
          <div className="image--narrow">
            <StaticImage
              src="../images/pokemon-sprites.jpg"
              alt="bragazzi's cafe"
            />
          </div>
          <div className="info">
            <div className="content">
              <h3 className="content__title">Pokemon Type Matcher</h3>
              <p className="content__description">
                Choose two pokemon and see who will come out on top! A fun way
                for me to learn class-based components in React since I
                discovered it after the advent of Hooks, Context and functional
                components.
              </p>
            </div>
            <div className="links">{arrowSVG}</div>
          </div>
        </div>
        <div className="project">
          <div className="info">
            <div className="content">
              <h3 className="content__title">Marine Venus</h3>
              <p className="content__description">
                A marketing website for the charter yacht Marine Venus based out
                of St Vincent and the Grenadines in the carribean. The owner
                Mark wanted to have a larger presence than was available on the
                charter website. The site allows for more information about
                Marine Venus but links back to the charter company for hire.
              </p>
            </div>
            <div className="links">{arrowSVG}</div>
          </div>
          <div className="image--narrow">
            <StaticImage
              src="../images/marine-venus.jpg"
              alt="bragazzi's cafe"
            />
          </div>
        </div>
        <div className="project">
          <div className="image--narrow">
            <StaticImage src="../images/cherry-pie.jpg" alt="bragazzi's cafe" />
          </div>
          <div className="info">
            <div className="content">
              <h3 className="content__title">Recipe Costings</h3>
              <p className="content__description">
                A web app for catering businesses to cost and create recipes.
                Staff can input all the ingredients into a supplier and
                Ingredient database. With admin and user logins, employees can
                contribute their own recipe ideas with the ingredients in the
                stock room and comment on each other's ideas. The recipe will be
                automatically costed!
              </p>
            </div>
            <div className="links">{arrowSVG}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
