// Signletran 

// const tinderUsre = new Object()
const tinderUsre = {}

tinderUsre.id = "123abs"
tinderUsre.name = "Kumar"
tinderUsre.isLoggedIn = false

// console.log(tinderUsre)

const RegulaUsre ={
    email:"Kumer@gmail.com",
    fullUsre:{
        Usrefullname:{
            name:"Sankha",
            lastname:"Manna"

        }
    }
}

// console.log(RegulaUsre.fullUsre.Usrefullname)

const obg1 = {1:"a", 2:"b"}
const obg2 = {3:"c", 4:"d"}
const obg4 = {5:"c", 6:"d"}
const obg5 = {7:"c", 8:"d"}  

// const obg3 = Object.assign({},obg1,obg2,obg4,obg5)
const obg3 = {...obg1,...obg2,...obg4,...obg5}
console.log(obg3)

console.log(tinderUsre)

console.log(Object.keys(tinderUsre))
console.log(Object.values(tinderUsre))
console.log(Object.entries(tinderUsre))

console.log(tinderUsre.hasOwnProperty('isLogged'))