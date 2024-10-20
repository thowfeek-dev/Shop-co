import React from 'react';


const TestimonialCarousel = ({ name, rating, verified, content }) => {
  return (
    <div className="flex flex-wrap gap-6 items-start px-8 py-7 rounded-3xl border border-solid border-black border-opacity-10 max-md:px-5 bg-white shadow-md">
      <div className="flex flex-1 shrink justify-between items-start w-full basis-0 min-w-[240px]">
        <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px]">
          {/* Star rating as boxes */}
          <div className="flex gap-2 items-start">
            {[...Array(rating)].map((_, i) => (
              <div
                key={i}
              >
                ⭐
              </div>
            ))}
          </div>

          <div className="flex flex-col mt-4 w-full">
            {/* Name and verified badge */}
            <div className="flex gap-1 items-center self-start text-xl font-bold leading-none text-black">
              <div className="self-stretch my-auto">{name}</div>
              {verified && (
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c5308fcbc5abfa01907dccc29a424cc4bdeaf5949d63b6bd5efd7f2b5fcad0c?placeholderIfAbsent=true&apiKey=c52adf39d782452a98f75530051b6cbf"
                  className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  alt="Verified customer"
                />
              )}
            </div>
            <p className="mt-3 text-base leading-6 text-black text-opacity-60">
              {content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
