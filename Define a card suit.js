// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

//8 kyu

function defineSuit(card) {
  let lastChar = card.charAt(card.length - 1);
  if (lastChar == "♣") return "clubs";
  if (lastChar == "♠") return "spades";
  if (lastChar == "♦") return "diamonds";
  if (lastChar == "♥") return "hearts";
}
