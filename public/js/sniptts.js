// let result = document.querySelector('.result');
// let strMethods = document.querySelector(".strings2");
// const thisWord = document.querySelector(".thisWord");
// const array1 = document.querySelector(".array1");
// let fisrtname = "Carlos";
// let lastname = "Marx";
// const yearOfBirth = 1978;

//  [ + ] [ + ] [ + ] [ + ] Template strings
// function calcAge(year) {
//     return 2016 - year;
// }
// result.innerHTML = `${calcAge(yearOfBirth)}`;

// // String methods

// const n = `${fisrtname} ${lastname}`;
// strMethods.innerHTML = n.startsWith('we');
// strMethods.innerHTML += n.endsWith('Car');
// strMethods.innerHTML += n.includes('a');


//  [ + ] [ + ] [ + ] [ + ] 
// This word
/* const box = {
    color: 'red',
    color2: 'blue',
    clickMe: () => {
        document.querySelector(".btn-danger").addEventListener('click', () => {
            thisWord.innerHTML = ''`${this.color} and ${this.color2}`'';
            thisWord.innerHTML = this.color; //doesn't show show the box.color property bucouse This inside aroorw functions point to the Global obs
        });
    }
};
box.clickMe(); */


//  [ + ] [ + ] [ + ] [ + ]  Array exemple
// class Person {
//     constructor(name) {
//         this.name = name;
//     }
// }


// $$$$$$$$$$$$$$$$$$$$$$$$ Section 07 - 109 - Destructuring Array
// const [ myname, myage] = ['josé Carlos Destr', 12];
// console.log(myname);



// $$$$$$$$$$$$$$$$$$$$$$$$ Section 07 - 109 - Destructuring Obj
// const belonging={
//     house: 'Michigan',
//     car: 'Bentley'
// };
// const { house, car } = belonging;
// console.log(house +  '  ' + car );



// $$$$$$$$$$$$$$$$$$$$$$$$ Section 07 - 109 - Destructuring function
// function myAgeandretirement(years){
//     let now = new Date().getFullYear();
//     let age = now - years;
//     return [age, 90 - age ]; 
// }
// const [ age, retirement ] = myAgeandretirement(1978);

// console.log(`My age is ${age} and i have ${retirement} years to retire.`);


// $$$$$$$$$$$$$$$$$$$$$$$$ - Node List to array ES5
// const lines = document.querySelectorAll('.p-3');
// const linesArr = Array.prototype.slice.call(lines);
// console.log(linesArr);
// linesArr.forEach(curr=>{
//     curr.style.backgroundColor = 'red';
// });


// $$$$$$$$$$$$$$$$$$$$$$$$ - Node List to array ES6
// const lines = document.querySelectorAll('.p-3');
// Array.from(lines).forEach(curr=>{
//     curr.style.backgroundColor = 'blue';
//     curr.style.color = 'white';
// });


// $$$$$$$$$$$$$$$$$$$$$$$$ - Node List to array ES5 - Continue Break
// const lines = document.querySelectorAll('.p-3');
// const linesArr = Array.prototype.slice.call(lines);
// for(let i=0;i<linesArr.length;i++){
//     if(linesArr[i].className === 'blue-blox'){
//         linesArr[i].style.backgroundColor = 'red';
//         break;
//     }
//     linesArr[i].style.backgroundColor = 'red';
//     linesArr[i].textContent = 'Celtas';
// }


// $$$$$$$$$$$$$$$$$$$$$$$$ - Node List to array ES6 - Continue Breakkconst lines = document.querySelectorAll('.p-3');
/* const lines = document.querySelectorAll('.p-3');
const linesArr = Array.from(lines);
for(const curr of linesArr){
    if(curr.className.included === '.blue-blox'){
        linesArr.textContent = 'eeeCeltas';
        continue;
    }
    // linesArr.style.backgroundColor = 'red';
    linesArr.textContent = 'Celtas';
}
 */


// $$$$$$$$$$$$$$$$$$$$$$$$
// Array ES5 - Cheking one element of the Array
/* const ages = [ 12, 16, 12, 17, 9, 10, 34 ];
const fullAge = ages.map(curr=>{
    console.log(curr >= 18);
});
const isfull = ages[fullAge.indexOf(true)];

console.log('This is the true ' + isfull); */


