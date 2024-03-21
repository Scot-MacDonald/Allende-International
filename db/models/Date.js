import mongoose from "mongoose";

const { Schema } = mongoose;

const dateSchema = new Schema({
  title: { type: String, required: true },
});

const Date = mongoose.models.Date || mongoose.model("Date", dateSchema);

export default Date;
