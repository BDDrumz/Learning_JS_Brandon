// function myDisplayer(some){
//     document.getElementById("demo").innerHTML = some;
// }
// let myPromise = new Promise(function(myResolve, myReject){
//     let x = 0;
//     if(x == 0){
//         myResolve("OK");
//     }else{
//         myReject("error");
//     }
// });
// myPromise.then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
// );
// console.log(myResolve);

// // example

// myPromise = new Promise(function(myResolve, myReject){
// setTimeout(function() {myResolve("I love you !!");}, 3000);    
// });
// myPromise.then(function(value){
//     document.getElementById("demo").innerHTML = value;
// });

// // example2
// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
  
// myPromise = new Promise(function(myResolve, myReject) {
//     let req = new XMLHttpRequest();
//     req.open('GET', "mycar.html");
//     req.onload = function() {
//       if (req.status == 200) {
//         myResolve(req.response);
//       } else {
//         myReject("File not Found");
//       }
//     };
//     req.send();
//   });
  
//   myPromise.then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
//   );

//   //  Using Async
//   function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
  
//   async function myFunction() {return "Hello";}

//   myFunction().then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
//   );

