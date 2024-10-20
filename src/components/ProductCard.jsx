import React from 'react';

const ProductCard = ({ image, title, rating, price, salePrice }) => {
  return (
    <div className="flex flex-col items-start w-full max-md:mt-5">
      <img loading="lazy" src={image} className="object-contain self-stretch w-full rounded-3xl aspect-[0.99]" alt={title} />
      <h3 className="mt-4 text-xl font-bold text-black">{title}</h3>
      <div className="flex gap-3.5 items-center mt-2">
        <div className="flex gap-1.5 items-start self-stretch my-auto">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-[18px]">
              {i < rating ? '☆' : '⭐'}
            </span>
          ))}
        </div>
        <div className="self-stretch my-auto text-sm text-black">
          {rating}/<span className="text-black">5</span>
        </div>
      </div>
      <div className="flex gap-2.5 items-center mt-2 text-2xl font-bold whitespace-nowrap">
        <div className="self-stretch my-auto text-black">${price}</div>
        {salePrice && (
          <>
            <div className="self-stretch my-auto text-black text-opacity-40">${salePrice}</div>
            <div className="overflow-hidden gap-3 self-stretch py-1.5 pr-3.5 pl-3.5 my-auto text-xs font-medium text-red-500 bg-red-500 bg-opacity-10 rounded-[62px] w-[58px]">
              -{Math.round((1 - price / salePrice) * 100)}%
            </div>
          </>
        )}
      </div>
    </div>
  );
};


const ProductCard2 = ({ imageSrc, title, category, price, salePrice, badge }) => {
  return (
    <div className="flex flex-col items-center w-full max-md:mt-6">
      <div className="flex flex-col max-w-full w-[312px]">
        <div className="relative">
          <img loading="lazy" src={imageSrc} alt={title} className="object-contain w-full aspect-[0.78]" />
          {badge && (
            <div className={`absolute top-6 left-0 px-3 py-1 text-xs font-semibold text-white uppercase ${badge === 'sale' ? 'bg-gray-800' : 'bg-red-400'}`}>
              {badge}
            </div>
          )}
        </div>
      </div>
      <div className="flex gap-5 justify-between mt-5 max-w-full text-base capitalize rounded-none w-[292px]">
        <div className="flex flex-col">
          <div className="font-semibold text-black">{title}</div>
          <div className="self-start mt-4 text-black text-opacity-50">{category}</div>
        </div>
        <div className="self-end mt-10 font-semibold text-right">
          {salePrice ? (
            <>
              <span className="text-red-400">${salePrice}</span>
              <span className="ml-2 text-sm line-through text-black text-opacity-50">${price}</span>
            </>
          ) : (
            <span className="text-black">${price}</span>
          )}
        </div>
      </div>
    </div>
  );
};


export {ProductCard, ProductCard2};

