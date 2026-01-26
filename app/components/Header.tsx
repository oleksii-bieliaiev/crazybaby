import React from 'react'
import NavBar from './NavBar'
import Image from 'next/image'

const Header = () => {
  return (
    <section id='header' className='relative flex flex-col lg:min-h-auto max-sm:min-h-auto w-screen lg:mb-10 md:mb-30 sm:mb-20 max-sm:mb-40'>
      <div className='grid lg:grid-cols-12 2xl:gap-8 lg:gap-x-0 lg:gap-y-0 md:grid-cols-6 sm:grid-cols-6 max-sm:grid-cols-2 lg:pr-[123px] lg:pl-[123px] md:pr-[34px] md:pl-[34px] sm:pl-[34px] max-sm:pl-0 sm:pr-[34px] max-sm:pr-0  md:w-auto md:mx-0 sm:w-full sm:mx-auto max-sm:w-full max-sm:mx-auto  '>
        <NavBar />
        <div className='lg:col-start-1 lg:col-span-3 z-50 mt-15 text-[#333333]'>
          <div className='font-sans md:text-[62px] md:leading-[78px] md:tracking-[0] mb-8'>
            <p className='uppercase font-bold'>Futuristic Wireless Speaker</p>
          </div>
          <div className='font-sans md:text-[16px] md:leading-[24px] md:tracking-[0]'>
            <p className='font-normal w-[260px]'>
              Luna’s performance is balanced and smooth in all frequency ranges which makes the music both naturally pleasant and distinctly more layered.
            </p>
          </div>
        </div>
        <div className='lg:col-start-5 lg:col-span-8'>
          <Image src="/images/img_desktop.svg"
            alt="img_desktop"
            width={816}
            height={464}
            className='object-cover object-left w-[816px] h-[464px] justify-center'
          />
        </div>
      </div>
    </section>
  )
}

export default Header
