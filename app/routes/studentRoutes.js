
function registerStudentRoutes() {
        const controller = require("../controllers/studentController");
        const router = require("express").Router();
        router.get("/", controller.getStudents)
            .get("/:studentNumber", controller.getStudentsById)
            .post("/", controller.createStudent)
            .delete("/:studentNumber", controller.deleteStudent)
            .put("/", controller.upsertStudent)
            .patch("/:studentNumber", controller.updateStudent);
        return router;
}
module.exports = registerStudentRoutes();
