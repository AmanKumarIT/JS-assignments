//find the area of a triangle
function area(sides){
    const [side1, side2, side3] = sides;
    const s = (side1+side2+side3) / 2;
    const _area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
    return _area;
   }


const sides=[3,3,3];
console.log(area(sides));

//find the absolute difference
function diff(a,b){
    return a > b ? a - b : b - a;
}

console.log(diff(5,2));

//Leap year
function leap(year){
    return year%4===0 ? "Its a leap year" : "Not a leap year";
}

console.log(leap(2000));

//To give sum of all elements in an array
function sumOfArray(array){
    let sum = 0;
    for (let i = 0 ; i < array.length ; i++){   
    sum += array[i];
}
return sum;
}
arr=[2,3,4];
console.log(sumOfArray(arr));

//to swap pairs of adjacent didgits of given integer of even length
function swapAdjacentDigits(numberArray) {
    const [num] = numberArray;
    const numStr = num.toString();
    if (numStr.length % 2 !== 0) {
      console.log('Please provide an integer with an even length.');
      return num;
    }
  
    const digits = numStr.split('');
    for (let i = 0; i < digits.length; i += 2) {
      const temp = digits[i];
      digits[i] = digits[i + 1];
      digits[i + 1] = temp;
    }
  
    const swappedNum = parseInt(digits.join(''), 10);
    return swappedNum;
  }
  
  const inputNumberArray = [123456];
  console.log(swapAdjacentDigits(inputNumberArray));

//To get largest even number
function largestEven(even){
    const evenNums = even.filter((num) => num%2 == 0)
    let largestNum = null;
    for (let i = 0 ; i < evenNums.length ; i++){
        const current = evenNums[i];
        if (current > largestNum) {
            largestNum = current;
        }  
    }
    return largestNum;
}

ar =[24,3,69,21,72];
console.log(largestEven(ar));

//Remove rollno.
function deleteRollNo(studentInfo) {
    delete studentInfo.rollno;
    return studentInfo;
  }

  var student = {
    name: "John Doe",
    class: "VI",
    rollno: 12
  };

  console.log(deleteRollNo(student));
