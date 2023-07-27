function whosPaying(names) {

    /******Don't change the code above*******/
    var numberOfPeople = names.length;
    var person = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[person];

    return (`${randomPerson} is going to buy lunch today!`)

}
console.log(whosPaying());

