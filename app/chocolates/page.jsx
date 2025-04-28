import React from 'react'
import Navbar from '../header/navbar/page'
import ChocolatesPart from './chocolatesPart/page'

const Chocolates = () => {
  return (
    <div className='min-h-[100vh] bg-gradient-to-r from-[#121214] via-[#0f0302] to-[#121214]'>
      <Navbar />
      <ChocolatesPart />
    </div>
  )
}

export default Chocolates
