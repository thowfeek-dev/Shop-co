import React from 'react';

const SearchBar = () => {
  return (
    <div className="flex overflow-hidden flex-wrap flex-1 shrink gap-3 items-start self-stretch px-4 py-3 my-auto text-base basis-0 bg-zinc-100 min-w-[240px] rounded-[62px] text-black text-opacity-40 max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/49a3d826f57cc86de1a5b31b91647c8d3b51a3dba2dfaf5af0ff9270962eb0c8?placeholderIfAbsent=true&apiKey=c52adf39d782452a98f75530051b6cbf" className="object-contain shrink-0 w-6 aspect-square" alt="" />
      <input type="text" placeholder="Search for products..." className="bg-transparent border-none outline-none flex-grow" aria-label="Search for products" />
    </div>
  );
};

export default SearchBar;