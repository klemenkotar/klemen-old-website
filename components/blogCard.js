import React from 'react'
import Link from 'next/link'

const BlogCard = props => (
    <div>
    <Link href={props.link}>
        <a>
        <div className='blog-card'>
            <h3>{props.title}</h3>
            <img src={props.img}></img>
        </div>
        </a>
    </Link>
    <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
        }
        a {
          color: black;
          text-decoration: none;
          font-size: 14px;
        }
        .blog-card {
            max-width: 250px;
            background-color: #fff;
            padding: 12px;
            border-radius: 2%;
        }
        img {
            max-height: 100%;
            max-width: 100%;
        }
      `}</style>
    </div>
);

export default BlogCard;
