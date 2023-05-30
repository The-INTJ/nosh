"use client";
import bookData from "@tst/data/BookData";
import Book from "@/components/Book";
import { PageProps } from "@lib/definitions";
import { convertPriceToString } from "@lib/helpers";
import styles from "@styles/pages/BookPage.module.scss";

import { useState, useEffect } from "react";
import PayPalButtonsWrapper from "@/components/PayPalButtonsWrapper";

const BookPage: React.FC<PageProps> = ({ params }) => {
  const { slug } = params;
  const book = bookData.find((book) => book.id === slug);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className={styles.container}>
      <Book
        destination={null}
        image={book.image}
        altText={book.altText}
        title={book.title}
        description={book.description}
        isLarge={true}
        price={book.price}
      />
      {mounted && <PayPalButtonsWrapper price={book.price} book={book.title} />}
    </div>
  );
};

export default BookPage;
