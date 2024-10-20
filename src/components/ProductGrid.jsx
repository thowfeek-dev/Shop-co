import React from 'react';
import {ProductCard, ProductCard2} from './ProductCard';

const ProductGrid = ({ title, products }) => {
  return (
    <section className="flex flex-col items-center mt-20 w-full max-w-[1240px] mx-auto">
      <h2 className="mt-20 text-5xl font-extrabold text-center text-black max-md:mt-10 max-md:text-4xl">
        {title}
      </h2>
      <div className="h-20" />
      <div className="flex gap-5 max-md:flex-col">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <ProductCard {...product} />
          </div>
        ))}
      </div>
      <div className="h-10" />
      <button className="overflow-hidden gap-3 self-center px-14 py-4 mt-9 text-base font-medium text-black border border-solid border-black border-opacity-10 min-h-[52px] rounded-[62px] w-[218px] max-md:px-5">
        View All
      </button>
    </section>
  );
};

const ProductGrid2 = ({ products }) => {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 ">
      {products.map((product, index) => (
        <div key={index} className="w-full">
          <ProductCard2 {...product} />
        </div>
      ))}
    </div>
  );
};


export {ProductGrid, ProductGrid2};
