// Card.js
import React from 'react';
import { Link,NavLink } from 'react-router-dom';

const Card = ({ imageSrc, heading, subheading, price }) => {
  return (
    <div className="w-80 mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden group relative ">
      {/* Button Section */}
      
      <button
        id="btn"
        className="p-2 absolute top-4 right-16  bg-black  translate-y-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
      >
        <Link to='/AddToCart'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={24}
          height={24}
          color="#ffffff"
          fill="none"
        >
          <path
            d="M8 16H15.2632C19.7508 16 20.4333 13.1808 21.261 9.06908C21.4998 7.88311 21.6192 7.29013 21.3321 6.89507C21.045 6.5 20.4947 6.5 19.3941 6.5H6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M8 16L5.37873 3.51493C5.15615 2.62459 4.35618 2 3.43845 2H2.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M8.88 16H8.46857C7.10522 16 6 17.1513 6 18.5714C6 18.8081 6.1842 19 6.41143 19H17.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="10.5" cy="20.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="17.5" cy="20.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
        </svg></Link>
      
      </button>

      {/* Image Section */}
      <img
        className="w-full h-48 object-cover hover:h-52 transition-all duration-500 ease-in-out"
        src={imageSrc}
        alt="No Pic"
      />

      {/* Content Section */}
      <div className="p-4">
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-gray-800">{heading}</h2>

        {/* Subheading */}
        <p className="text-gray-600 mt-0.5">{subheading}</p>

        {/* Price */}
        <p className="mt-1 text-xl font-bold text-gray-900">{price}</p>
      </div>
    </div>
  );
};

export default Card;
