$(function(){
    $("#result").fadeOut();
    $("#result2").fadeOut();
    $("#result3").fadeOut();
    $('#form').submit(function (evt) {
        evt.preventDefault();
    });
});
function compare(){
    var c = document.getElementsByTagName('input');
    var b = false
    for (i = 0; i < c.length; i++) {
        if(c[i].value.trim()==="") b = true;
    }
    if(b===false){
        if(c[0].value===c[3].value) c[3].value+="(2)";
        var bmi1 = (c[2].value/c[1].value**2).toFixed(4), bmi2 = (c[5].value/c[4].value**2).toFixed(4);
        var outcome;
        if(bmi1>bmi2){
            outcome="<p>"+c[0].value+"'s BMI is higher than <b>"+c[3].value+" by "+ (bmi1-bmi2).toFixed(8)+"</b>.</p>";
        }else if(bmi1<bmi2){
            outcome="<p>"+c[3].value+"'s BMI is higher than <b>"+c[0].value+" by "+ (bmi2-bmi1).toFixed(8)+"</b>.</p>";
        }else{
            outcome="<p>Both "+c[0].value+" and "+c[3].value+" have the same <b>BMI at "+ bmi1+"</b>.</p>";
        }
        $(function(){
            $("#result").fadeIn(400);
            $("#result2").fadeIn(400);
            $("#result3").fadeIn(600);
            document.getElementById("result").innerHTML=("<p>"+c[0].value+" weights "+ c[2].value + " kg and is " + c[1].value + " m tall.  <b>"+c[0].value+"'s BMI is " + (bmi1) +"</b>.</p>");
            document.getElementById("result2").innerHTML=("<p>"+c[3].value+" weights "+ c[5].value + " kg and is " + c[4].value + " m tall. <b>"+c[3].value+"'s BMI is " + (bmi2) +"</b>.</p>");
            document.getElementById("result3").innerHTML=outcome;
        });
    }
}