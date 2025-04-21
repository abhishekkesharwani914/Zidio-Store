import React from "react";

function TextScrollAnimation({ texts }) {
  const repeatedText = [...texts, ...texts];
  console.log(repeatedText);

  return (
    <div className="w-full flex overflow-hidden select-none py-4">
      <ul className="flex shrink-[0] text-white gap-6 scroll">
        {repeatedText.map((text) => (
          <li className="text-4xl flex items-center justify-center">
            <svg
              className="mx-3 h-10 w-10 fill-yellow-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l2.39 6.955h7.305l-5.915 4.296L18.78 21 12 16.816 5.22 21l2.999-7.749L2.304 8.955h7.305z" />
            </svg>
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TextScrollAnimation;
