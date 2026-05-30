let mongoose = require("mongoose");
let { Schema } = mongoose;

const exampleSchema = new Schema(
  {
    input: {
      type: String,
      required: true,
      trim: true,
    },

    output: {
      type: String,
      required: true,
      trim: true,
    },

    explanation: {
      type: String,
      trim: true,
      default: "",
    },
  },
  { _id: false }
);

const problemSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      required: true,
      default: "Easy",
    },

    tags: [
      {
        type: String,
        trim: true,
      },
    ],

    description: {
      type: String,
      required: true,
    },

    inputFormat: {
      type: String,
      required: true,
    },

    outputFormat: {
      type: String,
      required: true,
    },

    examples: [exampleSchema],

    constraints: {
      type: String,
      required: true,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    submissions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Submission",
      },
    ],

    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Problem", problemSchema);