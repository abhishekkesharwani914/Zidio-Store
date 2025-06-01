import React from "react";

// Example product data (replace with your real data)
const trendingProducts = [
	{
		src: "https://i.pinimg.com/1200x/d4/b1/c2/d4b1c25a53f59f6a0e118182e90515cd.jpg",
		title: "Deconstructed Logo Tee",
		price: "$34.99",
		badge: "🔥 Hot",
		category: "Streetwear",
	},
	{
		src: "https://i.pinimg.com/736x/2d/10/53/2d1053f2305782e5d00d870aa18b6000.jpg",
		title: "Abstract Brushstroke",
		price: "$39.99",
		badge: "✨ New",
		category: "Art Tees",
	},
	{
		src: "https://i.pinimg.com/736x/62/6c/09/626c09aa50722981c1d69673d36a2211.jpg",
		title: "Retro Sunwash Tee",
		price: "$29.99",
		badge: "⚡ Flash Sale",
		category: "Retro",
	},
	{
		src: "https://i.pinimg.com/736x/09/20/d8/0920d80a8878e25d1cde0238140470e9.jpg",
		title: "Oversized Pocket Tee",
		price: "$42.99",
		badge: "🏆 Bestseller",
		category: "Essentials",
	},
	{
		src: "https://i.pinimg.com/736x/62/6c/09/626c09aa50722981c1d69673d36a2211.jpg",
		title: "Retro Sunwash Tee",
		price: "$29.99",
		badge: "⚡ Flash Sale",
		category: "Retro",
	},
	{
		src: "https://i.pinimg.com/736x/09/20/d8/0920d80a8878e25d1cde0238140470e9.jpg",
		title: "Oversized Pocket Tee",
		price: "$42.99",
		badge: "🏆 Bestseller",
		category: "Essentials",
	},
	{
		src: "https://i.pinimg.com/736x/62/6c/09/626c09aa50722981c1d69673d36a2211.jpg",
		title: "Retro Sunwash Tee",
		price: "$29.99",
		badge: "⚡ Flash Sale",
		category: "Retro",
	},
	{
		src: "https://i.pinimg.com/736x/09/20/d8/0920d80a8878e25d1cde0238140470e9.jpg",
		title: "Oversized Pocket Tee",
		price: "$42.99",
		badge: "🏆 Bestseller",
		category: "Essentials",
	},
	// ...add more products as needed
];

function TrendingProduct() {
	return (
		<section className="relative overflow-hidden px-4 py-16 ">
			<div className="relative max-w-7xl mx-auto">
				{/* Header Section */}
				<div className="flex flex-col items-center text-center mb-14">
					<div className="flex items-center justify-center gap-4 mb-8">
						<div className="h-px w-16 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
						<span className="text-yellow-400 uppercase tracking-[0.3em] text-xs sm:text-sm font-semibold bg-yellow-400/10 px-4 py-1 rounded-full shadow">
							Limited Edition
						</span>
						<div className="h-px w-16 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
					</div>
					<div className="relative">
						<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-6xl sm:text-8xl lg:text-[160px] font-black uppercase opacity-5 pointer-events-none select-none bg-clip-text text-transparent bg-gradient-to-b from-yellow-400 via-white to-transparent whitespace-nowrap">
							Trending
						</div>
						<h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold uppercase relative tracking-tighter">
							<span className="bg-gradient-to-r from-yellow-400 via-white to-yellow-400 bg-clip-text text-transparent animate-gradient-x bg-[length:200%]">
								Trending Products
							</span>
						</h1>
						<p className="mt-6 text-gray-300 max-w-xl mx-auto text-base sm:text-lg">
							Shop the most popular styles, handpicked for you. Limited drops,
							exclusive designs, and the best of the season.
						</p>
					</div>
				</div>

				{/* Product Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 px-2 sm:px-6">
					{trendingProducts.map((item, idx) => (
						<div
							key={idx}
							className="group relative overflow-hidden aspect-[3/4] rounded-2xl shadow-lg bg-neutral-900 hover:scale-[1.03] hover:shadow-2xl transition-all duration-300"
						>
							{/* Product Image */}
							<img
								src={item.src}
								alt={item.title}
								className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
								loading="lazy"
							/>

							{/* Badge */}
							<span className="absolute top-4 left-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow animate-pulse z-10">
								{item.badge}
							</span>

							{/* Category Tag */}
							<span className="absolute top-4 right-4 bg-black/60 text-yellow-400 text-xs px-2 py-0.5 rounded-full uppercase font-semibold z-10">
								{item.category}
							</span>

							{/* Overlay on hover */}
							<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
								<div className="w-full p-4 space-y-2">
									<div className="flex items-center justify-between">
										<span className="text-white font-bold text-lg">
											{item.price}
										</span>
										<button className="p-2 rounded-full bg-white/10 hover:bg-yellow-400 hover:text-black text-yellow-400 transition">
											<HeartIcon className="w-5 h-5" />
										</button>
									</div>
									<button className="w-full py-2 rounded-lg bg-yellow-400 text-black font-semibold uppercase text-xs tracking-wider shadow hover:bg-yellow-300 transition">
										Quick View
									</button>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* View All Button */}
				<div className="mt-14 text-center">
					<button className="relative inline-flex items-center px-8 py-3 overflow-hidden text-sm font-medium border-2 border-yellow-400 rounded-full group text-yellow-400 hover:text-black transition-colors">
						<span className="absolute left-0 block w-full h-0 transition-all bg-yellow-400 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
						<span className="relative flex items-center gap-2 z-10">
							View Full Collection
							<ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
						</span>
					</button>
				</div>
			</div>

			{/* Animations */}
			<style jsx>{`
				@keyframes gradient-x {
					0% {
						background-position: 0% 50%;
					}
					50% {
						background-position: 100% 50%;
					}
					100% {
						background-position: 0% 50%;
					}
				}
				.animate-gradient-x {
					animation: gradient-x 6s ease infinite;
				}
			`}</style>
		</section>
	);
}

// Icon components
function HeartIcon(props) {
	return (
		<svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
			/>
		</svg>
	);
}

function ArrowRightIcon(props) {
	return (
		<svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M14 5l7 7m0 0l-7 7m7-7H3"
			/>
		</svg>
	);
}

export default TrendingProduct;
