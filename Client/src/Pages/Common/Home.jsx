import React from "react";
import {
  HeroSection,
  Loader,
  CategorySection,
  ExclusiveCollection,
  NewArrivals,
  Review,
  TrendingProduct,
} from "../../index.js";
import TextScrollBanner from "./Home/TextScrollBanner";

// Constants for banner texts
const BANNER_TEXTS = {
  CATEGORY: [
    "Curated Collections",
    "Find Your Signature",
    "Designed For You",
    "Express Yourself",
  ],
  NEW_ARRIVALS: [
    "Join The Movement",
    "Stay Connected",
    "Get Early Access",
    "Be The First",
  ],
  TRENDING: [
    "Flash Sales Live",
    "Don't Miss Out",
    "Limited Time Only",
    "Special Offers",
  ],
  EXCLUSIVE: [
    "Limited Editions",
    "Premium Designs",
    "Exclusive Drops",
    "Crafted With Care",
  ],
  REVIEWS: [
    "Hear From Our Community",
    "Verified Reviews",
    "Customer Stories",
    "Real Experiences",
  ],
};

const Home = () => {
  return (
    <main className="min-h-screen overflow-hidden">
      {/* Optional Loader */}
      {/* <Loader /> */}

      <div className="relative px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <section className="mb-24 lg:mb-32">
          <HeroSection />
        </section>

        {/* Categories Section */}
        <SectionWrapper>
          <TextScrollBanner texts={BANNER_TEXTS.CATEGORY} />
          <CategorySection />
        </SectionWrapper>

        {/* New Arrivals Section */}
        <SectionWrapper>
          <TextScrollBanner texts={BANNER_TEXTS.NEW_ARRIVALS} />
          <NewArrivals />
        </SectionWrapper>

        {/* Trending Products Section */}
        <SectionWrapper>
          <TextScrollBanner texts={BANNER_TEXTS.TRENDING} />
          <TrendingProduct />
        </SectionWrapper>

        {/* Exclusive Collection Section */}
        <SectionWrapper>
          <TextScrollBanner texts={BANNER_TEXTS.EXCLUSIVE} />
          <ExclusiveCollection />
        </SectionWrapper>

        {/* Reviews Section */}
        <SectionWrapper>
          <TextScrollBanner texts={BANNER_TEXTS.REVIEWS} />
          <Review />
        </SectionWrapper>
        {/* Final CTA Section */}
        <section className="relative text-center py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-white to-yellow-400 bg-clip-text text-transparent">
              Ready To Transform Your Style?
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who've elevated their
              wardrobe with our premium collections.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 px-8 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300">
                Shop Now
              </button>
              <button className="border border-gray-700 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800/50 transition-all duration-300">
                Explore Collections
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

// Reusable section wrapper component
const SectionWrapper = ({ children, className = "" }) => (
  <section className={` ${className}`}>{children}</section>
);

export default Home;
