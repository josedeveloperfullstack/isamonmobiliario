// src/components/Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-grisIsamon py-8"> {/* Cambia el fondo al color personalizado */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 text-gray-600">
        {/* Sección de Contacto */}
        <div>
          <h3 className="font-semibold mb-2 text-azulisamon">CONTACTO</h3>
          <p>WhatsApp: +57 322 3075058</p>
          <p>Email: contactoisamon@gmail.com</p>
          <p>Dirección Punto de Fábrica:</p>
          <p>Calle 46N # 4N-05</p>
          <p>Cali, Valle Colombia</p>
        </div>

        {/* Sección de Información */}
        <div>
          <h3 className="font-semibold mb-2 text-azulisamon">INFORMACIÓN</h3>
          <ul>
            <li><a href="#" className="hover:underline">Preguntas Frecuentes</a></li>
            <li><a href="#" className="hover:underline">Rastreo de pedidos</a></li>
            <li><a href="#" className="hover:underline">Política de Envíos y devoluciones</a></li>
            <li><a href="#" className="hover:underline">Términos y Condiciones</a></li>
          </ul>
        </div>

        {/* Sección de Redes Sociales */}
        <div>
          <h3 className="font-semibold mb-2 text-azulisamon">Redes Sociales</h3>
          <ul>
            <li><a href="https://www.facebook.com/Isam0n" target="_blank" className="hover:underline">Facebook: /Isam0n</a></li>
            <li><a href="https://www.instagram.com/isamon__mobiliario" target="_blank" className="hover:underline">Instagram: /isamon__mobiliario</a></li>
            <li><a href="https://isamonmobiliario.com" target="_blank" className="hover:underline">isamonmobiliario.com</a></li>
            <li><a href="https://www.facebook.com" target="_blank" className="hover:underline">Facebook: ____</a></li>
            <li><a href="https://www.instagram.com/isamondecorhome" target="_blank" className="hover:underline">Instagram: /isamondecorhome</a></li>
            <li><a href="https://isamondecorhome.com" target="_blank" className="hover:underline">isamondecorhome.com</a></li>
          </ul>
        </div>

        {/* Sección de Suscripciones */}
        <div>
          <h3 className="font-semibold mb-2 text-azulisamon">Suscripciones</h3>
          <input
            type="email"
            placeholder="Ingresa tu email..."
            className="border rounded py-2 px-4 w-full mb-4"
          />
          <button className="bg-azulisamon text-white py-2 px-4 rounded w-full hover:bg-blue-700 transition duration-300">
            ¡Suscríbete!
          </button>
          <p className="text-sm mt-4">
            ¡Recibe contenido exclusivo, novedades y promociones en tu bandeja de entrada!
          </p>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-6">
        © Copyright 2023 Isamon S.A.S. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
