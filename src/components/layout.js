import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import Image from "gatsby-image"

const Layout = ({ location, title, avatar, author, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(0.9),
          marginBottom: rhythm(1),
          marginTop: 0,
        }}
      >
        <Image
          fixed={avatar.childImageSharp.fixed}
          alt={author.name}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 50,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `100%`,
          }}
        />
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Image
          fixed={avatar.childImageSharp.fixed}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 50,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `100%`,
          }}
        />
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >

          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer class="footer">
        © {new Date().getFullYear()}, Built by
        {` `}
        <a href="https://www.itouchmars.com">Touch Mars Solutions Inc.</a>
      </footer>
    </div>
  )
}

export default Layout
