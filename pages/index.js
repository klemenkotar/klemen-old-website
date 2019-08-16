import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'
import BlogCard from '../components/blogCard'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <Nav />

    <div className='hero'>
      <h1 className='title'>hi there, my name is klemen</h1>
      <p className='description'>
        To get started, edit <code>pages/index.js</code> and save to reload.
      </p>

      <div className='row'>
      <BlogCard img={'/static/img/blog/yet-another-rl-pong/thumbnail.png'}
                title="Yet Another RL Pong"
                summary="This is yet another blog about RL Pong from scratch inspired by Andrej Karpathy. This one uses PyTorch and explores how small tweaks produce huge deviations in the performance of Vanilla Policy Gradient"
                link="/"></BlogCard>
      <BlogCard img={'/static/img/blog/gazenet/thumbnail.png'}
                title="GazeNet"
                summary="This is yet another blog about RL Pong from scratch inspired by Andrej Karpathy. This one uses PyTorch and explores how small tweaks produce huge deviations in the performance of Vanilla Policy Gradient"
                link="/"></BlogCard>
      <BlogCard img={'/static/img/blog/hacklodge-seattle-wi19/thumbnail.png'}
                title="Hacklodge Seattle"
                summary="This is yet another blog about RL Pong from scratch inspired by Andrej Karpathy. This one uses PyTorch and explores how small tweaks produce huge deviations in the performance of Vanilla Policy Gradient"
                link="/"></BlogCard>
      </div>
      <Link href="/blog">
        <a>
          <p className="read-more">
            Read More
          </p>
        </a>
      </Link>
    </div>

    <div className="about">
      <h1>Hi, my name is Klemen</h1>
      <p>I am a CS student at the university of washington interested in.</p>
    </div>

    <style jsx>{`
      .title {
        margin: 0;
        width: 100%;
        padding-top: 140px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 1000px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .read-more {
        text-align: center;
        text-transform: uppercase;
        padding: 30px;
      }
      a {
        color: white;
        text-decoration: none;
      }
      .about {
        width: 100%;
        line-height: 1.15;
        font-size: 24px;
        position: reltive;
        max-width: 50rem;
        margin: auto;
      }
      .hero {
        color: #fff;
        width: 100%;
        position: relative;
        top: 0;
        z-index: 1;

        background: linear-gradient(11deg, #2fb290, #552fb2, #d41abc, #ecdd00);
        background-size: 800% 800%;

        -webkit-animation: AnimationName 19s ease infinite;
        -moz-animation: AnimationName 19s ease infinite;
        animation: AnimationName 19s ease infinite;
      }

      @-webkit-keyframes AnimationName {
            0%{background-position:32% 0%}
            50%{background-position:69% 100%}
            100%{background-position:32% 0%}
      }
      
      @-moz-keyframes AnimationName {
            0%{background-position:32% 0%}
            50%{background-position:69% 100%}
            100%{background-position:32% 0%}
      }

      @keyframes AnimationName { 
            0%{background-position:32% 0%}
            50%{background-position:69% 100%}
            100%{background-position:32% 0%}
      }
    `}</style>
  </div>
)

export default Home
