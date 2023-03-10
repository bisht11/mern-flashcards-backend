import { Response, Request } from "express";
import DeckModel from "../models/Deck";

export async function deleteCardOnDeckController(req: Request, res: Response) {
  //grab deck id
  const deckId = req.params.deckId;
  //grab index
  const index = req.params.index;
  // find the id specific deck
  const deck = await DeckModel.findById(deckId);
  //get card data
  const { text } = req.body;
  if (!deck) return res.status(400).send("no deck exists with this id!");
  // splice at a certain index
  deck.cards.splice(parseInt(index), 1);
  await deck.save();
  // render to client side
  res.json(deck);
}
