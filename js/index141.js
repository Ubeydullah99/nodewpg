const tripExpenses = [10, 50, 70];
const budget = tripExpenses.reduce(function (sum, currentValue) {
    return sum + currentValue;
});
console.log(`Hotel:${tripExpenses[0]}`);
console.log(`Hotel:${tripExpenses[1]}`);
console.log(`Hotel:${tripExpenses[2]}`);
console.log(`_________\nTotal:${budget}`);
