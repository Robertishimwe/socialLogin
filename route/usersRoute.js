const express =  require("express");
const UserController = require("../controllers/UserController");
const router = express.Router();

// router.post("/user/register", UserController.createUser)
router.get("/user",UserController.getAllUsers)
router.get("/login",UserController.login)
router.get("/login/setup",UserController.setup)  
router.post("/login/token",UserController.getToken)   



module.exports = router;