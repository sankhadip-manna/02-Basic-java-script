// signletion

// object literals

const mySm = Symbol("key1")


    const jsUsre = {
    name:"Sankha",
    "Full Name":"Sankhadip Manna ",
    [mySm]:"mykey1",
    age:24,
    location:"Howrah",
    email:"Sankha@gmail.com",
    Roll:true,
    lastLoginDays:["Monday","Saturday"]

}

// console.log(jsUsre.email)
// console.log(jsUsre["email"])
// console.log(jsUsre["Full Name"])
// console.log(jsUsre[mySm])

jsUsre.email = "Sankhadip@MannaGmail.com"
// Object.freeze(jsUsre)
jsUsre.email = "SankhadipManna@Gmail.com"

// console.log(jsUsre)

jsUsre.greeting = function(){
    console.log("Hello js User")
}
jsUsre.greetingTwo = function(){
    console.log(`Hello js User, ${this.name}`)
}
console.log(jsUsre.greeting())
console.log(jsUsre.greetingTwo())