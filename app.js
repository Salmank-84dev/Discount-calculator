let amountinput = document.getElementById("billAmount");
let tipamountinput = document.getElementById("tipPercent");
let btn = document.getElementById("calculateBtn");


btn.addEventListener("click", () => {
let amount = Number(amountinput.value) 
let tipamount = Number(tipamountinput.value)
let tipresult = (amount*tipamount)/100;
document.body.innerHTML = `this is your ${tipresult.toFixed(2)} tip amount`
if(!amountinput.value || !tipamountinput.value){
    alert ("please fill out both fields")
}
});