import React from 'react'
import Image from 'next/image'


const NavBar = () => {
  return (
    <div className='flex col-start-1 col-span-12 lg:h-[80px] max-sm:justify-center max-sm:w-full max-sm:px-[30px] '>
       <div className='flex w-full h-full justify-between items-center z-20 lg:pt-0 2xl:pb-0 2xl:mt-0 lg:pb-0 md:pt-6 sm:pt-6 md:pb-12 sm:pb-12 max-sm:pb-0 max-sm:pt-6 max-sm:w-full '>
        <Image
          src="/images/logo.svg"
          alt="Company Logo"
          width={161}
          height={26.21}
          className='object-contain'
        />
       </div>
    </div>
  )
}

export default NavBar
