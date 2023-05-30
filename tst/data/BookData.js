import sozImage from "@public/soz.jpg";
import oshImage from "@public/centennial.png";
import osh12Image from "@public/osh12.jpg";

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
    description: "The old and gold",
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
];

export default bookData;

