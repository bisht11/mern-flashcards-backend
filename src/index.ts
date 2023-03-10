import express from "express";
import mongoose from "mongoose";
import * as path from "path";
import cors from "cors";
import { config } from "dotenv";
import { getDecksController } from "./controllers/getDecksController";
import { getDeckController } from "./controllers/getDeckController";
import { createDeckController } from "./controllers/createDeckController";
import { deleteDeckController } from "./controllers/deleteDeckController";
import { createCardForDeckController } from "./controllers/createDeckForDeckController";
config({ path: path.resolve(__dirname, "./.env") });
import { deleteCardOnDeckController } from "./controllers/deleteCardOnDeckController";

const PORT = 5000;
const app = express();

// middleware
app.use(
  cors({
    origin: [
      "https://mern-flashcards-frntd.onrender.com"
    ],
  })
);
app.use(express.json());

//////////////////////////////// api endpoints //////////////////////////////////////

// create a deck
app.post("/decks", createDeckController);
// show decks
app.get("/decks", getDecksController);
// remove a deck
app.delete("/decks/:deckId", deleteDeckController);
// create card for a deck
app.post("/decks/:deckId/cards", createCardForDeckController);
//  get a deck
app.get("/decks/:deckId", getDeckController);
// delete a single deck card
app.delete("/decks/:deckId/cards/:index", deleteCardOnDeckController);

// connect to db and run server
mongoose.connect(process.env.MONGO_URL!).then(() => {
  console.log(`Listening on port ${PORT}`);
  app.listen(PORT);
});
