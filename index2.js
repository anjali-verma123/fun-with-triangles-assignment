var sidesOfTriangle = document.querySelectorAll(".side-input");
//var sideB = document.querySelector("#side-b");
var checkHypotenuseButton = document.querySelector("#check-hypotenuse-btn");
var outputEl = document.querySelector("#final-ans")

checkHypotenuseButton.addEventListener("click", calculateHypotenuse);

function sumOfSquare(S1,S2){
    var s1Sqre = S1*S1;
    var s2Sqre = S2*S2;
    var fSum = s1Sqre + s2Sqre;
    return fSum;
}


function calculateHypotenuse(){
    var fSum = sumOfSquare(Number(sidesOfTriangle[0].value),Number(sidesOfTriangle[1].value));
    //console.log(fSum);
    var fAns = Math.sqrt(fSum);
    //var fAns2 = Math.trunc(fAns);

    outputEl.innerText="The Length of Hypotenuse is " + fAns;
}