import mongoose from "mongoose";

const { Schema } = mongoose;

const workingSchema = new Schema({
  title: { type: String, required: true },
  img: { type: String, required: true },
});

const Working =
  mongoose.models.Working || mongoose.model("Working", workingSchema);

export default Working;
