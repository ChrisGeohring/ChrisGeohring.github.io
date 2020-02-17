import PropTypes from "prop-types"
import React from "react"
import { Navbar } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="icons/icon-144x144.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      {siteTitle}
    </Navbar.Brand>
  </Navbar>
  // <header
  //   style={{
  //     background: `gray`,
  //     marginBottom: `1.45rem`,
  //   }}
  // >
  //   <div
  //     style={{
  //       margin: `0 auto`,
  //       maxWidth: 960,
  //       padding: `1.45rem 1.0875rem`,
  //     }}
  //   >
  //     <h1 style={{ margin: 0 }}>
  //       <Link
  //         to="/"
  //         style={{
  //           color: `white`,
  //           textDecoration: `none`,
  //         }}
  //       >
  //         {siteTitle}
  //       </Link>
  //     </h1>
  //   </div>
  // </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
