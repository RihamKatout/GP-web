import { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import video from "../../../assets/store/try.mp4";
//import { Theme } from "../../../utils/Theme";
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

      {/* Replace Lottie animation with video */}
      <div className="video-container">
        <video
          src={video} // Replace with your video URL
          autoPlay
          loop
          muted
          controls={false} // Set to true if you want playback controls
        />
      </div>
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
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 10px;
      border: 1px solid rgb(220, 220, 220);
      box-shadow: 0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5);
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
      color: ${({ theme }) => theme.colors.secondary};
      box-shadow: 0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5);
      &:focus {
        border: 2px solid #e4bcbc;
      }
    }

    label {
      margin-top: 1rem;
      font-family: "Delius";
      color: ${({ theme }) => theme.colors.primary_dark};
      font-size: 18px;
      font-weight: 600;
    }

    input[type="submit"] {
      color: #1b1a1a;
      border-radius: 8px;
      font-weight: 600;
      text-align: center;
      cursor: pointer;
      transition: background-color 0.3s;
      margin-top: 20px;
      background-color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5), 
                  0 0.75rem 0.5rem rgba(255, 255, 255, 0.52) inset, 
                  0 0.25rem 0.5rem 0 rgba(135, 149, 178, 0.362) inset;

      &:hover {
        transform: scale(1.05);
        box-shadow: 0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5), 
                    0 0.75rem 0.5rem rgba(255, 255, 255, 0.52) inset, 
                    0 0.25rem 0.5rem 0 rgba(135, 149, 178, 0.362) inset;
        background-color: ${({ theme }) => theme.colors.secondary_light};
      }
    }
  }

  .video-container {
    flex-shrink: 0;
    width: 60%; /* Allocate space for the video */
    display: flex;
    justify-content: center;
    align-items: center;

    video {
      width: 100%;
      //border-radius: 10px; /* Optional: Add rounded corners */
      //box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); Optional: Add shadow
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;

    form {
      width: 100%;
    }

    .video-container {
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
