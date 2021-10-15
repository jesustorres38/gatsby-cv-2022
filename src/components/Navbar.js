import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'

const Navbar = () => {

  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title }= data.site.siteMetadata

  return (
    <nav>
      <h1>{title}</h1>
      <div className="links">
        <Link to="/" activeClassName="active">Home</Link>
        <Link to="/about" activeClassName="active">About</Link>
        <Link to="/projects" activeClassName="active">Portfolio Projects</Link>
      </div>
    </nav>
  )
}

export default Navbar
