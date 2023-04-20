import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch , AiFillTag} from 'react-icons/ai'
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb'
import { FaUserFriends, FaWallet } from 'react-icons/fa'
import { MdFavorite, MdHelp } from 'react-icons/md'

const Navbar = () => {
    const [nav , setNav] = useState(false)
    return (
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
            {/* left */}
            <div className='flex items-center'>
                <div className='cursor-pointer'>
                    <AiOutlineMenu size={30} onClick={()=>{setNav(!nav)}}/>
                </div>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2 flex'>
                    Best <span className='font-bold text-orange-500'>Eats</span>
                </h1>
                <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                    <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                    <p className='p-2'>Pickup</p>
                </div>
            </div>
            {/* searhinput */}
            <div className='flex items-center rounded-full px-2 w-[200px] sm:w-[400px] lg:w-[500px] bg-gray-200'>
                <AiOutlineSearch size={20} />
                <input type="text" name="" id="" placeholder='serch food' className='bg-transparent p-2 w-full focus:outline-none' />
            </div>
            {/* crat btn */}
            <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
                <BsFillCartFill size={20} className='mr-2' /> Cart
            </button>
            {/* mobile version */}
            {/* overlay */}

            {nav?<div className='bg-black/80 fixed top-0 left-0 w-full z-10 h-screen transition-all duration-200'></div>:''}
            {/* side menu */}
            <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
                <AiOutlineClose size={20} className='absolute top-4 right-4 cursor-pointer ' onClick={()=>{setNav(!nav)}} />
                <h2 className='text-2xl p-4'>
                    Best <span className='font-bold text-orange-600' >Eats</span>
                </h2>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-800'>
                        <li className='text-xl py-4 flex hover:border-b cursor-pointer hover:border-b-gray-500'><TbTruckDelivery size={25} className='mr-4' /> Orders</li>
                        <li className='text-xl py-4 flex hover:border-b cursor-pointer hover:border-b-gray-500'><MdFavorite size={25} className='mr-4' /> Favorites</li>
                        <li className='text-xl py-4 flex hover:border-b cursor-pointer hover:border-b-gray-500'><FaWallet size={25} className='mr-4' /> Wallet</li>
                        <li className='text-xl py-4 flex hover:border-b cursor-pointer hover:border-b-gray-500'><MdHelp size={25} className='mr-4' /> Help</li>
                        <li className='text-xl py-4 flex hover:border-b cursor-pointer hover:border-b-gray-500'><AiFillTag size={25} className='mr-4' /> Promotions</li>
                        <li className='text-xl py-4 flex hover:border-b cursor-pointer hover:border-b-gray-500'><BsFillSaveFill size={25} className='mr-4' /> Best Ones</li>
                        <li className='text-xl py-4 flex hover:border-b cursor-pointer hover:border-b-gray-500'><FaUserFriends size={25} className='mr-4' /> Invite Friends</li>
                    </ul>
                </nav>

            </div>

        </div>
    )
}

export default Navbar
