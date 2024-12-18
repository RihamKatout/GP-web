import { PRODUCTS, CAKEPRODUCTS } from "../products";
import Shops from "./Shops";


const AllShop = () => (
    
      <Shops title="Cake Accessories Shop" products={PRODUCTS} category="PRODUCTS" />
      
    
  );
  
  const CakeShop = () => (
    
      <Shops title="Cake" products={CAKEPRODUCTS} category="CAKEPRODUCTS" />
    
  );
  

export { AllShop, CakeShop };
