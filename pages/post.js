import React from 'react'
import Head from 'next/head'
import withPost, { Content } from 'nextein/post'
import dayjs from 'dayjs'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Spring } from 'react-spring'

export default withPost(({ post }) => (
  <Spring
    from={{ transform: 'translate3d(0,-40px,0)', opacity: 0 }}
    to={{ transform: 'translate3d(0, 0, 0)', opacity: 1}}>
    {props => 
    <main style={props}>
      <Header
        siteTitle="Rodrigo Trespalacios Blog"
        description={post.data.title}
      />
      <Link prefetch href="/">
        <a href="/">« Back to Posts</a>
      </Link>
      <header>
        <h1>{post.data.title}</h1>
      </header>
      <section>
        <Content {...post} />
      </section>
      <hr style={{marginBottom: 10}}/>
      <Link prefetch href="/">
        <a href="/">« Back to Posts</a>
      </Link>
      <Footer />
    </main>
  }</Spring>
))
