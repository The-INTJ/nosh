import React from "react";
import styles from "@styles/components/Book.module.scss";
import Link from "next/dist/client/link";
import Image from "next/image";
import { BookProps } from "@interfaces";
import cx from 'classnames';

const Book = (props: BookProps) => {
  return (
    <Link href={props.destination} className={cx(styles.container, { [styles.large]: props.isLarge })}>
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
};

export default Book;
