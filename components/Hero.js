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
          backgroundImage: `url('/static/images/profile.jpg?inline')`
        }}
      />
      <h3 className="blog-title">
        <Link prefetch href="/">
          <a className="white no-underline" href="/">
            <span>Rodrigo Trespalacios</span>
          </a>
        </Link>
        <div style={{fontWeight: 400, display: 'flex', justifyContent: 'center', marginTop: 10}} className="gray"><Social /></div>
      </h3>
    </div>
  )
}

export default Hero
