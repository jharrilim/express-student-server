module.exports = (() => {
  const Student = require("mongoose").model("Student");
  const passport = require("passport");
  const LocalStrategy = require("passport-local").Strategy;

  passport.use(new LocalStrategy(
    function(studentNumber, password, done) {
      Student.findOne({
        studentNumber: studentNumber
      }, function(err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false);
        }
        if (!user.verifyPassword(password)) {
          return done(null, false);
        }
        return done(null, user);
      });
    }
  ));

  passport.serializeUser(function(student, cb) {
    cb(null, student.studentNumber);
  });

  passport.deserializeUser(function(studentNumber, cb) {
    Student.findById({studentNumber: studentNumber}, function(err, user) {
        return err ? cb(err) : cb(null, user);
    });
  });

  return passport;
})();
