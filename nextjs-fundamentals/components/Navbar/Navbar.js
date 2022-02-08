import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <nav>
      <menu>
        <Link href='/'><a>Home</a></Link>
        <Link href='/about'><a>About</a></Link>
      </menu>
    </nav>
  )
}

export default Home;