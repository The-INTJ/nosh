import { StaticImageData } from "next/image";

export type BookProps = {
    destination: string | null;
    image: StaticImageData;
    altText: string;
    title: string;
    description: string;
    isLarge: boolean,
    price?: number;
}

export interface PageProps {
  params: {
    slug: string;
  };
}

export type PayPalWrapperProps = {
  price: number;
  book: string;
}