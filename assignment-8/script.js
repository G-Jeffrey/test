let netScore = 0, knickScore = 0, len = 0;

function add(){
    // const tr = document.createElement("TR"), th = document.createElement("TH"), td = document.createElement("TH");
    const choices = document.getElementsByTagName('input');
    if(choices[0].value.trim()==="" || choices[1].value.trim()==="") return;
    netScore+=parseInt(choices[0].value.trim());
    knickScore+=parseInt(choices[1].value.trim());
    len++;
    const table = document.getElementById("myTable");
    const row = table.insertRow(len);
    const num = row.insertCell(0);
    const netGameScore = row.insertCell(1);
    const knickGameScore = row.insertCell(2);
    num.innerHTML = len;
    netGameScore.innerHTML = choices[0].value.trim();
    knickGameScore.innerHTML = choices[1].value.trim();
    choices[0].value="";
    choices[1].value="";
    document.getElementById("netsTotal").innerHTML=netScore;
    document.getElementById("knicksTotal").innerHTML=knickScore;
    document.getElementById("netsAverage").innerHTML=(netScore/len).toFixed(2);
    document.getElementById("knicksAverage").innerHTML=(knickScore/len).toFixed(2);
    let result;
    if(netScore>knickScore){
        result = "Nets had more points by the Knicks by " + (netScore-knickScore)+".";
    }else if(netScore<knickScore){
        result = "Knicks had more points by the Nets by " + (knickScore-netScore)+".";
    }else{
        result = "Both teams had the same score at " + netScore +".";
    }
   document.getElementById("result").innerHTML=result;
}

// let nets = [17,112,151];
// let knicks=[97,112,101];
// let largerArrAverage = largerAverage(nets,knicks);
// if(largerArrAverage==1){
//     console.log(Object.keys({nets})[0] + " has the higher average");
// }else if(largerArrAverage==-1){
//     console.log(Object.keys({knicks})[0] + " has the higher average");
// }else
//     console.log(Object.keys({nets})[0] + " and " + Object.keys({knicks})[0] + " have the same largerArrAverage.");
// function largerAverage(x,y){
//     let xSum = 0;
//     x.forEach((i) => xSum+=i);
//     xSum/=x.length;
//     let ySum = 0;
//     y.forEach((i) => ySum+=i);
//     ySum/=y.length;
//     return (xSum>ySum ? 1 : xSum<ySum ? -1 : 0);
// }