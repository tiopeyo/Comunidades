
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-stone-800">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-30"
          src="https://images.unsplash.com/photo-1542317189-883506943b96?q=80&w=1920&auto=format&fit=crop"
          alt="Valle de la Luna, Desierto de Atacama"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent" aria-hidden="true" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Uniendo Tecnología y Tradición
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-xl text-stone-300">
          Explorando cómo la Inteligencia Artificial puede preservar y revitalizar la cultura milenaria de los pueblos originarios de la Segunda Región de Chile.
        </p>
        <div className="mt-10">
          <a
            href="#oportunidades"
            className="bg-amber-600 text-white px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm hover:bg-amber-700 transition"
          >
            Descubrir Oportunidades
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
