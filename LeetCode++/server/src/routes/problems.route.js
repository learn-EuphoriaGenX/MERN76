let express = require("express")
let router = express.Router()
let { createProblem, updateProblem, getAllProblems, getProblemById, deleteProblem } = require("../controllers/problem.model")


router.post("/", createProblem) // create new question
router.patch("/:id", updateProblem) // update question
router.get("/", getAllProblems) // get all question
router.get("/:id", getProblemById) // get question by id
router.delete("/:id", deleteProblem) // delete question


module.exports = router