const config = require('../config');
const mongoose = require('mongoose');


/**
 * @returns {Connection}
 */
module.exports = () => {

    mongoose.connect(config.db);
    const student = require('../../app/models/student');
    const course = require('../../app/models/course');
    mongoose.model('Student', student);
    mongoose.model('Course', course);
    return mongoose.connection;
};