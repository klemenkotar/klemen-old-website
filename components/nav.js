import React from 'react'
import Link from 'next/link'

const links = [
  { href: '/git', label: 'Git' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About'}
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href='/'>
          <a className='home-link'>Home</a>
        </Link>
      </li>
      <div className='other-links'>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </div>
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
        position: relative;
        z-index: 5;
        width: 100%;
        text-transform: uppercase;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 20px;
      }
      li {
        display: flex;
        padding: 6px 18px;
      }
      a {
        color: black;
        text-decoration: none;
        font-size: 13px;
      }
      .home-link {
        font-weight: 900;
      }
      .other-links {
        display: flex;
        justify-content: space-between;
        max-width: 200px;
      }
    `}</style>
  </nav>
)

export default Nav
