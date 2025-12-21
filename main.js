/*for importing the prompt-sync module*/ 
// const prompt = require("prompt-sync")(); // it is a part of commonJS not a module 
import promptSync from "prompt-sync";
// import { dayName } from "./dayname.js";

const prompt = promptSync();
import fs from "fs";


let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(`Got ${value}`));
// → Got 15






// setTimeout(() => console.log("Tick"), 5000);
// // prints "Tick" after 5 seconds
// readTextFile("shopping_list.txt", content => {
//   console.log(`Shopping List:\n${content}`);
// });
// // → Shopping List:
// // → Peanut butter
// // → Bananas
// function compareFiles(fileA, fileB, callback) { 
//   readTextFile(fileA, contentA /**file A er content or likha  */ => { // er mane first file ta porbe 
//     readTextFile(fileB, contentB /** file b er content or likha */ => { // then second file porbe, eita first file reading er vitore ache tai second file porar jonno wait korbe
//       callback(contentA == contentB); /** compare  kortese duitar likha or content same kina  */
//     });
//   });
// }/** but ei code ta callback hell e porse 
//   * karon jodi aro file compare korte hoy tahole aro nested hobe
//   * tai amra eta ke promise diye likhbo
// */
// async function compareFilesPromise(fileA, fileB) {
//   let contentA = await readTextFilePromise(fileA); // await korbe joto khon na pora sesh hocche 
//   let contentB = await readTextFilePromise(fileB);
//   return contentA == contentB;
// } /** eikhane logic same . but aro easily way to amader ar nested er jamelay jaoya lagtese nah */



// let x = 0;
// let y = 0
// async function f() {
//   x = 1;
//   await Promise.resolve(); // pause point, ar eita microtask queue te jabe
//   y = 2;
// }
// f();
// console.log(x); // 1
// await Promise.resolve(); // er mane eita je pending microtask gula chalao then continue koro ar eita microtask queue te jabe
// console.log(y); // 2


// async function f() {
//   console.log("1");
//   await 0;
//   console.log("2");
// }
// async function g() {
//   console.log("3");
//   await f();
//   console.log("4");
// }
// async function h() {
//   console.log("5");
//   await g();
//   console.log("6");
// }
// console.log("7");
// h();
// console.log("8");
// // Output: 7 5 3 1 8 2 4 6



// async function f() {
//   console.log("A");
//   await 0;
//   console.log("B");
// }
// async function g() {
//   console.log("C");
//   await 0;
//   console.log("D");
// }
// console.log("E");
// f();
// g();
// console.log("F"); // important topic : microtask queue
// // Output: E A C F B D




// async function f() {
//   console.log("1");
//   await 0;
//   console.log("2");
// }
// async function main() {
//   console.log("3");
//   f();
//   console.log("4");
//   await 0;
//   console.log("5");
// }
// main();
// // Output: 3 1 4 2 5




// async function f() {
//   console.log("A");
//   await 0;
//   console.log("B");
// }
// async function g() {
//   console.log("C");
//   await f();
//   console.log("D");
// }
// console.log("E");
// g();
// console.log("F");
// // Output: E C A F B D




// async function f() {
//   console.log("1");
//   await 0;
//   console.log("2");
//   await 0;
//   console.log("3");
// }
// console.log("4");
// f();
// console.log("5");
// // Output: 4 1 5 2 3




// async function f() {
//   console.log("A");
//   await 0;
//   console.log("B");
// }
// console.log("C");
// f();
// console.log("D");
// // Output: C A D B






// async function f() {
//   console.log("A");
//   await Promise.resolve();
//   console.log("B");
// }

// async function g() {
//   console.log("C");
//   await f();
//   console.log("D");
// }

// console.log("E");
// g();
// console.log("F");
// // Output: E C A F B D


// async function f() {
//   console.log("A");
//   await 1;
//   console.log("B");
//   await 2;
//   console.log("E");
// }
// console.log("C");
// await f();
// console.log("\n");
// f(); 
// console.log("D");






// let a = await 1; 
// let b = await 2; 
// let c = await Promise.resolve(); 
// console.log(a); // 1
// console.log(b); // 2
// console.log(c); // undefined
// console.log(a + b + c); // 3    





// async function test() {
//   console.log("Start");

//   await 0; 
//   console.log("After 0");

//   await Promise.resolve();
//   console.log("After Resolve");

//   await 1;
//   console.log("After 1");
// }
// test();
// console.log("Global");
// // Output:
// // Start
// // Global
// // After 0
// // After Resolve
// // After 1



// async function f() {
//   await Promise.resolve();
//   console.log("1");
  
//   console.log("2");
// }

// console.log("3");
// await f(); // shortcut : await ar f() er modder await katakati jabe ga 
// console.log("4");
// console.log("5");



/** one of them most important code examples */
// async function f() {
//   console.log("A");
//   await Promise.resolve();
//   console.log("B");
// }
// async function g() {
//   console.log("C");
//   await f();
//   console.log("D");
// }
// console.log("E");
// await g(); // E C A B D F
// // g(); // E C A F B D
// console.log("F");




// async function f() {
//   console.log("1");
//   await Promise.resolve();
//   console.log("2");
// }
// console.log("3");
// f().then(() => {
//     console.log("4");
// }); // er mane f er kaj fully complete hoile then run hobe
// console.log("5");


// async function f() {
//   console.log("1");
//   await Promise.resolve();
//   console.log("2");
// }

// async function main() {
//   console.log("3");
//   f();                     // don't await here
//   console.log("4");
//   await Promise.resolve(); // wait one microtask
//   console.log("5");
// }

// main(); // 3 1 4 2 5

// async function f(){
//     console.log("1");
//     await Promise.resolve();
//     console.log("2");
// }
// async function main(){
//     console.log("3");
//     await f();
//     console.log("4");
//     console.log("5");
// }
// main(); // 3 1 2 4 5



// async function f(){
//     console.log("A");
//     await 0;
//     console.log("B");
// }
// f();
// console.log("C");
// console.log("D");


// async function f() {
//   console.log("A");
//   await Promise.resolve();
//   console.log("B");
// }
// console.log("C");
// f();
// console.log("D");
// console.log("E");


// async function f() {
//     return 5;
// }
// console.log(f()); // promise { 5 }



// fetch("/api/user")
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.error(err));


// setTimeout(() => {
//   console.log("Hello from setTimeout");
// }, 5000);

// const data = readFromNetwork();
// console.log("hello");

// const res = await fetch("/api/user");
// if (!res.ok) {
//   throw new Error("Server error");
// }
// const data = await res.json();
// const res = fetch("/api/user"); // fetch returns a promise
// console.log(res);
// const a = await fetch("/api/user");
// const a = await data.json();
// console.log(a);




// const text = fs.readFileSync("data.json", "utf8");
// const data = JSON.parse(text);
// data.count++;
// console.log("count in memory : ", data.count);
// try{
// fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
// // if(!fs.writeFileSync("data.json", JSON.stringify(data, null, 2))){
// //     throw new Error("Crash 2");
// // }
// console.log("writing in the file was successful");
// }
// catch(error){
//     console.log("writing in the file was not done ");
//     console.log(error.message);
// }



// /**
//  *  fs + parse step by step 
//  * fs is a file system module ( built into node.js) 
//  * it lets you js program read files, write files, delete files.
//  * */
//  // utf8 converts bytes -> text
// const text = fs.readFileSync("data.json", "utf8"); // readfilesync read bytes from disk
// console.log(text); 
// console.log(typeof text);
// const data = JSON.parse(text);
// console.log(data.name);
// data.age = data.age + 1;//only changes memory, not the file
// console.log(data.age);
// fs.writeFileSync("data")
// console.log(data);//only changes memory, not the file
// /** why stringify is needed. files accept only text */
// const nextext = JSON.parse(data, null, 2);
// fs.writeFileSync(
//     "data.json", 
//     JSON.stringify(data, null, 2) // stringify(value, replacer, space) null means don't filter anything keep all properties
// );







// console.log(typeof {name : "nafis"}); // -> JS object
// console.log(typeof {"name" : "nafis"}); // -> JSON object


// //JSON stringifying
// const obj = {name : "nafis", age : 21};
// const text = JSON.stringify(obj);
// console.log(text);
// console.log(typeof text); // string
// console.log(typeof obj); // object




// //JSON parsing
// const text = `{"name" : "nafis", "age": 21}`;
// const obj = JSON.parse(text); // JSON.parse(text -> object)
// console.log(obj.name);
// console.log(typeof text); // string
// console.log(typeof obj); // object


