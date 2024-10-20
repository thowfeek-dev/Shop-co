import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import BrandStrip from '../components/BrandStrip';
import {ProductGrid} from '../components/ProductGrid';
import PromoBanner from '../components/PromoBanner';
import InstagramSection from '../components/InstagramSection';
import NewsletterSignup from '../components/NewsletterSignup';
import TestimonialCarousel from '../components/TestimonialSection';
import NewsletterSubscription from '../components/NewsletterSubscription';
import MyComponent from '../components/MyComponent';

const newArrivals = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ab4e0b6d078ae192c31abdd20ed20c680ac1724de11956c3eca0ee7cf9ce02e5?placeholderIfAbsent=true&apiKey=c52adf39d782452a98f75530051b6cbf",
    title: "T-SHIRT WITH TAPE DETAILS",
    rating: "4.5/5",
    price: 120
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/b6a19ca0e4a258529a1a23530e795b35cacd0cf6e6e1fc0c7f2057d6f121bd08?placeholderIfAbsent=true&apiKey=c52adf39d782452a98f75530051b6cbf",
    title: "SKINNY FIT JEANS",
    rating: "3.5/5",
    price: 240,
    salePrice: 260
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/7fbfcc1e30981c269a955d9c2665d13251538a672cbf0dc0a9355b47e7fcf45a?placeholderIfAbsent=true&apiKey=c52adf39d782452a98f75530051b6cbf",
    title: "CHECKERED SHIRT",
    rating: "4.5/5",
    price: 180
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4f6a1ecafb5b7b242e26b74c6dc86c3dffb5432ce8d76a00284e483138c75db4?placeholderIfAbsent=true&apiKey=c52adf39d782452a98f75530051b6cbf",
    title: "SLEEVE STRIPED T-SHIRT",
    rating: "4.5/5",
    price: 130,
    salePrice: 160
  }
];

const topSelling = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/b15f549bf083b5ed6b06e8dab8084c62996c6a6af7a7b6bf2489758500fefd38?placeholderIfAbsent=true&apiKey=c52adf39d782452a98f75530051b6cbf",
    title: "VERTICAL STRIPED SHIRT",
    rating: "5.0/5",
    price: 212,
    salePrice: 232
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/dd00e2fcc34d0ec9bcabff3604e2579f1e4f78d9d5f319a3a179c68b5d276290?placeholderIfAbsent=true&apiKey=c52adf39d782452a98f75530051b6cbf",
    title: "COURAGE GRAPHIC T-SHIRT",
    rating: "4.0/5",
    price: 145
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/affee04155277d23e1825c0f8b2e9b45cfe567cdb99462c65fdeb119b0b29622?placeholderIfAbsent=true&apiKey=c52adf39d782452a98f75530051b6cbf",
    title: "LOOSE FIT BERMUDA SHORTS",
    rating: "3.0/5",
    price: 80
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/b3349ac4479e66ad9aa9ae8ead1aecb987a5eb4db1ae0f4a016e448276ef4d7e?placeholderIfAbsent=true&apiKey=c52adf39d782452a98f75530051b6cbf",
    title: "FADED SKINNY JEANS",
    rating: "4.5/5",
    price: 210
  }
];

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <BrandStrip />
      <ProductGrid title="NEW ARRIVALS" products={newArrivals} />
      <ProductGrid title="TOP SELLING" products={topSelling} />
      <MyComponent />
      <ProductGrid title="BEST SELLING" products={topSelling} />
      <PromoBanner />
      <InstagramSection />
      <NewsletterSignup />
      <TestimonialCarousel />
      <NewsletterSubscription />
    </Layout>
  );
};

export default HomePage;