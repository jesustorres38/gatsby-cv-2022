import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

export default function Layout({children}) {

  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          copyright
        }
      }
    }
  `)

  const {copyright} = data.site.siteMetadata
  const year = new Date().getFullYear();

  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        {children}
      </div>
      <footer>
        <p>&copy; {year} {copyright}</p>
      </footer>
    </div>
  )
}