// //ini.stringify(object)
// import ini from "ini";
// const text = 
// `
// username = nafs
// theme = dark
// timeout = 30
// `;
// const config = ini.parse(text);
// //parse-> text to data
// //stringify -> data to text
// console.log(config);
// const balcal = ini.stringify(config);
// console.log(balcal); // for ES modules


// const ini = require("ini");
// const text = `username = nafis timeout = 30`;
// const result = ini.parse(text);
// console.log(result); /// only fo CommonJs



// //old way
// const weekDay = (function () {
//   const names = [...];
//   return { name, number };
// })();
// // modern es module way 
// // weekDay.js
// const names = [...];

// export function name(n) {
//   return names[n];
// }

// export function number(s) {
//   return names.indexOf(s);
// }




// import {dayName as nomDeJour} from "./dayname.js";
// console.log(nomDeJour(3));
// // → Wednesday


// let now = new Date();
// console.log(`Today is ${dayName(now.getDay())}`);

// import {pi, area} from "./math.js";
// // for importing everything we use import * from ... 
// // for renaming a property we can write import {pi as PI} from .. 
// import * as math from "./math.js";
// math.pi;
// math.area(5);
// default dile hocche amra chaile jekono name e import korte parbo . 
/***
 * export function add (a, b){
 * return a + b;
 * }
 * import sum from "./math.js";
 * import xyz from "./math.js";
 * they are importing add from math.js
 */


// let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
// console.log(dateTime.test("1-30-2003 8:45"));
// // → true


// let name = /elok?/;
// console.log(name.test("elokoikka"));
// let name = /madarchod(ni)?/;
// console.log(name.test("hellamadarchod"));

// let neighbor = /neighbou?r/; // it means neighbo eita same to same match kora lagbe ar u? means eita hoy ekbar thakbe naile thakbe nah.
// console.log(neighbor.test("neighbour"));
// // → true
// console.log(neighbor.test("neighbor"));
// // → true






// console.log(/'\d+'/.test("'123'"));
// // → true
// console.log(/'\d+'/.test("''"));
// // → false
// console.log(/'\d*'/.test(" '123' "));
// // → true
// console.log(/'\d*'/.test("''"));
// // → true
// /** *means zero or more, + means one or more */


// console.log(/\p{L}/u.test("α"));
// // → true
// console.log(/\p{L}/u.test("!"));
// // → false
// console.log(/\p{Script=Greek}/u.test("α"));
// // → true
// console.log(/\p{Script=Arabic}/u.test("α"));
// // → false





// // 'u' flag ব্যবহার করা জরুরি , below is the code for searching letters in any language 
// console.log(/\p{L}/u.test("হ")); // true
// console.log(/\p{L}/u.test("é")); // true
// console.log(/\p{L}/u.test("A")); // true
// // বাংলা অক্ষর খোঁজা ( for some certain language )
// console.log(/\p{Script=Bengali}/u.test("আ")); // true
// console.log(/\p{Script=Bengali}/u.test("A")); // false
// // গ্রিক অক্ষর খোঁজা
// console.log(/\p{Script=Greek}/u.test("α")); // true
// /** alse there is \p{L} or  \p{N} or \p{P} or \p{Script = Hangul} */

// console.log(/\w/.test("%"));
// console.log(/\w/.test("e"));


// /** ১. রেগুলার এক্সপ্রেশনের ব্যাখ্যা: /[^01]/
// এখানে [] এর ভেতরে ^ (ক্যারেট) চিহ্নটি খুবই গুরুত্বপূর্ণ ভূমিকা পালন করে।
// [01]: এর মানে হলো—০ অথবা ১ কে খোঁজো।
// [^01]: যখন ^ চিহ্নটি ব্র্যাকেটের শুরুতে থাকে, তখন এর অর্থ উল্টে যায়। এর মানে হলো—০ এবং ১ "ছাড়া" অন্য যেকোনো কিছু খোঁজো।*/
// let nonBinary = /[^01]/;
// console.log(nonBinary.test("1100100010100110"));
// // → false
// console.log(nonBinary.test("0111010112101001"));
// // → true


// let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
// console.log(dateTime.test("01-30-2003 15:20"));
// // → true
// console.log(dateTime.test("30-jan-2003 15:20"));
// // → false



// console.log(/[0123456789]/.test("in 1992"));
// // [] dara bujache 0 theke 9 er modde jekono ekta match korlei true return korbe
// console.log(/[0-9]/.test("in 1992"));
// // same jinish ei bujacchi
// // we can also use \d for searching [0-9]
// console.log(/\d/.test("in 1992"));




// let aPlus = /A\+/;
// console.log(aPlus);

// console.log(/abc/.test("abdce"));
// console.log(/abc/.test("xyabcdz"));
// console.log(/ab.*c/.test("abxycc"));


// let text = "My numbers are 0171-123456 and 0191-987654.";
// // একটি সাধারণ ফোন নম্বর প্যাটার্ন: 4 সংখ্যা, হাইফেন, 6 সংখ্যা
// const phonePattern = /\d{4}-\d{6}/g; 
// // ১. test(): প্যাটার্নটি আছে কি?
// console.log("Is there any number? " + phonePattern.test(text)); // আউটপুট: true
// // ২. match(): সমস্ত ম্যাচ খুঁজে বের করা
// let allMatches = text.match(phonePattern);
// console.log(allMathches.length); // আউটপুট: 2
// console.log("All found numbers: " + allMatches); // আউটপুট: ["0171-123456", "0191-987654"]
// // ৩. replace(): ফোন নম্বর গোপন করা
// let censoredText = text.replace(phonePattern, "XXXXXXXXXX");
// console.log("Censored text: " + censoredText);
// // আউটপুট: "My numbers are XXXXXXXXXX and XXXXXXXXXX."
// // ৪. exec() (পুনরাবৃত্তি):
// // g flag ব্যবহার করলে exec() প্রতিবার কল করার সাথে সাথে পরের ম্যাচটি খুঁজে পায়।
// const patternForExec = /\d{4}/g;
// let first = patternForExec.exec(text);
// console.log("First 4 digits: " + first[0]); // আউটপুট: 0171
// let second = patternForExec.exec(text);
// console.log("Next 4 digits: " + second[0]); // আউটপুট: 1234



// let aPlus = /A\+/;
// console.log(aPlus.test("A+")); // true
// console.log(aPlus.test("A")); // false
// console.log(aPlus.test("B+")); // false



/** regular expressions in js */
// let re1 = new RegExp("abc");
// let re2 = /abc/;
// let re3 = re1
// console.log(re1);
// console.log(re2);
// console.log(re1.source);
// console.log(re2.source);
// console.log(re1 === re2); // false because they are different objects
// console.log(re1 === re3); // true because re3 references re1
// console.log(re3);
// //creating a regualr expression
// let re4 = new RegExp("abc","i"); // i for case insensitive
// let re5 = /abc/i;
// console.log(re4);
// console.log(re5);
// console.log(re4.source);
// console.log(re5.source);
// console.log(re4 === re5); // false because they are different objects


// const box = new class {
//   locked = true;
//   #content = [];
//   unlock() { this.locked = false; }
//   lock() { this.locked = true;  }
//   get content() {
//     if (this.locked) throw new Error("Locked!");
//     return this.#content;
//   }
// };
// function withBoxUnlocked(body) {
//     let wasLocked = box.locked;
//     if(wasLocked) box.unlock();
//     try{
//         body();
//     } finally {
//         if(wasLocked) box.lock();
//     }
// }
// withBoxUnlocked(() => {
//   box.content.push("gold piece");
// });
// try {
//   withBoxUnlocked(() => {
//     throw new Error("Pirates on the horizon! Abort!");
//   });
// } catch (e) {
//   console.log("Error raised: " + e);
// }
// console.log(box.locked);
// // → true




// function demo() {
//   try {
//     console.log("A. Try Block");
//     tormarebap; // eitar karone error hobe tai catch block run hobe
//     bigboobschudi;// aro ekta error
//     return 10; // ফাংশনটি 10 রিটার্ন করতে চায়
    
//   } 
//   catch (e) {
//     console.log("C. Catch Block");
//     return 20; // যদি এরর হয়, ফাংশনটি 20 রিটার্ন করতে চায়
//   }
//    finally {
//     console.log("B. Finally Block"); // কিন্তু return করার ঠিক আগে এটি রান হবে
//   }
// }
// let result = demo();
// // আউটপুট:
// // A. Try Block
// // B. Finally Block
// // result হবে: 10



// class MultiplicatorUnitFailure extends Error {}
// function primitiveMultiply(a, b) {
//   if (Math.random() < 0.2) {
//     return a * b;
//   } else {
//     throw new MultiplicatorUnitFailure("Klunk");
//   }
// }
// function reliableMultiply(a, b) {
//     for (;;) {
//         try {
//             return primitiveMultiply(a, b);
//         } catch (e) {
//             if (e instanceof MultiplicatorUnitFailure) {
//                 console.log("Retrying...");
//             } else {
//                 throw e;
//             }
//         }
//     }
// }
// console.log(reliableMultiply(8, 8));
// // → 64



