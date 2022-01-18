let record = [
	'Enter uid1234 Muzi',
	'Enter uid4567 Prodo',
	'Leave uid1234',
	'Enter uid1234 Prodo',
	'Change uid4567 Ryan',
]; // ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]

// 순회를 해야한다면 한번 할때 갖은 정보를 모두 얻어내야 함
const act = {
	E: '님이 들어왔습니다.',
	L: '님이 나갔습니다.',
};
let hashMap = {};
let result = [];
for (let i = 0; i < record.length; i++) {
	let element;
	let initial = record[i].split(' ')[0][0];
	let id = record[i].split(' ')[1];

	if (initial === 'E') {
		element = [id, act[initial]];
		hashMap[id] = record[i].split(' ')[2];
	} else if (initial === 'L') {
		element = [id, act[initial]];
	} else if (initial === 'C') {
		hashMap[id] = record[i].split(' ')[2];
	}

	if (element) {
		result.push(element);
	}
}
console.log(result);
console.log(hashMap);

for (let i = 0; i < result.length; i++) {
	result[i] = hashMap[result[i][0]] + result[i][1];
}
console.log(result);
