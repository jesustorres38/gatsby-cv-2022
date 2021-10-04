import { Link, graphql } from "gatsby"
import React from "react"
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'
// import { getImage, GatsbyImage } from "gatsby-plugin-image"


export default function Home({data}) {
  console.log(data)
  // const image = getImage(data.file)

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>Web developer based in Barcelona.</p>
          <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
        </div>
        {/* <GatsbyImage image={image} alt="banner" /> */}
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: {eq: "banner.jpg"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
