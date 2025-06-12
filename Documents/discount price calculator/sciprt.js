let priceInput = document.getElementById("price");
let discountInput = document.getElementById("discount");
let btn = document.getElementById("button");
let result =document.getElementById("result");
btn.addEventListener("click", () => {
    let price = Number(priceInput.value);
    let discount = Number(discountInput.value);
   
    if (isNaN(price) || isNaN(discount)){
        result.innerHTML = "please enter the valid numbers."
        return; 
    }
     let discountamount = (price*discount)/100;
     let finalPrice = price - discountamount;
    result.innerHTML =`this is your ${discountamount.toFixed(2)} and now final price is ${finalPrice}`;
});
