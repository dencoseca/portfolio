import React from 'react'

function Footer() {
  return (
    <div className="container">
      <footer data-scroll-section>
        <h2 data-scroll data-scroll-speed="8" data-scroll-position="bottom">
          <div className="line">GET IN</div>
          <div className="line">TOUCH</div>
        </h2>
        <div
          className="links"
          data-scroll
          data-scroll-speed="7"
          data-scroll-position="bottom"
        >
          <a href="mailto:leon.brown71@icloud.com" className="link">
            EMAIL
          </a>
          <a href="tel:+447910053765" className="link">
            PHONE
          </a>
          <a
            href="https://github.com/dencoseca"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            GITHUB
          </a>
        </div>
        <div
          className="copyright"
          data-scroll
          data-scroll-speed="6"
          data-scroll-position="bottom"
        >
          &copy;2021
        </div>
      </footer>
    </div>
  )
}

export default Footer
