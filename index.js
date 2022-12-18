const inputs = document.querySelectorAll('.angle-input');
const isTriangleBtn = document.querySelector("#is-triangle-btn")
const outputE1= document.querySelector( '#output' );
function calculateSumOfAngles(angle1, angle2, angle3) {
  const sumOfAngles= angle1 + angle2 + angle3;
  // console. log(sumOfAng1es);
  return sumOfAngles;
}
function isTriangle() {
  const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
  if(sumOfAngles === 180) {
    // console.log( "Yay, The angles form a triangle" );
    outputE1.innerText = "Yay, The angles form a triangle";
  }
  else {
    // console.log( "Oh no, The angles don't form a triangle" );
    outputE1.innerText = "Oh no, The angles don't form a triangle";
  }
}
  // console.log(inputs[0].value, inputs[1].value, inputs[2].value)

isTriangleBtn.addEventListener( "click" , isTriangle )