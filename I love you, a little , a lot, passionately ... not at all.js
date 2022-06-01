// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

// 8 kyu

function howMuchILoveYou(petals) {
    let n = petals%6;
  if(n === 1) return "I love you";
    else if (n === 2) return "a little";
    else if (n === 3) return "a lot";
    else if (n === 4) return "passionately";
    else if (n === 5) return "madly";
    else return "not at all";
  }
  