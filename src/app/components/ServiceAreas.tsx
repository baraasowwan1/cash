// src/components/ServiceAreas.tsx
import React from "react";

export const ServiceAreas = () => {
  const areas = [
    "Chicago, IL",
    "Calumet City, IL",
    "Harvey, IL",
    "Hammond, IN",
    "Gary, IN",
    "Dolton, IL",
    "Blue Island, IL",
    "South Holland, IL",
    "East Chicago, IN",
    "Chicago Heights, IL",
    "Oak Lawn, IL",
    "Bridgeview, IL",
    "Crestwood, IL",
    "Summit, IL",
    "Worth, IL",
    "Markham, IL",
    "South Side Chicago, IL",
    "Highland, IN"
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Service Areas</h2>
        <p className="text-center mb-12 text-gray-700">
          We proudly provide our services in the following cities:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-4 text-center hover:bg-blue-50 transition"
            >
              {area}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
