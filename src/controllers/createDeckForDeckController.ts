import { Response, Request } from "express";
import DeckModel from "../models/Deck";

export async function createCardForDeckController(req: Request, res: Response) {
  //grab deck id
  const deckId = req.params.deckId;
  // find the id specific deck
  const deck = await DeckModel.findById(deckId);
  //get card data
  const { text } = req.body;
  if (!deck) return res.status(400).send("no deck exists with this id!");
  // add to array and save to DB
  deck.cards.push(text);
  await deck.save();
  // render to client side
  res.json(deck);
}
