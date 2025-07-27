const myNormal = ["Massage","Lol","SpiderMan"]
const myheros = ["thor","Ironman","SpiderMan"]

// myNormal.push(myheros)


// console.log(myNormal)
// console.log(myNormal[3][1])

//  const myNoob= myNormal.concat(myheros)
// console.log(myNoob)


const all_new_array = [...myNormal,...myheros]
console.log(all_new_array)




const another_array =[1,2,3,[4,5,6,7],8,[5,6,[8,9]]]
const use_another_array = another_array.flat(Infinity)
console.log(use_another_array)


console.log(Array.isArray("Sankha"))
console.log(Array.from("Sankha"))
console.log(Array.from({}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))
