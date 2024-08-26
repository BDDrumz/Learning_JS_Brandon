// function myDisplayer(some){
//     document.getElementById("demo").innerHTML = some;
// }
// let myPromise = new Promise(function(myResolve, myReject){
//     let x = 10;
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

//example

let myPromise = new Promise(function(myResolve, myReject){
setTimeout(function() {myResolve("I love you !!");}, 3000);    
});
myPromise.then(function(value){
    document.getElementById("demo").innerHTML = value;
});
