exports.calendar = (month, year) => {
    let days = new Date(year, month, 0).getDate();

    if (year % 4 === 0) console.log(`Year has 366 days and ${month} month has ${days} days!!`);
    else console.log(`Year ${year} has 365 days and ${month} month has ${days} days!!`);
};