// function firstelement(array){
//     if(array.length == 0){
//         throw new Error("array is faka");
//     }
//     else return array[0];
// }
// // console.log(firstelement([1, 2, 3]));
// console.log(firstelement([10 , 10, 9]));




// class InputError extends Error {}
// function promptDirection(question) {
//   let result = prompt(question);
//   console.log(`You entered: ${result}`);
//   if (result.toLowerCase() == "left") return "L";
//   if (result.toLowerCase() == "right") return "R";
//   throw new InputError("Invalid direction: " + result);
// }
// while(true){
//     try{
//         let dir = promptDirection("Where?");
//         console.log("You chose ", dir);
//         break;
//     } catch(e){
//         console.log("not a valid direction. Try again.");
//     }
// }


// const accounts = {
//   a: 100,
//   b: 0,
//   c: 20
// };
// function getAccount() {
//   let accountName = prompt("Enter an account name");
//   if (!Object.hasOwn(accounts, accountName)) {
//     throw new Error(`No such account: ${accountName}`);
//   }
//   return accountName;
// }
// // function transfer(from, amount) {
// //   if (accounts[from] < amount) return;
// //   accounts[from] -= amount;
// //   accounts[getAccount()] += amount;
// // }
// function transfer(from, amount) {
//   if (accounts[from] < amount) return;
//   let progress = 0;
//   try {
//     accounts[from] -= amount;
//     progress = 1;
//     accounts[getAccount()] += amount;
//     progress = 2;
//   } finally {
//     if (progress == 1) {
//       accounts[from] += amount;
//     }
//   }
// }
// console.log(transfer("a", 50));



// /**
//  * নিরাপদ লেনদেন কোড: Node.js/VS Code টার্মিনালের জন্য ফিক্সড ভার্সন।
//  * getAccount() ফাংশনটি remove করে transfer ফাংশনে প্রাপকের নাম ইনপুট হিসেবে নেওয়া হয়েছে।
//  */
// const accounts = {
//   a: 100,
//   b: 0,
//   c: 20
// };
// /**
//  * নিরাপদে টাকা স্থানান্তর করার ফাংশন।
//  * @param {string} from - প্রেরক অ্যাকাউন্টের নাম।
//  * @param {string} to - প্রাপক অ্যাকাউন্টের নাম। (নতুন ইনপুট)
//  * @param {number} amount - স্থানান্তরিত টাকার পরিমাণ।
//  */
// function transfer(from, to, amount) {
//   // ১. প্রাথমিক চেক: অ্যাকাউন্টে পর্যাপ্ত টাকা বা সঠিক অ্যাকাউন্ট নাম আছে কি না।
//   if (accounts[from] === undefined) {
//       console.error(`Error: Sender account '${from}' does not exist.`);
//       return;
//   }
//   if (accounts[from] < amount) {
//       console.error(`Error: Insufficient funds in ${from}.`);
//       return;
//   }
//   let progress = 0; 
//   try {
//     // এখানে প্রাপকের অ্যাকাউন্টের বৈধতা প্রথমে পরীক্ষা করা হচ্ছে
//     if (!Object.hasOwn(accounts, to)) {
//         // যদি ভুল নাম দেওয়া হয়, এখানে এরর throw হবে
//         throw new Error(`No such recipient account: ${to}`);
//     }
//     // ২. টাকা কেটে নেওয়া (Withdrawal)
//     accounts[from] -= amount;
//     progress = 1; 
//     // ৩. টাকা জমা দেওয়া (Deposit)
//     accounts[to] += amount;
//     progress = 2;
//     console.log(`SUCCESS: Transferred ${amount} from ${from} to ${to}.`);
//   } catch (error) {
//     console.error(`TRANSACTION FAILED: ${error.message}`);
//   } finally {
//     // ৪. Rollback Logic
//     if (progress === 1) {
//       accounts[from] += amount;
//       console.log(`ROLLBACK: ${amount} returned to ${from} due to failure.`);
//     }
//   }
// }
// // --- প্রদর্শন (Demonstration) ---
// console.log("--- Initial Accounts ---");
// console.log(accounts); // { a: 100, b: 0, c: 20 }
// console.log("\n--- Scenario 1: Successful Transfer (a -> c) ---");
// // সফল লেনদেন: 'a' থেকে 'c' তে 10 টাকা পাঠানো
// transfer("a", "c", 10);
// console.log(accounts); // { a: 90, b: 0, c: 30 }
// console.log("\n--- Scenario 2: Failed Transfer & Rollback (a -> x) ---");
// // ব্যর্থ লেনদেন: 'a' থেকে 'x' (ভুল অ্যাকাউন্ট) তে 50 টাকা পাঠানো
// transfer("a", "x", 50); 
// console.log(accounts); // { a: 90, b: 0, c: 30 } -> 'a' এর ব্যালেন্স ঠিকই থাকবে, কারণ রোলব্যাক হয়েছে।
// console.log("\n--- Scenario 3: Insufficient Funds ---");
// // অপর্যাপ্ত তহবিল: 'b' এর ব্যালেন্স 0, কিন্তু 20 টাকা পাঠানোর চেষ্টা
// transfer("b", "a", 20);
// console.log(accounts); // { a: 90, b: 0, c: 30 } -> কোনো পরিবর্তন হয়নি।








// function promptDirection(question) {
//   let result = prompt(question);
//   if (result.toLowerCase() == "left") return "L";
//   if (result.toLowerCase() == "right") return "R";
//   throw new Error("Invalid direction: " + result);
// }

// function look() {
//   if (promptDirection("Which way?") == "L") {
//     return "a house";
//   } else {
//     return "two angry bears";
//   }
// }

// try {
//   console.log("You see", look());
// } catch (error) {
//   console.log("Something went wrong: " + error);
// }


// function lastElement(array) {
//   if (array.length == 0) {
//     return {failed: true};
//   } else {
//     return {value: array[array.length - 1]};
//   }
// }
// let b = [1, 2, 4, 5];
// console.log(lastElement(b));



// function promptNumber(question) {
//   let result = Number(prompt(question));
//   if (Number.isNaN(result)) return null;
//   else return result;
// }
// console.log(promptNumber("How many trees do you see?"));



// function numberToString(n, base = 10) {
//   let result = "", sign = "";
//   if (n < 0) {
//     sign = "-";
//     n = -n;
//     // console.log(n);
//   }
//   do {
//     result = String(n % base) + result;
//     n = Math.floor(n /= base); /** previously n /= base caused the error */
//     // console.log(n);
//   } while (n > 0);
//   return sign + result;
// }
// console.log(numberToString(13, 10));
// // → 1.5e-3231.3e-3221.3e-3211.3e-3201.3e-3191.3e-3181.3…






// function test(label, body) {
//   if (!body()) console.log(`Failed: ${label}`);
// }
// test("convert Latin text to uppercase", () => {
//   return "hello".toUpperCase() == "HELLO";
// });
// test("convert Greek text to uppercase", () => {
//   return "Χαίρετε".toUpperCase() == "ΧΑΊΡΕΤΕ";
// });
// test("don't convert case-less characters", () => {
//   return "مرحبا".toUpperCase() == "مرحبا";
// });



// function greet(person) {
//   // Defensive Check: Ensure 'person' is an object and not null/undefined
//   if (typeof person !== 'object' || person === null) {
//     throw new Error("Invalid input: Expected an object.");
//   }
//   // Safe to proceed
//   return `Hello, ${person.name}`;
// }
// console.log(greet({ name: "Alice" })); // Works fine
// console.log(greet(null)); // Throws Error: Invalid input: Expected an object.




// Code	        Expected Result	        Actual Result	    Bug Type
// 10 + "5"	        15	                    "105"	        Logic Error (String Concatenation)
// [1, 2] + [3, 4]	[1, 2, 3, 4] (Array Merge)	"1,23,4"	    Logic Error (Array coerced to String)



// let callback = "I am a string";
// callback();
// // 💥 Runtime Error: TypeError: callback is not a function

// let value = null; // or undefined
// console.log(value.length);
// // 💥 Runtime Error: TypeError: Cannot read properties of null (reading 'length')


// try {
//   // 1. Code that MIGHT throw an exception (e.g., connecting to a database)
//   console.log("Attempting a risky operation...");
//   someUndefinedObject.property; // This line will cause a TypeError!
//   console.log("This line is never reached.");
// } catch (error) {
//   // 2. Code that executes ONLY IF an exception is thrown in the 'try' block.
//   console.error("An error occurred! Details:", error.message);
//   // We can now recover or log the error instead of crashing.
// } finally {
//   // 3. Optional: Code that executes regardless of whether an error was thrown or not.
//   console.log("Cleanup complete.");
// }





