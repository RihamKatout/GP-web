import React from "react";
import { Category } from "../../../types";
import { StoreService } from "../../../api";
import { useQuery } from "react-query";

interface StoresSectionProps {
  categories?: Category[];
}
export const StoresSection: React.FC<StoresSectionProps> = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = React.useState<
    number | undefined
  >(undefined);

  const {
    data: stores,
    isLoading,
    error,
  } = useQuery(
    ["stores", selectedCategory],
    () => StoreService.getStoresByStoreCategoryId(selectedCategory),
    {
      keepPreviousData: true,
      onSuccess: (data) => {
        console.log(data);
      },
    }
  );

  return (
    <div>
      <h2>Stores Section</h2>
      {isLoading && <p>Loading...</p>}
      <button onClick={() => setSelectedCategory(undefined)}>reset</button>
      {categories?.map((category) => (
        <div key={category.id} onClick={() => setSelectedCategory(category.id)}>
          {category.name}
        </div>
      ))}
      {stores?.map((store) => (
        <div key={store.id}>{store.name}</div>
      ))}
    </div>
  );
};
