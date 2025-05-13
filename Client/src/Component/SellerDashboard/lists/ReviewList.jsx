const ReviewList = () => {
    const reviews = [
      {
        id: 1,
        customer: 'Alex Johnson',
        rating: 5,
        comment: 'Amazing product quality and fast shipping! Will definitely purchase again.',
        date: '2 days ago',
        product: 'Premium T-Shirt'
      },
      {
        id: 2,
        customer: 'Sarah Williams',
        rating: 4,
        comment: 'Good value for money, but sizing was slightly off from what I expected.',
        date: '1 week ago',
        product: 'Classic Jeans'
      },
      {
        id: 3,
        customer: 'Michael Brown',
        rating: 5,
        comment: 'Absolutely love these shoes! Very comfortable and stylish.',
        date: '2 weeks ago',
        product: 'Running Shoes'
      },
      {
        id: 4,
        customer: 'Emily Davis',
        rating: 3,
        comment: 'The product is okay, but the shipping took longer than expected.',
        date: '3 weeks ago',
        product: 'Wireless Headphones'
      }
    ];
  
    return (
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-medium">
                  {review.customer.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-800">{review.customer}</h4>
                  <p className="text-xs text-gray-500">{review.product}</p>
                </div>
              </div>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < review.rating ? 'text-amber-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-600">{review.comment}</p>
            <p className="mt-2 text-xs text-gray-400">{review.date}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default ReviewList;