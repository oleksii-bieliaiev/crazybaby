import React from 'react'
import Image from 'next/image'


const NavBar = () => {
  return (
    <div className='flex col-start-1 col-span-12 2xl:mb-10 lg:mb-17 md:mb-27 max-sm:mb-7 mt-7 max-sm:pl-[30px] max-sm:pr-[30px]'>
      <div className='flex w-full h-full justify-between items-center z-20 lg:pt-0 2xl:pb-0 2xl:mt-0 lg:pb-0 md:pt-0 sm:pt-6 md:pb-0 sm:pb-12 max-sm:pb-0 max-sm:pt-0 max-sm:w-full '>
        <Image
          src="/images/logo.svg"
          alt="Company Logo"
          width={161}
          height={26.21}
          className='object-contain'
        />

        <div className='text-[#4F4F4F] lg:gap-15 md:gap-7 flex items-center'>
          <a href='#features' className="
            uppercase relative cursor-pointer max-sm:hidden text-[14px] font-normal leading-[100%]
            transition-all duration-300
          hover:text-[#131313]
            hover:drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]
          ">
            specs
          </a>
          <a href='#features' className="
            uppercase relative cursor-pointer max-sm:hidden text-[14px] font-normal leading-[100%]
            transition-all duration-300
          hover:text-[#131313]
            hover:drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]
          ">
            en / ua
          </a>

          <button
            className=" md:w-[100px] sm:w-[240px] max-sm:hidden h-[48px] bg-[#333333] hover:bg-[#131313] tracking-[0] cursor-pointer font-semibold text-[12px] text-[#FFFFFF]  flex items-center justify-center gap-2 transition-colors duration-300">
            BUY
          </button>

          <a
            className='pl-0 flex hover:drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)] transition-drop-shadow duration-300 cursor-pointer'
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
