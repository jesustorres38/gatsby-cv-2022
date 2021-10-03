import React from 'react'
import Layout from '../components/Layout'
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import * as styles from '../styles/project-details.module.css'
import { graphql } from 'gatsby'

export default function ProjectDetails({data}) {
  console.log(data)
  const {html} = data.markdownRemark
  const {title, stack, featuredImg} = data.markdownRemark.frontmatter
  const image = getImage(featuredImg)

  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={styles.featured}>
          <GatsbyImage image={image} alt="no se que poner" />
        </div>
        <div className={styles.html} dangerouslySetInnerHTML={{__html: html}} />
      </div>
    </Layout>
  )
}

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

