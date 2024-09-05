import React from 'react';
import Imagentop1 from '../../assets/topproducts/imagentop1.JPG';
import Imagentop2 from '../../assets/topproducts/imagentop2.JPG';
import Imagentop3 from '../../assets/topproducts/imagentop3.JPG';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProductsData = [
    {
        id: 1,
        img: Imagentop1,
        title: "Aros de Gimnasia",
        rating: 5.0,
        price: "$229.000",
        aosDelay: "0",
        description: "ejemplo", 
    },
    {
        id: 2,
        img: Imagentop2,
        title: "Barra de Juego Vertical",
        rating: 5.0,
        price: "$300.000",
        aosDelay: "0",
        description: "ejemplo",
    },
    {
        id: 3,
        img: "../../assets/topproducts/Imagentop4.png",
        title: "Estación de Arte",
        rating: 5.0,
        price: "$250.000",
        aosDelay: "0",
        description: "ejemplo",
    },
    {
        id: 4,
        img: Imagentop3,
        title: "Silla Violetta",
        rating: 5.0,
        price: "$130.000",
        aosDelay: "0",
        description: "ejemplo",
    },
];

// Componentes personalizados para las flechas
const NextArrow = ({ onClick }) => (
    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-azulisamon">
        <FaChevronRight onClick={onClick} size={30} />
    </div>
);

const PrevArrow = ({ onClick }) => (
    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-azulisamon">
        <FaChevronLeft onClick={onClick} size={30} />
    </div>
);

const TopProducts = () => {
    const settings = {
        dots: false,  // Desactiva los puntos
        infinite: true,
        speed: 500,
        slidesToShow: 4,  // Mostrar 4 productos por defecto
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        nextArrow: <NextArrow />,  // Flecha personalizada para siguiente
        prevArrow: <PrevArrow />,  // Flecha personalizada para anterior
        responsive: [
          {
            breakpoint: 1600,  // Pantallas muy grandes (4K o ultra-wide)
            settings: {
              slidesToShow: 5,  // Mostrar 5 productos
            }
          },
          {
            breakpoint: 1440,  // Pantallas grandes
            settings: {
              slidesToShow: 4,  // Mostrar 4 productos
            }
          },
          {
            breakpoint: 1200,  // Pantallas medianas (laptops más grandes)
            settings: {
              slidesToShow: 3,  // Mostrar 3 productos
            }
          },
          {
            breakpoint: 1024,  // Pantallas medianas (laptops estándar)
            settings: {
              slidesToShow: 2,  // Mostrar 2 productos
            }
          },
          {
            breakpoint: 768,  // Tablets
            settings: {
              slidesToShow: 2,  // Mostrar 2 productos
            }
          },
          {
            breakpoint: 600,  // Teléfonos grandes
            settings: {
              slidesToShow: 1,  // Mostrar 1 producto
            }
          },
          {
            breakpoint: 480,  // Teléfonos móviles pequeños
            settings: {
              slidesToShow: 1,  // Mostrar 1 producto
            }
          }
        ]
    };

    return (
        <div className='mt-14 mb-12 relative'>
            <div className='container'>
                {/* Header section */}
                <div className='text-center mb-10 max-w-[600px] mx-auto'>
                    <h1 data-aos='fade-up' className='text-3xl font-serif'>Ofertas</h1>
                </div>
                {/* Slider section */}
                <Slider {...settings}>
                    {
                        ProductsData.map((data) => (
                            <div key={data.id} className='p-2'>
                                <div className='rounded-2xl bg-white dark:bg-rosadoisamon hover:bg-azulisamon dark:hover:bg-azulisamon hover:text-white relative shadow-xl duration-300 group max-w-[300px] mx-auto'>
                                    {/* image section */}
                                    <div className='h-[350px]'>
                                        <img src={data.img} alt={data.title} className='max-w-[260px] block mx-auto transform group-hover:scale-95 rounded-2xl duration-300 drop-shadow-md' />
                                    </div>
                                    {/* details section */}
                                    <div className='p-4 text-left'>
                                        <h1 className='text-xl font-bold'>{data.title}</h1>
                                        <p className='text-rosadoisamon group-hover:text-rosadoisamon duration-300 line-clamp-2'>{data.price}</p>
                                        <button className='bg-azulisamon hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-cafeisamonborder'>
                                            Añadir al Carrito
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
};

export default TopProducts;
