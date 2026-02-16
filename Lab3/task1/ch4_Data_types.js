/*let str = "Hello";
str.test = 5; // (*)
alert(str.test); // No*/


let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");
alert( a + b );


alert( Math.round(6.35 * 10) / 10 );


function readNumber() {
    let num;
    do {
        num = prompt("Enter a number please?", 0);
    } while ( !isFinite(num) );
    if (num === null || num === '') return null;
    return +num;
}
alert(`Read: ${readNumber()}`);


let i = 0;
while (i < 11) {
    i += 0.2;
    if (i > 9.8 && i < 10.2) alert( i );
}


function random(min, max){
    return Math.random() * (max - min) + min;
}
alert( random(1, 5) );


function randomInt(min, max){
    return Math.floor(Math.random() * (max + 1 - min) + min);
}
alert( randomInt(1, 3) );


function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}
alert( ucFirst("john") );


function checkSpam(str) {
    let lowerStr = str.toLowerCase();

    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}
alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );


function truncate(str, maxlength) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength - 1) + '…' : str;
}


function extractCurrencyValue(str) {
    return +str.slice(1);
}


let fruits = ["Apples", "Pear", "Orange"];
let shoppingCart = fruits;
shoppingCart.push("Banana");
alert( fruits.length ); // 4


let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
alert( styles.shift() );
styles.unshift("Rap", "Reggae");


let arr = ["a", "b"];
arr.push(function() {
    alert( this );
})
arr[2](); // a,b,function(){...}


function sumInput() {
    let numbers = [];
    while (true) {
        let value = prompt("A number please?", 0);
        if (value === "" || value === null || !isFinite(value)) break;
        numbers.push(+value);
    }
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}
alert( sumInput() );


function getMaxSubSum(arr) {
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        let sumFixedStart = 0;
        for (let j = i; j < arr.length; j++) {
            sumFixedStart += arr[j];
            maxSum = Math.max(maxSum, sumFixedStart);
        }
    }
    return maxSum;
}
alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100


function camelize(str) {
    return str
        .split('-')
        .map(
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join('');
}


function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); // 3,1
alert( arr ); // 5,3,8,1


function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
alert( arr ); // [3, 1]


let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
alert( arr );


function copySorted(arr) {
    return arr.slice().sort();
}
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
alert( sorted );
alert( arr );


function Calculator() {
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };
    this.calculate = function(str) {
        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2];
        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        return this.methods[op](a, b);
    };
    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}


let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let users = [ john, pete, mary ];
let names = users.map(item => item.name);
alert( names ); // John, Pete, Mary


let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };
let users = [ john, pete, mary ];
let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));
alert( usersMapped[0].id ); // 1
alert( usersMapped[0].fullName ); // John Smith


function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
}
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let arr = [ pete, john, mary ];
sortByAge(arr);
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete


function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };
let arr = [ john, pete, mary ];
alert( getAverageAge(arr) ); // 28


function unique(arr) {
    let result = [];
    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }
    return result;
}
let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
alert( unique(strings) ); // Hare, Krishna, :-O


function groupById(array) {
    return array.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})
}


function unique(arr) {
    return Array.from(new Set(arr));
}


function aclean(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        let sorted = arr[i].toLowerCase().split("").sort().join("");
        obj[sorted] = arr[i];
    }
    return Object.values(obj);
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
alert( aclean(arr) );


let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
keys.push("more");
alert(keys); // name, more


let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];
let readMap = new WeakMap();
readMap.set(messages[0], new Date(2017, 1, 1));


function sumSalaries(salaries) {
    let sum = 0;
    for (let salary of Object.values(salaries)) {
        sum += salary;
    }
    return sum; // 650
}
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
alert( sumSalaries(salaries) ); // 650


function count(obj) {
    return Object.keys(obj).length;
}


let user = {
    name: "John",
    years: 30
};
let {name, years: age, isAdmin = false} = user;
alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false


function topSalary(salaries) {
    let maxSalary = 0;
    let maxName = null;
    for(const [name, salary] of Object.entries(salaries)) {
        if (maxSalary < salary) {
            maxSalary = salary;
            maxName = name;
        }
    }
    return maxName;
}


let d1 = new Date(2012, 1, 20, 3, 12);
alert( d1 );
let d2 = new Date("2012-02-20T03:12");
alert( d2 );


function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

    return days[date.getDay()];
}
let date = new Date(2014, 0, 3); // 3 Jan 2014
alert( getWeekDay(date) ); // FR


function getLocalDay(date) {
    let day = date.getDay();
    if (day == 0) {
        day = 7;
    }
    return day;
}


function getDateAgo(date, days) {
    let dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
}
let date = new Date(2015, 0, 2);
alert( getDateAgo(date, 1) );
alert( getDateAgo(date, 2) );
alert( getDateAgo(date, 365) );


function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}
alert( getLastDayOfMonth(2012, 0) );
alert( getLastDayOfMonth(2012, 1) );
alert( getLastDayOfMonth(2013, 1) );


function getSecondsToday() {
    let d = new Date();
    return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}
alert( getSecondsToday() );


function getSecondsToTomorrow() {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
    let totalSecondsInADay = 86400;
    return totalSecondsInADay - totalSecondsToday;
}


function formatDate(date) {
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let diffMs = new Date() - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = diffSec / 60;
    let diffHour = diffMin / 60;
    year = year.toString().slice(-2);
    month = month < 10 ? '0' + month : month;
    dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    if (diffSec < 1) {
        return 'right now';
    } else if (diffMin < 1) {
        return `${diffSec} sec. ago`
    } else if (diffHour < 1) {
        return `${diffMin} min. ago`
    } else {
        return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
    }
}


let user = {
    name: "John Smith",
    age: 35
};
let user2 = JSON.parse(JSON.stringify(user));


let room = {
    number: 23
};
let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
};
room.occupiedBy = meetup;
meetup.self = meetup;
alert( JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
}));