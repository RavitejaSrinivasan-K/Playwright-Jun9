
//1 BASIC FUNCTION

function greet(){
    console.log("Hello World!")
}

greet()


function isEven(num){
    console.log(num == 3 )
}

isEven(2)
isEven(3)



//2 EXPRESSION

let a1 = function(){
    console.log('This is Expression')
}

a1()
console.log(a1())


let a2 = function(num1, num2){
    return num1 + num2
}

console.log(a2(10 , 20))




//3 ARROW 

let b1 =  () => {
    console.log("This is Arrow")
}

b1()


let b2 = (num) => {
    return num + 20
}
console.log(b2(50))


let b3 = (num) => num * 2

console.log(b3(10))




//Default

function defalt(name = "Ai Bot" ){
console.log('Hi' , name)
}

defalt()

defalt('Harish')



//HOISTING
console.log(a)
var a = 10


host()

function host(){
    console.log("This is Hoisted...")
}

host()

function host(){
    console.log("This is Updated...")
}




//4 ANONYMOUS

console.log("START")
setTimeout( function() {
    console.log("MIDDLE")
} , 1500 )        //default - 100 millie second
console.log("END")



//5 CALL BACK

function red(){
    console.log("Color : RED")
}

function blue(c){
    console.log("Find Color")
}

blue(red())



//6 IIFE - Immediate Invoked Function Expression

(function(){
    console.log('Thank you for use IIFE')
})()



//7 ASYNC








