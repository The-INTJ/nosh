export const convertPriceToReadableString = (price: number | any) => {
  if (!price) return '';
  const dollars = Math.floor(price);
  const cents = Math.round((price - dollars) * 100);
  const centsString = cents < 10 ? `0${cents}` : `${cents}`;
  return `$${dollars}.${centsString}`;
}


export const convertPriceToString = (price: number | any) => {
  if (!price) return '';
  const priceString = price.toString().replace('$', '');
  return priceString;
}