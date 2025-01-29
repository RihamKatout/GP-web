import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../../assets/store/discount.png";
import img2 from "../../../assets/store/discount2.png";
import img1 from "../../../assets/store/discountChar.png";
import { Theme } from "../../utils/Theme";
import { Divider } from "antd";
import { useNavigate } from "react-router-dom";

// Mock data for offers
const offersData = [
  { id: 1, image: img, title: "Black Friday Sale", store: "For any product!", description: "Get up to 70% off on selected items!" },
  { id: 2, image: img1, title: "Eid Sale", store: "Until the end of the month", description: "Celebrate Eid with exclusive discounts!" },
  { id: 3, image: img2, title: "Mother's Day Specials", store: "For any store", description: "Show your love with up to 50% off!" },
];

export const OffersSection: React.FC = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box component="section" py={4}>
      <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", margin: "1rem auto" }}>
        <div style={{ width: "80%", margin: "0 auto" }}>
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
              Offers
            </Typography>
          </Divider>
        </div>

        {/* Offer Slider */}
        <Slider {...settings}>
          {offersData.map((offer) => (
            <div key={offer.id} style={{ display: "flex", alignItems: "center", padding: "15rem", gap: "8rem", width: "100%" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingRight: "8rem", paddingLeft: "14rem", width: "100%", flexWrap: "wrap", flexDirection: "row-reverse" }}>
                <img
                  alt={offer.title}
                  src={offer.image}
                  style={{ width: "45%", height: "400px", borderRadius: "10px", objectFit: "cover" }}
                />
                <div style={{ flex: 1 }}>
                  <Typography
                    variant="h3"
                    style={{
                      color: Theme.colors.primary_dark,
                      fontWeight: "20px",
                      marginBottom: "1rem",
                      fontFamily: "Delius Swash Caps",
                    }}
                  >
                    {offer.title}
                  </Typography>
                  <Typography
                    variant="h4"
                    style={{
                      color: Theme.colors.primary,
                      fontWeight: "bold",
                      marginBottom: "1rem",
                      fontFamily: "Delius",
                    }}
                  >
                    {offer.store}
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{
                      color: "rgb(27, 26, 52)",
                      marginBottom: "1rem",
                      fontSize: "1.2rem",
                    }}
                  >
                    {offer.description}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      padding: "10px 20px",
                      fontSize: "1rem",
                      marginTop: "1rem",
                      backgroundColor: Theme.colors.primary,
                      boxShadow:
                        "0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5), 0 0.75rem 0.5rem rgba(255, 255, 255, 0.52) inset, 0 0.25rem 0.5rem 0 rgba(135, 149, 178, 0.362) inset",
                      "&:hover": {
                        transform: "scale(1.05);",
                        boxShadow:
                          "0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5), 0 0.75rem 0.5rem rgba(255, 255, 255, 0.52) inset, 0 0.25rem 0.5rem 0 rgba(135, 149, 178, 0.362) inset",
                        backgroundColor: Theme.colors.secondary_light,
                      },
                    }}
                    onClick={() => navigate("/offerPage")}
                  >
                    View More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* View More Button */}
        {/* <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: Theme.colors.secondary,
              fontSize: "1.2rem",
              padding: "10px 30px",
              "&:hover": {
                backgroundColor: Theme.colors.secondary_dark,
              },
            }}
            onClick={() => navigate("/offerPage")}
          >
            View More
          </Button>
        </div> */}
      </div>
    </Box>
  );
};
