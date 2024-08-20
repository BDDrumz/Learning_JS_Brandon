/*const person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;  

    }
  }
  const person1 ={
    firstName:"Daniel",
    lastName: "Dior",
   
  }
  const person2 = {
    firstName: "BD",
    lastName: "Drumz"
  }
person.fullName.call(person1);
  console.log(person.fullName.call(person1)); 
  */
//function apply: Accepts argument in array

const person = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + ","+ city +","+ country;  

    }
  }
  const person1 ={
    firstName:"Daniel",
    lastName: "Dior",   
  }
person.fullName.apply(person1, ["Buea", "Camerron"]);
console.log(person.fullName.apply(person1, ["Buea", "Camerron"]));