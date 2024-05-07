// Example 1
function ladder(x) {
    let result = ''

    for(let i = 1; i <= x; i++){
        result += i
        console.log(result)
    }

    /*result += i
    console.log(result)
    result += 2
    console.log(result)
    result += 3
    console.log(result)
    result += 4
    console.log(result)
    result += 5
    console.log(result)*/
}

ladder(5)

/* 1. Create a function that can create a triangle pattern according to the height we provide
Parameters : height → triangle height*/
function triangle(height){
    let counter = 1

    for(let i = 1; i <= height; i++){
        let result = ""
        for(let j = 1; j <= i; j++){
            if(counter > 9){
                result += counter+" "
            } else {
                result += "0"+counter+" "
            }
            counter++
        }
        console.log(result)
    }
}

triangle(5)

/* 2. Create a function that can loop the number of times according to the input we provide, and will 
replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with  "FizzBuzz".
Parameters : n → total looping*/
function fizzloop(n){
    let result = ''

    for(let i = 1; i <= n; i++){
        if(i % 3 == 0 && i % 5 == 0){
            console.log("FizzBuzz")
        } else if(i % 3 == 0){
            console.log("Fizz")
        } else if(i % 5 == 0){
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}

fizzloop(15)

/*3. Create a function to calculate Body Mass Index (BMI)
Formula : BMI = weight (kg) / (height (meter))²
Parameters : weight & height*/
function bodyMassIndex(weight, height){
    let index = weight / (height ** 2)

    if(index < 18.5){
        console.log("Less weight")
    } else if(index >= 18.5 && index <= 24.9){
        console.log("Ideal")
    } else if(index >= 25.0 && index <= 29.9){
        console.log("Overweight")
    } else if(index >= 30.0 && index <= 39.9){
        console.log("Very overweight")
    } else if(index > 39.9){
        console.log("Obesity")
    }
}

bodyMassIndex(93, 1.75)

/*4. Write a function to remove all odd numbers in an array and return a new array that contains even
numbers only*/
function evenNumbers(...arr){
    let evenArr = new Array()

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            evenArr.push(arr[i])
        }
    }

    return evenArr
}

console.log(evenNumbers(1,2,3,4,5,6,7,8,9,10))

//5. Write a function to split a string and convert it into an array of words
function splitString(string){
    let resultArr = []
    let word = ""

    for(let i = 0; i < string.length; i++){
        if(string[i] == " "){
            resultArr.push(word)
            word = ''
        } else if(i == string.length-1) {
            word += string[i]
            resultArr.push(word)
        } else {
            word += string[i]
        }
    }

    return resultArr
}

console.log(splitString("Hello World"))