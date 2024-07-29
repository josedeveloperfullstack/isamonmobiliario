import React from 'react'
import Img1 from '../../assets/products/imagen1.JPG'
import Img2 from '../../assets/products/imagen2.JPG'
import Img3 from '../../assets/products/imagen3.JPG'
import Img4 from '../../assets/products/imagen4.JPG'
import { FaStar } from 'react-icons/fa'
import { IoPricetagsOutline } from 'react-icons/io5'

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Aros de Gimnasia",
        rating: 5.0,
        price: "$4444",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "Barra de Juego Vertical",
        rating: 5.0,
        price: "$4444",
        aosDelay: "0",
    },
    {
        id: 3,
        img: Img3,
        title: "Estación de Arte",
        rating: 5.0,
        price: "$4444",
        aosDelay: "0",
    },
    {
        id: 4,
        img: Img4,
        title: "Silla Violetta",
        rating: 5.0,
        price: "$4444",
        aosDelay: "0",
    },
]
const Products = () => {
    return (
        <div className='mt-14 mb-12'>
            <div className='container'>
                {/*Header section */}
                <div className='text-center mb-10 max-w-[600px] mx-auto' >
                    <p data-aos='fade-up' className='text-xl text-rosadoisamon'>Nuevos</p>
                    <h1 data-aos='fade-up'className='text-3xl font-serif'>Productos</h1>
                    <p data-aos='fade-up'className='text-xl text-rosadoisamon'>
                    Envío posterior a fabricación entre 25 y 30 días hábiles 
                    </p>
                </div>
                {/*Body section */}
                <div>
                    <div 
                    className='grid grid-cols-1 sm:grid-cols-2
                    md:grid-cols-3 lg:grid-cols-4 place-items-center
                    gap-5'>
    
                    {/*card section*/}
                    {ProductsData.map((data) => (
                        <div
                        data-aos='fade-up'
                        data-aos-delay={data.aosDelay}
                        key={data.id}
                        className='space-y-3'>
                        
                            <img src={data.img} alt='' 
                            className='h-[220px] w-[220px] object-cover rounded-md'
                             />
                             <div>
                                <h3 className='font-serif'>{data.title}</h3>
                                <p className='text-sm text-rosadoisamon'>
                                    {data.price}
                                </p>
                                <div className='flex items-center gap-1'>
                                    <FaStar className='text-rose-500'/>
                                    <span>{data.rating}</span>
                                </div>    
                             </div>   
                        </div>    

                     ))}
                    
    
                    
    
                    
                </div>
            </div>
        </div>
        </div>
                )}
    
    export default Products;