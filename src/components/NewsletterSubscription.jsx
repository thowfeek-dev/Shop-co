import React from 'react';

function NewsletterSubscription() {
  return (
    <section className="flex overflow-hidden flex-wrap gap-10 justify-between items-center self-center px-16 py-9 mt-20 w-full bg-black rounded-3xl max-w-[1240px] max-md:px-5 max-md:mt-10 max-md:max-w-full lg:ml-[130px]">
      <h2 className="self-stretch my-auto text-4xl font-bold leading-10 text-white w-[551px] max-md:max-w-full ">
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
      </h2>
      <SubscriptionForm />
    </section>
  );
}



function SubscriptionForm() {
  return (
    <form className="flex flex-col self-stretch my-auto text-base min-w-[240px] w-[349px]">
      <div className="flex overflow-hidden gap-3 items-start px-4 py-3 max-w-full bg-white rounded-[62px] text-black text-opacity-40 w-[349px]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2f03936191f3af3d684591454051985eb354413c6b0268ef063c0cdcd4d89b8?placeholderIfAbsent=true&apiKey=c52adf39d782452a98f75530051b6cbf" className="object-contain shrink-0 w-6 aspect-square" alt="" />
        <label htmlFor="emailInput" className="sr-only">Enter your email address</label>
        <input
          type="email"
          id="emailInput"
          placeholder="Enter your email address"
          className="bg-transparent border-none outline-none flex-grow"
          aria-label="Enter your email address"
        />
      </div>
      <button
        type="submit"
        className="overflow-hidden gap-3 self-stretch px-4 py-3 mt-3.5 max-w-full font-medium text-black bg-white rounded-[62px] w-[349px]"
      >
        Subscribe to Newsletter
      </button>
    </form>
  );
}

export default NewsletterSubscription;