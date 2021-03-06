import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header2 = ({}) => (
  <header
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h4 style={{ margin: 10}}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
            padding: '5.5rem'
          }}
        >
          Homepage
        </Link>

        <Link
          to="/page-2/"
          style={{
            colour: 'white',
            textDecoration: 'none',
            padding: '5.5rem',
          }}
        >
          Page 2
        </Link>

        <Link
          to="/using-typescript/"
          style={{
            color: 'white',
            textDecoration: 'none',
            padding: '5.5rem',
          }}
        >
          Using Typescript
          </Link>
      </h4>
    </div>
  </header>
  
)
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
        padding: `1.45rem 1.0876rem`,
      }}
    >
    <h4 style={{ margin: 10 }}>
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
          padding: '5.5rem',
        }}
      >
        Homepage
      </Link>

      <Link
        to="/page-2/"
        style={{
          color: 'white',
          textDecoration: 'none',
          padding: '5.5rem',
        }}
      >
        Page 2       
      </Link>

      <Link
        to="/using-typescript/"
        style={{
          color: 'white',
          textDecoration: 'none',
          padding: '5.5rem',
        }}
      >
        Typescript Page
      </Link>
      </h4>
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

    </div>
  </header>
)

Header2.propTypes = {
  siteTitle: PropTypes.string,
}

Header2.defaultProps = {
  siteTitle: ``,
}

export default Header
