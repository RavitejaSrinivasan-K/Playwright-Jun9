// var arr = [100, 200, 300, 400]

// const val = arr.reduce(function (a , b){
//     return a + b
// }, 50)

// console.log(val)

// //50 + 100 = 100
// //100 + 200 = 300
// //300 + 300 = 600
// //600 + 400 = 1000


// //SET 
// var arr = [1, 3, 2, 4, 2, 5, 4]

// var res = [new Set(arr)]
// console.log(res)


// var arr = [1,2,3]

// var res = arr.join('-')
// console.log(res)

// var res = arr.includes(0)
// console.log(res)

// var arr = [10, 20, "Chennai", "AndhraPradesh"]

// console.log(arr.toString())
// console.log(arr.join())


// var arr = [10, 20, 30, 40, 50, 60]

// console.log(arr.slice(2, 4))  //start index , end index +1

// console.log(arr.splice(2, 2))   //start index , count of elements


// var arr = [18, 9, 1, 22, 16, 26, 15, 3, 11, 34, 96]

// // for(let i=0; i < arr.length  ; i++ ){   // 0 < 7
        
// //     if(arr[i] % 2 == 0 ){
// //         console.log("Even Nums : " , arr[i])
// //     }
// //     else if(arr[i] % 2 != 0){
// //         console.log("Odd Nums :" , arr[i])
// //     }

// // }

// let even = []
// let odd = []

// for (const element of arr) {
    
//     if(element % 2 == 0 ){
//         even.push(element)
//     }
//     else if(element % 2 != 0){
//         odd.push(element)
//     }

// }

// console.log(even)
// console.log(odd)



// var str = "Race Car"    //raCecaR

// var input = str.toLowerCase()

// var rev = input.split('').reverse().join('')

// console.log(rev == input)




var arr = [10, 21, 34, 5, 9, 11, 33, 18, 16]

var even = []
var odd = []

for(let i=0 ; i < arr.length ; i++){

    if(arr[i] % 2 === 0 ){   //10 % 2 0 == 0
        even.push(arr[i])

    }else if(arr[i] % 2 !== 0 ){
        odd.push(arr[i])
    }
}

console.log("Even :" , even)
console.log("Odd :" , odd)





var str = "Order123Number456"

const result = str.replace(/\D/g , "")

console.log(result)

const respone = str.match(/\d+/g)

console.log(respone)




const arr4 = [1,2,3,4,5,6]
const mySet = new Set(arr4) 

mySet.add( 8 )

console.log(mySet)



