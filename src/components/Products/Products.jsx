import React from 'react';
import Img2 from '../../assets/products/imagen2.jpg';
import Img3 from '../../assets/products/imagen3.jpg';
import Img4 from '../../assets/products/imagen4.jpg';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProductsData = [
    {
        id: 1,
        img: "../../assets/products/imagen1.jpg",
        title: "Aros de Gimnasia",
        rating: 5.0,
        price: "$4444",
        aosDelay: "0",
    },
    {
        id: 2,
        img: "../../assets/products/imagen2.jpg",
        title: "Barra de Juego Vertical",
        rating: 5.0,
        price: "$4444",
        aosDelay: "0",
    },
    {
        id: 3,
        img: "../../assets/products/imagen3.jpg",
        title: "Estación de Arte",
        rating: 5.0,
        price: "$4444",
        aosDelay: "0",
    },
    {
        id: 4,
        img: "../../assets/products/imagen4.jpg",
        title: "Silla Violetta",
        rating: 5.0,
        price: "$4444",
        aosDelay: "0",
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

const Products = () => {
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
              slidesToShow: 4,  // Mostrar 4 productos
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
                    <p data-aos='fade-up' className='text-xl text-rosadoisamon'>Nuevos</p>
                    <h1 data-aos='fade-up' className='text-3xl font-serif'>Productos</h1>
                    <p data-aos='fade-up' className='text-xl text-rosadoisamon'>
                    Envío posterior a fabricación entre 25 y 30 días hábiles 
                    </p>
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

export default Products;
