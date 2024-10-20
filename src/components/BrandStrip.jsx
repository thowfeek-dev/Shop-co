import React from 'react';

const BrandStrip = () => {
  return (
    <div className="flex flex-col justify-center items-center px-16 py-11 w-full bg-black max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between max-w-full w-[653px]flex flex-wrap gap-5 justify-between max-w-full w-[653px]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b117d9f7e20b3ce93c2ea8386f55ae7d38d71ad5cc74651f2f0201a15cd87cdf?placeholderIfAbsent=true&apiKey=c52adf39d782452a98f75530051b6cbf" className="object-contain shrink-0 aspect-[2.39] w-[91px]" alt="Brand logo" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/25b31ff2eaac8ef7c9c1e98ee1d8fcefaced62635bafb365ea8057d8cc6f3ac5?placeholderIfAbsent=true&apiKey=c52adf39d782452a98f75530051b6cbf" className="object-contain shrink-0 self-start max-w-full aspect-[4.33] w-[156px]" alt="Brand logo" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e6efb0b496fc59b3a8ae5215772c4bab4d4bfd96b013245c2b93b4881620949?placeholderIfAbsent=true&apiKey=c52adf39d782452a98f75530051b6cbf" className="object-contain shrink-0 my-auto max-w-full aspect-[6.06] w-[194px]" alt="Brand logo" />
      </div>
    </div>
  );
};

export default BrandStrip;