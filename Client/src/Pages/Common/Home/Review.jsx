import React from "react";

const Review = () => {
  return (
    <>
      {/* Reviews Section */}
      <div className="px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-16">
            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
              <span className="text-yellow-400 uppercase tracking-[0.2em] text-xs sm:text-sm font-medium">
                Testimonials
              </span>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            </div>

            {/* Title Section */}
            <div className="relative">
              {/* Background Text */}
              <div
                className="absolute -top-2 sm:-top-3.5 lg:-top-9 left-1/2 transform -translate-x-1/2 
                        text-5xl sm:text-8xl lg:text-[160px] font-bold uppercase opacity-5 
                      pointer-events-none select-none bg-clip-text text-transparent 
                      bg-gradient-to-b from-white via-white to-transparent whitespace-nowrap tracking-wider">
                Voices
              </div>

              {/* Main Title */}
              <h2 className="text-3xl sm:text-[3.55rem] lg:text-8xl font-bold uppercase relative">
                <span
                  className="bg-gradient-to-r from-yellow-400 via-white to-yellow-400 
                       bg-clip-text text-transparent animate-gradient-shift bg-[length:200%]">
                  Customer Reviews
                </span>
              </h2>

              <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mt-6">
                Hear what our community says about their experience with our
                products.
              </p>
            </div>
          </div>

          {/* Review Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alexandra K.",
                role: "Fashion Influencer",
                rating: 5,
                review:
                  "The craftsmanship is exceptional! I've never felt fabric this luxurious. My followers keep asking where I got this piece.",
                avatar: "/avatars/avatar1.jpg",
              },
              {
                name: "Marcus T.",
                role: "Loyal Customer",
                rating: 4,
                review:
                  "Perfect fit and comfort. The attention to detail is remarkable. Only wish they had more color options!",
                avatar: "/avatars/avatar2.jpg",
              },
              {
                name: "Sophie R.",
                role: "First-time Buyer",
                rating: 5,
                review:
                  "Worth every penny! The packaging alone felt like unwrapping a luxury gift. The product exceeded all expectations.",
                avatar: "/avatars/avatar3.jpg",
              },
            ].map((review, index) => (
              <div
                key={index}
                className=" p-8 rounded-2xl border border-gray-700 hover:border-yellow-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/10">
                {/* Rating Stars */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating ? "text-yellow-400" : "text-gray-600"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-300 italic">"{review.review}"</p>
              </div>
            ))}
          </div>

          {/* CTA & Overall Rating */}
          <div className="mt-10 text-center">
            <div className="inline-flex items-center bg-gray-800/50 border border-gray-700 rounded-full px-6 py-3 mb-8">
              <div className="flex items-center mr-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-white text-lg font-medium">
                4.9/5 from 2,487 reviews
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to experience the difference?
            </h3>
            <button className="bg-gradient-to-r from-yellow-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
