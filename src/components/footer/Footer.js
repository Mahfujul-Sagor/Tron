import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className='mt-[50px] py-[20px] flex items-center justify-between text-[var(--softTextColor)] max-lg:flex-col max-lg:gap-[50px]'>
      <div className='flex-1 flex flex-col gap-[14px]'>
        <div className='flex items-center gap-[10px]'>
          <Image src="/logo.jpg" alt="Tron" width={50} height={50} />
          <h1 className='text-2xl'>Tron</h1>
        </div>
        <p className='font-light'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
          necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum
          porro sequi, totam minima consequuntur, aspernatur deleniti vero
          repellendus dorales.
        </p>
        <div className='mt-[10px] flex gap-[10px]'>
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
        </div>
      </div>
      <div className='flex-1 flex justify-end gap-[100px] max-lg:gap-[50px] max-md:w-full max-md:justify-between max-sm:text-[14px]'>
        <div className='flex flex-col gap-[10px] font-light'>
          <span className='font-bold'>Links</span>
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className='flex flex-col gap-[10px] font-light'>
          <span className='font-bold'>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className='flex flex-col gap-[10px] font-light'>
          <span className='font-bold'>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;