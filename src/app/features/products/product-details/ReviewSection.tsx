import { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Rating } from "@mui/material";
import { RihamImg } from "../../../../assets";
import { Carousel, Divider } from "antd";


export const ReviewSection = () => {
  const [expandedReview, setExpandedReview] = useState<number | null>(null);
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleExpand = (id: number) => {
    setExpandedReview(expandedReview === id ? null : id);
  };

  interface Review {
    id: number;
    name: string;
    avatar: string;
    rating: number;
    feedback: string;
  }

  const reviewsData: Review[] = [
    {
      id: 1,
      name: "John Doe",
      avatar: RihamImg,
      rating: 5,
      feedback:
        "Amazing service! The products exceeded my expectations. This is a more detailed review explaining the wonderful experience I had with the product. The service was great, and the quality was superb. Highly recommend it to everyone!",
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: RihamImg,
      rating: 4,
      feedback: "Very satisfied with the quality and customer service.",
    },
  ];

  const openModal = (review: Review) => {
    setSelectedReview(review);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedReview(null);
  };
  const sliderSettings = {
    dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  centerMode: false,
  responsive: [
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
  };
  
  const carouselSettings = {
    dots: false,
    dotPosition: "left" as const,
    infinite: true,
    speed: 500,
    autoplay: true,
    vertical: true,
    verticalSwiping: true,
  };
  
  

  return (
    <Container>
      <Divider style={{ borderColor: "#1a1a19b3" }}>
      <h2 style={{fontSize: "25px"}}>Customer Reviews</h2>
      </Divider>
      
      {/* Desktop Carousel */}
      <StyledCarousel {...carouselSettings}>
        {reviewsData.map((review) => {
          const isLong = review.feedback.length > 100; // Define long feedback
          const showFull = expandedReview === review.id;
          const displayedText = showFull ? review.feedback : review.feedback.slice(0, 100) + (isLong ? "..." : "");

          return (
            <Card key={review.id}>
              <div className="header" onClick={() => openModal(review)}>
                <Avatar src={review.avatar} alt={review.name} />
                <div className="name-rating">
                  <p>{review.name}</p>
                  <Rating name="rating" value={review.rating} readOnly size="small" />
                </div>
              </div>
              <Feedback>
                {displayedText}
                {isLong && <span style={{color: "#ce3a70"}}>View more</span>}
              </Feedback>
            </Card>
          );
        })}
      </StyledCarousel>

      {/* Modal */}
      {isModalOpen && selectedReview && (
        <ModalContainer>
          <ModalContent>
            <Avatar1 src={selectedReview.avatar} alt={selectedReview.name} />
            <h2>{selectedReview.name}</h2>
            <Rating name="rating" value={selectedReview.rating} readOnly size="small" />
            <p>
              <strong>Review: </strong>
              {selectedReview.feedback}
            </p>
            <CloseButton onClick={closeModal}>Close</CloseButton>
          </ModalContent>
        </ModalContainer>
      )}
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;

const Card = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;
  cursor: pointer;
  width: 100%;
  max-width: 400px;
  height: 180px;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;

const Avatar1 = styled.img`
  border-radius: 50%;
  width: 60px;
  height: 60px;
`;

const Feedback = styled.p`
  font-size: 0.9rem;
  text-align: left;
  color: #333;
  overflow: hidden;
`;

const ViewMore = styled.span`
  color: #6864d1;
  cursor: pointer;
  font-weight: bold;
  margin-left: 5px;
  font-size:15px;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 80%;
  max-width: 500px;
  text-align: center;
`;

const CloseButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 1rem;
  &:hover {
    background-color: #0056b3;
  }
`;

const StyledCarousel = styled(Carousel)`
  width: 100%;
  max-width: 400px;
  margin: auto;
`;
