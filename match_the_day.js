const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const a = 5; // "TUE"
const b = 24;
const numOfDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 월 별 일 수
console.log(numOfDays.length);
/* 
1.1은 금요일
월: a, 일: b
29일까지있는 달: 2월
30일까지있는 달: 4 6 9 11
31일까지있는 달: 1 3 5 7 8 10 12
 */

