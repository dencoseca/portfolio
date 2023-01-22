import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Seo = ({ title, description, article }) => {
  const { site } = useStaticQuery(query)
  const { defaultTitle, defaultDescription, siteUrl } = site.siteMetadata
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}`,
  }

  // Setup JSON-LD
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${seo.url}#Person`,
    url: seo.url,
    mainEntityOfPage: seo.url,
    description: seo.description,
    headline: `Hi, I'm Leon. A developer based in the UK.`,
    name: seo.title,
    email: 'picnic-mitoses.0e@icloud.com',
    jobTitle: 'Web developer',
    inLanguage: 'en-UK',
  }

  return (
    <Helmet title={seo.title}>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <meta name="description" content={seo.description} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      <meta name="twitter:card" content="summary_large_image" />
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
    </Helmet>
  )
}

export default Seo

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
      }
    }
  }
`

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  article: PropTypes.bool,
}

Seo.defaultProps = {
  title: 'Leon Brown',
  description:
    "Hi, I'm a developer based in the UK, building beautiful, intuitive and responsive sites. Check out my portfolio.",
  article: false,
}