// "use strict";
// function Person(name) { this.name = name; }
// let ferdinand = Person("Ferdinand"); // forgot new
// // → TypeError: Cannot set property 'name' of undefined



// function Person(name) { this.name = name; }
// let ferdinand = Person("Ferdinand"); // oops
// console.log(name);
// // → Ferdinand


// function canYouSpotTheProblem() {
//   "use strict";
//   for (counter = 0; counter < 10; counter++) {
//     console.log("Happy happy");
//   }
// }

// canYouSpotTheProblem();
// // → ReferenceError: counter is not defined


// class Group{
//     constructor(){
//         this.members = [];
//     }
//     add(value){
//         if(!this.members.includes(value)){
//             this.members.push(value);
//         }
//     }
//     delete(value){
//         this.members = this.members.filter(m => m !== value);
//     }
//     has(value){
//         return this.members.includes(value);
//     }
// }
// Group.from = function(array){
//     let group = new Group();
//     for(let value of array){
//         group.add(value);
//     }
//     return group;
// };

// let group = Group.from([10, 20]);
// console.log(group.has(10)); // true
// console.log(group.has(30)); // false
// group.add(10); 
// group.delete(10);
// console.log(group.has(10)); // false



// /**
//  * Vec Class: Represents a vector in two-dimensional space.
//  * It provides methods for vector addition, subtraction, and computing the magnitude (length).
//  */
// class Vec {
//     /**
//      * Constructor initializes the vector with x and y coordinates.
//      * @param {number} x - The horizontal component.
//      * @param {number} y - The vertical component.
//      */
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }

//     /**
//      * Adds another vector to this vector.
//      * @param {Vec} other - The vector to add.
//      * @returns {Vec} A new Vec object representing the sum.
//      */
//     plus(other) {
//         // Returns a new vector with the sum of components
//         return new Vec(this.x + other.x, this.y + other.y);
//     }

//     /**
//      * Subtracts another vector from this vector.
//      * @param {Vec} other - The vector to subtract.
//      * @returns {Vec} A new Vec object representing the difference.
//      */
//     minus(other) {
//         // Returns a new vector with the difference of components
//         return new Vec(this.x - other.x, this.y - other.y);
//     }

//     /**
//      * Getter property that calculates the length (magnitude) of the vector
//      * using the Pythagorean theorem (sqrt(x^2 + y^2)).
//      * @returns {number} The magnitude of the vector.
//      */
//     get length() {
//         // Math.sqrt(x^2 + y^2)
//         // We use the exponentiation operator (**) for clarity in squaring the values.
//         return Math.sqrt(this.x ** 2 + this.y ** 2);
//     }

//     /**
//      * Provides a clean string representation for console output.
//      */
//     toString() {
//         return `Vec(${this.x}, ${this.y})`;
//     }
// }

// // --- Demonstration ---

// // 1. Create two vectors
// const v1 = new Vec(3, 4);
// const v2 = new Vec(1, 2);

// console.log(`v1: ${v1.toString()}`);
// console.log(`v2: ${v2.toString()}`);
// console.log("-----------------------");

// // 2. Test the plus method
// const vSum = v1.plus(v2); // (3+1, 4+2) = (4, 6)
// console.log(`v1.plus(v2) = ${vSum.toString()}`); 
// console.log(`Expected sum: Vec(4, 6)`);
// console.log("-----------------------");

// // 3. Test the minus method
// const vDiff = v1.minus(v2); // (3-1, 4-2) = (2, 2)
// console.log(`v1.minus(v2) = ${vDiff.toString()}`);
// console.log(`Expected difference: Vec(2, 2)`);
// console.log("-----------------------");

// // 4. Test the length getter
// // Length of v1 (3, 4) should be sqrt(3^2 + 4^2) = sqrt(9 + 16) = sqrt(25) = 5
// console.log(`v1.length = ${v1.length}`);
// console.log(`Expected length: 5`);

// // Length of vDiff (2, 2) should be sqrt(2^2 + 2^2) = sqrt(4 + 4) = sqrt(8) ≈ 2.828
// console.log(`vDiff.length = ${vDiff.length.toFixed(3)}`);
// console.log(`Expected length: 2.828`);





// class Vec{
//     constructor(x, y){
//         this.x = x;
//         this.y = y;
//     }
//     plus(other){
//         return new Vec(this.x + other.x, this.y + other.y);
//     }
//     minus(other){
//         return new Vec(this.x - other.x, this.y - other.y);
//     }
//     get length(){
//         return Math.sqrt(this.x ** 2 + this.y ** 2);
//     }
// }
// console.log(new Vec(1, 2).plus(new Vec(2, 3))); // Vec {x: 3, y: 5}
// console.log(new Vec(1, 2).minus(new Vec(2, 3))); // Vec {x: -1, y: -1}
// console.log(new Vec(3, 4).length); // 5




// /* inheritance */
// class list{
//     constructor(value, rest){
//         this.value = value;
//         this.rest = rest;
//     }
//     get length(){
//         return 1 + (this.rest ? this.rest.length : 0);
//     }
//     static fromArray(array){
//         let result = null;
//         for(let i = array.length - 1; i >= 0; i--){
//             result = new this(array[i], result);
//         }
//         return result;
//     }
// }
// class listiterator{
//     constructor(list){
//         this.list = list;
//     }
//     next(){
//         if(this.list == null){
//             return {done : true};
//         }
//         let value = this.list.value;
//         this.list = this.list.rest;
//         return {value, done : false};
//     }
// }
// list.prototype[Symbol.iterator] = function(){
//     return new listiterator(this);
// };
// let mylist = list.fromArray([10, 20, 30]);
// for(const value of mylist){
//     console.log(value);
// }
// console.log([..."PCI"]);
// // → ["P", "C", "I"]
// class LengthList extends list{
//     #length;
//     constructor(value, rest){
//         super(value, rest);
//         this.#length = super.length;
//     }
//     get length(){
//         return this.#length;
//     }
// }
// console.log(LengthList.fromArray([1, 2, 3]).length);

// /* the instanceof operator */
// console.log( new LengthList(1, null) instanceof LengthList); // true
// console.log( new LengthList(2, null) instanceof list); // true
// console.log( new list(3, null) instanceof LengthList); // false
// console.log( [1] instanceof list); // true




// let okiterator = "OK"[Symbol.iterator]();
// console.log(okiterator.next());
// console.log(okiterator.next());
// console.log(okiterator.next());



// class Range{
//     constructor(start, end){
//         this.start = start;
//         this.end = end;
//     }
//     [Symbol.iterator](){
//         let current = this.start;
//         const end = this.end;

//         return {
//             next(){
//                 if(current <= end){
//                     return {value : current++, done : false};
//                 } else {
//                     return { done : true };
//                 }
//             }
//         }
//     }
// }
// for(const number of new Range(1, 10)){
//     console.log(number);
// }


// https://csteach460.github.io/assets/docs/extras/javascript/js-prototype.pdf

// // constructor function
// function Archive(name, admin) {
//  this.name = name;
// this.admin = admin;
// // instance method
// this.administrator = function () {
// return this.admin;
// }
// // add property to constructor
// Archive.access = function() {
//  return false;
// };
// }
// // instantiate object - pass arguments
// const archive = new Archive('Waldzell', 'Knechts');
// // check parameter usage with ternary conditional...
// const nameCheck = archive.name === `Waldzell` ? archive.name : false;
// // output name check...
// console.log(`prototype archive name = ${nameCheck}`);
// // call constructor only method
// console.log(Archive.access());
// // call instance method
// console.log(`archive administrator = ${archive.administrator()}`);




// // class with constructor & methods
// class Archive {
//  constructor(name, admin) {
//  this.name = name;
//  this.admin = admin;
//  }
// // class method
//  static access() {
//  return false;
//  }
// // instance method
// administrator() {
// return this.admin;
// }
// }
// // instantiate archive object
// const archive = new Archive('Waldzell', 'Knechts');
// // check parameter usage with class
// const nameCheck = archive.name === `Waldzell` ? archive.name : false;
// // log archive name
// console.log(`class archive name = ${nameCheck}`);
// // call class method
// console.log(Archive.access());
// // call instance method
// console.log(`archive administrator = ${archive.administrator()}`);
// console.log(`archive name = ${nameCheck}`);




