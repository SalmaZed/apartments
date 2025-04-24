import React from 'react';
import { Apartment } from '../types/apartment';

// Apartment Card showing each apartment with some details
export default function ApartmentCard({ apartment }: { apartment: Apartment }) {
  return (
    <div className="bg-gray-100 hover:bg-blue-200 shadow-lg rounded-lg p-6 hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{apartment.unitName}, {apartment.unitNumber}</h2>
      <h2>{apartment.project}</h2>
    </div>
  );
}
