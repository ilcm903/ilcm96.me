import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

const query = graphql`
  query GetSiteMetadata {
    site {
      siteMetadata {
        title
        author
        description
        siteUrl
      }
    }
  }
`;

function SEO({ meta, thumbnail, title, description, slug, lang = 'ko' }) {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const { siteMetadata } = data.site;
        const metaDescription = description || siteMetadata.description;
        const metaImage = `${data.site.siteMetadata.siteUrl}${thumbnail}`
        const url = `${siteMetadata.siteUrl}/${slug}`;
        return (
          <Helmet
            htmlAttributes={{ lang }}
            {...(title
              ? {
                  titleTemplate: `%s | ${siteMetadata.title}`,
                  title,
                }
              : {
                  title: `${siteMetadata.title}`,
                })}
            meta={[
              {
                name: 'description',
                content: metaDescription,
              },
              {
                property: 'og:url',
                content: url,
              },
              {
                property: 'og:title',
                content: title || siteMetadata.title,
              },
              {
                property: 'og:description',
                content: metaDescription,
              },
              {
                name: 'twitter:card',
                content: 'summary',
              },
              {
                name: 'twitter:title',
                content: title || siteMetadata.title,
              },
              {
                name: 'twitter:description',
                content: metaDescription,
              },
              {
                name: 'google-site-verification',
                content: '',
              },
              {
                property: 'image',
                content: metaImage,
              },
              {
                property: 'og:image',
                content: metaImage,
              },
              {
                name: 'twitter:image',
                content: metaImage,
              },
            ]}
          />
        );
      }}
    />
  );
}

SEO.defaultProps = {
  lang: `ko`,
  meta: [],
  title: '',
  slug: '',
};

SEO.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  meta: PropTypes.array,
  slug: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default SEO;
