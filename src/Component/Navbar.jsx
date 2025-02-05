import React from 'react'
import { Link } from 'react-router-dom'
import { IoCard } from "react-icons/io5";

export default function Navbar() {
  return (
    <div>
      <nav className="bg-white border-gray-200 -mx-[160px] shadow-sm shadow-slate-400">
    <div className="  flex  items-center justify-between p-5 w-full mb-20 mt-[-32px]  ">
      <a className="flex items-center  rtl:space-x-reverse cursor-pointer">
      <IoCard className="w-7 h-7 bg-black text-white rounded-full p-1 mr-2 " />
      <span className='self-center text-2xl font-semibold whitespace-nowrap '>Payment</span>
      </a>
   <button className="inline-flex items-center p-2  h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5"  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" >
      <path  stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
      </svg>
  </button>

  <div className="hidden w-full md:block md:w-auto">
    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
        <Link className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"to="/">InputCard </Link>
       </li>
       <li>
        <Link className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-400  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="/Transaction"> Transaction</Link>
       </li>
       <li>
        <Link  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-400  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="/History" >History</Link>
       </li>
    </ul>
  </div>
  </div>
  </nav>
  </div>

  )
}





