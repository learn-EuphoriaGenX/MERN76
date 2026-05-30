let express = require("express")
let router = express.Router()
let { createProblem, updateProblem, getAllProblems, getProblemById, deleteProblem } = require("../controllers/problem.controllers")
const { auth } = require("../middlewares/auth.middleware")


router.post("/", auth(['admin']), createProblem) // create new question
router.patch("/:id", auth(['admin']), updateProblem) // update question
router.get("/", getAllProblems) // get all question
router.get("/:id", getProblemById) // get question by id
router.delete("/:id", auth(['admin']), deleteProblem) // delete question


module.exports = router