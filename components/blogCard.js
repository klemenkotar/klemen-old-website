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
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
        img {
            max-height: 100%;
            max-width: 100%;
        }
      `}</style>
    </div>
);

export default BlogCard;
