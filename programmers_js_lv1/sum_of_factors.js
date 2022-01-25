/* let s = 'try hello world';
let word = s.split(' ');
console.log(word);

for (let i = 0; i < word.length; i++) {
	let char = word[i].split('');
	for (let j = 0; j < char.length; j++) {
		if (j % 2 == 0) {
			char[j] = char[j].toUpperCase();
		} else{
            char[j] = char[j].toLowerCase();
        }
	}
	word[i] = char.join('');
	console.log(char);
}
console.log(word);

let z = word.join(' ');
console.log(z);


 */

let x = 'aaaaaaaa aaa aaa aaaaaaa';
let y = x.replace(/\w\w/, 'v');
console.log(x);
console.log(y);
