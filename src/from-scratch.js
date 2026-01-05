/*
  Write your functions here!

  Each function should:
  - Be exported so tests can use it
  - Follow the exact specifications
  - Pass all test cases
  - Use descriptive variable names
  - Have no linting errors
*/

// ============================================
// Question 1: petJudger
// ============================================

const petJudger = (petBreed, petName) => {
  if (petBreed === undefined || petName === undefined) {
    console.log(`Missing information. Please provide a valid pet.`);
  } else if (petBreed === 'dog') {
    console.log(`I love dogs! ${petName} is so cute!`);
  } else if (petBreed === 'cat') {
    console.log(`I love cats! ${petName} is so cute!`);
  } else if (petBreed === 'turtle') {
    console.log(`Who doesn't love a good turtle? ${petName} is the tops.`);
  } else if (petBreed === 'snake') {
    console.log(`Not a fan, please take ${petName} and leave.`);
  } else {
    console.log(`What an...interesting pet.`);
  }
};

//petJudger();

// ============================================
// Question 2: loopFromOneUpToAnother
// ============================================

const loopFromOneUpToAnother = (firstNum, secondNum) => {
  for (i = firstNum; i < secondNum; i++) {
    if (firstNum === secondNum || firstNum > secondNum) {
      break;
    } else {
      console.log(i);
    }
  }
};

//loopFromOneUpToAnother(5, 1)

// ============================================
// Question 3: shoutEveryLetterForLoop
// ============================================

const shoutEveryLetterForLoop = (str) => {
  // let lower = "abcdefghijklmnopqrstuvwxyz";
  // let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < str.length; i++) {
    let upper = str[i].toUpperCase() + "!";
    console.log(upper)
  }
  //   for (let j = 0; j < lower.length; j++) {
  //     for (let k = 0; k < upper.length; k++){
  //       if (str[i] === lower[j] && lower.indexOf(j) === upper.indexOf(k)) {
  //         console.log(upper[k]);
  //       }
  //     }
  //   }
  // }
};

//shoutEveryLetterForLoop("hey");

// ============================================
// Question 4: letterCaseCounts
// ============================================

const letterCaseCounts = (str) => {
  let cases = {lowercase: 0, uppercase: 0, neither: 0};
  let lower = /[a-z]/g;
  let upper = /[A-Z]/g; 
  let not = /[a-zA-Z]/g;
   
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(lower)) {
      cases.lowercase++;
    } else if (str[i].match(upper)) {
      cases.uppercase++;
    } else {
      cases.neither++;
    }
  }
  return cases;
};


//console.log(letterCaseCounts('abCdef 123'));
// ============================================
// Question 5: getNamesOfGreedyGnomes
// ============================================

const getNamesOfGreedyGnomes = (gnomes) => {
  const greedy = [];
  for (let gnome in gnomes) {
    if (gnomes[gnome].stolenDecorations.length > 1) {
      greedy.push(gnomes[gnome].name);
    } 
  }
  return greedy;
};

let gnomes = [
  {
    name: 'Garbeldel',
    gardenCount: 0,
    age: 407,
    stolenDecorations: ['chair', 'fountain', 'statue'],
  },
  {
    name: 'Farbus',
    gardenCount: 3,
    age: 281,
    stolenDecorations: ['greek statue'],
  },
  {
    name: 'Peekle',
    gardenCount: 3,
    age: 101,
    stolenDecorations: [],
  },
  {
    name: 'Jorbles',
    gardenCount: 3,
    age: 900,
    stolenDecorations: ['wind chimes', 'mini golfer'],
  },
];
//console.log(getNamesOfGreedyGnomes(gnomes));

// ============================================
// Exports
// ============================================

module.exports = {
  petJudger,
  loopFromOneUpToAnother,
  shoutEveryLetterForLoop,
  letterCaseCounts,
  getNamesOfGreedyGnomes,
};

const theHustler = 'Laisha';

const shoutOut = () => {
  const theHustler = 'Paul';
  console.log(`${theHustler} is the hardest working person in the room.`);
}

shoutOut();
console.log(`${theHustler} is also the hardest working person in the room.`);