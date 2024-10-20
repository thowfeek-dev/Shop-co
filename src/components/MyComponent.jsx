import React from 'react';
import {ProductGrid2} from './ProductGrid';

const products = [
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/10f8ca9a78e45e68021abf9e126db19a837282c5829ffd6b4e68bb4d0f6fa3fd?placeholderIfAbsent=true&apiKey=c52adf39d782452a98f75530051b6cbf",
    title: "Adicolor Classics Joggers",
    category: "Dress",
    price: "63.85"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/6e15b6a34caa31e1b12a5dc3304408336d9a6a05a76622e9f8141c71e4ba1392?placeholderIfAbsent=true&apiKey=c52adf39d782452a98f75530051b6cbf",
    title: "Nike Sportswear Futura Luxe",
    category: "Bag",
    price: "130.00"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/304335a43182606f4c87f10a862261713b69f4f07edf3a51880b9a8792c7d207?placeholderIfAbsent=true&apiKey=c52adf39d782452a98f75530051b6cbf",
    title: "Geometric print Scarf",
    category: "scarf",
    price: "53.00"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0391e52e68d76d4fe51634412cc89912fb877de3ed8e4a968f408df32ba05b1c?placeholderIfAbsent=true&apiKey=c52adf39d782452a98f75530051b6cbf",
    title: "Yellow Reserved Hoodie",
    category: "Dress",
    price: "364.00",
    salePrice: "155.00",
    badge: "sale"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/baebd8e342fdd47b2af272aa19f0364b723e41c8a08e8a657383d9fd68e59a3f?placeholderIfAbsent=true&apiKey=c52adf39d782452a98f75530051b6cbf",
    title: "Basic Dress Green",
    category: "Dress",
    price: "236.00",
    badge: "hot"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e5894e52b1c82064f4fc859f77dd6155ff43522256bcfdffbfa3b665af87dadb?placeholderIfAbsent=true&apiKey=c52adf39d782452a98f75530051b6cbf",
    title: "Nike Air Zoom Pegasus",
    category: "shoe",
    price: "220.00",
    salePrice: "198.00",
    badge: "sale"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/9a6d9c0a31f5956adfb5972aa80ba5d8e8b6883849f48a4d8d8d85235a47625b?placeholderIfAbsent=true&apiKey=c52adf39d782452a98f75530051b6cbf",
    title: "Nike Repel Miler",
    category: "Dress",
    price: "120.50"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a4a51341572cdbc77d57e5aec4f786ad8e71ef89965d70118a71ffc42985e2bd?placeholderIfAbsent=true&apiKey=c52adf39d782452a98f75530051b6cbf",
    title: "Nike Sportswear Futura Luxe",
    category: "Glasses",
    price: "160.00"
  }
];

function MyComponent() {
  return (
    <main className="flex flex-col pr-5 pl-12 mt-20 w-full max-md:pl-5 max-md:mt-10 max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/664324974bf804b7de9ae7a7478a2f3415d835487af2ddef1ac073d0d8cb16bd?placeholderIfAbsent=true&apiKey=c52adf39d782452a98f75530051b6cbf" alt="" className="object-contain self-center w-full aspect-[1.43] max-w-[1239px] rounded-[40px] max-md:max-w-full" />
      <div className="flex flex-wrap gap-10 justify-between items-center self-end mt-20 w-full max-w-[1320px] max-md:mt-10 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2e48ae2fa5c998d81a740b31f739fd65ea2b15cc40eacc67ebc08d698da3798?placeholderIfAbsent=true&apiKey=c52adf39d782452a98f75530051b6cbf" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-[2.86] w-[200px]" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1062821341cc734b035ae7844ff4ade68090e404fd3e64ca3755a98491caa367?placeholderIfAbsent=true&apiKey=c52adf39d782452a98f75530051b6cbf" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-[2.86] w-[200px]" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/16c49392d5eb21b89a555ae2c24a06b078345c1a130d53d902e0aefe93a9d303?placeholderIfAbsent=true&apiKey=c52adf39d782452a98f75530051b6cbf" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-[2.86] w-[200px]" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa12cd96a3f0950338aedffcd2e15fa5df5535002670bb458b5432af075ff25e?placeholderIfAbsent=true&apiKey=c52adf39d782452a98f75530051b6cbf" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-[2.86] w-[200px]" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/89d165540102dd3e5e250b0620dbfa33e2f8aeb337012626ad931679423d1081?placeholderIfAbsent=true&apiKey=c52adf39d782452a98f75530051b6cbf" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-[2.86] w-[200px]" />
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c124c16bab1e59b2d62e41641d82e7e23b64c77a6feacd7589e12b1094f3813a?placeholderIfAbsent=true&apiKey=c52adf39d782452a98f75530051b6cbf" alt="" className="object-contain mt-20 w-full aspect-[2.11] max-md:mt-10 max-md:max-w-full" />
      <NewsletterSection />
      <ProductGrid2 products={products} />
    </main>
  );
}
const NewsletterSection = () => {
    return (
      <section className="flex flex-col items-center mt-32 w-full max-w-[1320px] max-md:mt-10 max-md:max-w-full">
        <h2 className="text-5xl font-medium text-center text-black capitalize max-md:max-w-full max-md:text-4xl">
          Or subscribe to the newsletter
        </h2>
        <FilterBar />
      </section>
    );
  };


  const FilterBar = () => {
    return (
      <>
        <div className="flex justify-between items-center mt-9 w-full max-md:max-w-full lg:ml-40" >
          <nav className="flex gap-10 items-center text-base font-semibold capitalize text-black text-opacity-50">
            <a href="#all" className="text-black w-[92px]">all products</a>
            <a href="#tshirt" className="whitespace-nowrap w-[51px]">t-shirt</a>
            <a href="#hoodies" className="whitespace-nowrap w-[63px]">hoodies</a>
            <a href="#jacket" className="whitespace-nowrap w-[46px]">jacket</a>
          </nav>
          <div className="flex justify-end flex-1">
            <button className="flex gap-1 items-center px-4 py-1.5 text-white bg-gray-800">
              <span className="text-lg">🔍</span> {/* Filter emoji */}
              <span className="text-base capitalize">filter</span>
            </button>
          </div>
        </div>
        <div className='h-10'></div>
      </>
    );
  };
  
  
export default MyComponent;