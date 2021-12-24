let participant = ["mislav", "stanko", "mislav", "ana"];
let completion = ["stanko", "ana", "mislav"]; // "mislav"


//filter includes shift

// participant.filter(name => completion.includes(name));
// findIndex shift include

// completion.forEach(name => participant.includes(name)? participant.ind)


// completion.forEach(name => participant.indexOf(name) == -1? 


// participant.forEach(name => completion.indexOf(name) == -1? return name : null);
let list = participant.slice();
// 중복이 있을수 있어 삭제가 필요


for(let i=0; i<completion.length; i++){
    let n = participant.indexOf(completion[i]);
    if(n > -1){
        participant[n] = 1;
    }
}
let x = participant.findIndex

// participant.indexOf(completion.shift()) == -1 ? 
// function x() {
//     let participant = ["mislav", "stanko", "mislav", "ana"];
//     let completion = ["stanko", "ana", "mislav"]; // "mislav"
//     participant.forEach(person => completion.indexOf(person) == -1 ? return person : null);
// }