const users = require('./user-seeds');
const posts = require('./posts-seeds');
const comments = require('./comments-seeds');

const sequelize = require('../config/connection');

const seedData = async () => {
    await sequelize.sync({ force: true });
    await users();
    await posts();
    await comments();
    process.exit(0);
}


seedData();