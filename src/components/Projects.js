import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

// Assets
import { arrowSVG, githubSVG } from '../images/svgs'

function Projects() {
  return (
    <section className="projects" id="projects" data-scroll-section>
      <div className="container">
        <div
          className="statement statement--desktop"
          data-scroll
          data-scroll-offset="25%"
        >
          <span>I love to learn by building</span>
          <span>real things. Some of these</span>
          <span>projects are </span>
          <span>commissioned, some are</span>
          <span>just for fun.</span>
        </div>
        <div
          className="statement statement--phone"
          data-scroll
          data-scroll-offset="25%"
        >
          <span>I love to learn by building real</span>
          <span>things. Some of these projects</span>
          <span>are commissioned, some are</span>
          <span>just for fun.</span>
        </div>
        <div className="project" data-scroll data-scroll-offset="20%">
          <div className="project__inner project__inner--info">
            <div className="info">
              <div className="content">
                <h3 className="content__title">Bragazzi's</h3>
                <p className="content__description">
                  Bragazzi's is a traditional Italian cafe, delicatessen and
                  shop. It's deeply set in its community and has a very
                  particular feel and atmosphere. It needed a marketing website
                  to root their online presence and show their personality. The
                  site needed to update business information based on Google
                  Business Data so the client could keep using the interface he
                  was familiar with. I wanted the website to get the most out of
                  the beautiful photography we had available. Gatsby's Static
                  Image component and its blazing fast serving of static sites
                  were key in delivering this and made it an obvious choice.
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
          </div>
          <div className="project__inner project__inner--image">
            <div className="image">
              <StaticImage
                src="../images/bragazzis.jpg"
                alt="a busy italian cafe"
              />
              <div className="image__cover"></div>
            </div>
          </div>
        </div>
        <div className="project" data-scroll data-scroll-offset="20%">
          <div className="project__inner project__inner--image">
            <div className="image image--narrow">
              <StaticImage
                src="../images/cherry-pie.jpg"
                alt="a delicious cherry pie"
              />
              <div className="image__cover"></div>
            </div>
          </div>
          <div className="project__inner project__inner--info">
            <div className="info">
              <div className="content">
                <h3 className="content__title">Recipe Costings</h3>
                <p className="content__description">
                  Recipe Costings is an app that, wait for it... costs recipes!
                  An internal app for catering / service companies to get their
                  staff involved in the creative process. Employees can create
                  recipes and collaborate with each other using a database of
                  existing stock items. Built with Express using EJS to serve
                  the HTML with the data stored on MongoDB. This was a great way
                  for me to learn RESTful routing techniques and the backend and
                  development side of the MERN stack.
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
          </div>
        </div>
        <div className="project" data-scroll data-scroll-offset="20%">
          <div className="project__inner project__inner--info">
            <div className="info">
              <div className="content">
                <h3 className="content__title">Workflow</h3>
                <p className="content__description">
                  Something I use a lot are task management apps. I decided to
                  make replicate the functionality with my own app. In doing
                  this I got to get to grips with connecting a front end with a
                  backend API. Building both from scratch and managing data
                  validation and pending server requests really helped me see
                  the kinds of design decisions that become clear when
                  developing full-stack apps. How and where state is stored,
                  calling only the data needed to network usage, and a million
                  other decisions! My other goal was to break away from using
                  bootstrap and try a different CSS framework. Workflow's CSS is
                  built with Bulma and minimal custom styling.
                </p>
              </div>
              <div className="links">
                <a
                  href="https://workflow.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {arrowSVG}
                </a>
                <a
                  href="https://github.com/dencoSeca/workflow"
                  target="_blank"
                  rel="noreferrer"
                >
                  {githubSVG}
                </a>
              </div>
            </div>
          </div>
          <div className="project__inner project__inner--image">
            <div className="image">
              <StaticImage
                src="../images/workflow.jpg"
                alt="a task checklist"
              />
              <div className="image__cover"></div>
            </div>
          </div>
        </div>
        <div className="project" data-scroll data-scroll-offset="20%">
          <div className="project__inner project__inner--image">
            <div className="image image--narrow">
              <StaticImage
                src="../images/purple-house.jpg"
                alt="a mountain range in morocco"
              />
              <div className="image__cover"></div>
            </div>
          </div>
          <div className="project__inner project__inner--info">
            <div className="info">
              <div className="content">
                <h3 className="content__title">Alexa Christou Photography</h3>
                <p className="content__description">
                  Alexa documents her overland travels with beautiful
                  photographs. She needed somewhere to showcase the pictures she
                  takes for her friends, family and anyone else interested in
                  travel and exploration. The focus here is on simplicity, and
                  giving the full stage to the stunning landscapes she captures.
                  Creating a custom WordPress theme enabled me to have the
                  control I wanted over the structure and styling while allowing
                  Alexa to create galleries and manage image uploads herself.
                </p>
              </div>
              <div className="links">
                <a
                  href="http://www.alexachristouphotography.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {arrowSVG}
                </a>
                <a
                  href="https://github.com/dencoSeca/acp-wordpress"
                  target="_blank"
                  rel="noreferrer"
                >
                  {githubSVG}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="project" data-scroll data-scroll-offset="20%">
          <div className="project__inner project__inner--info">
            <div className="info">
              <div className="content">
                <h3 className="content__title">Pokemon Type Matcher</h3>
                <p className="content__description">
                  A fun little React app that lets you compare the types of two
                  Pokemon and see which one can play a super effective move!
                  Because apparently my emotional growth stopped in 1998. This
                  is something I wish I had back in the day! This was my first
                  experience with React and it clicked with me instantly. I
                  built this app to learn how to use React to round off the MERN
                  stack.
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
          <div className="project__inner project__inner--image">
            <div className="image image--narrow">
              <StaticImage
                src="../images/pokemon-sprites.jpg"
                alt="generation one pokemon sprites"
              />
              <div className="image__cover"></div>
            </div>
          </div>
        </div>
        <div className="project" data-scroll data-scroll-offset="20%">
          <div className="project__inner project__inner--image">
            <div className="image image--narrow">
              <StaticImage
                src="../images/marine-venus.jpg"
                alt="a catamaran sailing in the carribean"
              />
              <div className="image__cover"></div>
            </div>
          </div>
          <div className="project__inner project__inner--info">
            <div className="info">
              <div className="content">
                <h3 className="content__title">Marine Venus</h3>
                <p className="content__description">
                  Marine Venus is a charter yacht based in the Caribbean. The
                  site is intended to be a landing page / profile for potential
                  holiday goers. They are then redirected, at multiple points,
                  to the charter company that hires out the yacht. This website
                  is ultimately intended to direct the viewer towards booking on
                  the charter site. A single page layout was the most
                  appropriate way to achieve this.
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
      </div>
    </section>
  )
}

export default Projects
