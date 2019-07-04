import React from 'react'

import AppBar from './AppBar'

const Layout = ({location, title, children}) => {
  // const rootPath = `${__PATH_PREFIX__}/`
  return (
    <>
      <AppBar />
      <div>{children}</div>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

export default Layout
