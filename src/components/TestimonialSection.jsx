import React from 'react';
import TestimonialCarousel from './TestimonialCarousel';

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      rating: 5,
      verified: true,
      content: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
    },
    {
      name: "Alex K.",
      rating: 4,
      verified: true,
      content: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
    },
    {
      name: "James L.",
      rating: 4,
      verified: false,
      content: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
    },
    {
      name: "Mooen",
      rating: 4,
      verified: true,
      content: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
    }
  ];

  return (
    <><section className="mt-12 w-full max-md:mt-10 max-md:max-w-full">
      <h2 className="text-5xl font-extrabold text-black max-md:max-w-full max-md:text-4x lg:ml-10" >
        OUR HAPPY CUSTOMERS
      </h2>

      <div className="flex justify-center lg:ml-5 lg:mr-10"> 
        <div className="grid grid-cols-1 gap-6 mt-10 w-full max-md:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-md:max-w-full">
          {testimonials.map((testimonial, index) => (
            <TestimonialCarousel key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section><div className="h-20"></div></>
  );
};

export default TestimonialSection;
