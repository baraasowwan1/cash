import React from "react";
import { CheckIcon } from "@heroicons/react/24/solid"; // نستخدم أيقونة من heroicons

export const ServiceAreas = () => {
  const serviceAreas = {
    "Illinois (IL)": [
      "Chicago",
      "Calumet City",
      "Harvey",
      "Dolton",
      "Blue Island",
      "South Holland",
      "Chicago Heights",
      "Oak Lawn",
      "Bridgeview",
      "Crestwood",
      "Summit",
      "Worth",
      "Markham",
      "South Side Chicago",
    ],
    "Indiana (IN)": [
      "Hammond",
      "Gary",
      "East Chicago",
      "Highland",
    ],
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Service Areas</h2>
        <p className="text-center mb-12 text-gray-700">
          We proudly provide our services in the following cities:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(serviceAreas).map(([state, cities]) => (
            <div key={state} className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-4">{state}</h3>
              <ul className="space-y-2">
                {cities.map((city) => (
                  <li key={city} className="flex items-center text-gray-800">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
