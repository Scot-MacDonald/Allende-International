import mongoose from "mongoose";

const { Schema } = mongoose;

const arbeitSchema = new Schema({
  title: { type: String, required: true },
  img: { type: String, required: true },
});

const Arbeit = mongoose.models.Arbeit || mongoose.model("Arbeit", arbeitSchema);

export default Arbeit;
