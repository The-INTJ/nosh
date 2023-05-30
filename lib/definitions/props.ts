import { User } from "firebase/auth";
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
  user: User | null | undefined;
}

export type GenericAuthProps = {
  user: User | null | undefined;
}