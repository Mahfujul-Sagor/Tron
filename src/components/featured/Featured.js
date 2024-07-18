import Image from 'next/image'
import React from 'react'

import p1 from '/public/p1.jpeg'

export default function Featured() {
  return (
    <div className='mt-[40px]'>
      <h1 className='text-[6rem] font-light max-xl:text-[72px] max-lg:text-[64px] max-md:text-[48px] max-sm:text-[36px]'>
      <b className='font-bold'>Hey, Sagor here!</b> Discover my stories and creative ideas.
      </h1>
      <div className='mt-[3.75rem] flex items-center gap-[3.125rem]'>
        <div className='flex-1 h-[500px] relative max-lg:hidden'>
          <Image src={p1} alt='postImage' fill className='object-cover rounded' />
        </div>
        <div className='flex-1 flex flex-col gap-[20px]'>
          <h1 className='text-[2.5rem]'>Lorem ipsum dolor sit amet alim consectetur adipisicing elit.</h1>
          <p className='text-[20px] font-light'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
          </p>
          <button className='py-4 px-5 rounded-md w-max border'>Read More</button>
        </div>
      </div>
    </div>
  )
}
