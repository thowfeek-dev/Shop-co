import React from 'react';
import SearchBar from './SearchBar';
import NavigationMenu from './NavigationMenu';

const Header = () => {
  return (
    <header className="flex flex-col pl-20 mt-6 w-full max-md:pl-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-center items-center self-center w-full max-w-[1240px] max-md:max-w-full">
        <h1 className="self-stretch my-auto text-3xl font-extrabold text-black">
          SHOP.CO
        </h1>
        <NavigationMenu />
        <SearchBar />
        <div className="flex gap-3.5 items-start self-stretch my-auto">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/09c2e3728b2f0f7dddbac6f2c62c8e03db02aac0aa5ea5dcd0026fe3910c57f1?placeholderIfAbsent=true&apiKey=c52adf39d782452a98f75530051b6cbf" className="object-contain shrink-0 w-6 aspect-square" alt="User account icon" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2f89bc29975d179540a0a77d4a46123ef4301f3712d8e4aa60395a3d5ca0f65?placeholderIfAbsent=true&apiKey=c52adf39d782452a98f75530051b6cbf" className="object-contain shrink-0 w-6 aspect-square" alt="Shopping cart icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;