import { Request, Response } from "express";
import DeckModel from "../models/Deck";

export async function deleteDeckController(req: Request, res: Response) {
  // get the id of deck
  const deckId = req.params.deckId;
  // delete selcted deck
  const deck = await DeckModel.findByIdAndDelete(deckId);
  res.json(deck);
}
