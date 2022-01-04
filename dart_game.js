// const dartResult = '1S2D*3T'; //  37
// const dartResult = '1D2S#10S'; // 9
const dartResult = '10D10S#10S'; // 9
// const dartResult = '1D2S0T'; //  3
// const dartResult = '1S*2T*3S'; //  23
// const dartResult = '1D#2S*3S'; //  5
// const dartResult = '1T2D3D#'; //  -4
// const dartResult = '1D2S3T*'; //  59

// 1, 2, 3의 색인을 얻는다
// 1부터 2전까지 스트링을 sub1로 할당
// 2부터 3전까지 스트링을 sub2로 할당
// 3부터 끝까지 스트링을 sub3로 할당

// 첫번째수 색인: 0, 마지막은 lastindexof 두번째는 색인0 자르고 indexof
let index1stNum = 0;
let index2ndNum;
let index3rdNum;

let xx = dartResult.replace(/[^0-9]/g, " ");
let yy = xx.split(" ");
let zz = yy.filter(e => e.length > 0);
console.log(yy);
console.log(zz);

// let aa = 





