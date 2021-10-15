import { graphql, useStaticQuery } from 'gatsby'
import React, { Fragment } from 'react'
import Navbar from './Navbar'
import {createGlobalStyle} from 'styled-components'
import "../styles/global.css"

const Layout = ({children}) => {

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
    <Fragment>
      <div className="layout">
        <Navbar />
        <div className="content">
          {children}
        </div>
      </div>
      <footer>
        <p>&copy; {year} {copyright}</p>
      </footer>
      <GlobalStyle/>
    </Fragment>
  )
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    font-family: "Montserrat";
    color: white;
  }
  html, body {
    min-height: 100%;
    font-family: "Montserrat";
  }
  body {
    background: radial-gradient(at top left, #000428, #004e92);
    background-repeat: no-repeat;
  }
  .layout {
    max-width: 1200px;
    margin: 0 auto;
    min-height: calc(100vh - 180px);
    padding: 40px 32px;
  }
  p {
    margin: 16px auto;
    line-height: 1.5em;
  }
  nav {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0 auto 80px;
  }
  nav .links {
    display: inline-block;
    text-align: right;
  }
  nav a {
    display: inline-block;
    margin: 0 0 20px 20px;
    font-weight: 400;
    padding-bottom: 8px;
    border-bottom: 3px solid transparent;
  }
  nav a:hover,
  nav a.active {
    border-color: white;
  }
  ul {
    margin-left: 32px;
  }
  footer {
    height: 80px;
  }
  footer p{
    text-align: center;
    color: #bbb;
  }
`

export default Layout;
