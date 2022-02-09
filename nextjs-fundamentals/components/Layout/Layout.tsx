import React from 'react'
import Link from 'next/link'
import Navbar from '../Navbar/Navbar'

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      { children }
      <footer>This is the footer</footer>
    </div>
  )
}

export default Layout
