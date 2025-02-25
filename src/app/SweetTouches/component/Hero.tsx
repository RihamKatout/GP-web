import  { useEffect, useState } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { useNavigate } from "react-router-dom"; // Import the hook
import SweetNavbar from "./SweetNavbar"; 
//import {Cake , ShopsComponent} from '../Sweet/SelectShop';
import Offer from './Offer';
import { Divider } from "antd";

import Contact from "./Contact";
import { CAKE , PRODUCTS} from "../products";
import Shops from "../Sweet/Shops";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { FaSearch } from "react-icons/fa";
import { MainLayout } from "../../components/Layout";

const HeroContainer = styled.div`
  min-height: 750px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #c6838b4b, #f9f9f9);///f9f9f9
  color: ${({ theme }) => theme.colors.text || "#000"};
  transition: 0.2s;

  .content {
    width: 100%;
    padding-bottom: 2rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;

    @media (min-width: 640px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .text-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 1rem;
    padding: 0 3rem;

    @media (min-width: 640px) {
      text-align: left;
    }

    h1 {
      
      color: #fff;

      @media (min-width: 768px) {
        font-size: 4rem;
      }

      span {
        background: linear-gradient(to bottom, #000, #ad5e63);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    p {
      font-size: 1rem;
      opacity: 0.8;
    }

    button {
      background: linear-gradient( to left, #f9d9d9, #C47B83);
      color: #fff;
      width: 400px;
      height: 70px;
      padding: 0.5rem 1.5rem;
      border-radius: 999px;
      transition: transform 0.2s ease;
      font-weight: 600;

      &:hover {
        transform: scale(1.05);
      }
    }
  }

  .video-section {
    display: flex;
    justify-content: center;
    align-items: center;

    video {
      height: 300px;
      width: 100%;
      max-width: 450px;
      object-fit:fill;
      border-radius: 25px;
      box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.2);

      @media (min-width: 640px) {
        height: 450px;
        width: 450px;
      }
    }
  }
`;

const OfferContainer = styled.div`
  padding: 2rem;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
 
`;

const OfferTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary || "#333"};
  text-align: center;
  margin-bottom: 2rem;
`;
const Button = styled.button`
    padding: 0.5rem 1rem;
    background-color: #e4bcbc;
    color: #1b1a1a;
    border: 2px solid #131313ae;
    border-radius: 15px ;
    font-weight: 600;
    width: 200px;

    cursor: pointer;
    transition: background-color 0.3s;
    margin: 0 1rem;
    
    &:hover {
        background-color: ${({ theme }) => theme.colors.primary || "white"};
    }
 `;




const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 400, once: true }); // Initialize AOS
  }, []);

  const [activeComponent, setActiveComponent] = useState<string >('Shop');
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<
  { id: number; productName: string; price: number; productImage: string; description: string }[]
>([]);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/cake"); // Navigate to "/cake" 3D
  };

  const handleCake = () => {
    setActiveComponent('Cake');
    setFilteredProducts(CAKE); // Show all cake products when switching to CakeShop
    setSearchQuery(""); // Clear the search query
  };

  const handleShop = () => {
    setActiveComponent('Shop');
    setFilteredProducts(PRODUCTS); // Show all products when switching to AllShop
    setSearchQuery(""); // Clear the search query
  };

  const handleSearch = (
    query: string,
    products: { id: number; productName: string; price: number; productImage: string; description: string }[]
  ) => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = products.filter((product) =>
      product.productName.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    // Initialize filtered products based on active component
    setFilteredProducts(activeComponent === "CakeShop" ? CAKE : PRODUCTS);
  }, [activeComponent]);
  return (
    <MainLayout>
    <SweetNavbar/>
    <HeroContainer>
      <div className="content">
        {/* Text Content Section */}
        <div
          className="text-section"
          data-aos="zoom-out"
         >
          <h1>
            Welcome{" "}
            <span>Sweet Touches</span>{" "}
            Zone
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
            reiciendis inventore iste ratione ex alias quis magni at optio.
          </p>
          <button onClick={handleNavigate}>Make Your 3D Cake</button>
        </div>
        {/* Video Section */}
        <div
          className="video-section"
          data-aos="zoom-in"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </HeroContainer>
{/* Button & Search Bar Container */}

     <ButtonSearchContainer>
      <FaSearch />
     <SearchBar
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            handleSearch(
              e.target.value,
              activeComponent === "CakeShop" ? CAKE : PRODUCTS
            );
          }}
          placeholder="Search products..."
        />
        <Button onClick={handleShop}>All</Button>
        <Button onClick={handleCake}>Cake</Button>
        <Button>Cookies</Button>
        <Button>More</Button>

    </ButtonSearchContainer>

      {/* Conditionally render the Cake or Shop component */}
      {activeComponent === "Cake" && (
        filteredProducts.length ? (
        <Shops
          title="Cake"
         products={filteredProducts}
          category="CAKE"
         />
        ) : (
         <div style={{ textAlign: "center", fontSize: "2.2rem",background: "#f9f9f9"  }}>
          Not Found
          <DotLottieReact style={{width: "600px", height: "600px", margin: "0 auto"}}
              src="https://lottie.host/2bb224fa-246b-4c9f-a1a2-8b995be15813/alYr9Jwivh.lottie"
              loop
              autoplay
             />
        </div>
       )
      )}
      {activeComponent === "Shop" && (
        filteredProducts.length ? (
          <Shops
          title="All Cake Shop"
          products={filteredProducts.length ? filteredProducts : PRODUCTS}
          category="PRODUCTS"
        />
        ):(
          <div style={{ textAlign: "center", fontSize: "2.2rem",background: "#f9f9f9"  }}>
          Not Found
          <DotLottieReact style={{width: "600px", height: "600px", margin: "0 auto"}}
              src="https://lottie.host/2bb224fa-246b-4c9f-a1a2-8b995be15813/alYr9Jwivh.lottie"
              loop
              autoplay
             />
        </div>
        )
        
      )}


{/**Offer Section */}
  
     <OfferContainer>
     <div style={{ width:'80%', margin:'0 auto' }}>
      <Divider style={{  borderColor: '#1a1a19b3' }}><OfferTitle>Offers</OfferTitle></Divider>
      
      <Offer/>
      
      </div>
      
     </OfferContainer>
     
{/**End Offer Section */}


     <OfferContainer>
     <div style={{ width:'80%', margin:'0 auto'}}>
      <Divider style={{  borderColor: '#1a1a19b3' }}><OfferTitle>Contact Us</OfferTitle></Divider>
      
      <Contact></Contact>
      </div>
       
     </OfferContainer>
     
     
    </MainLayout>
  );
};

export default Hero;
const ButtonSearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  gap: 1rem;
  background-color: #f8f9fa;
`;

const SearchBar = styled.input`
  flex-grow: 1;
  max-width: 400px;
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary || "#ccc"};
  border-radius: 4px;
  font-size: 1rem;
  margin-right: 1rem;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary || "blue"};
  }
`;