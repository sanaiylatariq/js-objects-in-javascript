// objects in js
// singleton
// object literals
// symbol ko phly declare kren phr usy object ka part bnany k lye with array wli brackets m within object declare kren then ust array wli brackets k andr hi locate kren within log
// const mysym = Symbol("key1")
 let mysymbol = Symbol("trademark of sunny")
 const sunny = {
    name: "sanaiyla",
    age:"25",
[mysymbol]:"trademark of sunny",
    "fullname":"sanaiyla",
    location:"multan",
    email:"sunny@gmail.com",
    isLoggedIn: false,
    lastLogInDays: ["monday", "saturday"]}
// 
// 2nd way mn apko string hi dena paray ga as it recognizes it as string
// console.log(sunny.email);
// console.log(sunny["email"]);
// console.log(sunny.fullname);
// console.log(sunny[mysymbol]);
// console.log(typeof sunny[mysymbol]);
// sunny.email = "sunny@microsoft.com"
// sunny.age = "34"
// email ya kch b overwrite ya change karny k lye equal to lga kar cahnge kren if u froze that object it will become impossible to overwrite, 
// // Object.freeze(sunny)
// sunny.age = "46"
// sunny.email = "sunny@repeated.com"
// console.log(sunny);
sunny.greetings = function (){                                           
    console.log("helllo sunny");
}
sunny.greetingstwo = function (){
    console.log(`helllo sunny, ${this.name} ,${this.age}, ${this.email}`);
}

console.log(sunny.greetings());
console.log(sunny.greetingstwo());