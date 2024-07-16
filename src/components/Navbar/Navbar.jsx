import React from 'react';
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from 'react-icons/fa6';
import { FaRegUser } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from './DarkMode';

const menu = [
  
  /*{
    id: 1,
    name: "Tipo de Producto",
    link: "/#",
  },
  {
    id: 1,
    name: "Tipo de Producto",
    link: "/#",
  },
  {
    id: 1,
    name: "Tipo de Producto",
    link: "/#",
  },
  {
    id: 1,
    name: "Tipo de Producto",
    link: "/#",
  },
  {
    id: 1,
    name: "Tipo de Producto",
    link: "/#",
  },*/
  {
    id: 2, 
    name: "Actividad",
    link: "/#services",
  },
  {
    id: 3,
    name: "Hábito",
    link: "/#",
  },
  {
    id: 4,
    name: "Etapa",
    Link: "/#",

  }, 
  {
    id: 5,
    name: "Nuevos",
    Link: "/#",
  },
  {
    id: 6,
    name: "Ofertas",
    link: "/#",
  },
];
const Dropdownliink = [
  {
    id: 1,
    name: "Accesorios",
    link: "#",
  },
  {
    id: 2,
    name: "Camas",
    link: "/#",
  },
  {
    id: 3,
    name: "Cocinas",
    link: "/#",
  },
  {
    id: 4,
    name: "Cunas",
    link: "/#",
  },

  
  
  

]
const Navbar = () => {
  return (
  <div className='shadow-md bg-white dark:bg-gray-900 dark:text-black duration-200
    relative z-40 '>
    {/*upper Navbar*/}
      <div className='bg-white/40 py-2'>
        <div className='container flex justify-between items-center'>
          <div>
            <a href="#" className = "font-bold text-2x1 sm:3x1 flex gap-2 ">
              <img src={Logo}  alt ="logo"
              className='w-36'/>
              {/*Isamon*/}
            </a>
          </div>
          {/*search bar and order button */}
          <div className='flex justify-between items-center'>
            <div className='relative group hidden sm:block'>
              <input type = "text" placeholder='buscar productos...'
              className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all 
              duration-300 rounded-full border border-azulisamon px-2 py-1
              focus:outline-none focus:border-1 focus:border-amarilloisamon'/>
              <IoMdSearch className='text-azulisamon
              group-hover:text-amarilloisamon absolute 
              top-1/2 -translate-y-1/2 right-3'/>
            </div>

              {/*order-button section*/}
          
            <button onclick={()=> 
              alert("Ordering not available yet")} className='relative p-3'>
              <FaRegUser className='text-xl text-azulisamon
              dark:text-amarilloisamon group'/> 
            </button>
            <button onclick={()=> 
              alert("Ordering not available yet")} className='relative p-3'>
              <FaCartShopping className='text-xl text-azulisamon
              dark:text-amarilloisamon group'/>
                <div className='w-4 h-4 bg-rosadoisamon
                 text-white rounded-full absolute 
                  top-0 right-0 flex items-center 
                  justify-center text-xs group'>
                  4 
                </div>
            </button>
            {/*Darkmode Switch*/}
            <div>
              {/*<DarkMode />*/}
            </div>  

          </div>
        </div>
      </div>
    {/*lower Navbawer Navbarr*/}
    <div className='flex justify-center'>
      <ul className='sm:flex hidden items-center gap-4'>
        {/*Simple Dropdown and links */}
        <li className='group relative cursor-pointer'>
          <a href="#" className='flex items-center 
            gap-[2px] py-2 
              hover:text-amarilloisamon duration-200'>
            Tipo de Producto
            <span>
              <FaCaretDown 
              className='transition-all
              duration-200
              group-hover:rotate-180'/>
            </span>
          </a>
          <div className='absolute z-[9999] 
        hidden group-hover:block w-[200px] rounded-md
         bg-white p-2 text-black shadow-md'>
          <ul>
            {
              Dropdownliink.map((data)=>(
              <li key={data.id}>
                <a 
                  hret={data.link}
                  className= "inline-block w-full rounded-md p-2 hover:bg-amarilloisamon/40 "
                
                >
                  {data.name}
                </a>  
              </li>
        
              ))}
            </ul>
        </div>
        </li>
        {
          menu.map((data)=> (
            <li key={data.id}>
              <a href={data.link}
              className='inline-block px-4
              hover:text-amarilloisamon duration-200'
              >{data.name}</a>
            </li>
          ))
        }
        
      </ul>
    </div>
    
  </div>
  
    );
};

export default Navbar;
