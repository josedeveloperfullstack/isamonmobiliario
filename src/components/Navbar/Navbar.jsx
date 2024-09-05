// src/components/Navbar/Navbar.jsx

import React, { useState } from 'react';
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from 'react-icons/fa6';
import { FaRegUser, FaCaretDown, FaBars, FaTimes } from "react-icons/fa";

const menu = [
  { id: 1, name: "Muebles", link: "/#" },
  { id: 2, name: "Organización", link: "/#" },
  { id: 3, name: "Nuevos productos", link: "/#" },
  { id: 4, name: "Ofertas", link: "/#" },
  { id: 5, name: "Idéa tu proyecto", link: "/#" },
];

const ninosYBebesDropdown = [
  { id: 1, name: "Torres de aprendizaje", link: "/ninos-y-bebes/torres-de-aprendizaje" },
  { id: 2, name: "Material Homeschooling", link: "/ninos-y-bebes/material-homeschooling" },
  { id: 3, name: "Cocinas", link: "/ninos-y-bebes/cocinas" },
];

const mueblesDropdown = [
  { id: 1, name: "Sillas", link: "/muebles/sillas" },
  { id: 2, name: "Sofás", link: "/muebles/sofas" },
  { id: 3, name: "Mesas y escritorios", link: "/muebles/mesas-y-escritorios" },
  { id: 4, name: "Camas", link: "/muebles/camas" },
  { id: 5, name: "Cómodas y cajoneras", link: "/muebles/comodas-y-cajoneras" },
  { id: 6, name: "Vitrinas", link: "/muebles/vitrinas" },
  { id: 7, name: "Closets", link: "/muebles/closets" },
  { id: 8, name: "Bifés", link: "/muebles/bifes" },
  { id: 9, name: "Sofás", link: "/muebles/mesas-y-escritorios" },
  { id: 10, name: "Muebles de exterior", link: "/muebles/muebles-de-exterior" },
  { id: 11, name: "Sofás", link: "/muebles/mesas-y-escritorios" },
  { id: 12, name: "Muebles de comedor", link: "/almacenamiento/muebles-de-comedor" },

];

