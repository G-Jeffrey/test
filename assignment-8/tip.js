tip = () => {
    const choices = document.getElementsByTagName('input');
    // checking if the first input not an a non empty string
    if(choices[0].value==="") return;
    let mealCost = parseFloat(choices[0].value), tip = 0;
    const tipPer = document.getElementsByTagName('select');
    // per the no if statement rule to calculate cost
    switch(true){
        case (mealCost>30 && mealCost<300):
            tip=(mealCost*tipPer[0].value).toFixed(2);
            break;
        default:
            tip=(mealCost*tipPer[1].value).toFixed(2);
            break;
    }
    document.getElementById("tip").innerHTML=tip;
    document.getElementById("total").innerHTML= (parseFloat(tip)+parseFloat(mealCost)).toFixed(2);
}