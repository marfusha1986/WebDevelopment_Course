function isLeap(year) {

    /**************Don't change the code above****************/
    if(year % 4 === 0){
        var output = ('Leap year')
    }else if(year % 100 !== 0){
        output = ('Not leap year')
    }else if(year % 400 === 0 ){
        output = ('Leap year')
    }
    return output

    /**************Don't change the code below****************/
}

console.log(isLeap(2024))
console.log(isLeap(2000))
console.log(isLeap(1998))