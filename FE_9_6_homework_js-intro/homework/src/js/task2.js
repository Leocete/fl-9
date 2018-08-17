let firstSide = parseFloat(prompt('Enter a length of the first side', '0'));
let secondSide = parseFloat(prompt('Enter a length of the second side', '0'));
let angleAmount = parseFloat(prompt('Enter a measure of an angle', '0'));
let totalAngles = 180;
let angleDegree = angleAmount * (Math.PI / totalAngles);

function sideCount(firstSide, secondSide, angleAmount) {
    return [firstSide, secondSide, angleAmount].every(num => num > 0)
    ? Math.sqrt(firstSide * firstSide + secondSide * secondSide - 2 * firstSide * secondSide * Math.cos(angleDegree))
    : null
  }


let thirdSide = sideCount(firstSide, secondSide, angleAmount);
let triangleSquare = firstSide*secondSide*Math.sin(angleDegree)/2;
let trianglePerimeter = firstSide + secondSide + thirdSide;

let answer = thirdSide === null
? 'Invalid Data'
: `c length: ${thirdSide.toFixed(2)}
Triangle square: ${triangleSquare.toFixed(2)}
Triangle perimeter: ${trianglePerimeter.toFixed(2)}
`;

console.log(answer);