//
//
// let array1 = ["live", "strong", "arp"];
// let array2 = ["lively", "alive", "harp", "sharp", "armstrong"];

// console.log(inArray(array1, array2));
// function inArray(array1, array2) {
//     return array1
//         .filter((array1) => array2.join(" ").indexOf(array1) + 1)
//         .sort();
// }

// let n = 12512;

// console.log(countBits(n));

// function countBits(n) {
//     return (n < 0) ? 0 : n.toString(2).split("0").join("").length;
// };

//   function spinWords(inside) {
//     return inside.split(" ").map((inside) => (inside.length > 4) ?
//         inside.split("").reverse().join("") : inside).join(" ");
// }

// let inside = "Hey fellow warriors";

// console.log(spinWords(inside));

// function spinWords(inside) {
//     let allWords = inside.split(" ");
//     let schetchik = 0;
//     while (schetchik < allWords.length) {
//         schetchik++;
//         if (allWords[schetchik - 1].split("").length < 5) {
//             continue;
//         } else {
//             allWords[schetchik - 1] = rokerovOchka(allWords[schetchik - 1]);
//         }
//     }
//     return allWords.join(" ")
// }

// function rokerovOchka(slovo) {
//     let slovoNaoborot = [];
//     slovo = slovo.split("");
//     while (slovo.length) {

//         slovoNaoborot.push(slovo.pop())
//     }
//     return slovoNaoborot.join("")
// }

// function F(i, b = 0) {
//     console.log(i+b);
//     return (b) => F(i+b)
// }

// F(1)(2)(7)(4);

// let arr = [231,3215,2,5,-1000];
// var maxSequence = function (arr) {
//     const size = arr.length;
//     let sequenceF = [];
//     let sequenceB = [];
//     if (size == 0) return 0
//     else {
//         let maxsum = arr.reduce((a, b) => a + b);
//         let newsize = size - 1;
//         let i = 0;
//         while (i < size) {
//             Array.prototype.push.apply(sequenceF, arr);
//             while (sequenceF.length != newsize) {
//                 sequenceF.shift();
//             }
//             Array.prototype.push.apply(sequenceB, arr);
//             while (sequenceB.length != newsize) {
//                 sequenceB.pop();
//             }

//             while (sequenceF.length != 0) {
//                 if (sequenceF.reduce((a, b) => a + b) > maxsum)
//                     maxsum = sequenceF.reduce((a, b) => a + b);
//                 sequenceF.pop();
//             }
//             while (sequenceB.length != 0) {
//                 if (sequenceB.reduce((a, b) => a + b) > maxsum)
//                     maxsum = sequenceB.reduce((a, b) => a + b);
//                 sequenceB.shift();
//             }

//             ++i;
//             --newsize;
//         }
//         if (maxsum < 0) return 0
//         else return maxsum;
//     }
// }

// console.log(maxSequence(arr));

// let walk = ['n','s','n','s','n','s','n','s','n','s'];
// function isValidWalk(walk) {
//     if (walk.length != 10) return false
//   else if(
//     ((walk.filter(x => x=='n').length)==
//     (walk.filter(x => x=='s').length))&&
//     ((walk.filter(x => x=='w').length)==
//     (walk.filter(x => x=='e').length))
//   ) return true
//   else return false;
//   }
//   console.log(isValidWalk(walk));

// let p0 = 1000, percent = 0.02, aug = 50, p = 1200;
// let yers = 1;
// function nbYear(p0, percent, aug, p) {
//     // for (p0; (p0 + (Math.floor(p0 * (percent / 100))) + aug) < p;
//     //     p0 = (p0 + (Math.floor(p0 * (percent / 100))) + aug)) { yers++; }
//     // return yers;
// yers++;
//     return p0 + (p0 * (percent / 100)) + aug >= p ? --yers
//     : nbYear(p0 + (p0 * (percent / 100)) + aug, percent, aug, p)
// }
// console.log(nbYear(p0, percent, aug, p));
