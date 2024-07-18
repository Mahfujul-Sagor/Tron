"use client"


import Image from 'next/image'
import React, { useContext } from 'react'

import moon from '/public/moon.png'
import sun from '/public/sun.png'
import { ThemeContext } from '@/context/ThemeContext'

const ThemeToggle = () => {

  const {theme, toggle} = useContext(ThemeContext);


  return (
    <div
    className='container bg-black w-[40px] h-[20px] rounded-[50px] flex justify-between items-center cursor-pointer relative'
    onClick={toggle}
    style={theme === 'dark' ? {backgroundColor:"white"} : {backgroundColor:"#0f172a"}}
    >
      <Image src={moon} alt='moon' width={14} height={14}/>
      <div
      className="ball size-[15px] rounded-full bg-white absolute"
      style={theme === 'dark' ? { left: 1, background:"#0f172a"} : { right: 1, background:"white"}}
      ></div>
      <Image src={sun} alt='sun' width={14} height={14}/>
    </div>
  )
}

export default ThemeToggle;