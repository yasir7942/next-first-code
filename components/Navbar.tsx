import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return <nav className='flex items-center justify-between py-6' >
      <Link href="/">
           <div className="flex items-center cursor-pointer">
            <Image alt='Blog Logo'  width={150} height={150} src="/images/nextjs-logo.webp" />
            <span className='font-bold ml-5 text-lg  text-primary'>Blog</span>
           </div> 
      </Link>

      <ul className='flex items-center'>
        <li className='mr-6 font-medium text-gray-600'>
            <a href='#' >Products</a>
        </li>
        <li className='mr-6 font-medium text-gray-600'>
            <a href='#' >Pricing</a>
        </li>
        <li className='mr-6 font-medium text-gray-600'>
            <a href='#' >Docs</a>
        </li>
        <li className='mr-6 font-medium text-gray-600'>
            <a href='#' >Company</a>
        </li>
      </ul>

      <ul className='flex items-center'>
         
      </ul>

      <ul className='flex items-center'>
        <li className='mr-6 font-medium text-gray-600'>
            <a className='hover:text-gray-300' href=''>Log In</a>
        </li>

        <li className='font-medium text-gray-600'>
            <a className='bg-primary py-2 px-2 text-white hover:bg-primary-dark sounded-sm transition-all' href=''>Sign up</a>
        </li>


      </ul>

  </nav> 
}

export default Navbar
