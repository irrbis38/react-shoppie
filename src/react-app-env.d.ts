/// <reference types="react-scripts" />

type Products = {
  id: string;
  name: string;
  category: string;
  color: string[];
  country: string;
  price: number;
  weight: number;
  free_shipping: boolean;
  imagesUrl: string[];
};

type CardInfo = {
  name: string;
  price: number;
  imageUrl: string;
};

type SortCategories = {
  name: string;
  isActive: boolean;
};

type selectHandler = (e: React.FormEvent<HTMLSelectElement>) => void;

type inputHandler = (e: React.FormEvent<HTMLInputElement>) => void;

type clickButtonHandler = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => void;

type SortType = "priceLowest" | "priceHighest" | "nameA" | "nameZ";

type ViewMode = "icons" | "list";

interface AllFilters {
  filterByCategory: string;
  filterByCountry: string;
}

type DoFiltering = (products: Products[]) => Products[];

type Payload = { value: AllFilters; products: Products[] };

type ACTIONTYPE =
  | { type: "category"; payload: Payload }
  | { type: "updateProducts"; payload: Payload }
  | { type: "country"; payload: Payload };

type InitialState = {
  listItems: {
    id: string;
    name: string;
    category: string;
    color: string[];
    country: string;
    price: number;
    weight: number;
    free_shipping: boolean;
    imagesUrl: string[];
  }[];
};
