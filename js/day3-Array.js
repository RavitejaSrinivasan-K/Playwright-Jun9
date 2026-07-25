
//ARRAY METHOD 

var arr = [10, "javascript" , true, [101,"playwright", false]]

console.log(arr)
console.log(arr[0])
console.log(arr[1])
console.log(arr[3])
console.log(arr[3][2])

console.log(arr.length)


//1 PUSH

var arr = [10, 20, 30, 40]

arr.push(500, "john" , true)
console.log(arr)


//2 POP
arr.pop()
console.log(arr)


//3 SHIFT
var arr = [10, 20, 30, 40, 50]

arr.shift()
console.log(arr)


//4 UNSHIFT  - [20, 30, 40, 50]
arr.unshift([101, 202, 303])
console.log(arr)


//5 REVERSE
var arr = [101, "Playground" , false]

arr.reverse()
console.log(arr)


//6 CONCAT
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6] 
const arr3 = [7, 8, 9]

const a = arr1.concat(arr2 + arr3)
console.log(a)



//7 JOIN 
var arr = [101, 202, 303, 404]

var a1 = arr.join(' ')
console.log(a1)



//8 SLICE - Starting index between (Ending index +1)
var arr = [100, 200, 300, 400, 500, 600, 700]

var a1 = arr.slice(2, 5)
console.log(a1)



//9 SPLICE - Starting index, Delete Count, ...Values

var arr = [10, 20, 30, 40, 50, 60, 70]

//Remove
arr.splice(2, 4)
console.log(arr)

//Add
arr.splice(2, 0, 101, "Javascript" , true)
console.log(arr)

//Update
arr.splice(4, 2, "Array" , "String")
console.log(arr)




//10 FOR EACH

var arr = [10, "Java", true , "JavaScript" , false, 20]

arr.forEach( function(z, i, a){
    console.log( z )
} )



//11 VALUES

var arr = [10, "Java", true , "JavaScript" , false, 20]

var s = arr.values()

for (let ele of s) {
    console.log(ele)
}



//12 TO STRING
var arr = [10, "javascript" , false]
var s = arr.toString()
console.log(s)



//13 MAP - Transformatter
var arr = [4, 9, 16, 25, 36.786, 'javascript', true]

var s = arr.map(Math.sqrt)
console.log(s)


var s = arr.map(function(v , i , a){
    return v - 2
})
console.log(s)




//14 FILTER
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

var s = arr.filter(function (v){
    return v % 2 != 0
})
console.log(s)




//15 REDUCE
var arr = [10, 20, 30, 40, 50]

var s = arr.reduce(function(num1, num2){
    return num1 + num2
})

console.log(s)

//num1 0 + num2 10 = 10
//num1 10 + num2 20 = 30
//num1 30 + num2 30 = 60
//num1 60 + num2 40 = 100




//16 SORT

var arr = [11, 9, 12, 55, 98, 21, 32, 11]

//ASC
var asc = arr.sort(function (a , b){
    return a - b
})
console.log(asc)

//  (low to high) +  0  - (low to high)

//a 11 - b 9 = 2 (swap)
//a 11 - b 12 = -1 (no swap)
//a 11 - b 55 = -46 (no swap)
//a 11 - b 98 - -87 (no swap)
//a 11 - b 21 - -10 (no swap)
//a 11 - b 32 = -21 (no swap)
//a 11 - b 11 = 0 (no swap)

//a 9 - b 11 = -2 (no swap)

var desc = arr.sort(function (a , b){
    return b - a
})
console.log(desc)



var arr = ['Chennai' , "caddalore" , 'Bangalore' , 'anathapur' , 'Andrapadesh']

var s = arr.sort()
console.log(s)

