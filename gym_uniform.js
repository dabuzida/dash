// n lost reserve

const n = 29;
const lost = [1, 3, 5, 6, 7, 23];
const reserve = [5, 2, 6, 20, 11, 4, 15, 16, 23, 27];

// 여분가진 사람 && 잃어버린 사람 각 배열에서 제거
const lostEcptRsv = lost.filter(e => !reserve.includes(e));
const reserveEcptLost = reserve.filter(e => !lost.includes(e));

console.log(lostEcptRsv, reserveEcptLost);
// lostEcptRsv [1, 3, 7]
// reserveEcptLost [2, 20, 11, 4, 15, 16, 27]

// some includes 사용해서 reserve를 lost에 줄수 있는게 있는지 검사
let check = reserveEcptLost.some(e => lostEcptRsv.includes(e - 1) || lostEcptRsv.includes(e + 1));

// 오름차순 정렬
lostEcptRsv.sort((a, b) => a - b);
reserveEcptLost.sort((a, b) => a - b);

while (check) {
	// 색인을 뽑고 -> 배열 내 원소 제거 -> 확인 -> 반복
	// for if splice
	const rsvNum = reserveEcptLost.find(e => lostEcptRsv.includes(e - 1) || lostEcptRsv.includes(e + 1));
	const rsvNumId = reserveEcptLost.indexOf(rsvNum); // reserveNumberIndex
	const lostNFId = lostEcptRsv.indexOf(rsvNum - 1); // lostNumberFrontIndex
	const lostNBId = lostEcptRsv.indexOf(rsvNum + 1); // lostNumberBackIndex

	if (lostNFId > -1) {
		reserveEcptLost.splice(rsvNumId, 1);
		lostEcptRsv.splice(lostNFId, 1);
	} else {
		reserveEcptLost.splice(rsvNumId, 1);
		lostEcptRsv.splice(lostNBId, 1);
	}
	check = reserveEcptLost.some(e => lostEcptRsv.includes(e - 1) || lostEcptRsv.includes(e + 1));
}

console.log(n - lostEcptRsv.length);
// return n-잃어버린 인원
