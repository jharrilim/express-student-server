const Course = require("mongoose").model("Course");


module.exports.getCourses = (req, res, next) => {
    Course.find(req.query, (err, results) => {
        if (err)
            return next(err);
        res.json(results);
    });
};


module.exports.getCoursesById = (req, res, next) => {
    Course.find({ courseCode : req.params.courseCode }, (err, results) => {
        if (err)
            return next(err);
        res.json(results);
    });
};


module.exports.createCourse = (req, res, next) => {
    Course.create(req.body, (err, result) => {
        if (err)
            return next(err);
        res.json(result);
    });
};


module.exports.upsertCourse = (req, res, next) => {
    Course.findOneAndUpdate({ courseCode: req.params.courseCode },
        req.body,
        { upsert: true, new: true },
        (err, result) => {
            if (err)
                return next(err);
            res.json(result);
        });
};


module.exports.deleteCourse = (req, res, next) => {
    Course.findOneAndRemove({ courseCode: req.params.courseCode },
      (err, result) => {
        if (err)
            return next(err);
        res.json(result);
    });
};

module.exports.updateCourse = (req, res, next) => {
    return next(new Error("not implemented"));
};