// $$$$$$$$$$$$$$$$$$$$$$$$
// Array ES6 - Cheking one element of the Array
/* const ages = [ 16, 12, 17, 9, 10, 22,  13 ];

const fullAge = ages.map(curr => curr >= 18);
console.log(fullAge);

console.log(ages.find(curr => curr >= 18));

console.log(ages.findIndex(curr => curr >= 18));

*/
// $$$$$$$$$$$$$$$$$$$$$$$$ Passing a entire Array into a function
// es5 

// const numList = (a,b,c,d)=>{
//     return a+b+c+d;
// }
// console.log(numList(23,34,66,88));
// var numArr = [23,34,66,88];
// const sum2 = numList.apply(null, numArr);
// console.log(sum2);



// $$$$$$$$$$$$$$$$$$$$$$$$ Passing a entire Array into a function
// es6 - spread operator

// const someAges = (a,b,c, d)=>{
//     return a+b+c+d;
// };
// const ages = [12,45,67, 45];

// const sum3 = someAges(...ages);
// console.log(sum3);

// const family1 = ['Sally','Mill','Kati','Carlos'];
// const family2 = ['Michael','Sick','Ministroiter','Sula'];

// const joinFamily = ['Jhon',...family2, ...family1];
// console.log(joinFamily);



// // $$$$$$$$$$$$$$$$$$$$$$$$ Spreed to acessing node elements

// const h1 = document.querySelector('h1');
// const lines = document.querySelectorAll('.p-3');
// const union = [h1, ...lines];
// Array.from(union).forEach(curr=>{
//     curr.style.color = 'blue';
// });



// // $$$$$$$$$$$$$$$$$$$$$$$$ Argumnets property es5
// function ages(){
//     console.log(arguments);
// }
// ages('love', 12, 345);


// // $$$$$$$$$$$$$$$$$$$$$$$$ Argumnets to array ES5

// function isFullAge (){
//     const argsArr = Array.prototype.slice.call(arguments);
//     argsArr.forEach(curr=>{
//         let argsArr = Array.prototype.slice.call(arguments, 1);
//         console.log(argsArr);
//         let now = new Date().getFullYear();
//         console.log((now - curr) >= 18);
//     });
// }
// isFullAge(1987, 1982, 2010, 2002, 2017);

/* const ifFullAge = (...year) => {
    console.log(...year + '  ');
    year.forEach(curr=>{
        const result = (2018 - curr ) >= 18;
        console.log(result);
        console.log(2018 - curr);
    });
};
ifFullAge(2000, 2013, 2012, 1978 );
 */



// // $$$$$$$$$$$$$$$$$$$$$$$$ // Default parameters  ES5
/* class Person{
    constructor(firstName, yearOfBirth, Lastname, cityOfBirth){
    
     Lastname === undefined ? Lastname = 'mackenzie' : Lastname = Lastname; 
     cityOfBirth === undefined ? cityOfBirth = 'lamcster' : cityOfBirth = cityOfBirth; 
       
      
      this.firstName = firstName;
      this.yearOfBirth = yearOfBirth;
      this.Lastname = Lastname;
      this.cityOfBirth = cityOfBirth;
    }
}
const jhon = new Person('jhon', 1966); */



// // $$$$$$$$$$$$$$$$$$$$$$$$  // Default parameters  ES6
/* class Person{
    constructor(firstName, yearOfBirth, Lastname = 'lancaster', cityOfBirth = 'Mosory' ){
      this.firstName = firstName;
      this.yearOfBirth = yearOfBirth;
      this.Lastname = Lastname;
      this.cityOfBirth = cityOfBirth;
    }
}
const jhon = new Person('jhon', 1966);
const mag = new Person('Magali', 1990);
 */

// // $$$$$$$$$$$$$$$$$$$$$$$$ Map
/* 
const question = new Map();
question.set('question', 'What is the best Metal Band of the World?');
question.set(1, 'Pantera');
question.set(2, 'Iron Myden');
question.set(3, 'Agnostic Front');
question.set(4, 'Headbreed');
question.set('correct', 4);
question.set(true,'Correct answear');
question.set(false,'Wrong MDF');


if(question.has(4)){
    console.log('The possible cool answear is HERE');
}

console.log(question.get('question'));
console.log(question.size);

for(let [key, value] of question.entries()){

    if(typeof(key) === 'number'){
        // console.log(`Essa é o key: ${key}, esse é o Valor: ${value}`);

         let ans = parseInt(prompt('Answer the question'));
         
        console.log(question.get(ans === question.get('correct')));
        console.log(ans); 
    }
}
 */


// // $$$$$$$$$$$$$$$$$$$$$$$$ classes 
// ES5

