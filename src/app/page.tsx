import styles from "@styles/pages/Home.module.scss";
import Book from "@components/Book";

import sozImage from "@public/soz.jpg";
import oshImage from "@public/centennial.png";
import osh12Image from "@public/osh12.jpg";


export default function Home() {
  return (
    <div className="container">
      <div className={styles.mainDiv}>
        <Book
          destination="/paypal/soz"
          image={sozImage}
          altText="Songs of Zion hymn book"
          title="Songs of Zion"
          description="The newest songs written by people you know"
        />
        <Book
          destination="/paypal/osh100"
          image={oshImage}
          altText="Centennial Edition Old School hymn book"
          title="Centennial"
          description="The old and gold"
        />
        <Book
          destination="/paypal/osh12"
          image={osh12Image}
          altText="Twelth Edition Old School Hymnal"
          title="12th Edition"
          description="The older and gold"
        />
        <Book
          destination="/paypal/soz"
          image={sozImage}
          altText="Songs of Zion hymn book"
          title="Songs of Zion"
          description="The newest songs written by people you know"
        />
        <Book
          destination="/paypal/osh100"
          image={oshImage}
          altText="Centennial Edition Old School hymn book"
          title="Centennial"
          description="The old and gold"
        />
        <Book
          destination="/paypal/osh12"
          image={osh12Image}
          altText="Twelth Edition Old School Hymnal"
          title="12th Edition"
          description="The older and gold"
        />
      </div>
    </div>
  );
}
