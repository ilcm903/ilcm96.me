import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import NotFoundImage from '../assets/404.png';

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <img src={NotFoundImage}></img>
        <h2
          style={{
            textAlign: 'center',
          }}
        >
          페이지를 찾을 수 없습니다{' '}
          <span role="img" aria-label="Sad face">
            😥
          </span>
        </h2>
      </Layout>
    );
  }
}

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