/* function Person(name, yearOfbirth, cityOfBirth){
    this.name = name;
    this.yearOfbirth = yearOfbirth;
    this.cityOfBirth = cityOfBirth;
}
Person.prototype.calcAge = function (){
    let now = new Date().getFullYear();
    return now - this.yearOfbirth;
}

const jose = new Person('José Carlos', 1978, 'São Paulo');

console.log(jose);
console.log(jose.calcAge()); */



// // $$$$$$$$$$$$$$$$$$$$$$$$ classes 
// ES6
/* class Person{
    constructor(name, yeasrOfBirth, cityOfBirth){
        this.name = name;
        this.yeasrOfBirth = yeasrOfBirth;
        this.cityOfBirth = cityOfBirth;
    }
    calcaAge(){
        let now = new Date().getFullYear();
        return now - this.yeasrOfBirth;
    }
    static lembrance(){
        console.log('This is the prototype');
    }
}
const maria = new Person('Maria Clorde', 1986, 'Michigan');
console.log(maria);
console.log(maria.calcaAge());
Person.lembrance();
 */



// // $$$$$$$$$$$$$$$$$$$$$$$$ Super classes es5 inheritance


/* function Person(name, yearOfbirth, cityOfBirth){
    this.name = name;
    this.yearOfbirth = yearOfbirth;
    this.cityOfBirth = cityOfBirth;
}
Person.prototype.calcAge = function (){
    let now = new Date().getFullYear();
    return now - this.yearOfbirth;
}

// Inheriting Person prototype
function Athlete(name, yearOfbirth, cityOfBirth, sport, medals){
     Person.call(this, name, yearOfbirth, cityOfBirth);
     this.sport = sport;
     this.medals = medals;
}

Athlete.prototype = Object.create(Person.prototype);

// method only for Athelete class
Athlete.prototype.wonMedals = function(){
    this.medals++;
    console.log(this.medals);
}

const carl = new Athlete('Carel Maerx', 1945, 'New Yourk', 'Taekwon-do', 10);

console.log(carl);
console.log(carl.calcAge());
console.log(carl.medals);
carl.wonMedals();
 */


 // // $$$$$$$$$$$$$$$$$$$$$$$$  inheritance super classes 
// ES6
/* class Person6{
    constructor(name, yeasrOfBirth, cityOfBirth){
        this.name = name;
        this.yeasrOfBirth = yeasrOfBirth;
        this.cityOfBirth = cityOfBirth;
    }
    calcaAge(){
        let now = new Date().getFullYear();
        return now - this.yeasrOfBirth;
    }
    static lembrance(){
        console.log('This is the prototype');
    }
}

class Athlete extends Person6{
    constructor(name, yeasrOfBirth, cityOfBirth, sport, medals){
        super(name, yeasrOfBirth, cityOfBirth);
        this.sport = sport;
        this.medals = medals;
    }
    wonMedal(){
        this.medals++;
        console.log(this.medals);
    }
}
const jose = new Athlete('José Carlos', 1978, 'Såo Paulo', 'Run', 3);
console.log(jose);
console.log(jose.calcaAge());
jose.wonMedal();
 */









// const ages = [12,45,67, 45];

// const sum3 = someAges(...ages);
// console.log(sum3);


// ---









/* const ages = [12, 1, 19, 16, 10, 7];

const isfull = ages.map(curr => { 
    return curr > 18;
});

console.log(isfull.indexOf(true));
console.log(ages[isfull.indexOf(true)]);


// Encontrar parke com mais de 1000 arvores;
console.log(ages.find(curr => curr > 18));
console.log(ages.findIndex(curr => curr > 18));
 */
// const ages = [1, 4, 56, 12, 45, 34];


// Fazer as smo das idades
// ages.forEach(curr=> sum += curr); or using rest




/*  in charge of two (2) town elements: Parks ans Streets.
3 parks and 4 streets

all parks and streets must have a name and a built year
at the end oth the year BOSS wants a final report of the folowing data:

1 - Know the tree density of each park in the town . by dividing by the total number of threes by the park area
2 - the average age of each town;s park. Calculated by adding columniated by adding up all park ages and dividing by the number of parks.
3 -  The name of the park park which have more then 1000 trees.
4 - Total and the average lemght of the totlas streets
5 - Size classification of each of the streets: tiny normal, big and huge. 
if the size is unknow the site is alwasy normal;

7  -  All this reposrt data shoul;d be printed to the console
 */