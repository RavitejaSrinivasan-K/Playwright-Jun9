
//STRING METHODS
//Index = 0, 1, 2, 3,...
//Length = 1, 2, 3, 4,....


var str = "JavaScript Programming"

console.log(str)

console.log(str.length - 1)  //Property


//SLICE - Starting index between (Ending index +1)

const str1 = "JavaScript Programming"
const store = str1.slice(0 , 10)   
console.log(store)

const store1 = str1.slice(-22, -11)
console.log(store1)


//SubString - Starting index between (Ending index +1)

const store2 = str1.substring(0, 10)
console.log(store2)

const store3 = str1.substring(-22, -11)
console.log(store3)



//REPLACE 
var str = "Java Selenium , JavaScript Playwright"

var s = str.replace('Java' , 'Type')
console.log(s)

//REPLACE ALL
var s = str.replaceAll('Java' , '@')
console.log(s)



//UPPER CASE
var str = "JavaScript"
var s = str.toUpperCase()
console.log(s)

//LOWER CASE
var str = "pLAYwRIGHT"
var s = str.toLowerCase()
console.log(s)



//CONCAT
var str = "Javascript"
var str2 = "Programming"
var str3 = "Language"


var s = str2.concat(str, str3)
console.log(s)

console.log(str + str2 + str3)
console.log(str,str2,str3 )



//TRIM
var str = "   JavaScript   with   Playwright   "

var s = str.trim()
console.log(s)

console.log(str.trimEnd())
console.log(str.trimStart())



//INDEX OF
var str = "JavaScript with Playwright avr"

console.log(str.indexOf("z"))

//LAST INDEX OF
console.log(str.lastIndexOf('z'))


//CHAR AT
console.log(str.charAt(-11))



//REPEAT
var str = "Javascript "
console.log(str.repeat(5))




//BOOLEAN
var str = " JavaScript with Playwright "

//Includes
console.log(str.includes("x"))

//starts with
console.log(str.startsWith('J'))

//ends with
console.log(str.endsWith('J'))



//SPLIT
var str = "Raviteja@gmail.com"

var s = str.split('')
console.log(s)


//...
var str = "JavaScript"

console.log(...str)