const almacenamientoDropdown = [
  { id: 1, name: "Organizadores", link: "/almacenamiento/organizadores" },
  { id: 2, name: "Estantes", link: "/almacenamiento/estantes" },
  { id: 2, name: "Repisas", link: "/almacenamiento/repisas" },

];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMueblesDropdownOpen, setIsMueblesDropdownOpen] = useState(false);
  const [isAlmacenamientoDropdownOpen, setIsAlmacenamientoDropdownOpen] = useState(false); // Estado para el dropdown de Almacenamiento

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMueblesDropdown = () => {
    setIsMueblesDropdownOpen(!isMueblesDropdownOpen);
  };

  const toggleAlmacenamientoDropdown = () => {
    setIsAlmacenamientoDropdownOpen(!isAlmacenamientoDropdownOpen);
  };

  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-black duration-200 relative z-40'>
      {/* Upper Navbar */}
      <div className='bg-white/40 py-2'>
        <div className='container flex justify-between items-center'>
          {/* Logo */}
          <div>
            <a href="#" className="font-serif text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="logo" className='w-36' />
            </a>
          </div>

          {/* Search bar and Icons: User, Cart, Hamburger */}
          <div className='flex justify-between items-center gap-4'>
            <div className='relative group hidden sm:block'>
              <input
                type="text"
                placeholder='Buscar productos...'
                className='w-[200px] sm:w-[300px] transition-all duration-300 rounded-full border border-azulisamon px-2 py-1 focus:outline-none focus:border-amarilloisamon'
              />
              <IoMdSearch className='text-azulisamon absolute top-1/2 -translate-y-1/2 right-3' />
            </div>
            <button className='relative p-3'>
              <FaRegUser className='text-xl text-azulisamon dark:text-amarilloisamon' />
            </button>
            <button className='relative p-3'>
              <FaCartShopping className='text-xl text-azulisamon dark:text-amarilloisamon' />
              <div className='w-4 h-4 bg-rosadoisamon text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>4</div>
            </button>
            {/* Hamburger Icon for Mobile */}
            <button onClick={toggleMenu} className='text-xl text-azulisamon dark:text-amarilloisamon focus:outline-none sm:hidden'>
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='sm:hidden'>
          {/* Search Bar for Mobile */}
          <div className='p-4'>
            <div className='relative'>
              <input
                type="text"
                placeholder='Buscar productos...'
                className='w-full rounded-full border border-azulisamon px-4 py-2 focus:outline-none focus:border-amarilloisamon'
              />
              <IoMdSearch className='text-azulisamon absolute top-1/2 transform -translate-y-1/2 right-3' />
            </div>
          </div>
          <ul className='flex flex-col items-center bg-white dark:bg-gray-900 p-4'>
            <li className='group relative cursor-pointer w-full text-center'>
              <a href="#" onClick={toggleDropdown} className='flex items-center justify-center gap-[2px] py-2 hover:text-amarilloisamon duration-200'>
                Niños y bebes
                <span>
                  <FaCaretDown className={`transition-all duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </span>
              </a>
              {isDropdownOpen && (
                <div className='bg-white dark:bg-gray-900 rounded-md w-full'>
                  <ul className='flex flex-col items-center'>
                    {ninosYBebesDropdown.map((data) => (
                      <li key={data.id} className='w-full'>
                        <a href={data.link} className='inline-block w-full py-2 hover:bg-amarilloisamon/40'>{data.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
            <li className='group relative cursor-pointer w-full text-center'>
              <a href="#" onClick={toggleMueblesDropdown} className='flex items-center justify-center gap-[2px] py-2 hover:text-amarilloisamon duration-200'>
                Muebles
                <span>
                  <FaCaretDown className={`transition-all duration-200 ${isMueblesDropdownOpen ? 'rotate-180' : ''}`} />
                </span>
              </a>
              {isMueblesDropdownOpen && (
                <div className='bg-white dark:bg-gray-900 rounded-md w-full'>
                  <ul className='flex flex-col items-center'>
                    {mueblesDropdown.map((data) => (
                      <li key={data.id} className='w-full'>
                        <a href={data.link} className='inline-block w-full py-2 hover:bg-amarilloisamon/40'>{data.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
            <li className='group relative cursor-pointer w-full text-center'>
              <a href="#" onClick={toggleAlmacenamientoDropdown} className='flex items-center justify-center gap-[2px] py-2 hover:text-amarilloisamon duration-200'>
                Organización
                <span>
                  <FaCaretDown className={`transition-all duration-200 ${isAlmacenamientoDropdownOpen ? 'rotate-180' : ''}`} />
                </span>
              </a>
              {isAlmacenamientoDropdownOpen && (
                <div className='bg-white dark:bg-gray-900 rounded-md w-full'>
                  <ul className='flex flex-col items-center'>
                    {almacenamientoDropdown.map((data) => (
                      <li key={data.id} className='w-full'>
                        <a href={data.link} className='inline-block w-full py-2 hover:bg-amarilloisamon/40'>{data.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
            {menu.slice(3).map((data) => (
              <li key={data.id} className='w-full text-center'>
                <a href={data.link} className='inline-block w-full py-2 hover:text-amarilloisamon duration-200'>{data.name}</a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Desktop Navbar */}
      <div className='hidden sm:flex justify-center'>
        <ul className='flex items-center gap-4'>
          <li className='group relative cursor-pointer'>
            <a href="#" className='flex items-center gap-[2px] py-2 hover:text-amarilloisamon duration-200'>
              Niños y bebes
              <span>
                <FaCaretDown className='transition-all duration-200 group-hover:rotate-180' />
              </span>
            </a>
            <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white dark:bg-gray-800 p-2 shadow-md'>
              <ul>
                {ninosYBebesDropdown.map((data) => (
                  <li key={data.id}>
                    <a href={data.link} className='inline-block w-full rounded-md p-2 hover:bg-amarilloisamon/40'>{data.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className='group relative cursor-pointer'>
            <a href="#" className='flex items-center gap-[2px] py-2 hover:text-amarilloisamon duration-200'>
              Muebles
              <span>
                <FaCaretDown className='transition-all duration-200 group-hover:rotate-180' />
              </span>
            </a>
            <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white dark:bg-gray-800 p-2 shadow-md'>
              <ul>
                {mueblesDropdown.map((data) => (
                  <li key={data.id}>
                    <a href={data.link} className='inline-block w-full rounded-md p-2 hover:bg-amarilloisamon/40'>{data.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className='group relative cursor-pointer'>
            <a href="#" className='flex items-center gap-[2px] py-2 hover:text-amarilloisamon duration-200'>
              Organización
              <span>
                <FaCaretDown className='transition-all duration-200 group-hover:rotate-180' />
              </span>
            </a>
            <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white dark:bg-gray-800 p-2 shadow-md'>
              <ul>
                {almacenamientoDropdown.map((data) => (
                  <li key={data.id}>
                    <a href={data.link} className='inline-block w-full rounded-md p-2 hover:bg-amarilloisamon/40'>{data.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          {menu.slice(4).map((data) => (
            <li key={data.id}>
              <a href={data.link} className='inline-block px-4 hover:text-amarilloisamon duration-200'>{data.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
