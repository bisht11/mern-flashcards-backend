import { Request, Response } from "express";
import DeckModel from "../models/Deck";

export async function getDeckController(req: Request, res: Response) {
  // get id
  const { deckId } = req.params;
  // find deck with the certain id
  const deck = await DeckModel.findById(deckId);
  res.json(deck);
}
