import { Request, Response } from "express";
import DeckModel from "../models/Deck";

export async function getDecksController(req: Request, res: Response) {
  // get all decks from DB
  const decks = await DeckModel.find();
  // render to client side
  res.json(decks);
}
