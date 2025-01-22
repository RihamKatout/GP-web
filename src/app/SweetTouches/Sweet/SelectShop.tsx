import { PRODUCTS, CAKE } from "../products";
import Shops from "./Shops";
//import { SweetContextProvider } from "../../context/SweetContext";

const ShopsComponent = () => (
    
      <Shops title="Cake Accessories Shop" products={PRODUCTS} category="PRODUCTS" />
    
  );
  
  const Cake = () => (
    
      <Shops title="Cake" products={CAKE} category="CAKE" />
    
  );
  

export { ShopsComponent, Cake };
