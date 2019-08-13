const playerName='Patrik Laine is lame';
let teams= 'New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins';
const message= 'Winnipeg is the best Canadian city, Go Winnipeg';
const playerResult= playerName.slice(0,15);
const teamsResult= teams.slice(45,50);
const messageResult1= message.slice(12,20);
const messageResult2= message.slice(34,39);

console.log(`${playerResult.toUpperCase()} ${messageResult1} ${teamsResult.toUpperCase()} player${messageResult2}${teamsResult}`);
