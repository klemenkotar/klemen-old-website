import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'
import Button from '../components/button'
import BlogCard from '../components/blogCard'

const Home = () => (
  <div>
    <Head>
      <title>Blog</title>
    </Head>

    <Nav />
    <div>
        <p className='title'>
            Blog Posts
        </p>
        <div className='row'>
            <div className='blog-card-container'>
            <BlogCard img={'/static/img/blog/yet-another-rl-pong/thumbnail.png'}
                    title="Yet Another RL Pong"
                    summary="This is yet another blog about RL Pong from scratch inspired by Andrej Karpathy. This one uses PyTorch and explores how small tweaks produce huge deviations in the performance of Vanilla Policy Gradient"
                    link="/"
                    className='shadow'></BlogCard>
            </div>
            <BlogCard img={'/static/img/blog/gazenet/thumbnail.png'}
                        title="GazeNet"
                        summary="This is yet another blog about RL Pong from scratch inspired by Andrej Karpathy. This one uses PyTorch and explores how small tweaks produce huge deviations in the performance of Vanilla Policy Gradient"
                        link="/"></BlogCard>
            <BlogCard img={'/static/img/blog/hacklodge-seattle-wi19/thumbnail.png'}
                        title="Hacklodge Seattle"
                        summary="This is yet another blog about RL Pong from scratch inspired by Andrej Karpathy. This one uses PyTorch and explores how small tweaks produce huge deviations in the performance of Vanilla Policy Gradient"
                        link="/"></BlogCard>
            <BlogCard img={'/static/img/blog/yet-another-rl-pong/thumbnail.png'}
                    title="Yet Another RL Pong"
                    summary="This is yet another blog about RL Pong from scratch inspired by Andrej Karpathy. This one uses PyTorch and explores how small tweaks produce huge deviations in the performance of Vanilla Policy Gradient"
                    link="/"
                    className='shadow'></BlogCard>
            <BlogCard img={'/static/img/blog/gazenet/thumbnail.png'}
                        title="GazeNet"
                        summary="This is yet another blog about RL Pong from scratch inspired by Andrej Karpathy. This one uses PyTorch and explores how small tweaks produce huge deviations in the performance of Vanilla Policy Gradient"
                        link="/"></BlogCard>
            <BlogCard img={'/static/img/blog/hacklodge-seattle-wi19/thumbnail.png'}
                        title="Hacklodge Seattle"
                        summary="This is yet another blog about RL Pong from scratch inspired by Andrej Karpathy. This one uses PyTorch and explores how small tweaks produce huge deviations in the performance of Vanilla Policy Gradient"
                        link="/"></BlogCard>
        </div>
    </div>

    <style jsx>{`
        .title {
            font-size: 5rem;
            text-align: center;
        }
        .row {
            max-width: 1000px;
            margin: 80px auto 40px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            flex-wrap: wrap;
        }
        .blog-card-container {
            margin-bottom: 20px;
        }
    `}</style>
  </div>
)

export default Home
