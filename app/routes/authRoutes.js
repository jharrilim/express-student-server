
function registerStudentRoutes() {
        const controller = require("../controllers/authController");
        const router = require("express").Router();
        router.post("/", controller.authenticateUser);
        return router;
}
module.exports = registerStudentRoutes();
