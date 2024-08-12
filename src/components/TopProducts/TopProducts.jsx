import React from 'react'
import Imagentop1 from '../../assets/topproducts/imagentop1.JPG';
import Imagentop2 from '../../assets/topproducts/imagentop2.JPG';
import Imagentop3 from '../../assets/topproducts/imagentop3.JPG';
import Imagentop4 from '../../assets/topproducts/imagentop4.JPG';


import { FaStar } from 'react-icons/fa';

const ProductsData = [
    {
        id: 1,
        img: Imagentop1,
        title: "Aros de Gimnasia",
        rating: 5.0,
        price: "$4444",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Imagentop2,
        title: "Barra de Juego Vertical",
        rating: 5.0,
        price: "$4444",
        aosDelay: "0",
    },
    {
        id: 3,
        img: Imagentop3,
        title: "Estación de Arte",
        rating: 5.0,
        price: "$4444",
        aosDelay: "0",
    },
    {
        id: 4,
        img: Imagentop4,
        title: "Silla Violetta",
        rating: 5.0,
        price: "$4444",
        aosDelay: "0",
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
            <div>
                {
                    ProductsData.map((data) => (
                        <div>
                            {/* image section  */}
                            <div>
                            <img src={data.img} alt="Top Product 1" />
                                
                                
                            </div>
                            {/* details section  */}    
                        </div>
                    ))
                    
                }
            </div>
        </div>
    </div>
  )
}

export default TopProducts
