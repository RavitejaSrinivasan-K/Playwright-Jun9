

import {test } from "@playwright/test"


test.describe.parallel("Grouping 1" , async ()=>{
    
test("Login Valid" , async ()=>{
    console.log("VALID")
})

test("Login InValid" , async ()=>{
    console.log("INVALID")
})

test("Login Empty" , async ()=>{
    console.log("EMPTY")
})


})




test.describe("Grouping 2" , async ()=>{
    
    
test("Logout Valid" , async ()=>{
    console.log("VALID")
})

test("Logout InValid" , async ()=>{
    console.log("INVALID")
})

test("Logout Empty" , async ()=>{
    console.log("EMPTY")
})


})












