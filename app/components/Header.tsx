import React from 'react'
import NavBar from './NavBar'

const Header = () => {
  return (
    <section id='header' className='relative flex flex-col lg:min-h-auto md:max-h-[125vh] max-sm:min-h-auto w-[100vw] lg:mb-10 md:mb-30 sm:mb-20 max-sm:mb-40'>
      <div className='grid lg:grid-cols-12 2xl:gap-8 lg:gap-x-8 lg:gap-y-2 md:grid-cols-6 sm:grid-cols-6 max-sm:grid-cols-2 lg:pr-[123px] lg:pl-[123px] md:pr-[34px] md:pl-[34px] sm:pl-[34px] max-sm:pl-0 sm:pr-[34px] max-sm:pr-0  md:w-auto md:mx-0 sm:w-full sm:mx-auto max-sm:w-full max-sm:mx-auto  '>
       <NavBar />
      </div>
    </section>
  )
}

export default Header
