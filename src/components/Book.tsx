import React from "react";
import styles from "@styles/components/Book.module.scss";
import Link from "next/dist/client/link";
import Image from "next/image";
import { BookProps } from "@lib/definitions/props";
import LargeBook from "./LargeBook";

const Book = (props: BookProps) => {
  if (props.isLarge) {
    return (
      <LargeBook
        destination={props.destination}
        image={props.image}
        altText={props.altText}
        title={props.title}
        description={props.description}
        isLarge={true}
        price={props.price}
      />
    );
  } else {
    if (!props.destination) {
      return (
        <div className={styles.container}>
          <div className={styles.imageContainer}>
            <Image fill src={props.image} alt={props.altText} />
          </div>
          <div className={styles.description}>
            <h4>
              <b>{props.title}</b>
            </h4>
            <p>{props.description}</p>
          </div>
        </div>
      );
    } else {
      return (
        <Link href={props.destination} className={styles.container}>
          <div className={styles.imageContainer}>
            <Image fill src={props.image} alt={props.altText} />
          </div>
          <div className={styles.description}>
            <h4>
              <b>{props.title}</b>
            </h4>
            <p>{props.description}</p>
          </div>
        </Link>
      );
    }
  }
};

export default Book;
