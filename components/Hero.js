import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Social from './Social'

function Hero(props) {
  return (
    <div className="hero">
      <div
        className="profile-pic"
        style={{
          backgroundImage: `url('/static/images/logo.png?inline')`
        }}
      />
      <h3 className="blog-title">
        <Link prefetch href="/">
          <a className="white no-underline" href="/">
            <h2>Rodrigo Trespalacios</h2>
          </a>
        </Link>
        <hr />
        {false && <div style={{fontWeight: 400, display: 'flex', justifyContent: 'center', marginTop: 10}} className="gray"><Social /></div>}
      </h3>
    </div>
  )
}

export default Hero
