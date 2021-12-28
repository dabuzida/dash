while(Math.max(...failRateByStage) > -1){
    let temp = [];
    let maxId = failRateByStage.findIndex(e => e === Math.max(...failRateByStage));
    for(let i=0; i<failRateByStage.length; i++){
        if(failRateByStage[i] === maxId){
            temp.push(i);
            failRateByStage[i] = -1;
        }
    }
    temp.sort((a, b) => {return a - b;});
    console.log(temp);
    // answer = answer.concat(temp);
}