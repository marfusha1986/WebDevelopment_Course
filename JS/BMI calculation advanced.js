function bmiCalculator(weight,height){
    var bmi = weight / (height * height);
    if(bmi > 24.9){
        var output = (`Your BMI is ${bmi},so you are overweight.`)
    }else if(bmi > 18.5 && bmi < 24.9){
        output=(`Your BMI is ${bmi},so you have a normal weight`)
    }else if(bmi < 18.5){
        output =(`Your BMI is ${bmi}, so you are underweight`)
    }
    return output
}

bmiCalculator(65, 1.8);

