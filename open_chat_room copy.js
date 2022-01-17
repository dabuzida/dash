const record = [
	'Enter uid1234 Muzi',
	'Enter uid4567 Prodo',
	'Leave uid1234',
	'Enter uid1234 Prodo',
	'Change uid4567 Ryan',
];
// ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]

let hashMap = {};
let idArray = record.map(e => e.split(' ')[1]);
let separationBySyllable = record.map(e => e.split(' '));

console.log(idArray);

const nonDuplIdSet = [...new Set(idArray)];
console.log(nonDuplIdSet);

nonDuplIdSet.forEach(e => {
	hashMap[`${e}`] = idArray.lastIndexOf(`${e}` || `${e}`);
});
console.log(hashMap);

for (const key in hashMap) {
	hashMap[key] = separationBySyllable[hashMap[key]][2];
}
console.log(hashMap);

let result = [];
for (const val of separationBySyllable) {
	if (val[0] === 'Enter') {
		result.push(`${hashMap[val[1]]}님이 들어왔습니다.`);
	} else if (val[0] === 'Leave') {
		result.push(`${hashMap[val[1]]}님이 나갔습니다.`);
	}
}
console.log(result);
