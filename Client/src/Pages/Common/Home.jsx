import React, { useState, useEffect } from "react";
import {
  HeroSection,
  Loader,
  DealSection,
  CategorySection,
  ExclusiveCollection,
  Newsletter,
} from "../../index.js";
import TextScrollBanner from "./Home/TextScrollBanner";

function Home() {
  // const [loading, setLoading] = useState(true)

  // Organized text arrays with consistent messaging
  const bannerTexts = {
    hype: [
      "Elevate Your Style.",
      "Defy The Ordinary.",
      "Born Bold. Live Bolder.",
      "Make Your Mark.",
    ],
    category: [
      "Curated Collections.",
      "Find Your Signature.",
      "Designed For You.",
      "Express Yourself.",
    ],
    collection: [
      "Limited Editions.",
      "Premium Designs.",
      "Exclusive Drops.",
      "Crafted With Care.",
    ],
    deals: [
      "Flash Sales Live.",
      "Don't Miss Out.",
      "Limited Time Only.",
      "Special Offers.",
    ],
    newsletter: [
      "Join The Movement.",
      "Stay Connected.",
      "Get Early Access.",
      "Be The First.",
    ],
  };

  return (
    <main className="min-h-screen text-gray-100 relative">
      {/* <Loader /> */}

      <div className="relative px-10 py-[64px]">
        {/* Background Elements */}

        <div className="relative z-10">
          {/* Hero Section with Enhanced Spacing */}
          <section className="relative">
            <HeroSection />
            <TextScrollBanner
              texts={bannerTexts.hype}
              className="bg-gradient-to-r from-black via-yellow-400/10 to-black"
            />
          </section>

          {/* Categories Section */}
          <section>
            <TextScrollBanner texts={bannerTexts.category} />
            <CategorySection />
          </section>

          {/* Collection Section */}
          <section>
            <TextScrollBanner
              texts={bannerTexts.collection}
              className="bg-gradient-to-r from-black via-yellow-400/10 to-black"
            />
            <ExclusiveCollection />
          </section>

          {/* Deals Section */}
          <section>
            <TextScrollBanner texts={bannerTexts.deals} />
            <DealSection />
          </section>

          {/* Newsletter Section */}
          <section>
            <TextScrollBanner
              texts={bannerTexts.newsletter}
              className="bg-gradient-to-r from-black via-yellow-400/10 to-black"
            />
            <Newsletter />
          </section>

        </div>
      </div>
    </main>
  );
}

export default Home;
