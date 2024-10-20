import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center px-20 pt-36 pb-20 mt-0 w-full bg-zinc-100 max-md:px-5 max-md:pt-24 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-start w-full max-w-[1240px] max-md:max-w-full">
        <div className="flex flex-col min-w-[240px] w-[248px]">
          <div className="flex flex-col max-w-full w-[248px]">
            <h2 className="text-4xl font-extrabold text-black ">SHOP.CO</h2>
            <p className="mt-6 text-sm leading-6 text-black text-opacity-60">
              We have clothes that suits your style and which you're proud to wear. From women to men.
            </p>
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea93c2d0568535bffae9b91dd019000c3123470b3647e627e9d9b8083ebe4e24?placeholderIfAbsent=true&apiKey=c52adf39d782452a98f75530051b6cbf" className="object-contain mt-9 max-w-full aspect-[5.29] w-[148px]" alt="Social media icons" />
        </div>
        <nav className="flex flex-col text-base">
          <h3 className="font-medium leading-none text-black uppercase tracking-[3px]">Company</h3>
          <ul className="mt-7 leading-5 text-black text-opacity-60">
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </nav>
        <nav className="flex flex-col text-base">
          <h3 className="font-medium leading-none text-black uppercase tracking-[3px]">Help</h3>
          <ul className="mt-7 leading-5 text-black text-opacity-60">
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </nav>
        <nav className="flex flex-col text-base w-[149px]">
          <h3 className="font-medium leading-none text-black uppercase tracking-[3px]">FAQ</h3>
          <ul className="mt-7 leading-5 text-black text-opacity-60">
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payments</li>
          </ul>
        </nav>
        <nav className="flex flex-col text-base">
          <h3 className="font-medium leading-none text-black uppercase tracking-[3px]">Resources</h3>
          <ul className="mt-7 leading-5 text-black text-opacity-60">
            <li>Free eBooks</li>
            <li>Development Tutorial</li>
            <li>How to - Blog</li>
            <li>Youtube Playlist</li>
          </ul>
        </nav>
      </div>
      <hr className="shrink-0 mt-12 max-w-full h-px border border-solid border-black border-opacity-10 w-[1240px] max-md:mt-10" />
      <div className="flex flex-wrap gap-10 mt-5 w-full max-w-[1240px] max-md:max-w-full">
        <p className="my-auto text-sm text-right text-black text-opacity-60">
          Shop.co © 2000-2023, All Rights Reserved
        </p>
        <div className="flex flex-1 gap-3 items-end justify-end">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ee3aced6a9a0b7576f7f4188c63dacac99fff2572a1c2b2f93d0f6809db5fa5?placeholderIfAbsent=true&apiKey=c52adf39d782452a98f75530051b6cbf" className="object-contain shrink-0 aspect-[1.57] fill-white stroke-[0.224px] stroke-gray-300 w-[47px]" alt="Payment method icon" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/16cdbbd245560e822505a795402df9e63deeed1fb4acafad4a324da893d9b8b3?placeholderIfAbsent=true&apiKey=c52adf39d782452a98f75530051b6cbf" className="object-contain shrink-0 aspect-[1.53] fill-white stroke-[0.224px] stroke-gray-300 w-[46px]" alt="Payment method icon" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a86e0e2f6697993bc2c9d68535eb0c38ce9cabfbdcfbd04e694fd47b5a933a6b?placeholderIfAbsent=true&apiKey=c52adf39d782452a98f75530051b6cbf" className="object-contain shrink-0 aspect-[1.57] fill-white stroke-[0.224px] stroke-gray-300 w-[47px]" alt="Payment method icon" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/340380300e8128ee7a5163c1218c59e058a3311bae266815cce3250b116b545b?placeholderIfAbsent=true&apiKey=c52adf39d782452a98f75530051b6cbf" className="object-contain shrink-0 aspect-[1.53] fill-white stroke-[0.224px] stroke-gray-300 w-[46px]" alt="Payment method icon" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c537a30dc3ac4fe558167f2ff7d3cfcc7420c3818defa13c0254cb3bb458d79a?placeholderIfAbsent=true&apiKey=c52adf39d782452a98f75530051b6cbf" className="object-contain shrink-0 aspect-[1.57] fill-white stroke-[0.224px] stroke-gray-300 w-[47px]" alt="Payment method icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;