import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Svg from './Svg'

function Hero(props) {
  return (
    <div className="social-media">
    <a href="https://www.linkedin.com/in/rodrigotrespalacios/" target="_blank">   
        <Svg
            className="social-media-icon"
            src={require('../static/images/round-linkedin.svg?include')}
        />
    </a>
    <a href="https://github.com/rodrigoTrespalacios" target="_blank">
        <Svg
            className="social-media-icon"
            src={require('../static/images/round-github.svg?include')}
        />
    </a>
    </div>
  )
}

export default Hero
