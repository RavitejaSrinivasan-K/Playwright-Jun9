
//OBJECT ORIENTED PROGRAMMING 

/**
 * In Javascript , Object is collection of key : value pair.
 *  Where each key is associated with values.
 * (Which could be a String, Number, Boolean, Array, function, even another Object).
 */


let obj1 = {
     name : "John"  , 
     age : 32 , 
     course : true , 
     abc : function(){
          console.log("Hello world")
     } , 
     xyz : {
          company : "TechM" , course : false , empId : 786
     }
}

console.log(obj1)

//DOT NOTATION
console.log(obj1.name)
console.log(obj1.age)


//BRACKET
console.log(obj1['course'])


//ADD
obj1.arr = [10, 20, 30, 40]

console.log(obj1)


//UPDATE 
obj1.name = "Ravi"
console.log(obj1)


//DELETE
delete obj1.course
console.log(obj1)


//CHAINING
console.log(obj1.xyz.course)


//Function
obj1.abc()



//OBJECT ORIENTED PROGRAMMING 

/**
 * In Javascript , Object is collection of key : value pair.
 *  Where each key is associated with values.
 * (Which could be a String, Number, Boolean, Array, function, even another Object).
 */



/**
 * In JS, OOP has 4 main pillars:
 * Object Oriented Programming System/Structure

 1.Encapsulation
      - Wrapping data + methods together inside a class.

 2.Abstraction
      - Hide internal implementation.

 3.Inheritance
      - One class inherits properties & methods from another.

 4.Polymorphism
      - Same method name, different behavior.
      1. Method OverLoading - not possible 
      2. Method OverRiding 

1.  Class is a Blue print / Template for properties and Methods.
 * ClassName - PascalCase
 * methodName, propertyName - camelCase
 
2.  Constructor
      - A constructor is a special function used to create and initialize objects.

 * This is a Keyword. Use to represent current class objects.
 * Static is a keyword. Use to store unique values.
 * Static variable, Methods. We can access using only class name, 
    without creating an Object.
 * 
 * Extends is a keyword. Use to access Parent into Child.
 * Super is a keyword. Use to access from parent objects into child class.
*/





//ENCAPSULATION

class User {    //Pascal Case

    
     constructor(name){
      this.name = name        //Global variable
      this.price = 25000
     }

     login(){    //camel Case
          console.log("Hi " , this.name , "your successfully loggedin" )
     }

     logout(name){    //local variable
          console.log("Thank you for visit" , name)
     }

     payment(){   //METHOD OVER RIDE
          console.log("Your Course fees :" , this.price )
     }

}


let p1 = new User("Balu")    //OBJECT

p1.login()
p1.logout("Vikram")         //ABSTRACTION

let p2 = new User("Ganesh")   

p2.login()









//INHERITANCE

class User2 extends User{

     static usersCount = 0

     constructor(name){
          super()
          this.userId = 0
          this.name = name
          User2.usersCount++
     }

     getUserId(){
          console.log("Total UserId :" ,this.name ,  ++this.userId)
     }

   static getUsers(){
          console.log("Your loggedIn users count : " , User2.usersCount)
     }

     
     payment(){     //METHOD OVER RIDE
          console.log(" This is Method Overriding")
     }


}

let p3 = new User2("Vikram")

p3.getUserId()   //1 
p3.getUserId()   //1 + 1 = 2
p3.getUserId()   //2 + 1 = 3    


let p4 = new User2("Prasanna")

p4.getUserId()
p4.getUserId()


let p5 = new User2("Ganesh")

User2.getUsers()

p5.login()
p5.payment()
p2.payment()

























