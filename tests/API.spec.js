
import {test, expect, request} from "@playwright/test";


test("GET - Request" , async ({})=>{

   const apiRequestContext = await request.newContext()

   const responce = await apiRequestContext.get("https://dummyjson.com/users")

   const body = await responce.json()
   console.log(body)

   expect(await responce.status()).toBe(200)
})  


let token 

test("POST - Request LOGIN" , async ({page})=>{

   const apiRequest = await request.newContext()

   const response = await apiRequest.post(process.env.BASE_URL + "/user/login" , {
        headers : {
            'Content-Type': 'application/json',
        } ,
        data : {
            username : process.env.USER_NAME,
            password : process.env.PASSWORD
        } 
    })

    const body = await response.json()
    console.log(body)

    token = await body.accessToken

    expect(await response.status()).toBe(200)
})



test("GET - Request Auth-User" , async ({})=>{

    const apiRequest = await request.newContext()

    const response =  await apiRequest.get(process.env.BASE_URL + "/user/me" , {
        headers : {
            "Authorization" : `Bearer ${token}`
        }
    })

    const body = await response.json()
    console.log(body)

    expect(await response.status()).toBe(200)
})



test("PUT - Request Update-User" , async ({})=>{

    const apiRequest = await request.newContext()

    const response =  await apiRequest.put(process.env.BASE_URL + "/users/2" , {
        data : {
            "firstName" : "Raviteja" , 
            "lastName" : "K"
        }
    })

    const body = await response.json()
    console.log(body)

    expect(await response.status()).toBe(200)
})




test("DELETE - Request Delete-User" , async ({})=>{

    const apiRequest = await request.newContext()

    const response =  await apiRequest.delete(process.env.BASE_URL + "/users/2" )

    const body = await response.json()
    console.log(body)

    expect(await response.status()).toBe(200)

    console.log("Successfully Deleted...")
})



















































