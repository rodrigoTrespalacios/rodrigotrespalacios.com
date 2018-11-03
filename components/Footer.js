import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Social from './Social'

function Footer(props) {
  return (
    <div className="footer">
      <div className="footer-links">
        <Social />
      </div>
    </div>
  )
}

export default Footer
