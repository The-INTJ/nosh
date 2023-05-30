import React from "react";
import styles from "@styles/components/LargeBook.module.scss";
import Link from "next/dist/client/link";
import Image from "next/image";
import { BookProps } from "@interfaces";
import { convertPriceToReadableString } from "@lib/helpers";

const LargeBook = (props: BookProps) => {
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
          <p>{convertPriceToReadableString(props.price)}</p>
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
          <p>{convertPriceToReadableString(props.price)}</p>
          <p>{props.description}</p>
        </div>
      </Link>
    );
  }
};

export default LargeBook;
