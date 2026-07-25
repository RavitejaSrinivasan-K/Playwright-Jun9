
//CONDITIONAL STATEMENT 
//IF, ELSE IF, ELSE , - SWITCH - (keywords - BREAK, CONTINUE)  

let marks = 101

if(marks <= 100 && marks >= 85){
    console.log("GRADE : A")
}
else if(marks <= 84 && marks >= 75 ){
    console.log("GRADE : B")
}
else if(marks <= 74 && marks >= 65){
    console.log('GRADE : C')
}
else if(marks <= 64 && marks >= 35){
    console.log("GRADE : D")
}
else{
    console.log("Fail")
}




//SWITCH

let day = 3

switch(day){

    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")  
        break  
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break    

    default :
        console.log("Happy Its WeekEnd!")  
        break  
}




//NESTED IF
let abc = 23

if(abc >= 21){
    console.log("Yes U R right")

    if(abc === '23'){
        console.log("Both same")
    }else{
        console.log("Not same")
    }
}



























