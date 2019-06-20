function dwarfRollCall(dwarves) {
  var emptyArray = []
    for (var i = 0; i < dwarves.length; i++) {
      emptyArray.push(`${i + 1}. ${dwarves[i]}`)
    }
        return `${emptyArray.join(' ')} `
}



function summonCaptainPlanet(planeteerCalls){
  var emptyArray = []
    for (var i = 0; i < planeteerCalls.length; i++) {
      emptyArray.push(`${planeteerCalls[i].toUpperCase() + '!'}`);
    }
        return emptyArray
}


function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++) {
    var word = words[i]
      if (word.length > 4) {
        return true;
    }    else {
          return false;
        }
  }
}


//
//
function findTheCheese(foods) {
  var cheese = ["cheddar", "gouda", "camembert"]
    for (var i = 0; i < foods.length; i++) {
      for (var j = 0; j < cheese.length; j++) {
        if (foods[i] === cheese[j]) {
          return foods[i]
      }
    }
  }
  return "no cheese!"
}


// function findTheCheese(foods) {
//   for (var i = 0; i < foods.length; i++) {
//     if (foods[i] === "cheddar" || foods[i] === "gouda" || foods[i] === "camembert") {
//       return foods[i]
//     }
//   }
//   return "no cheese!"
// }
