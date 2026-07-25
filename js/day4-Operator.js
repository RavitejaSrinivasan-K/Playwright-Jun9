
//1 ARITHMETIC 
var a = 20
var b = 10

var c = a + b
console.log(c)

var c = a - b
console.log(c)

var c = a * b
console.log(c)

var c = a / b
console.log(c)      //QUIOTENT

var c = a % b
console.log(c)      //REMINDER

var c = a ** b
console.log(c)      //POWER ROOT



//2 ASSINGMENT =

var a = 10
var b = 20

a = a + b          //a = 10 + 20 = 30
console.log(a)

a = a - b          //a = 30 - 20 = 10
console.log(a)

a = a * b          //a = 10 * 20 = 200
console.log(a)

a /= b             //a = 200 / 20 = 10
console.log(a)

a  %= b            //a = 10 % 20 = 10
console.log

a **= b           //a = 10 ** 20 = 100000000000000000000
console.log(a)




//3 COMPARISON

var a = 100
var b = "100"

console.log( a == b )      //It will check loosly content value

console.log( a === b )     //It will check strictly typeof value

console.log( a > b )

console.log( a >= b )

console.log( a < b )

console.log( a <= b )

console.log( a != b )

console.log( a !== b )



//4 LOGICAL

// && AND - || OR - ! NOT

var age = 23

if(age >= 18  &&  age <= 56){
    console.log("Eligible")
}else{
    console.log("Not Eligible")
}


/**   && - AND
 * true  true  = true
 * true  false = false
 * false true  = false
 * false false = false
 */


 age = 12

if(age >= 18 || age <= 56){
    console.log("Success")
}
else{
    console.log("Failure")
}



/**  || - OR
 * true  true  = true
 * true  false = true
 * false true  = true
 * false false = false
 */


let not = 1

if( !not ){
    console.log("Yes")
}
else{
    console.log("No")
}

//Undefined , Null, False = 0 (Empty Values)




//5 TERNARY ?
var x = 16

var abc = ( x == "16" ) ? true : false
console.log(abc)

var abc = ( x === "16" ) ? "Correct" : "Wrong"
console.log(abc)




//6 UNARY
//PRE INCREMENT /DECREMENT

var a = 100
console.log( ++a )


//POST INCREMENT /DECREMENT

var b = 200
console.log( b-- )
console.log(b)


