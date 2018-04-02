const Student = require("mongoose").model("Student");
const m = require("../../config/db/mongoose");

module.exports.getStudents = (req, res, next) => {
    Student.find(req.query, (err, results) => {
        if (err) 
            return next(err);
        res.json(results);
    });
};


module.exports.getStudentsById = (req, res, next) => {
    Student.find({ studentNumber : req.params.studentNumber }, (err, results) => {
        if (err)
            return next(err);
        res.json(results);
    });
};


module.exports.createStudent = (req, res, next) => {
    Student.create(req.body, (err, result) => {
        if (err)
            return next(err);
        res.json(result);
    });
};


module.exports.upsertStudent = (req, res, next) => {
    Student.findOneAndUpdate({ studentNumber: req.params.studentNumber }, 
        req.body,
        { upsert: true, new: true },
        (err, result) => {
            if (err)
                return next(err);
            res.json(result);
        });
};


module.exports.deleteStudent = (req, res, next) => {
    Student.findOneAndRemove({ studentNumber: req.params.studentId }, (err, result) => {
        if (err)
            return next(err);
        res.json(result);
    });
};

module.exports.updateStudent = (req, res, next) => {
    return next(new Error("not implemented"));
};

