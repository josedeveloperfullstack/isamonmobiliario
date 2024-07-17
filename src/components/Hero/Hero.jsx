import React from 'react'
import Imagen1 from "../../assets/hero/Imagen1.png";
import Imagen2 from "../../assets/hero/Imagen2.png";
import Imagen3 from "../../assets/hero/Imagen3.png"

import { MdDescription } from 'react-icons/md';

const ImageList  = [
  {
    id: 1,
    img: Imagen1,
    title: "u",
    description: "l",
  },
  {
    id: 2,
    img: Imagen2,
    title: "u",
    description: "u",
  },
  {
    id: 3,
    img: Imagen3,
    title: "u",
    description: "u",
  },

]

const Hero = () => {
  return (
    <div className='relative overflow-hidden min-h-[550px]
    sm:min-h-[650px] bg-azulisamon/10 flex justify-center 
    items-center dark:bg-gray-950 dark:text-white 
    duration-200 '>
      {/*backgroud pattern */}
      
      <div className='h-[700px] w-[700px] bg-rosadoisamon/50
      absolute -top-1/2 right-auto rounded-3xl rotate-45 -z-9'>
      </div>
      { /* hero section*/}
        <div className='container pb-8 sm:pb-0'>
          <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 '>
              {/*text content sec
              tion */}
              <div className='flex flex-col justify-center 
              gap-4 pt-12 sm:pt-0 text-center sm:text-left
              order-2 sm:order-1 relative z-10'>
                <h1 className='text-5xl sm:text-5xl lg:text-5xl font-bold text-cafeisamonborder' >
                    Encuentra aquí el mobiliario perfecto para tus niños.</h1>
                  <p className='text-sm'> ¡Funcional y a tu gusto.</p> 
              
            
              <div>
                <button className='bg-amarilloisamon text-black   hover:scale-105 
                duration-200 py-2 px-4 rounded-full'>
                    Tienda 
                </button>
              </div>
            </div>
            {/* image section */} 
            <div className='order-1 sm:order-2 '
          >
              <div className='relative z-10' >
                <img 
                src={Imagen1} 
                alt=""  
                className='w-[400px] h-[400px] sm:h-
                [450px] sm:w-[450px]  sm:scale-125 
                object-contain mx-auto p-4 rounded-full'/>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>


    
    
);
};


export default Hero;