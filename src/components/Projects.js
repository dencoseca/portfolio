import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

// Assets
import { arrowSVG, githubSVG } from '../images/svgs'

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
            <div className="links">
              <a
                href="https://www.bragazzis.co.uk/"
                target="_blank"
                rel="noreferrer"
              >
                {arrowSVG}
              </a>
              <a
                href="https://github.com/dencoSeca/bragazzis-gatsby"
                target="_blank"
                rel="noreferrer"
              >
                {githubSVG}
              </a>
            </div>
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
            <div className="links">
              <a
                href="https://pokemon-type-matcher.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                {arrowSVG}
              </a>
              <a
                href="https://github.com/dencoSeca/pokemon-type-matcher"
                target="_blank"
                rel="noreferrer"
              >
                {githubSVG}
              </a>
            </div>
          </div>
        </div>
        <div className="project">
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
            <div className="links">
              <a
                href="https://recipe-costings.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                {arrowSVG}
              </a>
              <a
                href="https://github.com/dencoSeca/recipe-costings"
                target="_blank"
                rel="noreferrer"
              >
                {githubSVG}
              </a>
            </div>
          </div>
          <div className="image">
            <StaticImage src="../images/cherry-pie.jpg" alt="bragazzi's cafe" />
          </div>
        </div>
        <div className="project">
          <div className="image--narrow">
            <StaticImage
              src="../images/marine-venus.jpg"
              alt="bragazzi's cafe"
            />
          </div>
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
            <div className="links">
              <a
                href="https://marine-venus.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                {arrowSVG}
              </a>
              <a
                href="https://github.com/dencoSeca/marine-venus"
                target="_blank"
                rel="noreferrer"
              >
                {githubSVG}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
