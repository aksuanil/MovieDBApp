import React from 'react'
import '../assets/dist/flowbite.css';
import logo from '../assets/img/logo.png'
import textLogo from '../assets/img/logo-text.png'
import SignupPopup from './SignupPopup';
import SigninPopup from './SigninPopup';

export default function Header() {
  return (
    <>
    <nav className="px-2 sm:px-4 py-2.5 bg-gradient-to-tl from-gray-700 via-gray-900 to-black">
    <div className="container flex flex-wrap justify-between items-center mx-auto">
    <a href="/" className="flex items-center ">
        <img className='ml-1' src={logo} alt="Logo" width="60" height="60"/>
        <img className='ml-[6px] w-28 h-12' src={textLogo} alt="Logo"/>
        <span className="self-center text-lg font-semibold whitespace-nowrap"></span>
    </a>
    <div className="flex md:order-1">
        <div className="hidden relative mr-3 md:mr-0 ml-8 md:block w-80">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
            </div>
            <form  className="form-inline my-2 my-lg-0" action="/search" method="GET">
            <input type="search" name="search" id="email-adress-icon" className="block p-2 pl-10 w-full text-gray-300 bg-gray-700 rounded-lg border border-gray-600 sm:text-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Arama..."/>
            </form>
        </div>
        <button data-collapse-toggle="mobile-menu-3" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu-3" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
    </div>
    <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-2" id="mobile-menu-3">
        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        <li>
            <a href="/toprated" className="text-base block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 " aria-current="page">En İyi Filmler</a>
        </li>
        <li>
            <a href="/about" className="text-base block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Hakkında</a>
        </li>
        <li>
            <a href="#" className="text-base block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 " data-modal-toggle="signup-modal">Üye Ol</a>
        <SignupPopup/>
        </li>
        <li>
            <a href="#" className="text-base block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"data-modal-toggle="signin-modal">Giriş Yap</a>
        <SigninPopup/>
        </li>
        </ul>
    </div>
    </div>
    </nav>
    </>
  )
}
