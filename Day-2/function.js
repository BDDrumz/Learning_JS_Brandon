const person = {
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