import React from 'react';

const HeroSection = () => {
  return (
    <section className="self-start mt-6 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full lg:ml-20"> 
          <div className="flex flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
            <h2 className="mr-6 text-6xl font-extrabold text-black leading-[64px] max-md:mr-2.5 max-md:max-w-full max-md:text-4xl max-md:leading-10">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h2>
            <p className="mt-8 mr-12 text-base leading-6 text-black text-opacity-60 max-md:mr-2.5 max-md:max-w-full">
              Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </p>
            <button className="overflow-hidden gap-3 self-start px-14 py-4 mt-8 text-base font-medium text-white bg-black min-h-[52px] rounded-[62px] max-md:px-5">
              Shop Now
            </button>
            <div className="flex flex-wrap gap-8 items-center mt-12 max-md:mt-10">
              <div className="flex flex-col self-stretch my-auto">
                <div className="text-4xl font-bold text-black">200+</div>
                <div className="text-base leading-none text-black text-opacity-60">
                  International Brands
                </div>
              </div>
              <div className="shrink-0 self-stretch w-0 border border-solid border-black border-opacity-10 h-[74px]" />
              <div className="flex flex-col self-stretch my-auto">
                <div className="text-4xl font-bold text-black">2,000+</div>
                <div className="text-base leading-none text-black text-opacity-60">
                  High-Quality Products
                </div>
              </div>
              <div className="shrink-0 self-stretch w-0 border border-solid border-black border-opacity-10 h-[74px]" />
              <div className="flex flex-col self-stretch my-auto">
                <div className="text-4xl font-bold text-black">30,000+</div>
                <div className="text-base leading-none text-black text-opacity-60">
                  Happy Customers
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
          <div className="flex overflow-hidden relative flex-col grow pt-44 pr-20 pb-28 pl-10 min-h-[663px] max-md:px-5 max-md:py-24 max-md:mt-3.5 max-md:max-w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/86b4fa05b6e7c48921ec157d5ea4e085e0b58804609d8eb813c122fc089132a5?placeholderIfAbsent=true&apiKey=c52adf39d782452a98f75530051b6cbf" className="object-cover absolute inset-0 size-full" alt="Background fashion"  />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f4117df685b6bf0ad12335e1f6072f0d9a6dd6db676e44776e3c8e58816c717?placeholderIfAbsent=true&apiKey=c52adf39d782452a98f75530051b6cbf" className="object-contain self-end max-w-full aspect-[0.71] w-[104px]" alt="Decorative element" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7be31c6b197ca88dc5836481d4d01c87b3496d5625859c2cb1c32248caa8da2?placeholderIfAbsent=true&apiKey=c52adf39d782452a98f75530051b6cbf" className="object-contain mt-36 w-14 aspect-[0.71] max-md:mt-10" alt="Decorative element" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
