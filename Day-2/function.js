// function to calculate the area of various shapes
function area(){
  let shape = prompt("Enter a shape:")
  if(shape === "square"){
     let l = parseInt(prompt("Enter the length of the square:"))
      return l*l;
  }
  else if(shape === "rectangle"){
      let l = parseInt(prompt("Enter the length of the rectangle:"));
      let w = parseInt(prompt("Enter the width of the rectangle:"));
      return l*w;
  }
  else if(shape === "circle"){
      let r = parseInt(prompt("Enter the radius of the circle:"));
      let p = 3.14;
      return p*r*r;
  }
  else if(shape === "triangle"){
      let w = parseInt(prompt("Enter the width of the triangle:"));
      let h = parseInt(prompt("Enter the height of the triangle:"));
      return (w*h)/2;
  }
  else{
      console.log("Please enter another shape")
  }
}
let A=area();
console.log("The area is ",A);

// /*const person = {
//   fullName: function () {
//     return this.firstName + " " + this.lastName;  

//     }
//   }
//   const person1 ={
//     firstName:"Daniel",
//     lastName: "Dior",
   
//   }
//   const person2 = {
//     firstName: "BD",
//     lastName: "Drumz"
//   }
// person.fullName.call(person1);
//   console.log(person.fullName.call(person1)); 
//   */
// //function apply: Accepts argument in array

// const person = {
//   fullName: function (city, country) {
//     return this.firstName + " " + this.lastName + ","+ city +","+ country;  

//     }
//   }
//   const person1 ={
//     firstName:"Daniel",
//     lastName: "Dior",   
//   }
// person.fullName.apply(person1, ["Buea", "Camerron"]);
// console.log(person.fullName.apply(person1, ["Buea", "Camerron"]));