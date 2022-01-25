solution([1,4, 1, 2, 1,  2]);
function solution(answers) {
    // let answers = [1,2,3,4,5];
    let key1 = [1, 2, 3, 4, 5];
    let key2 = [2, 1, 2, 3, 2, 4, 2, 5];//8
    let key3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];//10
    let key = [key1, key2, key3];

    for(let i=0; i<key.length; i++){
        let quotient = Math.floor(answers.length/key[i].length);
        let remainder = answers.length%key[i].length;
        let tempArr = [];
        for(let j=0; j<quotient; j++){
            tempArr = tempArr.concat(key[i].slice(0,key[i].length))
        }
        for(let j=0; j<remainder; j++){
            tempArr.push(key[i][j]);
        }
        key[i] = tempArr;

        for(let j=0; j<answers.length; j++){
            key[i][j] = key[i][j] === answers[j] ? 1 : 0;
        }
        key[i] = key[i].reduce((acc, val) => acc+val);
    }
    console.log(key);
    let max = key[0];
    let indexCollection = [1];
    for(let i=1; i<key.length; i++){

        if(key[i]>max){
            max = key[i];
            indexCollection = [i+1];
        } else if(key[i] === max){
            indexCollection.push(i+1);
        }
    }
    console.log(max, indexCollection);

    console.log(key);
    indexCollection.sort((a, b) => {return a - b});
    console.log(indexCollection);
    // return indexCollection;
}














