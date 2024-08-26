function myDisplayer(some){
    document.getElementById("demo").innerHTML = some;
}
let myPromise = new Promise(function(myResolve, myReject){
    let x = 10;
    if(x == 0){
        myResolve("OK");
    }else{
        myReject("error");
    }
});
myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
);
console.log(myResolve);
