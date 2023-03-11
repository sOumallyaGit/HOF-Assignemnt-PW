const items = {
    shirt: 25,
    pants: 50,
    shoes: 80,
  };
  
  const exchangeRate = 80;
  
  const pricesInRupees = Object.entries(items).map(([itemName, priceInDollars]) => {
    return [itemName, priceInDollars * exchangeRate];
  });
  
  const pricesInRupeesObject = Object.fromEntries(pricesInRupees);
  
  console.log(pricesInRupeesObject);
  