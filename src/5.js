const timeConvert = (num) => {
    const hours = Math.floor(num / 60);
    const minutes = Math.round((num / 60 - hours) * 60);

    return (`${num} minutes = ${hours} hour(s) and ${minutes} minute(s)`);
};

console.log(timeConvert(200));