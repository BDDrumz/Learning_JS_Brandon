getText("fetch_info.txt");
async function getText(file) {
    let x = await fetch(file);
    let y = await x.text();
    document.getElementById("demo").innerHTML = y;
    
}