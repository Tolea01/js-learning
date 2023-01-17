const corectDate = (date) => {
    return date < 10 ? date = '0' + date : date;
};

const getCurrentDate = (separator) => {
    const date = new Date();
    return `${corectDate(date.getDate())}${separator}${corectDate(date.getMonth() + 1)}${separator}${corectDate(date.getFullYear())}`;
};

console.log(getCurrentDate('/'));