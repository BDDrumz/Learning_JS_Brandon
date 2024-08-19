
//Guessing number game
function RanNum(min, max) {
    return parseInt(Math.random()*100);
}

let rand = RanNum(1,100);
console.log("randomNumber =",rand);

let num = parseInt(prompt("enter a Random number"))
console.log(num);

if(rand == num){
    console.log("congratulations ");
}
else{
    console.log("please try again"); 
}
//external js
<script>
const PI =3.141592653589793;
PI =3.14;
console.log(PI)
</script>
