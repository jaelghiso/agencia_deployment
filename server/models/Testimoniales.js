const Sequelize = require('sequelize');

const db = require('../config/database');

const Testimonial = db.define('testimoniales', {
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    message: {
        type: Sequelize.STRING
    }
});

module.exports = Testimonial;