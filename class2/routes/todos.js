const express = require("express");
const router = express.Router();

//import controller
const {createTodo} = require("../controllers/createTodo");

//define API routes and connect to controllers
router.post("/createTodo", createTodo);

module.exports = router;