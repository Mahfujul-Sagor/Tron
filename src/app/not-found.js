import Image from 'next/image';
import React from 'react'
import notfound from '/public/404.svg'
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const NotFound = () => {
  return (
    <div className='mt-[4rem] flex flex-col items-center gap-6'>
      <div className=''>
        <Image src={notfound} width={600} height={600} alt='not found image' className='object-cover'/>
      </div>
      <div className='flex flex-col items-center gap-6'>
        <h1 className='text-4xl font-bold'>Oops! Page Not Found.</h1>
        <p className='text-gray-400'>The page you are looking for is not available or has been moved. Try a different page or go to homepage with the button below.</p>
      </div>
      <div>
        <Button variant="outline" size='default' className='font-medium text-[1rem]' >
          <Link href='/'>Go To Home</Link>
        </Button>
      </div>
    </div>
  )
}

export default NotFound;