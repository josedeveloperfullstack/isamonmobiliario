import React from 'react'
import TestimoniosImg1 from '../../assets/testimonios/testimonio1.png'
import TestimoniosImg2 from '../../assets/testimonios/testimonio1.png'
import TestimoniosImg3 from '../../assets/testimonios/testimonio1.png'
import { GrSecure } from 'react-icons/gr'
import Slider from 'react-slick';


const Testimonios = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000,
    };
  
    const testimonios = [
      {
        img: TestimoniosImg1,
        title: 'Laura Rodriguez',
        text: "Estoy realmente impresionada con su calidad y funcionalidad. La estructura de madera de pino es robusta y resistente, lo que me da confianza en su durabilidad a largo plazo. La superficie de melamina hidroresistente es realmente fácil de limpiar, lo cual es una gran ventaja cuando se trata de actividades artísticas con niños."
      },
      {
        img: TestimoniosImg2,
        title: 'Juan Perez',
        text: "Los productos son increíbles, la atención al detalle es notable. La calidad de la madera y la durabilidad de los acabados son insuperables."
      },
      {
        img: TestimoniosImg3,
        title: 'Ana Martinez',
        text: "El diseño es moderno y elegante, encaja perfectamente en mi sala de estar. Además, el proceso de compra fue muy fácil y el envío rápido."
      }
    ];


    return (
      <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
  <div className='container'>
    <h1 className='text-left font-bold sm:text-4xl p-3 mb-8'>Lo que dicen nuestros clientes</h1>
    <Slider {...settings}>
      {testimonios.map((testimonio, index) => (
        <div 
          key={index} 
          className='flex flex-col sm:flex-row items-center sm:items-start justify-center gap-8'>
          
          {/* Imagen a la izquierda */}
          <div className='w-2/3 sm:w-auto flex-shrink-0'>
            <img
              src={testimonio.img}
              alt={testimonio.title}
              className='w-full max-w-[200px] h-auto mx-auto sm:mx-0 drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.2)]'
            />
          </div>
          
          {/* Texto a la derecha */}
          <div className='flex flex-col justify-items-end sm:justify-center sm:items-start items-center text-center sm:text-justify gap-4'>
            <h2 className='text-2xl font-bold'>{testimonio.title}</h2>
            <p className='text-sm text-rosadoisamon tracking-wide leading-5'>
              {testimonio.text}
            </p>
                    <div>
                      <GrSecure />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      );
    };
    
    export default Testimonios