// // empty object
// const archive = {};
// // add properties to object
// archive.name = "waldzell";
// archive.type = "game";
// // define property access, usage, &c.
// Object.defineProperty(archive, "access", {
// configurable: false,
// enumerable: false,
// value: true,
// writable: true
// });
// // check access to new property
// console.log(`${archive.access}, access property available on the
// object...`);
// /*
// * check we can't access new property in loop
// * - for..in iterates over enumerable properties
// */
// for (let property in archive) {
// // log enumerable
// console.log(`key = ${property}, value = ${archive[property]}`);
// }
// /*
// * plain object values not iterable...
// * - returns expected TyoeError - archive is not iterable
// */
// for (let value of archive) {
// // value not logged...
// console.log(value);
// }




// //constructor for object
// function Library() {
// // instance properties
//  this.type = 'library';
//  this.location = 'waldzell';
// }
// // extend prototype
// Library.prototype.addArchive = function(archive) {
//  console.log(`archive added to library - ${archive}`);
// // add archive property to instantiate object
// this.archive = archive;
// // add property to Library prototype
// Library.prototype.administrator = 'knechts';
// }
// // constructor for Archive object
// function Archive(){
// // instance property
// this.domain = 'gaming';
// }
// // update prototype to parent Libary - instance relative to parent & child
// Archive.prototype = new Library();
// // instantiate new Archive object
// const archiveRecord = new Archive();
// // call addArchive on Library prototype
// archiveRecord.addArchive('mariafels');
// // check instance object - against constructor
// if (archiveRecord instanceof Archive) {
//  console.log(`archive domain = ${archiveRecord.domain}`);
// }
// // check constructor used for archiveRecord object
// if (archiveRecord.constructor === Archive) {
//  console.log('constructor found on Archive...');
// } else {
//  console.log(`Archive constructor = ${archiveRecord.constructor}`);
// console.log(`Archive domain = ${archiveRecord.domain}`);
// console.log(`Archive = ${archiveRecord.archive}`);
// console.log(`Archive admin = ${archiveRecord.administrator}`);
// }
// // check instance of archiveRecord - instance of Library & Archive
// if (archiveRecord instanceof Library) {
//     // type property from Library
//  console.log(`Library type = ${archiveRecord.type}`);
// // domain property from Archive
// console.log(`Archive domain = ${archiveRecord.domain}`);
// }
// // instantiate another Archive object
// const archiveRecord2 = new Archive();
// // output instance object for second archive
// console.log('Archive2 object = ', archiveRecord2);
// // check if archiveRecord2 object has access to updated archive
// // property...NO
// console.log(`Archive2 = ${archiveRecord2.archive}`);
// // check if archiveRecord2 object has access to updated adminstrator
// // property...YES
// console.log(`Archive2 administrator = ${archiveRecord2.administrator}`);





// // inheritance with prototypes
// function library(){
//     this.type = 'library';
//     this.location = 'waldzell';
// }
// function archive(){
//     this.domain = 'gaming';
// }
// archive.prototype = new library();
// const archiveRecord = new archive();
// if(archiveRecord.constructor === archive){
//     console.log('Constructor found on archive...');
// } else{
//     console.log(`archive constructor = ${archiveRecord.constructor}`);
// }



// https://csteach460.github.io/assets/docs/extras/javascript/js-prototype.pdf

// // inheritance with prototypes
// function library(){
//     this.type = 'library';
//     this.location = 'waldzell';
// }
// function archive(){
//     this.domain = 'gaming';
// }
// archive.prototype = new library();
// const archiveRecord = new archive();
// if(archiveRecord instanceof library){
//     console.log(`archiveRecord is instance of library`);
//     console.log(`type = ${archiveRecord.type}`);
//     console.log(`location = ${archiveRecord.location}`);
//     console.log(`domain = ${archiveRecord.domain}`);
// }
// if(archiveRecord instanceof archive){
//     console.log(`archiveRecord is instance of archive`);
//     console.log(`domain = ${archiveRecord.domain}`);
// }



// //constructor for object
// function LibraryRecord() {
//  //set default value on prototype
//  LibraryRecord.prototype.library = 'castalia';
// }
// const bookRecord = new LibraryRecord();
// const bookRecord2 = new bookRecord.constructor();
// console.log(`library = ${bookRecord.library}`);
// console.log(`library2 = ${bookRecord2.library}`);



// //constructor for object
// function LibraryRecord() {
//  //set default value on prototype
//  LibraryRecord.prototype.library = 'castalia';
// }
// // create instance object for LibraryRecord
// const bookRecord = new LibraryRecord();
// // output constructor for instance object
// console.log(`constructor = ${bookRecord.constructor}`);
// // check if function was constructor (use ternary conditional)
// const check = bookRecord.constructor === LibraryRecord ? true : false;
// // output result of check
// console.log(check);




// //constructor for object
// function LibraryRecord() {
//  // set property on instance of object
//  this.library = 'waldzell';
// }
// // create instance of LibraryRecord - call constructor with `new` operator
// const bookRecord1 = new LibraryRecord();
// // check output of value for library property from constructor
// console.log(`this library = ${bookRecord1.library}`);
// // add method to prototype after object created
// LibraryRecord.prototype.updateLibrary = function() {
//  return this.retreat = 'mariafels';
// };
// console.log(LibraryRecord.prototype);
// // check prototype updated with new method
// console.log(`this retreat = ${bookRecord1.updateLibrary()}`);
// // then overwrite prototype - constructor for existing object
// // unaffected...
// LibraryRecord.prototype = {
//  archive: 'mariafels',
//  order: 'benedictine'
// };
// console.log(bookRecord1.library);
// console.log(bookRecord1.order);// undefined - prototype overwritten
// console.log(bookRecord1.archive);// undefined - prototype overwritten
// console.log(LibraryRecord.prototype);
// console.log(`prototype overwritten...`);

// // create instance object of LibraryRecord...with updated prototype
// const bookRecord2 = new LibraryRecord();
// // check output for second instance object
// console.log(`updated archive = ${bookRecord2.archive} and order =
// ${bookRecord2.order}`);
// // check output for second instance object - library
// console.log(`second instance object - library = ${bookRecord2.library}`);
// // check if prototype updated for first instance object - NO
// console.log(`first instance object = ${bookRecord1.order}`);
// // manual update to prototype for first instance object still available
// console.log(`this retreat2 = ${bookRecord1.updateLibrary()}`);
// // check prototype has been fully overwritten - e.g. `updateLibrary()` no
// // longer available on prototype for new instance object
// try {
// // updates to original prototype are overridden - error is returned for
// // second instantiated object...
// console.log(`this retreat = ${bookRecord2.updateLibrary()}`);
//  } catch(error) {
//  console.log(`modified prototype not available for new object...\n
// ${error}`);
// }


// function LibraryRecord(){
//     this.library = 'wildzell';
//     LibraryRecord.prototype.library = 'castalia';
// }
// const bookRecord = new LibraryRecord();
// console.log(bookRecord.library); // wildzell


// function LibraryRecord(){
//     LibraryRecord.prototype.library = 'castalia';
// }
// const bookRecord = new LibraryRecord();
// console.log(bookRecord.library);


// https://csteach460.github.io/assets/docs/extras/javascript/js-prototype.pdf


// const object1 = {title : 'the glass bead game' };
// const object2 = { author : 'herman hesse' };
// const object3 = { genre : 'fiction' };
// console.log(object1.title);
// Object.setPrototypeOf(object1, object2);
// Object.setPrototypeOf(object2, object3);
// console.log(object1.author);
// console.log(object1.genre);


// const object1 = {title : 'the glass bead game' };
// const object2 = { author : 'herman hesse'};
// console.log(object1.title);
// Object.setPrototypeOf(object1, object2);
// console.log(object1.author);


// Rabbit.prototype[sym] = 55;
// console.log(killerRabbit[sym]); // -> 55

// let a = Symbol.for("shared key");
// let b = Symbol.for("shared key");
// console.log(a === b); // true because both symbols are created using Symbol.for with same key
// console.log(Symbol.keyFor(a));
// console.log(Symbol.keyFor(b));




// let sym = Symbol("name");
// console.log(sym == "name"); // false because symbol is a unique identifier
// console.log(sym == Symbol("name")); // false because each symbol is unique
// console.log(typeof sym);
// console.log(String(sym));
// console.log(sym.description);
// let sym1 = sym;
// console.log(sym1 == sym); // true because both are same symbol



/* use of static method */
/*
let fahrenheit = 86;
let celsiusValue  = (fahrenheit - 32 ) / 1.8;
let temp = new Temperature(celsiusValue); // new Temperature object created with celsius value
*/
// below is the static method implementation of fromFahrenheit
/*static fromFahrenheit(value){
    return new Temperature((value-32)/1.8);
}
let temp = Temperature.fromFahrenheit(86);
console.log(temp.celsius);
*/


