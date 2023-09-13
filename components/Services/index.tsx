// src/components/FeatureServices.js

import React from 'react';
import Image from 'next/image';

const FeatureServices = () => {
  return (
    <section className="bg-gray-800 py-10">
      <div className="container mx-auto text-center">
      <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[800px] text-center lg:mb-20">
              <span className="block mb-2 text-lg font-semibold text-primary">
                Our Services
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
             InfoBuzz for Online Platforms
              </h2>
              <p className="text-base text-body-color">
              We specialize in helping businesses expand their reach through digital platforms, with a focus on providing valuable data insights and automation. Our goal is to support businesses in achieving their growth objectives by leveraging technology-driven innovations. Join our dynamic ecosystem where digital platforms are infused with actionable events that stimulate further growth.
              </p>
            </div>
          </div>
        </div>
        <div className="grid drop-shadow-lg grid-cols-1 md:grid-cols-5 gap-6">
          {/* Feature 1 */}
          <div className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center">
            <img
              src="https://procohat.com/wp-content/uploads/2022/02/Web_Applications-1-e1661846421529-300x298.png"
              alt="Feature 1"
              className="w-25 h-25 mb-4"
            />
          
            <h3 className="text-xl font-semibold mb-2">Web Application</h3>
            {/* <p className="text-gray-600">Description of feature 1.</p> */}
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center">
            <img
              src="https://procohat.com/wp-content/uploads/2022/02/Mobile_Applications-1-300x300.png"
              alt="Feature 1"
              className="w-25 h-25 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">App - Dev</h3>
            {/* <p className="text-gray-600">Description of feature 1.</p> */}
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center">
            <img
              src="https://procohat.com/wp-content/uploads/2022/02/EVENTS-300x291.png"
              alt="Feature 2"
              className="w-25 h-25 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">UI/UX</h3>
            {/* <p className="text-gray-600">Description of feature 2.</p> */}
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center">
            <img
              src="https://img.freepik.com/free-vector/flat-design-content-management-system-illustrated_23-2148816268.jpg?w=740&t=st=1694624301~exp=1694624901~hmac=bd467852b5f0c9504953a1ec835cd3d5a8f707a0378694e423156ce3d2ca3985"
              alt="Feature 3"
              className="w-25 h-25 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Content Creation</h3>
            {/* <p className="text-gray-600">Description of feature 3.</p> */}
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center">
            <img
              src="https://procohat.com/wp-content/uploads/2022/02/Web_Applications-1-e1661846421529-300x298.png"
              alt="Feature 4"
              className="w-25 h-25 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Feature 4</h3>
            {/* <p className="text-gray-600">Description of feature 4.</p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureServices;


