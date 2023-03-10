import { Request, Response } from "express";
import DeckModel from "../models/Deck";

export async function createDeckController(req: Request, res: Response) {
  // new model instance
  const newDeck = new DeckModel({
    // set title to form title
    title: req.body.title,
  });
  // saving to DB
  const createDeck = await newDeck.save();
  res.json(createDeck);
}
