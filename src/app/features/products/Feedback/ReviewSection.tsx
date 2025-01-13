import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import img from '../../../../assets/store/riham.png'
import img2 from '../../../../assets/store/feedback.png'


const reviewsData = [
  { id: 1, name: 'John Doe', avatar: img, rating: 5, feedback: 'Amazing service!' },
  { id: 2, name: 'Jane Smith', avatar: img, rating: 4, feedback: 'Very satisfied with the quality.' },
  { id: 3, name: 'Sam Wilson', avatar: img, rating: 5, feedback: 'Highly recommend this product!' },
  { id: 4, name: 'Anna Lee', avatar: img, rating: 4, feedback: 'Great experience overall!' },
];

const ReviewSection = () => {
  const [reviews, setReviews] = useState(reviewsData);
  const [showForm, setShowForm] = useState(false);

interface Review {
    id: number;
    name: string;
    avatar: string;
    rating: number;
    feedback: string;
}

interface FormElements extends HTMLFormControlsCollection {
    name: HTMLInputElement;
    rating: HTMLInputElement;
    feedback: HTMLTextAreaElement;
}

interface ReviewFormElement extends HTMLFormElement {
    readonly elements: FormElements;
}

const handleSubmit = (event: React.FormEvent<ReviewFormElement>) => {
    event.preventDefault();
    const newReview: Review = {
        id: reviews.length + 1,
        name: event.currentTarget.elements.name.value,
        avatar: 'https://via.placeholder.com/50',
        rating: parseInt(event.currentTarget.elements.rating.value),
        feedback: event.currentTarget.elements.feedback.value,
    };
    setReviews([...reviews, newReview]);
    setShowForm(false);
};

  return (
    <Container>
      <h2>What Our Customers Say</h2>
      <SliderWrapper>
        <StyledSlider {...sliderSettings}>
          {reviews.map((review) => (
            <Card key={review.id}>
              <Avatar src={review.avatar} alt={review.name} />
              <Name>{review.name}</Name>
              <Rating>{'⭐'.repeat(review.rating)}</Rating>
              <Feedback>{review.feedback}</Feedback>
            </Card>
          ))}
        </StyledSlider>
      </SliderWrapper>
        <Button onClick={() => setShowForm(true)}>Leave Feedback</Button>
      {showForm && (
        <FormOverlay>
          <Form onSubmit={handleSubmit}>
            <h3>Leave Your Feedback <img src={img2} alt="Avatar" style={{ width: '100px', height: '50px' , margin: '-30px' }} /> </h3>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="number" name="rating" placeholder="Rating (1-5)" min="1" max="5" required />
            <textarea name="feedback" placeholder="Your Feedback" required></textarea>
            <button type="submit">Submit</button>
            <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
          </Form>
        </FormOverlay>
      )}
    </Container>
  );
};

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
const StyledSlider = styled(Slider)`
  .slick-track {
    display: flex;
    align-items: center;
    
  }

  .slick-dots li button:before {
    color: ${({ theme }) => theme.colors.secondary};
  }

  .slick-dots li.slick-active button:before {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;


const Container = styled.div`
  text-align: center;
  border-radius: 1rem;
 // width: '50%';
  box-shadow: 10px -4px 25px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.colors.white};
`;

const SliderWrapper = styled.div`
  margin-right: 2rem;
  margin-left: 2rem;
`;

const Card = styled.div`
  padding: 1rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
  gap: 1rem;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 70px;
  height: 70px;
  
`;

const Name = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const Rating = styled.div`
  color: #ffcc00;
  margin-bottom: 0.5rem;
`;

const Feedback = styled.p`
  font-size: 1rem;
  color: #555;
`;



const Button = styled.button`
  padding: 0.5rem 1rem;
  margin-top: 1.3rem;
  margin-bottom: 0.5rem;
  color: #000;
  border: none;
  border-radius: 1.5rem;
  cursor: pointer;
  font-size: 1rem;
  font-family: "Delius", serif;
  background-color: rgba(210, 110, 126, 0.9);
  box-shadow: 0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5),
      2px 0.5rem 0.5rem rgba(255, 255, 255, 0.52) inset,
      0 0.25rem 0.5rem 0 rgba(212, 170, 185, 0.36) inset;
  &:hover {
    //transform: scale(1.05);
        box-shadow: 0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5), 
                    0 0.75rem 0.5rem rgba(255, 255, 255, 0.52) inset, 
                    0 0.25rem 0.5rem 0 rgba(135, 149, 178, 0.362) inset;
        background-color: ${({ theme }) => theme.colors.secondary_light};
  }
`;


const FormOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  text-align: left;

  h3 {
    margin-bottom: 1rem;
    color:${({ theme }) => theme.colors.secondary_dark};
    font-family: "Overlock", serif;
    font-weight: bold;
  }

  input, textarea {
    width: 100%;
    margin-bottom: 1rem;
    padding: 0.5rem;
    border-radius: 10px;
    font-family: "Overlock", serif;
    border: 1px solid rgb(220, 220, 220);
    box-shadow: 0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5);
      &:focus {
        border: 2px solid ${({ theme }) => theme.colors.secondary}; /* Change border color to pink when focused */
      outline: none; /* Remove default browser outline */
      }
  }

  button {
    padding: 0.5rem 1rem;
    margin-right: 0.5rem;
    background: ${({ theme }) => theme.colors.secondary_dark};
    color: #fff;
    border: none;
    border-radius: 5px;
    font-family: "Overlock", serif;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5),
      2px 0.5rem 0.5rem rgba(255, 255, 255, 0.52) inset,
      0 0.25rem 0.5rem 0 rgba(212, 170, 185, 0.36) inset;
    &:hover {
        background-color: ${({ theme }) => theme.colors.secondary_light};
        color :${({ theme }) => theme.colors.secondary_dark};
        font-weight: 600;
    }

    &:nth-child(2) {
      background: #6c757d;

      &:hover {
        background: #5a6268;
      }
    }
  }
`;

export default ReviewSection;
