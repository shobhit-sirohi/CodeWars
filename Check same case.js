// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1

// 8 kyu

function sameCase(a, b){
    if( a.match(/[a-z]/i) &&  b.match(/[a-z]/i))
      {
      if(a.toUpperCase()=== a && b.toUpperCase()=== b) return 1;
      else if(a.toLowerCase() === a && b.toLowerCase() === b) return 1;
      else if(a.toLowerCase() === a && b.toUpperCase() === b) return 0;
      else if(b.toLowerCase() === b && a.toUpperCase() === a) return 0;
    }
  else return -1;
    }