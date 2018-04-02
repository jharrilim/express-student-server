
function registerCourseRoutes() {
    const controller = require("../controllers/courseController");
    const router = require("express").Router();
    router.get("/", controller.getCourses)
        .get("/:courseCode", controller.getCoursesById)
        .post("/", controller.createCourse)
        .delete("/:courseCode", controller.deleteCourse)
        .put("/", controller.upsertCourse)
        .patch("/:courseCode", controller.updateCourse);
    return router;
}
module.exports = registerCourseRoutes();
