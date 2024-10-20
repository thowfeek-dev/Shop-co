import React from 'react';

const NewsletterSignup = () => {
  return (
    <section className="flex flex-col mt-16 max-w-full capitalize w-[760px] lg:ml-80 max-md:mt-10">
      <h2 className="mr-7 ml-7 text-5xl font-medium text-center text-black max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
        Or subscribe to the newsletter
      </h2>
      <form className="flex flex-wrap gap-7 mt-20 text-base max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col grow shrink-0 font-semibold basis-0 text-gray-800 text-opacity-50 w-fit max-md:max-w-full">
          <label htmlFor="email" className="sr-only">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Email address..."
            className="self-start ml-4 max-md:ml-2.5 bg-transparent border-none outline-none"
          />
          <div className="shrink-0 mt-3 h-0.5 bg-black border-2 border-black border-solid max-md:max-w-full" />
        </div>
        <button type="submit" className="flex flex-col justify-center text-center text-gray-800 whitespace-nowrap">
          <div className="gap-1 self-center px-4">SUBMIT</div>
          <div className="mt-2.5 w-full min-h-0 bg-gray-800 border-2 border-gray-800 border-solid" />
          <div className='h-20'></div>
        </button>
      </form>
    </section>
  );
};

export default NewsletterSignup;