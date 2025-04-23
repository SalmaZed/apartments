import React from 'react';
import { Apartment } from '../types/apartment';

export default function ApartmentCard({ apartment }: { apartment: Apartment }) {
  return (
    <div className="bg-gray-100 hover:bg-blue-200 shadow-lg rounded-lg p-6 hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{apartment.unitName}</h2>
      <p className="text-gray-700">{apartment.address}, {apartment.city}, {apartment.country}</p>
      <p className="text-sm text-gray-500">{apartment.squareFeet} sqft - ${apartment.rentPrice}/month</p>
    </div>
  );
}
