const { User }  = require('../models');
let x = [
    {
        username: 'NewUser', 
        password: '123456'
    },
    {
        username: 'NewUser1', 
        password: '123456'
    },
    {
        username: 'NewUser2', 
        password: '123456'
    },
];

function seedUsers() {
    User.bulkCreate(x);
};

module.exports = seedUsers;