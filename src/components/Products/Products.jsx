import React from 'react'

import { FaStar } from 'react-icons/fa6';





const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Aros de Gimnasia",
        rating: 5.0,
        color: "white",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "Barra de Juego Vertical",
        rating: 5.0,
        color: "white",
        aosDelay: "0",
    },
    {
        id: 3,
        img: Img3,
        title: "Estación de Arte",
        rating: 5.0,
        color: "brown",
        aosDelay: "0",
    },
    {
        id: 4,
        img: Img4,
        title: "Silla Violetta",
        rating: 5.0,
        color: "Pink",
        aosDelay: "0",
    },
    
      /*  id: 1,
        img: Img5,
        title: "Aros de Gimnasia",
        rating: 5.0,
        color: "Yellow",
        aosDelay: "0",*/
    
]
const Products = () => {
  return (
    <div className='mt-14 mb-12'>
        <div className='container'>
            {/*Header section */}
            <div className='text-center mb-10 max-w-[600px] mx-auto' >
                <p className='text-xl text-rosadoisamon'>Nuevos</p>
                <h1 className='text-3xl font-serif'>Productos</h1>
                <p className='text-xl text-rosadoisamon'>
                Envío posterior a fabricación entre 25 y 30 días hábiles 
                </p>
            </div>
            {/*Body section */}
            <div>
                <div 
                className='grid grid-cols-1 sm:grid-cols-3
                md:grid-cols-4 lg:grid-cols-5 place-items-center
                gap-5'>

                {/*card section*/}
                {
                    ProductsData.map((data) => {
                        <div>
                            <img 
                            src=""
                            alt=''
                            className="h-220 w-[150px] 
                            object-cover roundedmlna"
                            />
                        </div>
                    })
                }

                

                </div>
            </div>
        </div>
    </div>
  )
}

export default Products;