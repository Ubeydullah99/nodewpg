let gamesPrefrence = "PS4";
const games = [];
games[0] = {
    name: 'Crash Bandicoot N. Sane Trilogy',
    price: 1060,
    sold: 20,
    console: 'PS4',
    showDetail: function () {
        console.log(`name: ${this.name}`);
        console.log(`price: ${this.price}`);
        console.log(`Sold: ${this.sold}`);
        console.log(`console: ${this.console}`);
    },
};
games[1] = {
    name: 'Lego Marvel Super Heroes',
    price: 700,
    sold: 25,
    console: 'XBOX',
    showDetail: function () {
        console.log(`name: ${this.name}`);
        console.log(`price: ${this.price}`);
        console.log(`Sold: ${this.sold}`);
        console.log(`console: ${this.console}`);
    },
};
games[2] = {
    name: 'Gta V',
    price: 1449,
    sold: 30,
    console: 'PS4',
    showDetail: function () {
        console.log(`name: ${this.name}`);
        console.log(`price: ${this.price}`);
        console.log(`Sold: ${this.sold}`);
        console.log(`console: ${this.console}`);
    },
};
games[3] = {
    name: 'Mortal Kombat Xl',
    price: 1190,
    sold: 34,
    console: 'PS4',
    showDetail: function () {
        console.log(`name: ${this.name}`);
        console.log(`price: ${this.price}`);
        console.log(`Sold: ${this.sold}`);
        console.log(`console: ${this.console}`);
    },
};
games[5] = {
    name: 'Fifa 2017',
    price: 890,
    sold: 15,
    console: 'PS4',
    showDetail: function () {
        console.log(`name: ${this.name}`);
        console.log(`price: ${this.price}`);
        console.log(`Sold: ${this.sold}`);
        console.log(`console: ${this.console}`);
    },
};
games[6] = {
    name: 'Uncharted 4',
    price: 950,
    sold: 30,
    console: 'PS4',
    showDetail: function () {
        console.log(`name: ${this.name}`);
        console.log(`price: ${this.price}`);
        console.log(`Sold: ${this.sold}`);
        console.log(`console: ${this.console}`);
    },
};
games[7] = {
    name: 'Mortal Kombat Xl',
    price: 940,
    sold: 30,
    console: 'XBOX', showDetail: function () {
        console.log(`name: ${this.name}`);
        console.log(`price: ${this.price}`);
        console.log(`Sold: ${this.sold}`);
        console.log(`console: ${this.console}`);
    },
};
games[8] = {
    name: 'Need For Speed',
    price: 790,
    sold: 10,
    console: 'PS4',
    showDetail: function () {
        console.log(`name: ${this.name}`);
        console.log(`price: ${this.price}`);
        console.log(`Sold: ${this.sold}`);
        console.log(`console: ${this.console}`);
    },
};
games[9] = {
    name: 'Lego Batman',
    price: 1000,
    sold: 18,
    console: 'PS4',
    showDetail: function () {
        console.log(`name: ${this.name}`);
        console.log(`price: ${this.price}`);
        console.log(`Sold: ${this.sold}`);
        console.log(`console: ${this.console}`);
    },
};
games[10] = {
    name: 'Fifa 17',
    price: 1290,
    sold: 12,
    console: 'PS4',
    showDetail: function () {
        console.log(`name: ${this.name}`);
        console.log(`price: ${this.price}`);
        console.log(`Sold: ${this.sold}`);
        console.log(`console: ${this.console}`);
    },
};
games[11] = {
    name: 'Resident Evil 7',
    price: 1390,
    sold: 10,
    console: 'PS4',
    showDetail: function () {
        console.log(`name: ${this.name}`);
        console.log(`price: ${this.price}`);
        console.log(`Sold: ${this.sold}`);
        console.log(`console: ${this.console}`);
    },
};
games[12] = {
    name: 'Dragon Ball XX',
    price: 1390,
    sold: 25,
    console: 'XBOX',
    showDetail: function () {
        console.log(`name: ${this.name}`);
        console.log(`price: ${this.price}`);
        console.log(`Sold: ${this.sold}`);
        console.log(`console: ${this.console}`);
    },
};
const ps4Games = games.filter(function (game) {
    return (gamesPrefrence === game.console);
});
let budget = 0;
for (let i = 0; i <= ps4Games.length - 1; i++) {
    budget = budget + ps4Games[i].price;
};
console.log(`I need ${budget} CAD to get all this PS4 great games!!`)

const newGames = [];
const newPrice = [];
newGamesAndPrices = [];
for (let i = 0; i <= games.length - 1; i++) {
    newGames[i] = games[i].name;
};
for (let i = 0; i <= games.length - 1; i++) {
    newPrice[i] = games[i].price;
};
for (let i = 0; i <= newGames.length - 1; i++) {
    console.log(`The game name is: ${newGames[i]}`);
    console.log(`The game price is: ${newPrice[i]}`);
};
for (let i = 0; i <= games.length; i++) {
    newGamesAndPrices[i] = {};
    newGamesAndPrices[i].name = games[i].name;
    newGamesAndPrices[i].price = games[i].price;
};
for (let i = 0; i <= newGamesAndPrices.length - 1; i++) {
    console.log(`The new game name:${newGamesAndPrices[i].name} `);
    console.log(`The new game price is : ${newGamesAndPrices[i].price}`);
};