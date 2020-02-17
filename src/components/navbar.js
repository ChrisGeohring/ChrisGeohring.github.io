import PropTypes from "prop-types"
import React from "react"

const NavBar = ({ siteTitle }) => (
        <div className="vertical-center">
            {siteTitle}
        </div>
)

NavBar.propTypes = {
  siteTitle: PropTypes.string,
}

NavBar.defaultProps = {
  siteTitle: ``,
}

export default NavBar
