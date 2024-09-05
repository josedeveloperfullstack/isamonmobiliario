// src/components/Categorias.jsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChair, faCouch, faBed, faTable, faWarehouse, faPalette } from '@fortawesome/free-solid-svg-icons';

const Categorias = () => {
  const categorias = [
    { nombre: 'Chairs', icono: faChair },
    { nombre: 'Storage', icono: faWarehouse },
    { nombre: 'Armchairs', icono: faCouch },
    { nombre: 'Sofas', icono: faCouch },
    { nombre: 'Beds', icono: faBed },
    { nombre: 'Tables', icono: faTable },
    { nombre: 'Decor', icono: faPalette },
  ];

  return (
    <div className="container mx-auto flex justify-center space-x-6 py-4 text-gray-700">
      {categorias.map((categoria, index) => (
        <div key={index} className="flex flex-col items-center text-center hover:text-azulisamon transition duration-300">
          <FontAwesomeIcon icon={categoria.icono} className="text-2xl mb-1" />
          <span className="text-sm">{categoria.nombre}</span>
        </div>
      ))}
    </div>
  );
};

export default Categorias;
