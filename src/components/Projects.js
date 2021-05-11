import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

// Assets
const arrowSVG = (
  <svg
    className="arrow"
    width="100%"
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

const githubSVG = (
  <svg
    className="github"
    width="100%"
    viewBox="0 0 72 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M29.044 61.6112C29.044 60.6842 29.009 57.6312 29.009 53.8472C29.009 51.2002 29.883 49.4742 30.872 48.5942C24.645 47.8732 18.093 45.4412 18.093 34.5602C18.093 31.4622 19.189 28.9282 20.98 26.9452C20.694 26.2252 19.727 23.3392 21.258 19.4312C21.258 19.4312 23.613 18.6672 28.974 22.3392C31.212 21.7112 33.612 21.3932 36.001 21.3882C38.385 21.3932 40.786 21.7112 43.028 22.3392C48.385 18.6672 50.739 19.4312 50.739 19.4312C52.271 23.3392 51.309 26.2262 51.017 26.9452C52.813 28.9282 53.899 31.4592 53.899 34.5602C53.899 45.4652 47.339 47.8672 41.082 48.5682C42.095 49.4502 42.991 51.1792 42.991 53.8312C42.991 57.6232 42.956 60.6812 42.956 61.6112C42.956 62.3732 43.461 63.2522 44.886 62.9802C56.031 59.2222 64.063 48.5842 64.063 36.0482C64.063 20.3702 51.496 7.66016 35.996 7.66016C20.502 7.66016 7.93604 20.3672 7.93604 36.0482C7.93604 48.5892 15.976 59.2302 27.138 62.9822C28.533 63.2442 29.044 62.3682 29.044 61.6122V61.6112Z"
      fill="white"
    />
    <path
      d="M29.044 61.6112C29.044 60.6842 29.009 57.6312 29.009 53.8472C29.009 51.2002 29.883 49.4742 30.872 48.5942C24.645 47.8732 18.093 45.4412 18.093 34.5602C18.093 31.4622 19.189 28.9282 20.98 26.9452C20.694 26.2252 19.727 23.3392 21.258 19.4312C21.258 19.4312 23.613 18.6672 28.974 22.3392C31.212 21.7112 33.612 21.3932 36.001 21.3882C38.385 21.3932 40.786 21.7112 43.028 22.3392C48.385 18.6672 50.739 19.4312 50.739 19.4312C52.271 23.3392 51.309 26.2262 51.017 26.9452C52.813 28.9282 53.899 31.4592 53.899 34.5602C53.899 45.4652 47.339 47.8672 41.082 48.5682C42.095 49.4502 42.991 51.1792 42.991 53.8312C42.991 57.6232 42.956 60.6812 42.956 61.6112C42.956 62.3732 43.461 63.2522 44.886 62.9802C56.031 59.2222 64.063 48.5842 64.063 36.0482C64.063 20.3702 51.496 7.66016 35.996 7.66016C20.502 7.66016 7.93604 20.3672 7.93604 36.0482C7.93604 48.5892 15.976 59.2302 27.138 62.9822C28.533 63.2442 29.044 62.3682 29.044 61.6122V61.6112Z"
      stroke="black"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.29 48.0903C18.858 48.8703 19.87 49.7253 21.079 51.7513C22.284 53.7773 23.699 56.0383 29.012 54.7503"
      stroke="black"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
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
            <div className="links">
              {arrowSVG}
              {githubSVG}
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
              {arrowSVG}
              {githubSVG}
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
              {arrowSVG}
              {githubSVG}
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
              {arrowSVG}
              {githubSVG}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
