import React from 'react'

function Footer() {
  return (
    <div className="container">
      <footer data-scroll-section>
        <h2>Get in touch</h2>
        <div className="links">
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
        <div className="copyright">&copy;2021</div>
      </footer>
    </div>
  )
}

export default Footer
