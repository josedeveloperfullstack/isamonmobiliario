import React from 'react'
import TestimoniosImg from '../../assets/testimonios/testimonio1.png'



const Testimonios = () => {
  return (
    <div className='min-h-[550] flex 
    justify-center items-center py-12
    sm-py-0'>
        <div className='container'>
            <div className='grid
            grid-cols-1 sm:grid-cols-2
            gap-6 items-center'>
                {/*image section*/}
                {/*<div>
                    <img src={TestimoniosImg} alt=''
                    className='max-w-full h-[350px] w-full
                    mx-auto drop-shadow-[-10px_10px_12px_rgba(0,00,0,1)] object-cover' />
                    
                
                </div>*/}
                <div>
                <img src={TestimoniosImg} alt=''
                    className='max-w-[400px] h-[350px] w-full
                    mx-auto drop-shadow-[-10px_10px_12px_rgba(0,00,0,1)] object-cover' />
                </div>
                {/*text details section*/}
                <div>
                    <h1 className='text-3xl font-bold sm:text-4xl '>Lo que dicen Nuestos clientes</h1>
                    <p className='text-sm text-rosadoisamon'>
                        Laura rodriguez: Estoy realmente impresionada con su calidad y funcionalidad. La
                        estructura de madera de pino es robusta y resistente, lo que me da
                        conhanza en su durabilidad a largo plazo. La superhcie de melamina
                        hidroresistente es realmente fácil de limpiar, lo cual es una gran ventaja
                        cuando se trata de actividades artísticas con niños.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonios 