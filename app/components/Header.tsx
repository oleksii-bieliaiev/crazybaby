import React from 'react'
import NavBar from './NavBar'
import Image from 'next/image'

const Header = () => {
  return (
    <section id='header' className='relative flex flex-col lg:min-h-auto max-sm:h-auto w-screen  lg:mb-10 md:mb-30 sm:mb-20 max-sm:mb-40'>
      <div className='grid lg:grid-cols-12 2xl:gap-8 lg:gap-x-0 lg:gap-y-0 md:grid-cols-8 sm:grid-cols-6 max-sm:grid-cols-4 lg:pr-[123px] lg:pl-[123px] md:pr-[34px] md:pl-[34px]  md:w-auto md:mx-0 sm:w-full sm:mx-auto max-sm:w-full max-sm:mx-auto  '>
        <NavBar />
        <div className='lg:col-start-1 lg:col-span-3 md:col-start-1 md:col-span-3 max-sm:col-start-1 max-sm:col-span-4 z-50 lg:mt-15 text-[#333333] max-sm:items-center max-sm:flex max-sm:flex-col max-sm:order-2 max-sm:pl-[30px] max-sm:pr-[30px] '>
          <div className='font-sans lg:text-[62px] md:text-[48px] max-sm:text-[40px] lg:leading-[78px] md:leading-[62px] max-sm:leading-[52px] md:tracking-[0] mb-8'>
            <h1 className='uppercase font-bold'>Futuristic Wireless Speaker</h1>
          </div>
          <div className='font-sans md:text-[16px] md:leading-[24px] md:tracking-[0]'>
            <p className='font-normal md:w-[260px] max-sm:items-center max-sm:flex '>
              Luna’s performance is balanced and smooth in all frequency ranges which makes the music both naturally pleasant and distinctly more layered.
            </p>
          </div>
        </div>
        <div className='lg:col-start-5 lg:col-span-8 md:col-start-4 md:col-span-5 max-sm:col-start-1 max-sm:col-span-4 lg:mt-0 md:mt-3 max-sm:order-1 max-sm:mb-12 max-sm:translate-x-2'>
          <Image src="/images/img_desktop.svg"
            alt="img_desktop"
            width={816}
            height={464}
            className='object-cover object-left lg:w-[816px] lg:h-[464px] md:w-[430px] md:h-[317px] max-sm:w-full max-sm:h-[250px] justify-center max-sm:items-center'
          />
        </div>
      </div>
    </section>
  )
}

export default Header
