"use client";
import bookData from "@tst/data/BookData";
import Book from "@/components/Book";
import { BookPageProps } from "@lib/definitions/props";
import styles from "@styles/pages/BookPage.module.scss";
import { UserContext } from "@lib/context";
import { useContext } from "react";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import PayPalButtonsWrapper from "@/components/PayPalButtonsWrapper";
import Loading from "@/components/Loading";

const BookPage: React.FC<BookPageProps> = ({ params }) => {
  const { slug } = params;
  const book = bookData.find((book) => book.id === slug);
  const [mounted, setMounted] = useState(false);
  const { user, username } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Check if the user is null, use react router to redirect to the login page
  if (!user) {
    router.replace("/account/login?redirect=/book/" + book?.id);
    return <Loading />;
  }

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
      {mounted && <PayPalButtonsWrapper price={book.price} book={book.title} user={user} />}
    </div>
  );
};

export default BookPage;
