convert = () => {
    const choices = document.getElementsByTagName('input');
    if(choices[0].value==="" || !(choices[1].checked || choices[2].checked)) return;
    let temp = 0;
    if(choices[1].checked){
        // C -> F
        temp = celsiusToFahrenheit(parseFloat(choices[0].value),2);
        temp+=String.fromCharCode(176)+"F from "+ choices[0].value +String.fromCharCode(176)+"C.";
    }else{
        // F -> C
        temp = fahrenheitToCelsius(parseFloat(choices[0].value), 2);
        temp+=String.fromCharCode(176)+"C from "+ choices[0].value +String.fromCharCode(176)+"F.";
    }
    console.log(typeof document.getElementsByTagName("h4").innerHTML);
    document.getElementById("result").innerHTML = temp;
}

celsiusToFahrenheit = (x, y) => (x* 9/5 + 32).toFixed(y);

fahrenheitToCelsius = (x,y) => ((x - 32) * 5/9).toFixed(y);