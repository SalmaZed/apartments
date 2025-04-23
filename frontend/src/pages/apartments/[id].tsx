import { GetServerSideProps } from 'next';
import { Apartment } from '../../types/apartment';

interface Props {
  apartment: Apartment;
}

export default function ApartmentDetail({ apartment }: Props) {
  return (
<main className="px-4 py-8 w-full sm:px-6 md:px-12">
      <h1 className="text-3xl font-bold mb-3">{apartment.unitName}, {apartment.unitNumber}</h1>
      <p className="text-xl">{apartment.address}, {apartment.city}, {apartment.country}</p>
      <p className="text-xl text-gray-600 mt-2">Size: {apartment.squareFeet} sqft</p>
      <p className="text-xl text-gray-600">Rent: ${apartment.rentPrice}/month</p>
      <p className="text-xl text-gray-600">Project Name : {apartment.project}</p>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
  const res = await fetch(`${apiUrl}/apartments/${id}`);
  const apartment: Apartment = await res.json();

  return { props: { apartment } };
};
