import React from 'react'
import aboutImg from '/public/about.webp'
import Image from 'next/image';
import Link from 'next/link';


const About = () => {
  return (
    <div className='my-[3.75rem] flex items-center gap-[3.125rem]'>
      <div className='flex-1 h-[400px] relative max-md:hidden'>
        <Image src={aboutImg} fill alt='about image' className='object-cover rounded' />
      </div>
      <div className='flex-1 flex flex-col gap-[20px] items-start'>
        <p className='text-xl font-semibold text-[#625df5]'>Who are we</p>
        <h1 className='text-4xl font-bold'>We provide high quality Articles & blogs</h1>
        <p className='text-gray-400'>Sed ullamcorper dui at risus viverra, nec cursus leo ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos congue dui nec dui lobortis maximus.</p>
        <p className='text-gray-400'>Curabitur pretium, libero vitae pharetra rhoncus, tellus urna auctor orci, eu dictum diam diam nec neque. Pellentesque.</p>
        <button className='border rounded-md px-4 py-3'><Link href='/privacypolicy'>Privacy & Policy</Link></button>
      </div>
    </div>
  )
}

export const metadata = {
  title: "About",
  description: "This is the about page",
};

export default About;