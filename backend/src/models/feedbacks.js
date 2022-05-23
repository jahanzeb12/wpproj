const mongoose = require("mongoose");

const fbSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dated: {
    type: Date,
    default: new Date(),
  },
  review: {
    type: String,
    required: true,
  },
});

const Feedbacks = mongoose.model("Feedbacks", fbSchema);
module.exports = Feedbacks;
