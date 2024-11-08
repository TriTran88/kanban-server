const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, default: null },
  status: {
    type: String,
    enum: ["To Do", "In Progress", "Done"],
    default: "To Do",
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("tickets", ticketSchema);
