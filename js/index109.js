const validateUser = function (username, password) {
    return ((username !== 'ubeyd' && password == 'Somset232!') ||
        (username === 'hassan' && password === 'Jinijaan232!') ||
        (username === 'Sethow' && password === 'Sisters2!')) ? true : false;
}
const username = 'ubeyd';
const password = 'Somset232!';
const message = (validateUser(username, password)) ? `Welcome ${username}, nice to see you again` : 'Please input valid credentials';
console.log(message);