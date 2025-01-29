import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Divider } from "antd";
import img from "../../../assets/store/discount.png";
import img2 from "../../../assets/store/discount2.png";
import img1 from "../../../assets/store/discountChar.png";
import { Theme } from "../../utils/Theme";

// Mock data for all offers
const allOffers = [
  { id: 1, image: img, title: "Black Friday Sale",detail:"For any product!", description: "Get up to 70% off on selected items!" },
  { id: 2, image: img1, title: "Eid Sale",detail:"Until the end of the month", description: "Celebrate Eid with exclusive discounts!" },
  { id: 3, image: img2, title: "Mother's Day Specials",detail:"For any store",  description: "Show your love with up to 50% off!" },
  { id: 4, image: img, title: "New Year Offers", detail:"Till the end of this month", description: "Kickstart the new year with amazing deals!" },
  { id: 5, image: img2, title: "Seasonal Clearance",detail:"For any product!",  description: "End-of-season discounts up to 60% off!" },
  { id: 6, image: img1, title: "Valentine's Day Sale",detail:"For any store",  description: "Exclusive gifts for your loved ones!" },
];

const OfferPage: React.FC = () => {
  return (
    <Box component="section" py={4}>
      {/* All offers section */}
      <div style={{ width: "80%", margin: "2.5rem auto" }}>
        <Divider style={{ borderColor: "#1a1a19b3" }}>
          <Typography
            variant="h2"
            style={{
              fontFamily: "DynaPuff",
              fontWeight: 400,
              fontSize: "3.7rem",
              color: Theme.colors.secondary_dark,
              alignSelf: "center",
            }}
          >
            All Offers
          </Typography>
        </Divider>
      </div>

      {/* Display each offer in a single row with image on the left and text on the right */}
      <div style={{ marginTop: "2rem", width: "80%", margin: "0 auto"}}>
        {allOffers.map((offer) => (
          <div
            key={offer.id}
            style={{
              display: "flex",
              flexDirection: "row", // Image on the left, text on the right
              alignItems: "center", // Vertically center content
              marginBottom: "2rem",
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "1rem",
              gap: "2rem", // Add gap between image and text
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.15)" 
            }}
          >
            <img
              src={offer.image}
              alt={offer.title}
              style={{
                width: "40%", // Set image width
                height: "200px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <div style={{ flex: 1 }}>
               
              <Typography
                variant="h5"
                style={{
                  color: Theme.colors.primary_dark,
                  fontWeight: "bold",
                  marginBottom: "1rem",
                  fontFamily: "Delius",
                }}
              >
                {offer.title}
              </Typography>
              <Typography
                    variant="h5"
                    style={{
                    color: Theme.colors.secondary_dark,
                    fontWeight: "bold",
                    fontFamily: "Delius Swash Caps",
                    marginBottom: "1rem",
                    }}
                >
                    {offer.detail}
                </Typography>
              <Typography
                variant="body1"
                style={{
                  color: Theme.colors.secondary_dark,
                  textAlign: "left",
                  marginBottom: "1rem",
                  fontSize: "1.2rem",
                }}
              >
                {offer.description}
              </Typography>
              {/* <Button
                variant="contained"
                sx={{
                  backgroundColor: Theme.colors.primary,
                  "&:hover": {
                    backgroundColor: Theme.colors.secondary_light,
                  },
                }}
                onClick={() => alert(`Learn More about ${offer.title}`)}
              >
                Learn More
              </Button> */}
            </div>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default OfferPage;
