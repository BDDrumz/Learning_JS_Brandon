const person = {
    firstName:"Daniel",
    lastName: "Dior",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  // This will return "John Doe":
  person.fullName(); 
  console.log(person.fullName());