import React from 'react'
import Layout from '../components/Layout'
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import { graphql } from 'gatsby'

const ProjectDetails = ({data}) => {
  console.log(data)
  const {html} = data.markdownRemark
  const {title, stack, featuredImg} = data.markdownRemark.frontmatter
  const image = getImage(featuredImg)

  return (
    <Layout>
      <Details>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className="featured">
          <GatsbyImage image={image} alt="no se que poner" />
        </div>
        <div className="html" dangerouslySetInnerHTML={{__html: html}} />
      </Details>
    </Layout>
  )
}

const Details = styled.div`

  h2 {
    font-size: 3.5em;
    margin-top: 80px;
  }
  h3 {
    font-size: 2em;
    font-weight: 400;
    margin-bottom: 40px;
  }
  a {
    text-decoration: underline;
  }
  .html {
    margin-top: 40px;
  }
  .featured {
    margin-bottom: 40px;
  }
`

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default ProjectDetails
