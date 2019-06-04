import React from 'react'
import withPosts, { sortByDate } from 'nextein/posts'
import { Content } from 'nextein/post'
import Head from 'next/head'
import PostPreview from '../components/PostPreview'
import Hero from '../components/Hero'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Spring, config, Transition } from 'react-spring'

export default withPosts( ({ posts }) => {
  const sliced = posts.sort(sortByDate)

  return (
    <main>
      <Header
        siteTitle="Rodrigo Trespalacios Blog"
        description="Rodrigo Trespalacios Blog"
      />
        <Spring
          // config={config.molasses}
          from={{ transform: 'translate3d(0,-40px,0)', opacity: 0 }}
          to={{ transform: 'translate3d(0, 0, 0)', opacity: 1}}>
          {props => 
            <div style={props}><Hero /></div>
          }
        </Spring>
      <section className="post-list">
        <Transition
          items={sliced} keys={sliced => sliced.data._entry}
          trail={0}
          from={{ transform: 'translate3d(0,-40px,0)', opacity: 0 }}
          enter={{ transform: 'translate3d(0,0px,0)', opacity: 1 }}
          leave={{ transform: 'translate3d(0,-40px,0)', opacity: 0  }}>
          {post => props =>
            <div style={{...props, marginBottom: 10}}><PostPreview
              {...post.data}
            /></div>
          }
        </Transition>
      </section>
      <Footer />
    </main>
  )
})
