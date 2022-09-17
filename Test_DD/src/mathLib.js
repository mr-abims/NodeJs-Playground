
function add(num1, num2){
    return num1 + num2
}

function sub(num1, num2){
    return num1 - num2
}

function mul(num1, num2){
    return num1 * num2
}

function pow(num1, num2){
    return num1 ** num2
}

function div(num1, num2){
    return num1 / num2
}

function mean(arrayNums){
    let sum = 0

    arrayNums.forEach((num)=> {
        sum = sum + num
    })

    return sum / arrayNums.length
}

module.exports = {
    add,
    sub,
    mul,
    pow,
    div,
    mean
}