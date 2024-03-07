// function Personmaker(name,age){
//     const person = {
//         name: name,
//         age:age,
//         talk(){
//             console.log(`Hi , my name is ${this.name}`);
//         },
//     };
//     return person;
// }
class Mammal{
    constructor(name){
        this.name = name;
        this.type = "worm-blooded";
    }
      

    eat(){
        console.log("I am eating ");
    }
}
class Dog extends Mammal{
    //child
    constructor(name){
        super(name);
    }
    bark(){
        console.log("woofff");
    }
}
class Cat extends Mammal{
    //child
    constructor(name){
        super(name);
    }
}