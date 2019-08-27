const user = {
    userName: null,
    password: null,
    greet: function () {
        if (this.userName === null) {
            console.log('Please assign a username value');
        } else {
            console.log(`Hello, I'm user ${this.userName} `);
        };
    },
    updatedUserName: function (username) {
        if (typeof userName === "String") {
            this.userName = userName;
        } else {
            console.log('Please input a string value');
        };
    },
    updatePassword: function (password) {
        if (typeof password === "String") {
            this.password=password;
        } else {
            console.log('Please input a string value')
        }

    }
};
user.greet();
user.updatedUserName("Ubeyd");
user.updatePassword("Hahuhaa123");

