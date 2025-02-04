import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { OffersService } from "../../api";
import { Loader, ProductCard } from "../../components/common";
import { Offer } from "../../types";

export const OfferDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [offer, setOffer] = useState<Offer | undefined>(undefined);
  // Fetch offer details
  const { data, isLoading, error } = useQuery<Offer>(
    ["offer", id],
    () => OffersService.getOfferById(Number(id)),
    {
      enabled: !!id,
      cacheTime: 0,
      onSuccess: (data) => {
        setOffer(data);
        console.log(data);
      },
    }
  );

  return (
    <div style={{ margin: "50px" }}>
      <h1>Offer Details</h1>
      {isLoading ? (
        <Loader type="bouncing" />
      ) : error ? (
        <h2>Error loading offer details.</h2>
      ) : (
        offer && (
          <div>
            <h2>{offer?.title}</h2>
            <p>Description: {offer?.description}</p>
            <p>Discount: {offer?.discount}%</p>
            <p>End Date: {offer?.endDate}</p>
            <img
              src={offer?.imageurl}
              alt={offer?.title}
              style={{ width: "200px", borderRadius: "8px" }}
            /> 
            
            {offer?.products?.length ? (
  <div>
    <h3>Products:</h3>
    <ul>
      {/* {offer.products.map((product) => (
        <li key={product.id} style={{ marginBottom: "10px", listStyle: "none", borderBottom: "1px solid #ddd", paddingBottom: "10px" }}>
          <h4>{product.name}</h4>
          <p>{product.description}</p>
          <p>Price: ${product.basePrice}</p>
          <img
            src={product.mainImageURL}
            alt={product.name}
            style={{ width: "150px", borderRadius: "8px" }}
          />
        </li>
      ))} */}
    </ul>
  </div>
) : (
  <p>No products available for this offer.</p>
)}


          </div>
        )
      )}
    </div>
  );
};
