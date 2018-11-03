import React from 'react'
import withPosts, { sortByDate } from 'nextein/posts'
import { Content } from 'nextein/post'
import Head from 'next/head'
import PostPreview from '../components/PostPreview'
import Hero from '../components/Hero'
import Header from '../components/Header'

export default withPosts( ({ posts }) => {
  const sliced = posts.sort(sortByDate).slice(0, 1)
  return (
    <main>
      <Header
        siteTitle="Rodrigo Trespalacios Blog"
        description="Rodrigo Trespalacios Blog"
      />
      <Hero />
      <h3 style={{fontWeight: 700, textTransform: 'uppercase', marginBottom: 30}}>Latest Posts</h3>
      <section className="post-list">
      {
        sliced.map(post =>
          <PostPreview
            {...post.data}
          />
        )
      }
      </section>
    </main>
  )
})
