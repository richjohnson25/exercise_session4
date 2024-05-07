function compute(x){
    let result = (5*x) - 10
    return result
}

function compute2(x){
    let result = (2*x) + 5
    return result
}

function hello(){
    console.log("hello")
}

console.log(compute(5))
console.log(compute2(5))

console.log(compute(5))
console.log(compute(6))
console.log(compute(10))

hello()
let result = compute(10)
console.log(result)

function test(){
    console.log("test")
}

let result2 = test()
console.log('result2 => ',result2)

const test2 = function(x){
    return x * x
}

console.log(test2(10))

let name2 = "dimas"
function sayName(){
    let i = 10
    console.log(i)

    console.log(name2)
}

sayName()

function showStand(name, master="unknown"){
    return {
        name:name,
        master:master
    }
}

console.log(showStand("Magician Red","Muhammad Abdul"))
console.log(showStand("The Fool","Iggy"))
console.log(showStand("Cheap Trick"))
console.log(showStand("","Jonathan Joestar"))

console.log(1,2,3,4,5,6,7,8,9,10)

function log2(x, y, ...z){
    console.log(x)
    console.log(y)
    console.log(z)
}

log2(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15)

function getMessage(firstName){
    function sayHello(){
        return "Hello " + firstName
    }

    function welcomeMessage(){
        return "Welcome to Purwadhika"
    }

    return sayHello() + " " + welcomeMessage()
}

console.log(getMessage("Dimas"))

function factorial(x){
    if(x > 1){
        return factorial(x-1) * x
    } else {
        return 0
    }
}

console.log(factorial(5))

const palindrome = (word1) => {
    let word2 = ""
    for(let i = word1.length-1; i >= 0; i--){
        word2 += word1[i]
    }
    return word1 == word2
}

console.log(palindrome("kasur ini rusak"))
console.log(palindrome("car"))
console.log(palindrome("racecar"))