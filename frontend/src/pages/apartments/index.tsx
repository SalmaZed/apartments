import { useEffect, useState } from 'react';
import Link from 'next/link';
import ApartmentCard from '../../components/ApartmentCard';
import { Apartment } from '../../types/apartment';

// Apartments Listing page
export default function ApartmentsList() {
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

// Fetch apartments by calling backend listing API
  useEffect(() => {
    fetch(`${apiUrl}/apartments`)
      .then((res) => res.json())
      .then(setApartments)
      .catch(console.error);
  }, []);

  return (
<main className="px-4 py-8 w-full sm:px-6 md:px-12">
<h1 className="text-3xl font-bold mb-6">Apartment Listings</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {apartments.map((apartment) => (
          <Link href={`/apartments/${apartment.id}`} key={apartment.id}>
            <ApartmentCard apartment={apartment} />
          </Link>
        ))}
      </div>
    </main>
  );
}
