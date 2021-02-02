// square number

const myArray = [2,3,4,5,6,7,8,9];
// const returnArray = [];
// for(let i = 0; i<myArray.length; i++){
//   let myNumber = myArray[i];
//   let mySquareNumber = myNumber * myNumber;
//   returnArray.push(mySquareNumber);
// };


const returnArray = (myArray.map( (a, index, array)=>{
  return `${a}  ${index} ${array}`;
}))
console.log (returnArray);


//find();
//filter();
//reduce();