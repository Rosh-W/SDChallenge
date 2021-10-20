import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `underline white`,
          }}
        >
          {siteTitle} <br />

        </Link>
      </h1>
      <h2 style={{ margin: 10 }}>
        <Link
          to="/page-2/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Page 2 
        </Link>

        <Link
          to="/using-typescript/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Using Typescript Page
        </Link>
      </h2>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
