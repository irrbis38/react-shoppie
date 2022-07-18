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

type selectHandler = (e: React.FormEvent<HTMLSelectElement>) => void;
