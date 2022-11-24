const extractCurrencyValue = (str) => + str.slice(1);
alert(extractCurrencyValue('$120') === 120); // true