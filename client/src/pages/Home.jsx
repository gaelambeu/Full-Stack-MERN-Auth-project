import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    
      
        <div className="mx-auto max-w-2xl py-32 sm:py-48">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
               Private Data Base
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Download or Register all file of your socity, family, or personal
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to='/company' className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >
                Company
              </Link>
              <Link to='/family' className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >
                Family
              </Link>
              <Link to='/individual' className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >
                Individual
              </Link>
            </div>
          </div>
        </div>
      
  );
}
