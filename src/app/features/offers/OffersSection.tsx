import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img from '../../../assets/store/discount.png';
import img2 from '../../../assets/store/discount2.png';
import img1 from '../../../assets/store/discountChar.png';

import { Theme } from '../../utils/Theme';

const offersData = [
  { id: 1, image: img, title: 'Offer 1', store: 'Sweet Touches', description: 'Get a 30% discount on all items!' },
  { id: 2, image: img1, title: 'Offer 2', store: 'Siwar Store', description: 'Buy one, get one free on selected products!!' },
  { id: 3, image: img2, title: 'Offer 3', store: 'Sweet Touches', description: 'Free shipping on all orders over $50.' },
];

export const OffersSection: React.FC = () => {
  const settings = {
    dots: true, // Enable dots navigation
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Auto play the slides
    autoplaySpeed: 3000, // Time between auto transitions
  };

  return (
    <Box component="section" py={4}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          margin: '1rem auto',
        }}
      >
        <Typography
          variant="h2"
          style={{
            fontFamily: 'DynaPuff',
            fontWeight: 400,
            fontSize: '3.7rem',
            color: Theme.colors.secondary,
            alignSelf: 'center',
          }}
        >
          Offers
        </Typography>

        <Slider {...settings}>
          {offersData.map((offer) => (
            <div
              key={offer.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '15rem',
                gap: '8rem',
                width: '100%',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingRight: '8rem',
                  paddingLeft: '14rem',
                 // gap: '2rem',
                  width: '100%',
                  flexWrap: 'wrap',
                  flexDirection: 'row-reverse', // Change here to make the image on the right
                }}
              >
                 <img
                  alt={offer.title}
                  src={offer.image}
                  style={{
                    width: '45%',
                    height: '500px',
                    borderRadius: '10px',
                    objectFit: 'cover',
                  }}
                />
                {/* Content on the left */}
                <div style={{ flex: 1 }}>
                  <Typography
                    variant="h3"
                    style={{
                      color: Theme.colors.primary_dark,
                      fontWeight: '20px',
                      marginBottom: '1rem',
                      fontFamily: 'Delius Swash Caps',
                    }}
                  >
                    {offer.title}
                  </Typography>
                  <Typography
                    variant="h4"
                    style={{
                      color: Theme.colors.primary,
                      fontWeight: 'bold',
                      marginBottom: '1rem',
                      fontFamily: 'Delius',
                    }}
                  >
                    {offer.store}
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{
                      color: 'rgb(27, 26, 52)',
                      marginBottom: '1rem',
                      fontSize: '1.2rem',
                    }}
                  >
                    {offer.description}
                  </Typography>

                  {/* Button */}
                  <Button
                    variant="contained"
                    sx={{
                      padding: '10px 20px',
                      fontSize: '1rem',
                      marginTop: '1rem',
                      backgroundColor: Theme.colors.primary,
                      boxShadow: '0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5), 0 0.75rem 0.5rem rgba(255, 255, 255, 0.52) inset, 0 0.25rem 0.5rem 0 rgba(135, 149, 178, 0.362) inset',
                      '&:hover': {
                        transform: "scale(1.05);",
                        boxShadow: '0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5), 0 0.75rem 0.5rem rgba(255, 255, 255, 0.52) inset, 0 0.25rem 0.5rem 0 rgba(135, 149, 178, 0.362) inset',
                        backgroundColor: Theme.colors.secondary_light,
                      }
                    }}
                    onClick={() => alert('Button clicked!')}
                  >
                    Learn More
                  </Button>
                </div>

                {/* Image on the right */}
                
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Box>
  );
};
