export const dynamic = 'force-dynamic';

type tParams = Promise<{ slug: string[] }>;


export default async function ApartmentDetails({ params }: { params: tParams }) {
  const { slug } = await params;
  const id = slug[1]
  const res = await fetch(`http://localhost:6000/api/apartments/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    return <div>Apartment not found</div>;
  }

  const apartment = await res.json();

  return (
    <div>
      <h1>{apartment.address}</h1>
      <p>Price: {apartment.price}</p>
      <p>Description: {apartment.description}</p>
    </div>
  );
}

