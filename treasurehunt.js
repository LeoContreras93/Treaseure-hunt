var rainbowTreasure = Math.floor(Math.random() * 10);
// var bomb = Math.floor(Math.random() * 10);

// const treasure = (location) => {
//   if (bomb === location) {
//     alert("X");
//   } else if (rainbowTreasure === location) {
//     alert("treasure");
//   } else {
//     alert("keep looking");
//   }
// };

var bomb = Math.floor(Math.random() * 10);
const treasure = (location) => {
  if (bomb === location) {
    alert("X");
  } else if (rainbowTreasure === location) {
    alert("Treasure");
  } else {
    alert("keep looking");
  }
};
