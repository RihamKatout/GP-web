import React from 'react';
import styled from 'styled-components';
import { BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs';
import '@fortawesome/fontawesome-free/css/all.min.css';


const FooterContainer = styled.footer`
  padding: 1rem;
  background-color: #6a437c;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;

    .footer-item {
      align-items: center;
      margin: 0 80px;
      text-align: center;

      h6 {
        color: white;
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 1rem;
      }

      ul {
        list-style: none;
        padding: 0;

        li {
          margin: 0.7rem 0;
          opacity: 0.8;
          transition: 0.3s;

          &:hover {
            opacity: 1;
          }

          a {
            font-size: 0.88rem;
            color: #fff;
            text-decoration: none;

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }

    @media screen and (min-width: 768px) {
      flex-direction: row;
      justify-content: space-around;

      .footer-item {
        text-align: left;
      }
    }
  }
`;

const CopyrightSection = styled.div`
  margin-top: 1.5rem;
  text-align: center;
  font-size: 0.875rem;
  opacity: 0.8;
`;
const IconContainer = styled.i<{ size?: string; color?: string }>`
    font-size: ${({size}) => size};
    cursor: pointer;
    padding: 0.5rem;
    color: ${({color, theme}) => {
        switch(color){
            case 'white':
                return theme.colors.white;

            case 'pink':
                return theme.colors.secondary;

            default:
                return;
        }
    }};
`

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div className="footer-content">
        <div className="footer-item">
          <h6>Policies</h6>
          <ul>
            <li>
              <a >Terms & Conditions</a>
            </li>
            <li>
              <a >Cookies Policy</a>
            </li>
          </ul>
        </div>

        <div className="footer-item">
          <h6>About Shopping Hub</h6>
          <ul>
            <li>
              <a >Company Info</a>
            </li>
            <li>
              <a >Branches</a>
            </li>
          </ul>
        </div>

        <div className="footer-item">
          <h6>Contact</h6>
          <ul>
            <li>
              <span>
                <i className="fas fa-phone"></i>
              </span>
              
              <span>+678 004 5754</span>
            </li>
            <li>
              <span>
                <i className="fas fa-envelope"></i>
              </span>
              <span>info@shophub.com</span>
            </li>
          </ul>
        </div>
      </div>

      <CopyrightSection>
      Copyright © {new Date().getFullYear()} DESIGNIFY. 
        <IconContainer size='1.2rem'>
            <BsInstagram/>
         </IconContainer>
         <IconContainer size='1.2rem'>
         <BsYoutube/>
         </IconContainer>
         <IconContainer size='1.2rem'>
        <BsLinkedin/>
        </IconContainer>
        <IconContainer size='1.2rem'>
        <BsTwitter/>
        </IconContainer>
        

      </CopyrightSection>
    </FooterContainer>
  );
};

export default Footer;
