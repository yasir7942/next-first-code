import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return <footer className='text-gray-600 mt-12 fixed bottom-0 left-0 bg-white w-full'>
    <div className='container mx-auto flex items-center flex-col sm:flex-row py-8'>
        <a href='/' className='flex items-center justify-center md:justify-start text-gray-500'>
        <Image alt='Blog Logo'  width={150} height={150} src="/images/nextjs-logo.webp" />
            <span className='ml-3 text-md'>Blog</span>
        </a>

        <p className='text-sm text-gray-500 ps-2 sm:ml-4 sm:border-l-2 sm:border-gray-200 sm:sy-2 sm mt-0'>
        @ 2023 Next Js Blog -
        </p>
    </div>
  </footer>
}

export default Footer
