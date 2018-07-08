const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let firstline = true
let numTemps = 0

const calcColdDays = input => {
    const str = input.split(' ')
    let numColdDays = 0
    str.forEach(day => {
        if(parseInt(day,10) < 0)
            numColdDays++
    })
    return numColdDays
}

rl.on('line', input => {
    if(firstline){
        numTemps = parseInt(input,10)
        firstline = false
    }else{
        console.log(calcColdDays(input))
        rl.close()
    }
})