// class Temperature {
//   constructor(celsius) {
//     this.celsius = celsius;
//   }
//   get fahrenheit() {
//     return this.celsius * 1.8 + 32;
//   }
//   set fahrenheit(value) {
//     this.celsius = (value - 32) / 1.8;
//   }

//   static fromFahrenheit(value) {
//     return new Temperature((value - 32) / 1.8);
//   }
// }

// let temp = new Temperature(22);
// console.log(temp.celsius);
// console.log(temp.fahrenheit);// triggers the get fahrenheit method
// // → 71.6
// temp.fahrenheit = 86;// triggers the set fahrenheit method
// console.log(temp.celsius);
// // → 30




// class TemperatureConverter{
//     #celsius;
//     constructor(celsiusValue){
//         this.#celsius = celsiusValue;
//     }
//     set celsius(newC){
//         if(newC < -273.15){
//             console.log("Error: Temperature below absolute zero");
//         }
//         else {
//             this.#celsius = newC;
//         }
//     }
//     get celsius(){
//         return this.#celsius;
//     }
//     get fahrenheit(){
//         return (this.#celsius * 9/5) + 32;
//     }
//     #toKelvin(){
//         return this.#celsius + 273.15;
//     }
//     get kelvin(){
//         return this.#toKelvin();
//     }
// }
// let temp = new TemperatureConverter(25);
// console.log(`Celsius: ${temp.celsius}°C`);
// console.log(`Fahrenheit: ${temp.fahrenheit}°F`);
// console.log(`Kelvin: ${temp.kelvin}K`);
// temp.celsius = -300;




// class Person {
//   constructor(name) {
//     // 1. Storage: The actual data is stored here, marked as internal.
//     this._name = name; 
//   }
  
//   // 2. Control: The public interface for accessing this data is here.
//   get name() {
//     return this._name;
//   }
  
//   // 3. Control: The public interface for modifying this data is here.
//   set name(newName) {
//     if (newName.length > 1) {
//       this._name = newName; // Use the internal property for storage
//     }
//   }
// }
// const user = new Person("Alice");
// console.log(user.name); // Accessing the name via the getter
// user.name = "Bob";     // Runs the setter method with "Bob" as the argument.
// console.log(user.name); // Accessing the updated name via the getter



// class Person {
//   constructor(name) {
//     this._name = name; // Underscore convention for internal property
//   }
  
//   // Setter for the name property
//   set name(newName) {
//     if (newName.length < 2) {
//       console.log("Error: Name is too short.");
//     } else {
//       this._name = newName; // Only update if validation passes
//     }
//   }
// }

// const user = new Person("Alice");
// console.log(user._name); // Accessing the internal property directly for demonstration

// // We assign it like a property
// user.name = "Bob";     // Runs the setter method with "Bob" as the argument.
// user.name = "A";       // Runs the setter, fails validation, logs error.
// console.log(user._name); // Accessing the internal property directly for demonstration



// class Circle{
//     constructor(radius){
//         this.radius = radius;
//     }
//     get area(){
//         return Math.PI * this.radius ** 2;
//     }
// }
// const smallCircle = new Circle(2);
// console.log(smallCircle.area);


// class circle{
//     constructor(radius){
//         this.radius = radius;
//     }
//     getArea(){
//         return Math.PI * this.radius ** 2;
//     }
// }
// const smallcircle = new circle(2);
// console.log(smallcircle.getArea());




// console.log(Object.hasOwn({x: 1}, "x")); // means does the object {x:1} has property named "x" on itself
// // → true
// console.log(Object.hasOwn({x: 1}, "toString"));
// // → false

// when we do "x" in object it checks both own properties and prototype properties
// let obj = {x : 1};
// console.log("x" in obj); // true because x is own property
// console.log("toString" in obj); // true because toString is prototype property


// let ages = new Map();
// ages.set("Boris", 39);
// ages.set("Liang", 22);
// ages.set("Júlia", 62);
// ages.set("Boris", 40);

// console.log(`Júlia is ${ages.get("Júlia")}`);
// // → Júlia is 62
// console.log("Is Jack's age known?", ages.has("Jack"));
// // → Is Jack's age known? false
// console.log(ages.has("toString"));
// // → falselet ages = new Map();
// ages.set("Boris", 39);
// ages.set("Liang", 22);
// ages.set("Júlia", 62);
// ages.set("Boris", 40);
// console.log(`Júlia is ${ages.get("")}`);
// // → Júlia is 62
// console.log("Is Jack's age known?", ages.has("Jack"));
// // → Is Jack's age known? false
// console.log(ages.has("toString"));
// // → false



// let ages = new Map();
// ages.set("Boris", 39);
// ages.set("Liang", 22);
// ages.set("Júlia", 62);

// console.log(`Júlia is ${ages.get("Júlia")}`);
// // → Júlia is 62
// console.log("Is Jack's age known?", ages.has("Jack"));
// // → Is Jack's age known? false
// console.log(ages.has("toString"));
// // → false




// console.log("toString" in Object.create(null)/*means create a new object that has no prototype*/);
// // → false

// Object Type,Prototype Chain,"""toString"" in object Result"
// Plain Object ({}),Object.prototype (includes toString),true
// Null Prototype (Object.create(null)),null (no inherited properties),false



// let ages = {
//     Boris : 39,
//     Liang : 22,
//     Julia : 62
// };
// console.log(`Julis is ${ages["Julia"]}`);
// ages["Pierre"] = 45;
// console.log(`Pierre is ${ages["Pierre"]}`);
// console.log("Is Jack's age known? ", "Jack" in ages); // or we can say ages.hasOwnProperty("Jack")
// console.log("Is toString's age known? ", "toString" in ages);
// console.log("Is toString one of our own properties? ", ages.hasOwnProperty("toString"));
// // Output: Is toString one of our own properties?  false


// console.log(Array.prototype.toString == Object.prototype.toString);
// console.log([1,10, 5, 56, 2].toString());


// // This is an abstract representation of what Array.prototype.toString does:
// Array.prototype.toString = function() {
//     // It returns the result of calling this array's join() method 
//     // without any arguments, which defaults the separator to a comma (,).
//     return this.join(); 
// };


// class Rabbit{
//     constructor(type){
//         this.type = type;
//     }
//     speak(line){
//         console.log(`The ${this.type} rabbit says '${line}`);
//     }
// }
// let killerRabbit = new Rabbit("killer");
// let blackRabbit = new Rabbit("black");
// Rabbit.prototype.teeth = "small";// assigns small to both of the prototypes
// console.log(killerRabbit.teeth);
// console.log(blackRabbit.teeth);
// killerRabbit.teeth = "long, sharp, and bloody";// only assigns long, sharp, and bloody to killerRabbit object
// console.log(killerRabbit.teeth);
// console.log(blackRabbit.teeth);
// console.log((new Rabbit("basic")).teeth);// since basic rabbit is a new object it will get small as teeth from prototype


// class RandomSource {
//   #max;
//   constructor(max) {
//     this.#max = max;
//   }
//   getNumber() {
//     return Math.floor(Math.random() * this.#max);
//   }
// }
// let source = new RandomSource(10, 20, 30); // ignores extra arguments like 20, 30
// console.log(source.getNumber());


// class SecretiveObject {
//   #getSecret() {
//     return "I ate all the plums";
//   }
//   interrogate() {
//     let shallISayIt = this.#getSecret();
//     return "never";
//     /* we could return shallISayIt; to reveal the secret */
//   }
// }
// let obj = new SecretiveObject();
// console.log(obj.interrogate());
// // console.log(obj.#getSecret()); // SyntaxError!
// let myObject = new SecretiveObject();
// console.log(myObject);
// // 1. Call the public method
// let response = myObject.interrogate();
// console.log(response); // → "never"



// class BankAccount {
//   // 1. Private Property (accessible only inside this class)
//   #balance = 0;
//   constructor(initialDeposit) {
//     this.#balance = initialDeposit;
//   }
//   // 2. Public Method (used to interact with the private data)
//   deposit(amount) {
//     if (amount > 0) {
//       this.#balance += amount;
//     }
//   }
//   getBalance() {
//     return this.#balance;
//   }
// }
// let myAccount = new BankAccount(100);
// // ✅ Works: Access via a public method
// console.log(myAccount.getBalance()); // Output: 100
// // ❌ Fails: Direct external access is prevented
// console.log(myAccount.#balance); // SyntaxError! 
// // ❌ Fails: You cannot modify it directly either
// myAccount.#balance = 1000000; // SyntaxError!


// class Particle{
//     speed  = 0;
//     constructor(speed){
//         this.speed = speed;
//     }
// }
// let object = new class { getword() { return "hello";}};
// console.log(object.getword());


