import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.css'
import { graphql, Link } from 'gatsby'
import { getImage, GatsbyImage } from "gatsby-plugin-image"

export default function Projects({data}) {
  console.log(data)

  const projects = data.projects.edges
  const contact = data.contact.siteMetadata.contact

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={styles.projects}>
          {projects.map((project) => {
            const image = getImage(project.node.frontmatter.thumb)

            return <Link to={"/projects/" + project.node.frontmatter.slug} key={project.node.id}>
              <div>
                <GatsbyImage image={image} alt="la locura" />
                <h3>{project.node.frontmatter.title}</h3>
                <p>{project.node.frontmatter.stack}</p>
              </div>
            </Link>
          })}
        </div>
        <p>Like what you see? email me at { contact } for a quote!</p>
      </div>
    </Layout>
  )
}

// export page query
export const query = graphql`
query ProjectsPage {
  projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: ASC}) {
    edges {
      node {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
      }
    }
  }
  contact: site {
    siteMetadata {
      contact
    }
  }
}
`
