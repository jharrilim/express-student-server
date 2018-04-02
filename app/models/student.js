const Schema = require("mongoose").Schema;

let StudentSchema = new Schema({
    studentNumber: String,
    password:      String,
    firstName:     String,
    lastName:      String,
    address:       String,
    city:          String,
    phoneNumber:   String,
    email:         String,
    courses:       [{ type: Schema.Types.ObjectId, ref: "Course" }]
}, {
    collection:   "students"
});

module.exports = StudentSchema;
