
//LOOPs - FOR, WHILE, DO WHILE

console.log("---FOR---")
//FOR - initialization ; condition ; increment/decrement

for(let i=1; i <= 5 ; i++){
    console.log(i)
}


console.log("---WHILE---")
//WHILE
// initialization ;
// condition ;
// increment/decrement

let j = 1

while( j <= 5 ){
    console.log(j)
    j++
}


let num = 2

while( true ){
    
    if( num <= 5){
        num++
        console.log(num)
        break
    }
}


console.log("---DO WHILE---")
//DO WHILE
// initialization ;
// increment/decrement
// condition ;

let k = 1

do{
   
    console.log(k)
      k++
}
while(k >= 5)




//Continue

console.log("---Continue---")

for(let i=1 ; i <= 10; i++){

    if( i == 6 ){
        continue
    }
    console.log(i)
}



var arr = [10, 20, 30, 40, 50]

//FOR OF
for (const value of arr) {
    console.log(value)
}


//FOR EACH
arr.forEach(function(v){
    console.log(v)
})


let obj = {name : "John" , age : 29 , course : true}
//FOR IN

for (const value in obj) {
    // console.log(value)  
    console.log(obj[value])  
}




//DESTRUCTURE
//BASIC
var arr = [10, 20, 30]

var [a, b, c] = arr

console.log(a)
console.log(b)
console.log(c)
console.log([a, b, c])


//SKIP
var arr = [100, 200, 300, 400, 500]

var [d, e, f, , h] = arr

console.log(d)
console.log(e)
console.log([d, e, f, , h])


//REST
var arr = [100, 200, 300, 400, 500, 600, 700]

var [h , i , m , ...l] = arr

console.log(h)
console.log(i)
console.log(m)
console.log(...l)    //SPREAD
console.log([h , i , m , l])


//SWAP
var r = 10 , w = 20 ;

[r, w] = [w, r]

console.log(r)
console.log(w)



