const arr = [1, 1, 3, 3, 0, 1, 1, 1, 3, 3, 0, 1, 1];
// console.log(arr);

/* for (let i = 0; i < arr.length; ) {
	if (arr[i] === arr[i + 1]) {
		arr.splice(i, 1);
		continue;
	}
	i++;
}
console.log(arr); */

let nonDuplicateString = arr.join('');
console.log(nonDuplicateString);

for (let i = 0; i < 10; i++) {
	let regExp = new RegExp(`${i}+`, 'g');
	nonDuplicateString = nonDuplicateString.replace(regExp, i);
}

console.log(nonDuplicateString);

let ans = nonDuplicateString.split('').map(Number);
console.log(ans);

// let a = '04323';
// console.log(parseInt(a));

let aa = [1, 2, 3];
console.log(aa[-1]);

// return arr.filter((value, index) => value != arr[index-1]);
