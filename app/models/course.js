const Schema = require("mongoose").Schema;

let CourseSchema = new Schema({
    courseCode: { type: String, unique: true, required },
    name:       String,
    section:    String,
    semester:   String,
    students:   [{ type: Schema.Types.ObjectId, ref: "Student" }]
}, {
    collection: "courses"
});

module.exports = CourseSchema;
