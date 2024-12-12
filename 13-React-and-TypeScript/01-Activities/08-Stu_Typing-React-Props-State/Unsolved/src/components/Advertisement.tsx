// TODO: Fill in the Advertisement component below to include the three string fields `companyName`, `productDescription` and `price`.
interface AdvertisementProps {
  companyName: string;
  productDescription: string;
  price: number;
}
function Advertisement({
  companyName,
  productDescription,
  price,
}: AdvertisementProps) {
  return (
    <div className="advertisement">
      <h2>{companyName}</h2>
      <p>
        {productDescription} for the low price of {price}
      </p>
    </div>
  );
}

export default Advertisement;
