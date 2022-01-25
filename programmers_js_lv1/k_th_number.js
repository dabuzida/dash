let array = [1, 5, 2, 6, 3, 7, 4]; // [5, 6, 3]
let commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];
let newArray = [];
let answer = [];

// array.filter(callback(element[, index[, array]])[, thisArg])

array.filter(())


// let sortArray = array.sort((a, b) => {return a - b});

for(let i=0; i<commands.length; i++){
    newArray = array.slice(commands[i][0]-1, commands[i][1]);
    console.log(newArray);
    newArray.sort((a, b) => {return a - b});
    answer.push(newArray[commands[i][2]-1]);
}


console.log(newArray);
console.log(answer);
