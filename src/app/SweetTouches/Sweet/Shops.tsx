import React, { useState } from "react";
import styled from "styled-components";
import { Product } from "./Product";
import {ProductDetails} from "./Pop-up"; // Import the Pop-up component
import { Divider } from "antd";
import  {Dragger}  from "../component/Dragger";

interface ShopProps {
  title: string;
  products: Array<{
    id: number;
    productName: string;
    price: number;
    productImage: string;
    description: string;
  }>;
  category: "PRODUCTS" | "CAKE";
}

const Shops: React.FC<ShopProps> = ({ title, products, category }) => {
     const [selectedProduct, setSelectedProduct] = useState<
    ShopProps["products"][number] | null
   >(null);

  const handleProductClick = (product: ShopProps["products"][number]) => {
    setSelectedProduct(product);
  };

  const closePopUp = () => {
    setSelectedProduct(null);
  };

  

  return (
    <Section>
      
      <div style={ {width:'80%', margin:'0 auto' }}>
      <Divider style={{  borderColor: '#1a1a19b3' }}><SectionTitle>{title}</SectionTitle></Divider>
      </div>
      
      <Container>
        
        <ProductGrid>
          {products.map((product) => (
            <Product
              key={product.id}
              data={product}
              category={category}
              onClick={() => handleProductClick(product)}
            />
          ))}
          {/* <div> */}
           <Dragger/>
          {/* </div> */}
          
        </ProductGrid>
      </Container>

      {/* Render the pop-up if a product is selected */}
      {selectedProduct && (
        <ProductDetails product={selectedProduct} onClose={closePopUp} />
      )}
      
    </Section>
  );
};

export default Shops;



// Styled Components
const Section = styled.section`
  padding: 2rem 0;
  background-color: #f9f9f9; /* Ghost white */
  
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  
`;

const SectionTitle = styled.h3`
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary}; /* Regal blue */
  margin-bottom: 1.5rem;
  text-align: center;
  letter-spacing: 1px;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
`;
