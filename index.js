// Your code here

function saturdayFun(def1 = "roller-skate"){
    return `This Saturday, I want to ${def1}!`
}
function mondayWork(def2 = "go to the office"){
    return `This Monday, I will ${def2}.`
}
function wrapAdjective(symbol = "*"){
    return function(def3 = "special"){
        return `You are ${symbol}${def3}${symbol}!`
    }
}
