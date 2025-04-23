"use client";
import { useEffect, useState } from 'react';
import ApartmentCard from '../../components/ApartmentCard';

type Apartment = {
  id: string;
  address: string;
  city: string;
  country: string;
  unitName: string;
  rentPrice: number;
  squareFeet: number;
};


export default function ApartmentListing() {
  const [apartments, setApartments] = useState<Apartment[]>([]);

  useEffect(() => {
    // Fetch all apartments from the backend
    fetch('/api/apartments')
      .then((response) => response.json())
      .then((data) => setApartments(data))
      .catch((error) => console.error('Error fetching apartments:', error));
  }, []);

  return (
    <div className="apartment-list">
      <h1>Apartment Listings</h1>
      <div className="apartment-cards">
        {apartments.map((apartment) => (
          <ApartmentCard 
            key={apartment.id}
            address={apartment.address}
            city={apartment.city}
            country={apartment.country}
            unitName={apartment.unitName}
            rentPrice={apartment.rentPrice}
            squareFeet={apartment.squareFeet}
          />
        ))}
      </div>
    </div>
  );
}
