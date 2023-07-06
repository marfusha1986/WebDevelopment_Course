function getMilk(money,costPerBottle) {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    return calcBottles(6,1.5)
    console.log("moveRight");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    return calcChange(50,1.5)
}

function calcBottles(startingMoney,costPerBottle){
    var numberOfBottles = Math.floor(startingMoney / costPerBottle);
    return numberOfBottles;
}

calcBottles(50,1.5)

function calcChange(startingMoney,costPerBottle){
    var change = startingMoney % costPerBottle;
    return change
}

console.log(getMilk(50,1.5))