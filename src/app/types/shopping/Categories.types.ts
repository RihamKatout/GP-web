export type Category = {
  imageurl: string | undefined;
  id: number;
  name: string;
}

export type StoreCategory = {
  imageurl: string | undefined;
  id: number;
  name: string;
  productCategories: Category[];
}