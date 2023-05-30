import { useState, useEffect } from 'react';
import { getBookPurchases } from '@lib/firebase-functions';
import { GenericAuthProps } from '@lib/definitions/props';

export default function HymnalList(props: GenericAuthProps) {
  const [bookPurchases, setBookPurchases] = useState<{ title: string, purchased: boolean }[]>([]);

  useEffect(() => {
    async function fetchBookPurchases() {
      const purchases = await getBookPurchases(props.user);
      setBookPurchases(purchases);
    }

    fetchBookPurchases();
  }, [props.user]);

  return (
    <ul>
      {bookPurchases.map(book => (
        <li key={book.title}>
          {book.title} - {book.purchased ? 'Purchased' : 'Not Purchased'}
        </li>
      ))}
    </ul>
  );
}