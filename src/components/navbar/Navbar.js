import facebook from '/public/facebook.png'
import instagram from '/public/instagram.png'
import youtube from '/public/youtube.png'

import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

import AuthLinks from '../authLinks/AuthLinks'
import { ModeToggle } from '../modeToggle/ModeToggle'

export default function Navbar() {

  return (
    <div className='nav-container h-[100px] flex justify-between items-center bg-transparent backdrop-blur-3xl sticky top-0 left-0 right-0 z-[9999]'>
      <div className='socials flex gap-[10px] flex-1 max-lg:hidden'>
        <Image src={facebook} alt='facebook' width={34} height={34} />
        <Image src={instagram} alt='instagram' width={34} height={34} />
        <Image src={youtube} alt='youtube' width={34} height={34} />
      </div>
      <div className='flex-1 text-center text-[36px] font-bold max-xl:text-[32px] max-lg:text-left max-md:text-[24px]'>Tron</div>
      <div className='links flex gap-5 items-center flex-1 text-[20px] max-xl:text-[18px] max-lg:gap-[15px] max-sm:justify-end'>
        <ModeToggle />
        <Link className='max-sm:hidden' href='/'>Home</Link>
        <Link className='max-sm:hidden' href='/about'>About</Link>
        <AuthLinks/>
      </div>
    </div>
  )
}
