'use client'
import bookData from "@tst/data/BookData";
import Book from "@/components/Book";
import { PageProps } from "@lib/definitions";

const BookPage: React.FC<PageProps> = ({ params }) => {
  const { slug } = params;

  const book = bookData.find((book) => book.id === slug);

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div>
       <Book
            destination={book.destination}
            image={book.image}
            altText={book.altText}
            title={book.title}
            description={book.description}
            isLarge={true}
          />
    </div>
  );
}

export default BookPage;