import React, { useState } from "react";

const CustomerReviewSection = () => {
    const [activeReview, setActiveReview] = useState(0);
  
    const reviews = [
      {
        quote: "This Batsuit changed my crime-fighting career!",
        author: "THE DARK KNIGHT",
        rating: 5
      },
      {
        quote: "Amazing quality - even survived a fight with Bane!",
        author: "ROBIN",
        rating: 5
      },
      {
        quote: "I'll definitely be back for more gadgets!",
        author: "BATGIRL",
        rating: 4
      },
      {
        quote: "Best purchase since my utility belt!",
        author: "NIGHTWING",
        rating: 5
      },
      {
        quote: "Absolutely love it! Joker hates it, which is a plus!",
        author: "CATWOMAN",
        rating: 4
      }
    ];
  
    return (
      <div className="bg-black py-16 px-4 relative border-t-2 border-yellow-500">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-yellow-500 mb-12 text-center font-batman tracking-wider">
            GOTHAM TESTIMONIALS
          </h2>
          
          <div className="relative min-h-[300px]">
            {reviews.map((review, index) => (
              <div 
                key={index}
                className={`absolute inset-0 flex flex-col items-center justify-center p-6 transition-opacity duration-500 ${activeReview === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              >
                <div className="text-yellow-400 mb-6 flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z"/>
                    </svg>
                  ))}
                </div>
                <blockquote className="text-2xl text-center text-white mb-6 font-medium">
                  "{review.quote}"
                </blockquote>
                <cite className="text-yellow-500 text-lg font-bold">
                  - {review.author}
                </cite>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-12 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${activeReview === index ? 'bg-yellow-500' : 'bg-gray-600'} transition-colors duration-300`}
                onClick={() => setActiveReview(index)}
                aria-label={`View review ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <style jsx>{`
          @keyframes pulse {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
          }
          .animate-pulse {
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
        `}</style>
      </div>
    );
  };
  
export default CustomerReviewSection;
