import { StaticImageData } from "next/image";

export type BookProps = {
    destination: string;
    image: StaticImageData;
    altText: string;
    title: string;
    description: string;
}