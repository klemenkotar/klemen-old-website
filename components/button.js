import React from 'react'
import Link from 'next/link'

const Button = props => (
    <div>
    <Link href={props.link}>
        <a>
        <div className='button'>
            <p>{props.text}</p>
        </div>
        </a>
    </Link>
    <style jsx>{`
        a {
          color: white;
          text-decoration: none;
          font-size: 16px;
        }
        .button {
            max-width: 80px;
            background-color: #313de5;
            padding-top: 1px;
            padding-bottom: 1px;
            padding-left: 40px;
            padding-right: 40px;
            margin: 12px;
            border-radius: 4%;
        }
      `}</style>
    </div>
);

export default Button;
