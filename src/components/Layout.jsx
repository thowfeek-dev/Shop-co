import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <div className="flex overflow-hidden flex-wrap gap-10 px-20 py-2.5 w-full text-sm font-medium text-white bg-black max-md:px-5 max-md:max-w-full">
        <div>
          <span className="">
            Sign up and get 20% off to your first order.{" "}
          </span>
          <span className="underline">Sign Up Now</span>
        </div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/157e95011ff3a3efc131e42ec6d1be0c7bfd11d1e4796363d54c9fe1fed96e86?placeholderIfAbsent=true&apiKey=c52adf39d782452a98f75530051b6cbf" className="object-contain shrink-0 w-5 aspect-square" alt="" />
      </div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;