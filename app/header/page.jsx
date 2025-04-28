import React from 'react'
import Navbar from './navbar/page'
import Hero from './hero/page'

const Header = () => {
  return (
    <div className='min-h-[100vh] bg-gradient-to-r from-[#121214] via-[#0f0302] to-[#121214]'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default Header
