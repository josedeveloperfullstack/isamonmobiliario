import React from 'react';

const Agendamiento = () => {
  return (
    <div className="relative bg-[url('ruta/a/tu_imagen_fondo.jpg')] bg-cover bg-center bg-no-repeat h-[500px] flex justify-center items-center">
      {/* Botón Central con posicionamiento absoluto */}
      <button className='bg-azulisamon hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-black group-hover:text-black'>
        Clic Aquí
      </button>
    </div>
  );
};

export default Agendamiento;
