import React from 'react'
import Logo from '../../../Assets/images/LOGO.svg'

function HomeTab() {
  return (
    <div className=' p-6 '>
      <div className='w-[120px] '>
        <img src={Logo} alt="logo" className='invert'/>
      </div>
      <div className='text-[30px] text-white mulishbold mt-[60px]'>
      Good Day !<br/>
      How can we help?
      </div>

    </div>
  )
}

export default HomeTab
