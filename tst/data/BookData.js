import sozImage from "@public/SOZ.png";
import oshImage from "@public/OSH100.png";
import osh12Image from "@public/OSH12.png";
import WTK from "@public/WTK.png";
import ECS from "@public/ECS.png";

const bookData = [
  {
    id: "soz",
    destination: "/paypal/soz",
    image: sozImage,
    altText: "Songs of Zion hymn book",
    title: "Songs of Zion",
    description: "The newest songs written by people you know",
    price: 10
  },
  {
    id: "osh",
    destination: "/paypal/osh100",
    image: oshImage,
    altText: "Centennial Edition Old School hymn book",
    title: "Centennial",
    description: "The old and new",
    price: 10
  },
  {
    id: "osh12",
    destination: "/paypal/osh12",
    image: osh12Image,
    altText: "Twelth Edition Old School Hymnal",
    title: "12th Edition",
    description: "The older and gold",
    price: 10
  },
  {
    id: "wtk",
    destination: "/paypal/wtk",
    image: WTK,
    altText: "Worship the King hymn book",
    title: "Worship the King",
    description: "Songs of worship",
    price: 10
  },
  {
    id: "ecs",
    destination: "/paypal/ecs",
    image: ECS,
    altText: "Everyone Can Sing",
    title: "Everyone Can Sing",
    description: "Simple to complex tunes and rhythms to help you learn to sing",
    price: 10
  }
];

export default bookData;

