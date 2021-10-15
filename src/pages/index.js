import { Link, graphql } from "gatsby"
import React from "react"
import Layout from '../components/Layout'
import styled from 'styled-components'
// import { getImage, GatsbyImage } from "gatsby-plugin-image"


const Home = ({data}) => {
  console.log(data)
  // const image = getImage(data.file)

  return (
    <Layout>
      <Header>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>Web developer based in Barcelona.</p>
          <Link className="btn" to="/projects">My Portfolio Projects</Link>
        </div>
        {/* <GatsbyImage image={image} alt="banner" /> */}
      </Header>
    </Layout>
  )
}

const Header = styled.section`
  
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 40px;
  align-items: center;
  text-align: center;
  margin: 64px 0;

  h2 {
  font-size: 4em;
}
  h3 {
  font-size: 3em;
  font-weight: 400;
  margin-bottom: 20px;
  }
  .btn {
    display: inline-block;
    background: #D42990;
    padding: 10px 16px;
    border-radius: 10px;
    margin-top: 20px;
    font-weight: 500;
  }

  @media only screen and (min-width: 500px) {

    .header {
      margin: 128px 0;
    }

  }
`

export const query = graphql`
  query Banner {
    file(relativePath: {eq: "banner.jpg"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`

export default Home
