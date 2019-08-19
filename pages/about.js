import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'
import Button from '../components/button'

const Home = () => (
  <div>
    <Head>
      <title>Git</title>
    </Head>

    <Nav />
    <div className='aligner'>
        <p className='title'>
            About Me
        </p>
        <div className='content'>
            <h1 className='section-title'>About Me</h1>
            <p className='description'>
                Here is the situation: my school (The University of Washington) uses GitLab 
                for ther version control needs so all of my School realted work and research
                porjects are on my GitLab account. My hacathon project are on my GitHub. Fewh
                that was complicated.
            </p>
            <div className="button-container">
                <Button link='' text='GitLab'/>
                <Button link='' text='GitHub'/>
            </div>
        </div>
        <div className='content'>
            <h1 className='section-title'>Skills</h1>
            <p className='description'>
                Here is the situation: my school (The University of Washington) uses GitLab 
                for ther version control needs so all of my School realted work and research
                porjects are on my GitLab account. My hacathon project are on my GitHub. Fewh
                that was complicated.
            </p>
            <div className="button-container">
                <Button link='' text='GitLab'/>
                <Button link='' text='GitHub'/>
            </div>
        </div>
        <div className='content'>
            <h1 className='section-title'>Research Interests</h1>
            <p className='description'>
                Here is the situation: my school (The University of Washington) uses GitLab 
                for ther version control needs so all of my School realted work and research
                porjects are on my GitLab account. My hacathon project are on my GitHub. Fewh
                that was complicated.
            </p>
            <div className="button-container">
                <Button link='' text='GitLab'/>
                <Button link='' text='GitHub'/>
            </div>
        </div>
    </div>

    <style jsx>{`
        .aligner {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
            width: 100%;
        }
        .title {
            font-size: 5rem;
            text-align: center;
        }
        .section-title {
            margin-top: 20%;
            font-size: 3rem;
        }
        .content {
            max-width: 45rem;
            font-size: 20px;
            margin: auto;
        }
        .button-container {
            width: 50%;
            margin: auto;
            display: flex;
            justify-content: space-around;
        }
    `}</style>
  </div>
)

export default Home
