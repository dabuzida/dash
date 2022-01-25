/*let styles = ['Jazz', 'Blues'];
styles.push('Rock-n-Roll');
console.log('currnt styles: ', styles);
let temp = styles.splice(styles.length/2);
console.log('currnt styles: ', styles);
console.log(temp)

styles.push('Classics');
styles = styles.concat(temp)
console.log('currnt styles: ', styles);

console.log(styles[0]);
styles.unshift('Rap', 'Reggae');
console.log('currnt styles: ', styles);*/

/*let arr = ['a', 'b'];
arr.push(function(){
	console.log(this);
})

arr[2]();*/

/*function sumInput(){
	let array = [];
	let sum = 0;


	while(1){
		let num = prompt('input number');

		if(num === '0'){
			array.push(+num);
		} else if(+num){
			array.push(+num);
		} else{
			break;
		}
	}

	for(const val of array){
		sum += val;
	}
	return sum;
}

sumInput();


console.log(Boolean(+''), Boolean(+' '), Boolean(+null))
console.log(Boolean(+'0'), +' ')
console.log(+'0', 33)
console.log(Boolean(0), +'')*/

// const arr = [1, -2, 3, 4, -9, 6];  //7
// const arr = [-1, 2, 3, -9]; //5
// const arr = [2, -1, 2, 3, -9]; //6
// const arr = [-1, 2, 3, -9, 11]; //11
// const arr = [-2, -1, 1, 2]; // 3
// const arr = [100, -9, 2, -3, 5]; //100
// const arr = [1, 2, 3]; //6
const arr = [-1, -2, -3];

console.log(getMaxSubSum(arr));

function getMaxSubSum(arr){
	let sum = 0;
	if(Math.max(...arr) < 0){
		return 0;
	} else if(Math.min(...arr) >= 0){
		for(const val of arr){
			sum += val;
		}
		return sum;
	} else {
		return cheatKey(arr);
	}

}
function cheatKey(arr){
	let max = arr[0];
	let tempArr;
	let tempSum;
	for(let i = 0; i<arr.length; i++){
		if(arr[i] > max){
			max = arr[i];
		}
		for(let j=i+1; j<arr.length; j++){
			tempArr = arr.slice(i, j+1);
			tempSum = tempArr.reduce((acc, val) => acc + val, 0);
			if(tempSum > max){
				max = tempSum;
			}
		}
	}
	return max;

}


