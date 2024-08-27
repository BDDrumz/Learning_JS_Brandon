// let cart = [];
// function addToCart(item){
//     cart.push(item);
//     console.log('${item.name} has been added to cart.');
// }
// function removeFromCart(itemName){
//     cart = cart.filter(item => item.name != item.Name);
//     console.log('${itemName} has been removed from cart.');
// }
// function displayCart(){
//     console.log("Shopping:");
//     cart.forEach(item => {console.log('-${item.name}: $${item.price}');
// });
// }

//Creating 2D-array
const board = [
    ["R", "N", "B", "Q", "K", "B", "N", "R"],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    ["p", "p", "p", "p", "p", "p", "p", "p"],
    ["r", "n", "b", "q", "k", "b", "n", "r"],
];
function printBoard(board) {
    board.forEach(row => console.log(row.join(" ")));
    console.log("\n");
}
printBoard(board);
board[4][4] = board[6][4];
board[6][4] = " ";
printBoard(board);
console.log("board");

