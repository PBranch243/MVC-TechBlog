const connect = require('../config/connection');
const seedUsers = require('./userseeds');
async function seeds() {
    await connect.sync({ force: true });
    await seedUsers();

    process.exit(0);
}
seeds();