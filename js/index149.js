const user={
    firstName:'Ubeyd',
    lastName:'Abdiweli',
    Age:32,
    married: true,
    food:['Rice', 'Beef', 'Chapati'],
};
user.country= 'Somalia';
user.code=252;
user.languages=['Somali','English','Arabic'];
user.Phone= 2047703241;
user.residence={
    country: 'Canada',
    isResident:false,
    migratedYear: 2018,
    jobTitle:'Loss Prevention',
};
console.log(user);
console.log(`User's home Country: ${user.country}`);
console.log(`User's Current Country of Residence: ${user.residence.country}`);
