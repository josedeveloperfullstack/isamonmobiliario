import React from 'react'
import Imagentop1 from '../../assets/topproducts/imagentop1.JPG';
import Imagentop2 from '../../assets/topproducts/imagentop2.JPG';
import Imagentop3 from '../../assets/topproducts/imagentop3.JPG';
import Imagentop4 from '../../assets/topproducts/imagentop4.png';


import { FaStar } from 'react-icons/fa';

const ProductsData = [
    {
        id: 1,
        img: Imagentop1,
        title: "Aros de Gimnasia",
        rating: 5.0,
        price: "$4444",
        aosDelay: "0",
        description: "ejemplo", 
    },

    {
        id: 2,
        img: Imagentop2,
        title: "Barra de Juego Vertical",
        rating: 5.0,
        price: "$4444",
        aosDelay: "0",
        description: "ejemplo",
    },
    
    {
        id: 3,
        img: Imagentop4,
        title: "Estación de Arte",
        rating: 5.0,
        price: "$4444",
        aosDelay: "0",
        description: "ejemplo",
    },
    
    {
        id: 4,
        img: Imagentop3,
        title: "Silla Violetta",
        rating: 5.0,
        price: "$4444",
        aosDelay: "0",
        description: "ejemplo",
    },
]

const TopProducts = () => {
  return (
    <div>
        <div className='container'>
            {/* Header section */}
            <div className='text-center mb-10 max-w-[600px] mx-auto' >
                    <p data-aos='fade-up' className='text-xl text-rosadoisamon'>Los Más Vendidos</p>
                    <h1 data-aos='fade-up'className='text-3xl font-serif'>Productos con mejores Calificaciones</h1>
                    <p data-aos='fade-up'className='text-xl text-rosadoisamon'>
                    
                    </p>
                </div>
            {/* Body section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 
            md:grid-cols-4 gap-20 md:gap-5 place-items-center
            
            ">
                {
                    ProductsData.map((data) => (
                        <div
                        className='rounded-2xl bg-azulisamon
                        dark:bg-rosadoisamon hover:bg-azulisamon/10
                        dark:hover:bg-azulisamon hover:text-white
                        relative shadow-xl duration-300 group max-w-
                        [300px]'>
                            {/* image section  */}
                            <div className='h-[350px]'>
                            <img src={data.img} alt="Top Product 1" 
                            className='max-w-[260px] block mx-auto 
                            transform -translate-y-0 
                            group-hover:scale-95 rounded-2xl duration-300 
                            drop-shadow-md'
                            />
                                
                                
                            </div>
                            {/* details section  */}    
                            <div className='p-4 text-center'>
                                {/* star rating */}
                                <div className='w-full flex items-center justify-center gap-1'>
                                    <FaStar className='text-yellow-500' />
                                        <FaStar className='text-yellow-500' />
                                        <FaStar className='text-yellow-500' />
                                        <FaStar className='text-yellow-500' />
                                        <FaStar className='text-yellow-500' />
                                </div>
                                <h1 className='text-xl font-bold'>{data.title}</h1>
                                <p className='text-rosadoisamon 
                                group-hover:text-white duration-300
                                text-sm line-clamp-2 '>{data.description}</p>
                                <button 
                                    className='bg-rosadoisamon hover:scale-105
                                    duration-300 text-white py-1 px-4
                                    rounded-full mt-4 group-hover:bg-white 
                                    group-hover:text-cafeisamonborder'
                                    >
                                     Comprar
                                </button>
                            </div>

                        </div>
                    ))
                    
                }
            </div>
        </div>
    </div>
  )
}

export default TopProducts
