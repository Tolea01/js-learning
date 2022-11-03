function extractCurrencyValue(str) {
    console.log(Number(str.match(/\d+/)))
    // console.log(parseInt(str.match(/\d+/)));
}

extractCurrencyValue('$120');