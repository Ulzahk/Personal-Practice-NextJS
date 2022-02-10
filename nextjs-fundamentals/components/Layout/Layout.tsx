import React from 'react'
import Navbar from '../Navbar/Navbar'
// import styles from './layout.module.css';

const Layout: React.FC = ({ children }) => {
  return (
    // <div className='container'> // Classic css
    // <div className={styles.container}> // CSS Module
    <div>
      <Navbar />
      { children }
      <footer>This is the footer</footer>
      <style jsx>{`
        div {
          background-color: blue;
        }
      `}</style>
    </div>
  )
}

export default Layout
