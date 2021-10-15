import React from 'react'
import Layout from '../../components/Layout'
import { graphql, Link } from 'gatsby'
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import styled from 'styled-components'

const Projects = ({data}) => {
  console.log(data)

  const projects = data.projects.edges
  // const contact = data.contact.siteMetadata.contact

  return (
    <Layout>
      <PortfolioWrapper>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Worked</h3>
        <div className="projects">
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
        <p>Like what you see? <a className="externalLink" href="https://www.linkedin.com/in/jesustorres38/">contact me</a> for a quote!</p>
      </PortfolioWrapper>
    </Layout>
  )
}

const PortfolioWrapper = styled.div`
  
  text-align: center;
  
  h2 {
    font-size: 3em;
    margin-top: 80px;
  }

  h3 {
    font-size: 2em;
    font-weight: 400;
  }
  .externalLink {
    color: #0a66c2;
    text-decoration: underline;
    font-style: italic;
  }
  .projects {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 80px;
    margin: 80px 20px;
  }
  .projects h3 {
    text-align: center;
    margin: 20px auto 0px;
    font-weight: 500;
  }
  .projects p {
    color: #ccc;
    margin-top: 4px;
  }

  @media only screen and (min-width: 500px) {

    .projects {
      grid-template-columns: 1fr 1fr;
    }

  }

  @media only screen and (min-width: 760px) {

    .projects {
      grid-template-columns: 1fr 1fr 1fr;
    }

  }
`

// export page query
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
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

export default Projects
