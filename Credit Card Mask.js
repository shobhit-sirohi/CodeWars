// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// "What was the name of your first pet?"

// "Skippy" --> "##ippy"

// "Nananananananananananananananana Batman!"
// -->
// "####################################man!"

// 7 kyu

function maskify(cc) {
  if (cc.length < 4) {
    return cc;
  } else {
    let str1 = cc.slice(0, -4);
    let str2 = cc.slice(-4);
    const arr = str1.split("");
    let newarr = arr.map((value) => (value = "#"));
    let newstr = newarr.join("");
    let finalstr = newstr + str2;
    return finalstr;
  }
}
