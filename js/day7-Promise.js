/*
Promise is an Object in JavaScript. 
It will perform Asynchronous Operations like API Calls, File Loading, Time Delays.

It has states :
1. Pending - Default
2. Resolve - Successful (then)
3. Reject  - Failed     (catch)
*/


let prom1 = new Promise((resolve, reject)=>{

    let payment = false

    if(payment){
        resolve("Payment is Successful")
    }else{
        reject("Due to server down")
    }
})

// console.log(prom1)

prom1.then((res)=> console.log(res))   
.catch((err) => console.log(err))
.finally(()=> console.log("This Task is Completed..."))




let prom2 = new Promise((resolve, reject)=>{

    let payment = false

    if(payment){
        resolve()
    }else{
        reject()
    }
})

prom2.then(()=> console.log("Thank you for a payment"))
.catch(()=> console.log("Sorry we did not get"))



/**
 * Async - It will make a function and return a promise
 * Await - It will pause the excution until promise is resolve or reject. 
 */


async function fetch(){
    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
           // resolve("This is Async!") 
            reject(new Error("Due to network issue"))
        }, 2000)
    })
}


// console.log(fetch())

async function display(){
    console.log("Hi ")

    try{
        const dt = await fetch()
        console.log(dt)
    }catch(er){
        console.log(er)
    }

    console.log("Bye!")
}

display()



//ALL
 await Promise.all([
 Promise.resolve("Start") , 
 Promise.reject("Middle") ,
 Promise.resolve("End")
]).then((res) => console.log(res)).catch((er)=> console.log(er))



//ALL SETTLED
await Promise.allSettled([
    Promise.resolve("Morning") , 
    Promise.reject("Afternoon")
]).then((res)=> console.log(res)).catch((er)=> console.log(er))



//RACE
//  Promise.race([
//     setTimeout(res => {console.log("First")}, 2000) , 
//      setTimeout(res => {console.log("Second")}, 1000) ,
//       setTimeout(res=> {console.log("Third")}, 3000) 
// ]).then((res)=> console.log(res))


  Promise.race([
   new Promise((res)=> setTimeout(res, 3000 , "First") ), 
     new Promise((res)=> setTimeout(res, 2000 , "Second") ) , 
      new Promise((res)=> setTimeout(res, 1000 , "Third") )
]).then((res)=> console.log(res))




































