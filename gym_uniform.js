// n lost reserve

n = 29;
lost = [1, 3, 5, 6, 7, 23];
reserve = [5, 2, 6, 20, 11, 4, 15, 16, 23, 27];

// 여분가진 사람 && 잃어버린 사람 각 배열에서 제거
lostEcptRsv = lost.filter(e => !reserve.includes(e));
reserveEcptLost = reserve.filter(e => !lost.includes(e));

console.log(lostEcptRsv, reserveEcptLost);
// lost [1, 3, 7]
// reserve [2, 20, 11, 4, 15, 16, 27]

// some includes 사용해서 reserve를 lost에 줄수 있는지 검사
let x = reserveEcptLost.some(e => lostEcptRsv.includes(e-1) || lostEcptRsv.includes(e+1)
);

console.log(x);
