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

export interface BookPageProps {
  params: {
    slug: string;
  };
}

export interface ChatPageProps {
}

export type PayPalWrapperProps = {
  price: number;
  book: string;
  user: User | null | undefined;
}

export type GenericAuthProps = {
  user: User | null | undefined;
}