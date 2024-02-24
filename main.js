// for (let i = 0; i <=  5; i ++){
//     console.log('loop' + i)
// }

// Q1

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max", "HAS", "PuRple", "dog"];

function findWords(str, names) {
  for (let i = 0; i < names.length; i++) {
    let currentName = names[i];
    if (str.toLowerCase().includes(currentName.toLowerCase())) {
      console.log(`Matched ${currentName}`);
    }
  }

  console.log("No Matches");
}

findWords(dog_string, dog_names);

// Q 2

let givenArray  = ['Max', 'Baseball',  'Reboot', 'Goku', 'Trucks', 'Rodger'];

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i++) {
        if( i % 2 === 0){
            arr[i] = 'Even index';
        }
    }
    return arr;
}

console.log(replaceEvens(givenArray))

