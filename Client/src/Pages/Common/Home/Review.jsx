import React from "react";
const ReviewsData = [
  {
    rating: 5,
    review:
      "The t-shirt quality is amazing! Super soft and fits perfectly. Will buy again.",
  },
  {
    rating: 4,
    review:
      "Loved the print and color options. Delivery was a bit slow but worth the wait.",
  },
  {
    rating: 5,
    review:
      "Customer support helped me choose the right size. The t-shirt is now my favorite!",
  },
  {
    rating: 5,
    review:
      "Great value for money. The fabric feels premium and the design stands out.",
  },
  {
    rating: 4,
    review:
      "Comfortable and stylish. I get compliments every time I wear my new tee.",
  },
];

const MoreReviewsData = [
  {
    rating: 5,
    review:
      "Best t-shirt I've ever owned. The material is breathable and perfect for summer.",
  },
  {
    rating: 4,
    review:
      "Nice selection of graphic tees. Sizing runs a bit large, but still happy with my purchase.",
  },
  {
    rating: 5,
    review:
      "Fast shipping and great packaging. The t-shirt looks exactly like the pictures.",
  },
  {
    rating: 5,
    review:
      "I bought matching t-shirts for my friends and everyone loved them!",
  },
  {
    rating: 4,
    review:
      "Good quality prints that don't fade after washing. Will order more soon.",
  },
];
const Review = () => {
  const duplicatedReviews = [...ReviewsData, ...ReviewsData, ...ReviewsData];
  const duplicatedReviews2 = [
    ...MoreReviewsData,
    ...MoreReviewsData,
    ...MoreReviewsData,
  ];
  return (
    <>
      {/* Reviews Section */}
      <div className="overflow-hidden">
        <div className=" ">
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

          {/* Review Cards Container */}
          <div className="relative py-8 flex flex-col gap-8 overflow-hidden">
            {/* Scrolling Review Cards */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black via-black/90 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black via-black/90 to-transparent z-10 pointer-events-none"></div>

            <div className="overflow-hidden">
              <div className="flex items-center w-max gap-4 h-full scroll">
                {duplicatedReviews.map((review, index) => (
                  <div
                    key={`${index}`}
                    className=" p-8 w-84 h-fit rounded-2xl border border-gray-700 whitespace-normal">
                    {/* Review Text */}
                    <p className="text-gray-300 italic">"{review.review}"</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="flex items-center w-max gap-4 h-full reverse-scroll">
                {duplicatedReviews2.map((review, index) => (
                  <div
                    key={`${index}`}
                    className=" p-8 w-84 h-fit rounded-2xl border border-gray-700 whitespace-normal">
                    {/* Review Text */}
                    <p className="text-gray-300 italic">"{review.review}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for the animation */}
      <style jsx>{`
        @keyframes scroll-reviews {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-reviews {
          display: inline-block;
          animation: scroll-reviews 30s linear infinite;
        }
        .animate-scroll-reviews:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
};

export default Review;