// function ArchaicRabbit(type) {
//   this.type = type;
// }
// ArchaicRabbit.prototype.speak = function(line) {
//   console.log(`The ${this.type} rabbit says '${line}'`);
// };
// let oldSchoolRabbit = new ArchaicRabbit("old school");
// oldSchoolRabbit.speak("Burrrr");


// let protoRabbit = {
//     speak(line){
//         console.log(`The ${this.type} rabbit says '${line}`);
//     }
// };
// function makerabbit(type){
//     let rabbit = Object.create(protoRabbit);
//     rabbit.type = type;
//     return rabbit;
// }
// let whiteRabbit = makerabbit("white");
// let hungryRabbit = makerabbit("hungry");
// whiteRabbit.speak("Oh my fur and whiskers");
// hungryRabbit.speak("Got any carrots?");

// class Rabbit{
//     constructor(type){
//         this.type = type;
//     }
//     speak(line){
//         console.log(`The ${this.type} rabbit says '${line}`);
//     }
// }
// let killerRabbit = new Rabbit("killer");
// let blackRabbit = new Rabbit("black");
// killerRabbit.speak("SKREEEE!");
// blackRabbit.speak("Doom...");
// console.log(Object.getPrototypeOf(Rabbit) ==
//             Function.prototype);
// // → true
// console.log(Object.getPrototypeOf(killerRabbit) ==
//             Rabbit.prototype);
// // → true


// class Dog{
//     constructor(name){
//         this.name = name;
//         this.breed = this.breed; // is not initialized then labrador and beagle becomes a garbage value
//     }
// };
// /* without a constructor */
// // let dog1 = {};
// // dog1.name = "Fido";
// // let dog2 = {};
// // dog2.name = "Max"; 
// /* with a constructor */
// let dog1 = new Dog("Fido", "Labrador");
// let dog2 = new Dog("Max", "Beagle");
// console.log(dog1.name);
// console.log(dog2.name);



// let protoRabbit = {
//     speak(line){
//         console.log(`The ${this.type} rabbit says '${line}`);
//     }
// };
// let blackRabbit = Object.create(protoRabbit);
// blackRabbit.type = "black";
// blackRabbit.speak("Burrrr");
// protoRabbit.type = "gray";
// protoRabbit.speak("Grrr");
// let grayRabbit = Object.create(protoRabbit);
// grayRabbit.speak("Boo");
// //adding a new function to prototype object named heda
// protoRabbit.heda = function (balcal)/*or heada(balcal)*/{ /* previously heda = call*/
//     console.log(`The ${this.type} rabbit calls '${balcal}'`);
// };
// grayRabbit.heda("heda Meow");/*call*/
// blackRabbit.heda("heda Hello");/*call*/



// let empty = {};
// console.log(empty.toString);
// console.log(empty.toString());
// console.log(Object.getPrototypeOf({}) == Object.prototype);
// console.log(Object.getPrototypeOf([]) == Array.prototype);
// console.log(Object.getPrototypeOf(Math.max) == Function.prototype);

// function cat(name){
//     this.name = name;
// }
// cat.prototype.speak = function(){
//     console.log( `${this.name} says meow.`);
// };
// let fluffy = new cat(`fluffy`);
// fluffy.speak();


// function sayhi() {
//   console.log(this.bainchod);
// }
// let obj = {
//   bainchod: "rayed",
//   sayhi   // storing reference to function
// };
// obj.sayhi();  // now method works


// function sayhi(){
//     console.log("running");
//     return 123;
// }
// let obj = {
//     sayhi : sayhi()
// };
// console.log(obj.sayhi);


// function sayhi(){
//     let localname = "Local";
//     console.log("local variable: " + localname);
//     console.log("object property: ", this.localname);
// }
// let obj = {
//     // name : "Object",
//     localname : "Object property", 
//     sayhi
// };
// console.log(obj.name);
// obj.sayhi();


// localVariable ∈ Function
// property ∈ Object


// function sayhi(){
//     let bainchod = "rayed";
//     console.log("ei halay hoilo ekta bainchod " + this.bainchod);
// }
// sayhi();

// let obj = {
//   bainchod: "rayed",
//   sayhi() {
//     console.log("ei halay hoilo ekta bainchod " + this.bainchod);
//   }
// };

// obj.sayhi();


// function speak(line) {
//   console.log(`The ${this.type} rabbit says '${line}'`);
// }
// let whiteRabbit = {type: "white", speak};
// let hungryRabbit = {type: "hungry", speak};

// whiteRabbit.speak("Oh my fur and whiskers");
// // → The white rabbit says 'Oh my fur and whiskers'
// hungryRabbit.speak("Got any carrots?");
// // → The hungry rabbit says 'Got any carrots?'




// let person = {
//     name : "alice", 
//     sayhi(){
//         console.log(this.name /*you can also test with "this" . it will return function. "this refers person object. this.name = alice" */);
//     }
// };
// person.sayhi();


// let person = {
//     name : "Alice", 
//     greet(){
//         console.log("hello!");
//     }
// };
// person.greet();
// console.log(typeof person.greet);
// console.log(typeof person.name);
// console.log(typeof person);
// console.log(Object.keys(person));


// function characterCount(script) {
//   return script.ranges.reduce((count, [from, to]) => {
//     return count + (to - from);
//   }, 0);
// }
// let SCRIPTS = [
//   {name: "Small", ranges:[[0,10]]},   // 10 characters
//   {name: "Medium", ranges:[[0,50]]},  // 50 characters
//   {name: "Large", ranges:[[0,100]]}   // 100 characters
// ];
// console.log(SCRIPTS.reduce((a, b) => {
//   return characterCount(a) < characterCount(b) ? b : a;
// }));
// // → {name: "Han", …}



// function reduce(array, combine, start){
//   let current = start;
//   for(let element of array){
//     current = combine(current, element);
//   }
//   return current;
// }
// console.log(reduce([1,2,3,4], (a,b) => a+b, 0));


// function map(array, transform) {
//   let mapped = [];
//   for (let element of array) {
//     mapped.push(transform(element));
//   }
//   return mapped;
// }

// let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
// console.log(map(rtlScripts, function(s) {return s.name;} /* or we can write s => s.name*/));
// // → ["Adlam", "Arabic", "Imperial Aramaic", …]


// let students = [
//   { name: "Alice", passed: true },
//   { name: "Bob", passed: false },
//   { name: "Charlie", passed: true }
// ];
// let passedStudents = students.filter(student => student.passed === false /* or true*/);
// console.log(passedStudents);
// // → [ { name: 'Alice', passed: true }, { name: 'Charlie', passed: true } ]



// let numbers = [1, 2, 3, 4, 5];
// let evens = numbers.filter(n => n % 2 !== 0);
// console.log(evens);


// function noisy(f /*another function*/){
//   return (...args) => {
//     console.log("calling with", args);
//     let result = f(...args);
//     console.log("called with", args, ", returned", result);
//     return result;
//     };
// }
// noisy(Math.min)(3, 2, 1);

// function repeat(n, action){
//     for(let i = 0; i < n; i++){
//         action(i);
//     }
// }
// let labels = [];
// repeat(5, i=> {
//   labels.push(`Unit ${i + 1}`);
// });
// console.log(labels);

// function repeatlog(n){
//   for(let i = 0; i < n; i++){
//     console.log(i);
//   }
// }
// console.log(repeatlog(5));

// function reverseArray(array){
//   let i = array.length;
//   let result = [];
//   for(let j = i - 1; j >= 0; j--){
//     result.push(array[j]);
//   }
//   return result;
// }

// let myArray = ["A", "B", "C"];
// console.log(reverseArray(myArray));
// // → ["C", "B", "A"];
// console.log(myArray);
// // → ["A", "B", "C"];
// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue);
// // → [5, 4, 3, 2, 1]


// function range(start, end, step = 1){
//     let result = [];
//     if(step > 0){
//         for(let i = start; i <= end; i++){
//             result.push(i);
//         }
//     }
//     else {
//         for(let i = start; i >= end; i--){
//             result.push(i);
//         }
//     }


//     return result;
// }
// function sum(numbers){
//     let total = 0; 
//     for(let num of numbers) total += num;
//     return total;
// }
// console.log(range(1, 10));
// console.log(range(5, 2, -1));
// console.log(sum(range(1, 10)));

// json 
// let string = JSON.stringify({squirrel : false, events : ["weekend"]});
// console.log(string);
// console.log(JSON.parse(string).events);


// console.log(Math.floor(Math.random() * 10));

// function randompointoncircle(radius){
//     let angle = Math.random() * 2 * Math.PI;
//     return {x : radius * Math.cos(angle), y : radius * Math.sin(angle)};
// }
// console.log(randompointoncircle(2));

