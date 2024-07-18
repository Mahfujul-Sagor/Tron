"use client"

import React from 'react'
import { useRouter } from "next/navigation";

export default function Pagination({ page, hasPrev, hasNext }) {

  const router = useRouter();

  return (
    <div className='flex justify-between'>
      <button 
      className='w-[100px] rounded p-4 bg-teal-400 text-white cursor-pointer disabled:bg-teal-400/45 disabled:cursor-not-allowed'
      disabled={!hasPrev}
      onClick={() => router.push(`?page=${page - 1}`)}
      >
        Previous
      </button>

      <button 
      className='w-[100px] rounded p-4 bg-teal-400 text-white cursor-pointer disabled:bg-teal-400/45 disabled:cursor-not-allowed'
      disabled={!hasNext}
      onClick={() => router.push(`?page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  )
}
