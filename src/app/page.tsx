import styles from "@styles/pages/Home.module.scss";
import Book from "@components/Book";
import bookData from "@tst/data/BookData";


export default function Home() {
  return (
    <div className="container">
      <div className={styles.mainDiv}>
        {bookData.map((book, index) => (
          <Book
            key={index}
            destination={`/book/${book.id}`}
            image={book.image}
            altText={book.altText}
            title={book.title}
            description={book.description}
            isLarge={false}
          />
        ))}
      </div>
    </div>
  );
}
