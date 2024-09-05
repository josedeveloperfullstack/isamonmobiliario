import React from 'react';
import Imagen1 from "../../assets/hero/Imagen1.png";
import Imagen2 from "../../assets/hero/Imagen2.png";
import Imagen3 from "../../assets/hero/Imagen3.png";
import Slider from 'react-slick';

const ImageList  = [
  {
    id: 1,
    img: Imagen1,
    title: "Encuentra aquí el mobiliario perfecto para tus hijos",
    description: "Funcional y a tu gusto",
  },
  {
    id: 2,
    img: Imagen2,
    title: "Cama Juegos",
    description: "Especiales para tus hijos",
  },
  {
    id: 3,
    img: Imagen3,
    title: "Cama Carro",
    description: "Especiales para tus hijos",
  },
];

const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  };

  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-white flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
      {/* Background pattern */}
      <div className='h-[700px] w-[700px] bg-azulisamon absolute -top-1/2 right-auto rounded-3xl rotate-45 -z-9'></div>

      {/* Hero section */}
      <div className='container pb-8 sm:pb-0'>
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}> {/* Agregar key única */}
              <div className='grid grid-cols-1 sm:grid-cols-2'>
                {/* Text content section */}
                <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                  <h1 
                    data-aos='zoom-out'
                    data-aos-duration='500'
                    data-aos-once='true'
                    className='text-5xl sm:text-5xl lg:text-5xl font-serif text-cafeisamonborder'>
                    {data.title}
                  </h1>
                  <p 
                    data-aos='zoom-out'
                    data-aos-duration='500'
                    data-aos-once='true'
                    className='text-sm'>
                    {data.description}
                  </p> 
              
                  <div
                    data-aos='fade-up'
                    data-aos-duration='500'
                    data-aos-delay='300'
                  >
                    <button className='bg-amarilloisamon text-black hover:scale-105 duration-200 py-2 px-4 rounded-full'>
                      Comprar
                    </button>
                  </div>
                </div>

                {/* Image section */} 
                <div className='order-1 sm:order-2'>
                  <div 
                    data-aos='zoom-in'
                    data-aos-once='true'
                    className='relative z-10' >
                    <img 
                      src={data.img} 
                      alt={data.title}  /* Agregar un alt más descriptivo */
                      className='w-[400px] h-[400px] sm:h-[450px] sm:w-[450px] sm:scale-125 lg:scale-120 object-contain mx-auto p-4 rounded-full'
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
