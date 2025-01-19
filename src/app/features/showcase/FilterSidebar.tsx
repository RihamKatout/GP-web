
import { Category } from "../../types";
import { CategoryCard, SearchField } from "../../components/common";
import React, { useEffect , useState} from "react";
import { StoreCategoryService, StoreService } from "../../api";
import { Divider } from "antd";
import { Theme } from "../../utils/Theme";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import img from "../../../assets/characters/loginChar.png";
import styled from "styled-components";
import Slider from "react-slick";


const CategoriesContainer = styled.div`
  display: flex;
  padding: 0;
  margin-bottom: -1.5rem;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
`;

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  width: 18vw;
  height: 100%;
  overflow: hidden;
  border-right: 1px solid black;

  @media (max-width: 960px) {
    width: 30vw;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: auto;
    border-right: none;
    border-bottom: 1px solid black;
    padding: 0.5rem;
  }
`;


interface FilterSidebarProps {
  storeCategoryId: number;
  handleProductOptionsChange: (options: FilterOptions) => void;
  categories?: Category[];
}

export interface FilterOptions {
  available?: boolean;
  threeDModel?: boolean;
  customizable?: boolean;
  minPrice?: number;
  maxPrice?: number;
  categoryId?: number;
 
}

// TODO : put productCategories in a carousel, fix mobile responsiveness, and handle searching
export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  storeCategoryId,
  handleProductOptionsChange,
  categories,
}) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of visible slides at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 960, // Adjust for medium screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // Adjust for small screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  

   const navigate = useNavigate(); // Hook for navigation
 
   const { data: stores, isLoading } = useQuery(
    ["stores", storeCategoryId],
    () => StoreService.getStoresByStoreCategoryId(storeCategoryId),
    {
        keepPreviousData: true,
        onSuccess: (data) => console.log("Stores fetched successfully:", data),
    }
);

const [showStores, setShowStores] = React.useState(false); // New state for toggling stores
 
  // product categories
  const [productCategories, setProductCategories] = React.useState<Category[]>(
    []
  );
  
  const [filterOptions, setFilterOptions] = React.useState<FilterOptions>({
    available: undefined,
    threeDModel: undefined,
    customizable: undefined,
    minPrice: undefined,
    maxPrice: undefined,
  });

  const handleCategoryClick = (categoryId?: number) => {
    const newFilterOptions = {
      available: undefined,
      threeDModel: undefined,
      customizable: undefined,
      minPrice: undefined,
      maxPrice: undefined,
      categoryId: categoryId,
    };
    setFilterOptions(newFilterOptions);
    handleProductOptionsChange(newFilterOptions);
  };

  useEffect(() => {
    const fetchStoreCategory = async () => {
      const response = await StoreCategoryService.getStoreCategoryById(
        storeCategoryId
      );
      setProductCategories([...response.data.productCategories]);
    };
    fetchStoreCategory();
  }, []);
console.log(storeCategoryId)
  // filter options
  const handleFilterButtonClick = () => {
    console.log("Filter data:", filterOptions);
    handleProductOptionsChange(filterOptions);
  };
  const handleViewStores = () => {
    setShowStores(!showStores); // Toggle visibility
  };
  
  return (
    <SidebarContainer>
      {/* search Section */}
      <SearchField />
      <Button onClick={handleViewStores}> {showStores ? "Hide Stores" : "View Stores"}</Button>
      {showStores && stores && stores.length > 0 && (
      <div style={{ alignContent: "center" }}>
        {stores.length > 1 ? (
          <Slider {...settings}>
            {stores.map((store) => (
              <StoreCard key={store.id}>
                <div>
                  <StoreImage>
                    <img src={store.logoURL || img} alt={store.name} />
                  </StoreImage>
                  <StoreName>{store.name}</StoreName>
                  <StoreDetails>{store.description}</StoreDetails>
                </div>
                <div>
                  <VisitButton onClick={() => navigate(`/store/${store.id}`)}>
                    Visit
                  </VisitButton>
                </div>
              </StoreCard>
            ))}
          </Slider>
        ) : (
          // Fallback if only one store
          stores.map((store) => (
            <StoreCard key={store.id}>
              <div>
                <StoreImage>
                  <img src={store.logoURL || img} alt={store.name} />
                </StoreImage>
                <StoreName>{store.name}</StoreName>
                <StoreDetails>{store.description}</StoreDetails>
              </div>
              <div>
                <VisitButton onClick={() => navigate(`/store/${store.id}`)}>
                  Visit
                </VisitButton>
              </div>
            </StoreCard>
          ))
        )}
      </div>
    )}
      <Divider
        style={{borderColor: '#1a1a19b3' , fontWeight: "bold"}}
      >
       <h3 style={{ fontFamily: "DynaPuff" ,  color: Theme.colors.secondary_dark , fontWeight: 400 , fontSize: '1.1rem'}}>Categories</h3> 
      </Divider>
      <CategoriesContainer>
        <div
          key={0}
          style={{
            padding: "0.5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CategoryCard
            title="All"
            id={0}
            type="PRODUCT"
            onClick={() => handleCategoryClick()}
          />
        </div>
        {productCategories.map((category: Category) => (
          <div
            key={category.id}
            style={{
              padding: "0.55rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CategoryCard
              title={category.name}
              imageurl={category.imageurl}
              id={category.id}
              type="PRODUCT"
              onClick={() => handleCategoryClick(category.id)}
            />
          </div>
        ))}
      </CategoriesContainer>
      <Divider
         style={{borderColor: '#1a1a19b3' , fontWeight: "bold"}}
      >
       <h3 style={{ fontFamily: "DynaPuff" ,  color: Theme.colors.secondary_dark , fontWeight: 400 , fontSize: '1.1rem'}}>Product options</h3> 
      </Divider>

      {/* product options  */}
      <ProductOptionsContainer>
    <OptionLabel>
      <input
        type="checkbox"
        checked={!!filterOptions.available}
        onChange={(e) => {
          setFilterOptions({
            ...filterOptions,
            available: e.target.checked ? true : undefined,
          });
        }}
      />
      Available
    </OptionLabel>
    <OptionLabel>
      <input
        type="checkbox"
        checked={!!filterOptions.threeDModel}
        onChange={(e) => {
          setFilterOptions({
            ...filterOptions,
            threeDModel: e.target.checked ? true : undefined,
          });
        }}
      />
      3D Model
    </OptionLabel>
    <OptionLabel>
      <input
        type="checkbox"
        checked={!!filterOptions.customizable}
        onChange={(e) => {
          setFilterOptions({
            ...filterOptions,
            customizable: e.target.checked ? true : undefined,
          });
        }}
      />
      Customizable
    </OptionLabel>

    <Divider style={{ borderColor: '#1a1a19b3' , fontWeight: "bold" }}>
     <h3 style={{ fontFamily: "DynaPuff" ,  color: Theme.colors.secondary_dark , fontWeight: 400 , fontSize: '1.1rem'}}>Price Range</h3> 
    </Divider>
    <PriceRangeContainer>
      <h6>Price</h6>
      <PriceInput
        type="number"
        placeholder="Min"
        value={filterOptions.minPrice || ""}
        onChange={(e) => {
          setFilterOptions({
            ...filterOptions,
            minPrice: e.target.value ? Number(e.target.value) : undefined,
          });
        }}
      />
      <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}> - </span>
      <PriceInput
        type="number"
        placeholder="Max"
        value={filterOptions.maxPrice || ""}
        onChange={(e) => {
          setFilterOptions({
            ...filterOptions,
            maxPrice: e.target.value ? Number(e.target.value) : undefined,
          });
        }}
      />
    </PriceRangeContainer>
    <Button onClick={handleFilterButtonClick}>Apply Filters</Button>
  </ProductOptionsContainer>
    </SidebarContainer>
  );
};
const Button = styled("button")(({ theme }) => ({
  padding: "0.5rem 1rem",
  color: "#1b1a1a",
  border:'none',
  borderRadius: "15px",
  fontWeight: 600,
  width: "250px",
  textAlign: "center",
  cursor: "pointer",
  fontFamily: "Overlock",
  transition: "background-color 0.3s",
  backgroundColor: Theme.colors.primary,
  boxShadow: '0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5), 0 0.75rem 0.5rem rgba(255, 255, 255, 0.52) inset, 0 0.25rem 0.5rem 0 rgba(135, 149, 178, 0.362) inset',
  '&:hover': {
      transform: "scale(1.05);",
      boxShadow: '0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5), 0 0.75rem 0.5rem rgba(255, 255, 255, 0.52) inset, 0 0.25rem 0.5rem 0 rgba(135, 149, 178, 0.362) inset',
      backgroundColor: Theme.colors.secondary_light,
       }
}));

const ProductOptionsContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  padding: "0.5rem",
  borderRadius: "15px",
  backgroundColor: "#ffffff",
  textAlign: "center",
  //boxShadow: "0rem 0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.065)",
});

const OptionLabel = styled("label")({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  fontSize: "1rem",
  fontWeight: 600,
  color: "#333",
  fontFamily: "Delius Swash Caps",
  textAlign: "center",
  "& input": {
    marginRight: "0.5rem",
    accentColor: "#e4bcbc",
    
  },
  "&:hover": {
    color: "#1b1a1a",
  },
});

const PriceRangeContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  flexWrap: "wrap",
  justifyContent: "space-between",
});

const PriceInput = styled("input")({
  padding: "0.4rem",
  borderRadius: 10,
  width: "30%",
  fontSize: "0.9rem",
  boxShadow: "0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5)",
  border: "1px solid rgba(217, 217, 217, 0.5)",
  "&:focus": {
        outline: "none",
        boxShadow: "0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5)",
      }
});



/////////for the store
const StoreCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  text-align: center;
  transition: transform 0.3s;
  width: 220px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Ensures consistent spacing between elements */
  height: 310px; /* Makes all cards the same height */
  margin-left: 15px;
  &:hover {
    //transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

const StoreName = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({theme})=> theme.colors.primary_dark};
  margin: 0.5rem 0;
  font-family: "Overlock", serif;
`;

const StoreDetails = styled.p`
  font-size: 1rem;
  color: #666;
`;

const StoreImage = styled.div`
  margin: 0 auto 1rem;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 5px solid #fff;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const VisitButton = styled.button`
  //margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #6a437c;
  color: white;
  border: none;
  border-radius: 15px;
  //bottom: 200px;
  cursor: pointer;
  font-size: 1rem;
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
`;