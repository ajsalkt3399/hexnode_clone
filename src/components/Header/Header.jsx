import React from 'react'
import NavBar from './NavBar'
import BannerSection from './BannerSection'

function Header({style}) {
  return (
    <div   className={``}>
        <NavBar/>
        <div className='bg-[#020A19]'>
        <BannerSection style="custom_width" />
        </div>

    </div>
  )
}

export default Header
