import React from 'react';
import TestimoniosImg1 from '../../assets/testimonios/testimonio1.png';
import { GrSecure } from 'react-icons/gr';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import Slider from 'react-slick';

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-azulisamon text-white p-2 rounded-full shadow-lg hover:bg-amarilloisamon transition"
    onClick={onClick}
    style={{ zIndex: 10 }}
  >
    {"<"}
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-azulisamon text-white p-2 rounded-full shadow-lg hover:bg-amarilloisamon transition"
    onClick={onClick}
    style={{ zIndex: 10 }}
  >
    {">"}
  </button>
);

const Testimonios = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const testimonios = [
    {
      img: TestimoniosImg1,
      name: 'Laura Rodriguez',
      text: "Estoy realmente impresionada con la calidad y funcionalidad de sus productos. La estructura de madera de pino es robusta y resistente, lo que me da confianza en su durabilidad a largo plazo.",
      rating: 5,
    },
    {
      img: TestimoniosImg1,
      name: 'Laura Rodriguez',
      text: "Estoy realmente impresionada con la calidad y funcionalidad de sus productos. La estructura de madera de pino es robusta y resistente, lo que me da confianza en su durabilidad a largo plazo.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 bg-gray-100 dark:bg-gray-800 relative">
      <div className="container">
        <h1 className="text-left font-bold sm:text-4xl p-3 mb-8">Lo que dicen nuestros clientes</h1>
        <Slider {...settings}>
          {testimonios.map((testimonio, index) => (
            <div 
              key={index} 
              className="flex flex-col sm:flex-row items-center justify-center gap-8 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              
              {/* Imagen a la izquierda */}
              <div className="w-full sm:w-auto flex-shrink-0 sm:max-w-[150px]">
                <img
                  src={testimonio.img}
                  alt={testimonio.name}
                  className="w-24 h-auto rounded-full border-4 border-azulisamon dark:border-amarilloisamon shadow-lg"
                />
              </div>
              
              {/* Texto a la derecha */}
              <div className="w-full sm:w-auto sm:flex-1 flex flex-col justify-center sm:items-start items-center text-center sm:text-left gap-4">
                <div className="flex items-center gap-2 text-rosadoisamon dark:text-amarilloisamon">
                  <FaQuoteLeft />
                  <p className="text-lg font-semibold">{testimonio.text}</p>
                  <FaQuoteRight />
                </div>
                <h2 className="text-2xl font-bold">{testimonio.name}</h2>
                <div className="flex items-center gap-2">
                  <GrSecure className="text-green-500" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">Cliente verificado</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonios;
