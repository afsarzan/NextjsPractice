"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathName = usePathname();
  const productId = pathName.split("/")[2];
  const reviewId = pathName.split("/")[4];
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-gray-800">404</h1>
          <p className="text-2xl text-gray-600 mt-4">Oops! Page Not Found</p>
          <p className="text-lg text-gray-500 mt-2">
            The page you're looking for doesn't exist or has been moved. In review page not 
            found for product {productId} and review of {reviewId}
          </p>
          <img src="https://github.com/afsarzan.png" alt="test" sizes="200"  />
          <h4>Contact this developer</h4>
          <a
            href="/"
            className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Go Back Home
          </a>
        </div>
      </div>
    );
  }