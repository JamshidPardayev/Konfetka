import React from 'react'
import Navbar from '../header/navbar/page'
import GalleryPart from './galleryPart/page'

const Gallery = () => {
  return (
    <div className='min-h-[100vh] bg-gradient-to-r from-[#121214] via-[#0f0302] to-[#121214]'>
      <Navbar />
      <GalleryPart />
    </div>
  )
}

export default Gallery