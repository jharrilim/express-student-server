module.exports.authenticateUser = (req, res, next) => {
  const Student = require("mongoose").model("Student");
  Student.findById({ studentNumber: req.body.studentNumber }, (err, results) => {
      if (err) return next(err);
      if (results.password == req.body.password)
        return res.json(results);
  });
};
