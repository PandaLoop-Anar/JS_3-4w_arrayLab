/*
1.	შექმენით გამრავლების ტაბულა, მომხმარებელი შეიყვანს რიცხვს 1-10-მდე და მას კონსოლში ამოუბეჭდავს ყველა შესაბამისს მნიშვნელობას იმ სინტაქსით როგორც დავწერეთ კალკულატორზე. 
მაგ: მომხმარებელმა შეიყვანა 3
3 * 1 = 3
3 * 2 = 6
3 * 3 = 9
…
3 * 10 = 30 (გამრავლება ხდება ერთიდან ათის ჩათვლით)
*/
let user = prompt('შეიყვანეთ რიცხვი, რათა გაჩვენოთ მისი ნამრავლი 1-დან 10-მდე');
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`${user} * ${num[0]} = ${user*num[0]}`);
console.log(`${user} * ${num[1]} = ${user*num[1]}`);
console.log(`${user} * ${num[2]} = ${user*num[2]}`);
console.log(`${user} * ${num[3]} = ${user*num[3]}`);
console.log(`${user} * ${num[4]} = ${user*num[4]}`);
console.log(`${user} * ${num[5]} = ${user*num[5]}`);
console.log(`${user} * ${num[6]} = ${user*num[6]}`);
console.log(`${user} * ${num[7]} = ${user*num[7]}`);
console.log(`${user} * ${num[8]} = ${user*num[8]}`);
console.log(`${user} * ${num[9]} = ${user*num[9]}`);

/*
2.	შექმენით მასივი და შეიტანეთ მნიშვნელობები 1-დან 10-ის ჩათვლით. შეასრულეთ შემდეგი მოქმედებები: 
arr.push(11);
arr.pop();
arr.shift();
arr.unshift(43);
arr.shift();
+ აარჩიეთ ლექციაზე ახსნილი 2 ან 3 რომელიმე მეთოდი და მაგეებითაც შეასრულეთ მასივზე მოქმედებები.
*/
let massive = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
massive.push(11);
console.log(massive);
massive.pop();
console.log(massive);
massive.shift();
console.log(massive);
massive.unshift(43);
console.log(massive);
massive.shift();
console.log(massive);

console.log(massive.slice(7));
console.log(massive.slice(1, 4));
console.log(massive);
let change = massive.splice(3, 2, 12);
console.log(massive);

/*
3.	მოცემული გვაქვს მასივი 
let arr  = [ true, “False”, “Goodbye”, 32, 1, 2, “string”];

გამოიყენეთ arr.splice() მეთოდი და 32, 1 და 2 ჩაანაცვლეთ false, -12 და “🎓”
*/
let arr  = [ true, "False", "Goodbye", 32, 1, 2, "string"];
let changes = arr.splice(3, 3, false, -12, "🎓");
console.log(arr);