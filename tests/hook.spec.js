

import { test } from "@playwright/test"


test("Login" , async ()=>{
console.log("Login")
})

test("Products" , async ()=>{
console.log("Products")
})

test("AddtoCart" , async ()=>{
console.log("AddtoCart")
})

test("CheckOut" , async ()=>{
console.log("CheckOut")
})

test("Payment" , async ()=>{
console.log("Payment")
})



test.beforeAll("Browser Launch" , async ()=>{
    console.log("Browser Launch")
})


test.afterAll("Browser Close" , async ()=>{
    console.log("Browser Close")
})


test.beforeEach("Browser 1" , async ()=>{
    console.log("Browser 1")
})


test.afterEach("Browser 2" , async ()=>{
    console.log("Browser 2")
})




