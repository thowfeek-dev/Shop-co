import React from 'react';

const InstagramSection = () => {
  const images = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/4ae4de4efa0ee0301fc1ce52e895a51613fc4ed3ff21d0d7eec482afff36c513?placeholderIfAbsent=true&apiKey=c52adf39d782452a98f75530051b6cbf",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/73eabc45aecc5eb3ac24a96c32bc19beab21a72f1081e746b6e0562bcfc844bc?placeholderIfAbsent=true&apiKey=c52adf39d782452a98f75530051b6cbf",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/3e2aa52c054c93ef8ad876a0f398243097404fead9bc4d8b18e52ce4acf74b6e?placeholderIfAbsent=true&apiKey=c52adf39d782452a98f75530051b6cbf",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/d0936d49958885be99d01c152d8299f699d3a03608ac7a4dd3a20e1a987198ac?placeholderIfAbsent=true&apiKey=c52adf39d782452a98f75530051b6cbf",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/c82ab4d67d06f4fd33733f9f5cedeb3e23ae5a2f9736522575b5b97cd68da557?placeholderIfAbsent=true&apiKey=c52adf39d782452a98f75530051b6cbf",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/dfdd6fec0acfb35b40da132943dfb00e7f667440864c38397e497cec3b0edafb?placeholderIfAbsent=true&apiKey=c52adf39d782452a98f75530051b6cbf"
  ];

  return (
    <section className="flex flex-col items-center px-10 py-24 mt-12 w-full bg-gray-800 bg-opacity-10 max-w-[1396px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1320px] max-md:max-w-full">
        <h2 className="self-center text-5xl font-medium text-center text-black capitalize max-md:max-w-full max-md:text-4xl">
          Follow products and discounts on Instagram
        </h2>
        <div className="flex flex-wrap gap-6 justify-center items-center mt-16 max-md:mt-10">
          {images.map((src, index) => (
            <img key={index} loading="lazy" src={src} className="object-contain shrink-0 self-stretch my-auto aspect-square w-[200px]" alt={`Instagram post ${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;