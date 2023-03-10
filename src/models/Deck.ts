import mongoose from "mongoose";

const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

// Schema
const DeckSchema = new Schema({
  title: String,
  cards: [String],
});

// Model
const DeckModel = mongoose.model("Deck", DeckSchema);

export default DeckModel;
