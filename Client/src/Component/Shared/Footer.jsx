import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8 px-5 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white text-xl font-bold">
              <svg
                className="w-6 h-6 fill-white transition-transform hover:rotate-12"
                viewBox="0 0 24 24">
                <path d="M16.5 3L12 6.09 7.5 3 2 5v3l3 2v11h14V10l3-2V5l-5.5-2z" />
              </svg>
              <span className="rubik-glitch hover:text-yellow-400 transition-colors">
                DUKE & VILLAN
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium quality t-shirts for those who demand both comfort and
              style. Ethically crafted garments designed to stand the test of
              time.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </h3>
            <ul className="space-y-3">
              {["Home", "Shop", "About Us", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-yellow-400 transition-colors text-sm flex items-center">
                    <span className="w-1 h-1 bg-gray-400 mr-2 rounded-full"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories Column */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">
              Categories
            </h3>
            <ul className="space-y-3">
              {[
                "Casual T-Shirts",
                "Graphic Tees",
                "Oversized",
                "Performance",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-yellow-400 transition-colors text-sm flex items-center">
                    <span className="w-1 h-1 bg-gray-400 mr-2 rounded-full"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact Column */}
          <div className="space-y-6">
            <div>
              <h3 className="text-white font-semibold mb-6 text-lg">
                Connect With Us
              </h3>
              <div className="flex gap-4">
                {[
                  {
                    name: "Instagram",
                    path: "M7.75 2C4.95 2 2.75 4.2 2.75 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7.75zm0 1.5h8.5c1.93 0 3.5 1.57 3.5 3.5v8.5c0 1.93-1.57 3.5-3.5 3.5h-8.5c-1.93 0-3.5-1.57-3.5-3.5v-8.5c0-1.93 1.57-3.5 3.5-3.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm4.75-.25a1 1 0 100 2 1 1 0 000-2z",
                  },
                  {
                    name: "Facebook",
                    path: "M22 12a10 10 0 10-11.63 9.87v-6.99H8.26v-2.88h2.11V9.84c0-2.08 1.23-3.23 3.12-3.23.9 0 1.84.16 1.84.16v2.03h-1.04c-1.03 0-1.36.64-1.36 1.3v1.56h2.31l-.37 2.88h-1.94v6.99A10 10 0 0022 12z",
                  },
                  {
                    name: "Twitter",
                    path: "M19.46 6.03c.01.14.01.28.01.42 0 4.3-3.27 9.26-9.26 9.26A9.19 9.19 0 013 14.55a6.55 6.55 0 004.82-1.35 3.27 3.27 0 01-3.06-2.28 3.28 3.28 0 001.47-.06 3.27 3.27 0 01-2.62-3.2v-.04a3.28 3.28 0 001.48.41A3.27 3.27 0 015.12 5a9.28 9.28 0 006.73 3.42 3.68 3.68 0 01-.08-.75A3.27 3.27 0 0118.11 5a6.54 6.54 0 002.08-.8 3.28 3.28 0 01-1.44 1.8 6.58 6.58 0 001.88-.52 7.04 7.04 0 01-1.67 1.73z",
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yellow-400 transition-colors group"
                    aria-label={social.name}>
                    <svg
                      className="w-5 h-5 fill-current text-gray-400 group-hover:text-black transition-colors"
                      viewBox="0 0 24 24">
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 text-sm">
                NEWSLETTER
              </h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 text-white text-sm px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-yellow-400"
                />
                <button className="bg-yellow-400 text-black px-4 py-2 text-sm font-medium hover:bg-yellow-300 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} DUKE & VILLAN. All rights
            reserved.
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-yellow-400 transition-colors">
              Privacy Policy
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-yellow-400 transition-colors">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
