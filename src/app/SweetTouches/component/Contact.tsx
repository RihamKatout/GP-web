import  { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_7o4fzgn', 'template_ae4fji9', form.current, '3utpEi5L2w2bw-lZn')
        .then(
          () => {
            console.log('SUCCESS!');
            form.current?.reset(); // Clear the form fields
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    }
  };

  return (
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      
        <DotLottieReact
          src="https://lottie.host/2935245e-3fd1-4197-a825-83cae6b05714/IYjL7lAkXp.lottie"
          loop
          autoplay
        />
      
    </StyledContactForm>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto; /* Center the form on the page */
  display: flex;
  flex-direction: row;
  gap: 1.5rem;

  form {
    display: flex;
    flex-direction: column;
    width: 70%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 10px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid #e4bcbc;
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 10px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid #e4bcbc;
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      background-color: #e4bcbc;
      color: #1b1a1a;
      border: 2px solid #131313ae;
      border-radius: 10px;
      font-weight: 600;
      text-align: center;

      cursor: pointer;
      transition: background-color 0.3s;
      margin-top: 20px;

      &:hover {
        background-color: ${({ theme }) => theme.colors.primary || "white"};
      }
    }
  }

  // Lottie Animation Wrapper
  .lottie-animation {
    flex-shrink: 0;
    width: 30%; /* Allocate space for animation */
    display: flex;
    justify-content: center;
    align-items: center;

    canvas {
      max-width: 100%;
      height: auto; /* Maintain aspect ratio */
    }
  }

  // Responsive Design
  @media (max-width: 1024px) {
    flex-direction: column;

    form {
      width: 100%;
    }

    .lottie-animation {
      width: 100%;
      margin-top: 1rem;
    }
  }

  @media (max-width: 768px) {
    form {
      font-size: 14px;

      input, textarea {
        height: 30px;
      }
    }
  }

  @media (max-width: 480px) {
    form {
      font-size: 12px;

      input, textarea {
        height: 25px;
      }
    }
  }
`;

