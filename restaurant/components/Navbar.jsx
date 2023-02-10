/* eslint-disable react/no-unescaped-entities */
import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'



const Navbar = () => {
  const [nav,setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () =>{
    setNav(!nav);
  }

  useEffect(() => {
    const handleShadow = () =>{
      if (window.scrollY >= 90) {
        setShadow(true);
      }
      else {
        setShadow(false);
      }
    }
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div className={shadow ? 'fixed w-full h-[62px] shadow-xl z-[100] bg-[#f2f0e6]' : 
    'fixed w-full h-[62px] z-[100] bg-[#f2f0e6]'}>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
          <h2> Restaurant Kreta </h2>
        </Link>
        <div>
          <ul className='hidden md:flex text-[#000000]'>
            <Link href='/#about' scroll={false}>
              <li className='ml-10 text-md uppercase hover:border-b hover:border-[#000]'>Home</li>
            </Link>
            <Link href='/#menu' scroll={false}>
              <li className='ml-10 text-md uppercase hover:border-b hover:border-[#000]'>Kleine Speisekarte</li>
            </Link>
            <Link href='/#contact' scroll={false}>
              <li className='ml-10 text-md uppercase hover:border-b hover:border-[#000]'>Kontakt - Öffnungszeiten & Impressum</li>
            </Link>
          </ul>
          <div onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu size={25} color="black"/>
          </div>
        </div>
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-full h-screen md:hidden' : ''}>
        <div className={nav ? 'fixed left-0 top-0 h-screen w-[75%] sm:w-[60%] md:w-[45%] bg-[#f2f0e6] p-10 ease-in duration-500' 
                            : 'fixed left-[-100%] top-0 bg-[#f2f0e6] p-10 ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-between'>
            <h2>Restaurant Kreta</h2>
              <div onClick={handleNav} className='rounded-full shadow-sm shadow-gray-300 p-3 cursor-pointer'>
                <AiOutlineClose size={25} color="black" />
              </div>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link className='hover:border-b-black' href='/#about'>
                <li className=' py-4 text-m text-[#000]'>About</li>
              </Link>
              <Link href='/#menu'>
                <li className='py-4 text-m text-[#000]'>Menu</li>
              </Link>
              <Link href='/#contact'>
                <li className='py-4 text-m text-[#000]'>Contact</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar