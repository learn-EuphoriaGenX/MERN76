const { isValidObjectId } = require("mongoose")
let Problem = require("../models/problem.model")

module.exports.createProblem = async (req, res) => {
    try {

        let { title, difficulty, tags, description, inputFormat, outputFormat, examples, constraints } = req.body
        if (!title || !difficulty || !tags || !description || !inputFormat || !outputFormat || !examples || !constraints) {
            return res.status(400).json({ success: false, msg: "All fields are required" })
        }

        let isTitleExists = await Problem.findOne({ title: title })
        if (isTitleExists) {
            return res.status(400).json({ success: false, msg: "Problem already exists" })
        }

        let newProblem = await Problem.create({
            title: title,
            difficulty: difficulty,
            tags: tags,
            description: description,
            inputFormat: inputFormat,
            outputFormat: outputFormat,
            examples: examples,
            constraints: constraints,
            createdBy: req.user._id
        })

        return res.status(200).json({ success: true, msg: "Problem created successfully", problem: newProblem })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, msg: "Internal Server Error" })
    }
}

module.exports.updateProblem = async (req, res) => {
    try {
        let id = req.params.id;
        if (!isValidObjectId(id)) {
            return res.status(400).json({ success: false, msg: "Invalid ID type" })
        }
        let problem = await Problem.findById(id)
        if (!problem) {
            return res.status(400).json({ success: false, msg: "Problem not found" })
        }
        let updatedProblem = await Problem.findByIdAndUpdate(id, req.body, { new: true })
        return res.status(200).json({ success: true, msg: "Problem updated successfully", problem: updatedProblem })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, msg: "Internal Server Error" })
    }
}

module.exports.getAllProblems = async (req, res) => {
    try {
        let problems = await Problem.find({})
        return res.status(200).json({ success: true, msg: "Problems fetched successfully", problems: problems })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, msg: "Internal Server Error" })
    }
}

module.exports.getProblemById = async (req, res) => {
    try {

        let id = req.params.id;
        if (!isValidObjectId(id)) {
            return res.status(400).json({ success: false, msg: "Invalid ID type" })
        }

        let problem = await Problem.findById(id)
        if (!problem) {
            return res.status(400).json({ success: false, msg: "Problem not found" })
        }
        return res.status(200).json({ success: true, msg: "Problems fetched successfully", problem })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, msg: "Internal Server Error" })
    }
}

module.exports.deleteProblem = async (req, res) => {
    try {

        let id = req.params.id;
        if (!isValidObjectId(id)) {
            return res.status(400).json({ success: false, msg: "Invalid ID type" })
        }

        let problem = await Problem.findByIdAndDelete(id)
        if (!problem) {
            return res.status(400).json({ success: false, msg: "Problem not found" })
        }
        return res.status(200).json({ success: true, msg: "Problem Deleted Successfully!" })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, msg: "Internal Server Error" })
    }
}
