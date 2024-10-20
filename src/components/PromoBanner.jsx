import React from 'react';

const PromoBanner = () => {
  return (
    <section className="flex relative flex-col items-end px-16 pb-20 mt-28 max-w-full text-3xl text-gray-800 capitalize min-h-[710px] pt-[559px] w-full max-md:px-5 max-md:pt-24 max-md:mt-10 lg:ml-6">
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfebe06edb9d869e6aa0af78a288b7b76dce060193eef8c4054c35d671622601?placeholderIfAbsent=true&apiKey=c52adf39d782452a98f75530051b6cbf" 
        className="object-cover absolute inset-0 w-full h-full max-md:h-[300px] max-md:w-auto" 
        alt="Promotional banner background" 
      />
      <button className="relative gap-2 self-stretch p-4 bg-white min-h-[66px] z-10">
        see collection
      </button>
    </section>
  );
};

export default PromoBanner;
