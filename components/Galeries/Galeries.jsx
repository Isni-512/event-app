import React from 'react';
import Image from 'next/image';

const Gallery: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {images.map((src, index) => (
        <div key={index} className="rounded-lg overflow-hidden border-2 border-white shadow-lg hover:scale-105 transition-transform duration-300">
          <Image src={src} alt={`Image ${index + 1}`} width={300} height={200} className="w-full h-auto" />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
