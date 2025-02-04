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
  console.log("Offer products:", offer);
  console.log ("Offer details:", offer?.offer?.storeInfo);
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
            <h2>{offer?.offer?.title}</h2>
            <p>Description: {offer?.offer?.description}</p>
            <p>Discount: {offer?.offer?.discount}%</p>
            <p>End Date: {offer?.offer?.endDate}</p>
            <img
              src={offer?.offer?.imageurl}
              alt={offer?.offer?.title}
              style={{ width: "200px", borderRadius: "8px" }}
            /> 

{/* {offer?.offer?.storeInfo && (
  <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ddd", borderRadius: "8px" }}>
    <h3>Store Information</h3>
    <p><strong>Store Name:</strong> {offer.offer.storeInfo.storeName}</p>
    <p><strong>Description:</strong> {offer.offer.storeInfo.description}</p>
    {offer.offer.storeInfo.storeLogoURL && (
      <img 
        src={offer.offer.storeInfo.storeLogoURL} 
        alt={offer.offer.storeInfo.storeName} 
        style={{ width: "100px", borderRadius: "8px" }} 
      />
    )}
  </div>
)} */}

            
            
{offer?.products?.length ? (
  offer.products.map((productDto, index) => {
    return productDto?.product ? (
      <ProductCard key={productDto.product.id} {...productDto} />
    ) : (
      <p key={index}>Invalid product</p> // Helps detect missing product cases
    );
  })
) : (
  <p>No products available for this offer.</p>
)}
          </div>
        )
      )}
    </div>
  );
};
