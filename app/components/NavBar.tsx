import React from 'react'
import Image from 'next/image'


const NavBar = () => {
  return (
    <div className='flex col-start-1 col-span-12 2xl:mb-10 lg:mb-17 mt-7'>
      <div className='flex w-full h-full justify-between items-center z-20 lg:pt-0 2xl:pb-0 2xl:mt-0 lg:pb-0 md:pt-6 sm:pt-6 md:pb-12 sm:pb-12 max-sm:pb-0 max-sm:pt-6 max-sm:w-full '>
        <Image
          src="/images/logo.svg"
          alt="Company Logo"
          width={161}
          height={26.21}
          className='object-contain'
        />

        <div className='text-[#4F4F4F] lg:gap-15 lg:flex hidden items-center'>
          <a href='#features' className='uppercase relative cursor-pointer hover:text-[#03839E] before:absolute before:left-0 before:bottom-0 before:h-[1px] text-[14px] font-normal leading-[100%] before:w-full before:bg-[#03839E] before:scale-x-0 before:origin-bottom-left before:transition-transform before:duration-300 hover:before:scale-x-100'>
            specs
          </a>
          <a href='#about_us' className='uppercase relative cursor-pointer hover:text-[#03839E] before:absolute before:left-0 before:bottom-0 before:h-[1px]  text-[14px] font-normal leading-[18%] before:w-full before:bg-[#03839E] before:scale-x-0 before:origin-bottom-left before:transition-transform before:duration-300 hover:before:scale-x-100'>
            en / ua
          </a>

          <button
            className=" md:w-[100px] sm:w-[240px] max-sm:w-full h-[48px] bg-[#333333] hover:bg-[#131313] tracking-[0] cursor-pointer font-semibold text-[12px] text-[#FFFFFF]  flex items-center justify-center gap-2 transition-colors duration-300">
            BUY
          </button>

          <a
            className='pl-0 flex hover:opacity-50 transition-opacity duration-300 cursor-pointer'
          >
            <Image
              src="/images/menu.svg"
              alt="menu"
              width={32}
              height={32}
              className='pl-0 w-[32px] h-[32px] flex '
            />
          </a>

        </div>

      </div>
    </div>
  )
}

export default NavBar
