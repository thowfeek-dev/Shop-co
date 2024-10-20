import React from 'react';

const NavigationMenu = () => {
  return (
    <nav className="flex gap-6 items-center self-stretch my-auto text-base text-black min-w-[240px]">
      <div className="flex gap-1 items-center self-stretch my-auto whitespace-nowrap">
        <div className="self-stretch my-auto">Shop</div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/44bcba2fc9349f0345a44422d13f6da6d1a000b98da4db570cd5d2d23166b0e7?placeholderIfAbsent=true&apiKey=c52adf39d782452a98f75530051b6cbf" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" alt="" />
      </div>
      <div className="self-stretch my-auto">On Sale</div>
      <div className="self-stretch my-auto">New Arrivals</div>
      <div className="self-stretch my-auto">Brands</div>
    </nav>
  );
};

export default NavigationMenu;