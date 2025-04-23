interface ApartmentCardProps {
    address: string;
    city: string;
    country: string;
    unitName: string;
    rentPrice: number;
    squareFeet: number;
  }
  
  export default function ApartmentCard({
    address,
    city,
    country,
    unitName,
    rentPrice,
    squareFeet
  }: ApartmentCardProps) {
    return (
      <div className="apartment-card">
        <h2>{unitName}</h2>
        <p>{address}</p>
        <p>{city}, {country}</p>
        <p>Price: ${rentPrice} / month</p>
        <p>Square Feet: {squareFeet} sqft</p>
        <a href={`/apartments/${unitName}`}>View Details</a>
      </div>
    );
  }
  