// let coordinates = { x: 3, y: 7 };
// console.log(coordinates.x);
// console.log(coordinates.y);
// console.log(typeof coordinates);
// console.log(Object.keys(coordinates));
// console.log(coordinates);
// console.log({...coordinates, y : 5, z : 1});

// let words = ["never", "fully"];
// console.log("will", ...words, "understand");

// let numbers = [5, 1 , 7];
// console.log(max(...numbers));

// function max(...numbers) {
//   let result = -Infinity;
//   for (let number of numbers) {
//     if (number > result) result = number;
//   }
//   return result;
// }
// console.log(max(4, 1, 9, -2));
// // → 9



// console.log( "    okay\n".trim());

// let kim = { name : "kim", age : 88};
// kim.age = 88;
// console.log(kim.age);
// console.log(kim.name);

// console.log([1, 2, 3, 4].reduce((a, b) => a + b));
// console.log([1, 2, 3, 4].filter(n => n % 2 == 0));
// console.log([1, 2, 3, 4].map(n => n * n));
// console.log("hello".split("").reverse().join(""));
// console.log("hello".toUpperCase());
// console.log("hello".toLowerCase());
// console.log("hello".includes("e"));
// console.log("hello".startsWith("h"));
// console.log("hello".endsWith("o"));
// console.log("hello".indexOf("e"));
// console.log("hello".lastIndexOf("l"));
// console.log("hello".slice(1,4));
// console.log("hello".replace("h", "j"));
// console.log("hello".repeat(3));


// let todolist = [];
// function remember(task){
//     todolist.push(task); /* add to the end of the array */
// }
// function gettask(){
//     return todolist.shift(); // returns the removed first item of the array
// }
// function rememberurgent(task){
//     todolist.unshift(task); // add task to the beginning of the array
// }
// remember("clean the house");
// remember("pay the bills");
// rememberurgent("feed the cat");
// console.log(todolist);
// console.log("You have to do this task : " + gettask());
// console.log("You have to do this task : " + gettask());
// console.log("You have to do this task : " + gettask());
// rememberurgent("walk the dog");
// console.log(todolist);
// console.log("You have to do this task : " + gettask());
// console.log(todolist);


// function tableFor(event, journal) {
//   let table = [0, 0, 0, 0];
//   for (let i = 0; i < journal.length; i++) {
//     let entry = journal[i], index = 0;
//     if (entry.events.includes(event)) index += 1;
//     if (entry.squirrel) index += 2;
//     table[index] += 1;
//   }
//   return table;
// }

// console.log(tableFor("pizza", JOURNAL));
// // → [76, 9, 4, 1]


// function phi(table){
//     return (table[3] * table[0] - table[2] * table[1]) / Math.sqrt((table[2] + table[3]) * (table[0] + table[1]) * (table[1] + table[3]) * (table[0] + table[2]));
// }
// console.log(phi([76, 9, 4, 1]));


// let journel = [];
// function addentry(events, squirrel){
//     journel.push({events, squirrel});
// }
// addentry(["work", "touched tree", "pizza", "running", "television"], false);
// addentry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false);
// addentry(["weekend", "cycling", "break", "peanuts", "beer"], true);
// console.log(journel);

// const score = {visitors : 0, home : 0};
// score.visitors = 1;
// console.log(score.visitors);
// // score = {visitors : 10, home : 20}; /* this is not allowed*/
// console.log(score.home);

// let object1 = {value : 10};
// let object2 = object1;
// let object3 = {value : 10};
// console.log(object1 == object2);
// object1.value = 15;
// console.log(object2.value);


// let objecta = {a : 1, b : 2};
// Object.assign(objecta, {b : 3, c : 4});
// console.log(objecta);
// console.log(typeof[objecta]);
// console.log(Object.keys(objecta));


// let anobject = { left : 1, right : 2};
// console.log(anobject.left);
// console.log(Object.keys(anobject));
// delete anobject.left;
// console.log(anobject.left);
// console.log("left" in anobject);
// console.log("right" in anobject);
// console.log(Object.keys(anobject));

// let day1 = 
// {
//     squirrel : false, 
//     events : ["work", "touched tree", "pizza", "running", "television"]
// };
// console.log(day1.squirrel);
// console.log(day1.wolf);


// let sequence = [1, 2, 3, 4];
// sequence.push(5);
// console.log(sequence);

// → [ 1, 2, 3, 4, 5 ]
// let doh = "Doh";
// console.log(doh.toUpperCase());
// console.log(doh.toLowerCase());
// console.log(doh.charAt(1));
// console.log(doh.indexOf("oh"));
// console.log(doh.slice(1,3));
// console.log(doh.replace("D", "T"));


// // Your code here.
// function countBs(a){
//   a = String(a);
//   let countB = 0;
//   let i = 0
//   while(i < a.length){
//     if(a[i] === 'B'){
//       countB++;
//     }
//     i++;
//   }
//   return countB;
// }
// function countChar(a, b){
//   a = String(a);
//   b = String(b);
//   let x = 0;
//   let countb = 0;
//   while(x < a.length){
//     if(a[x] === b) countb++;
//     x++;
//   }
//   return countb;
// }
// console.log(countBs("BOB"));
// // → 2
// console.log(countChar("kakkerlak", "k"));
// // → 4

// function isEven( a){
//     if(a % 2 == 0){
//         return true;
//     }
//     else return false;
// }
// console.log(isEven(4));

// function zeroPad(number, width){
//     let string = String(number);
//     while(string.length < width){
//         string = "0" + string;
//     }
//     return string;
// }
// function printfarminventory(cows, chickens, pig){
//     console.log(`${zeroPad(cows, 3)} Cows`);
//     console.log(`${zeroPad(chickens, 3)} Chickens`);
//     console.log(`${zeroPad(pig, 3)} Pigs`);
// }
// printfarminventory(7, 11, 3);


// function printfarminventory(cows, chickens){
//     let cowstring = String(cows);
//     while(cowstring.length < 3)
//     {
//         cowstring = "0" + cowstring;
//     }
//     console.log(`${cowstring} Cows`);

//     let chickenstring = String(chickens);
//     while(chickenstring.length < 3)
//     {
//         chickenstring = "0" + chickenstring;
//     }
//     console.log(`${chickenstring} Chickens`);
// }
// printfarminventory(7, 11);

// function findsolution(target){
//     function find(current, history){
//         if(current == target){
//             return history;
//         } else if(current > target){
//             return null;
//         }
//         else {
//             return find(current + 5,
//             `(${history} + 5)` ) ||
//             find(current * 3,
//             `(${history} * 3)` );
//         }
            
//     }
//     return find(1, "1");
// }
// console.log(findsolution(13));

// function closure( n ){
//     return m => n * m;
// }
// let result = closure(5);
// console.log(result(3));

// function multiplier(factor){
//     return number => number * factor;
// }
// let twice = multiplier(2);
// console.log(twice(5));

// function outer() {
//     let count = 0;
    
//     console.log("outer function running...");
    
//     return function(){
//         count++;
//         console.log("count =", count);
//     };
// }
// let fn = outer();
// fn();// only inner function execute kore thake 
// fn(); // only inner function executer kore thake 
// fn(); // only inner function execute kore thake

// function wrapValue(n) {
//   let local = n;
//   return () => local;
// }

// let wrap1 = wrapValue(1);
// let wrap2 = wrapValue(2);
// console.log(typeof(wrap1()));
// // → number
// console.log(typeof(wrap1));
// // → function
// console.log(typeof(wrap2()));
// // → number
// console.log(wrap1());
// console.log(wrap2());

// function rountto(n, step = 2){
//     let remainder = n % step;
//     return n - remainder + (remainder < step /2 ? 0 : step);
// }
// console.log(rountto(7, 3));

// function chicken() { return egg();}
// function egg() { return chicken();}
//  console.log(chicken() + " came first.");
// const horn = () => {
//     console.log("toot");
// }
// horn();

// const square = x => x * x;
// console.log(square(2));
// const square1 = (x) => {return x * x;};
// console.log(square1(12));
// const hummus = function(factor) {
//   const ingredient = function(amount, unit, name) {
//     let ingredientAmount = amount * factor;
//     if (ingredientAmount > 1) {
//       unit += "s";
//     }
//     console.log(`${ingredientAmount} ${unit} ${name}`);
//   };
//   ingredient(1, "can", "chickpeas");
//   ingredient(0.25, "cup", "tahini");
//   ingredient(0.25, "cup", "lemon juice");
//   ingredient(1, "clove", "garlic");
//   ingredient(2, "tablespoon", "olive oil");
//   ingredient(0.5, "teaspoon", "cumin");
// };
// let servings = Number(prompt("How many servings do you want to make? "));
// hummus(servings);
