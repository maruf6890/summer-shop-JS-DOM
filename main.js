let total=0;
let cartItem=0;
let couponApplied=false;
if(total<=0){
document.querySelector("#parchase-button").disabled=true;
}
if(total<200)
{
document.querySelector("#cupponButton").disabled=true;   
}


// Select all products
let products = document.querySelectorAll(".product");

function checkCoupon() {
    document.querySelector("#final-price").innerText=total;
    let couponBtn = document.querySelector("#cupponButton");
    couponBtn.addEventListener("click", (evt) => {
        let inputValue = document.querySelector("#coupon-box-input").value;
        if (inputValue === "SELL200" && total >= 200) {
            // Apply coupon logic here, e.g., apply a discount
            console.log("coupon done");
            couponApplied=true;
            document.querySelector("#discount").innerText=total*0.2;
            document.querySelector("#final-price").innerText=total-total*0.2;
            document.querySelector("#cupponButton").disabled=true;  

        } else {
            
            console.log("wrong");
        }
    });
}
// Add a click event listener to each product
function addToCart(){
    products.forEach((product) => {
        product.addEventListener("click", (evt) => {
            // Create a new list item
            let list = document.createElement("li");
    
            // Log the product element
            console.dir(product);
            cartItem++;
            let itemNumber=String(cartItem);
            // Access and log the fourth child node of the product
            let productTitle =product.childNodes[3].childNodes[3];
            
            let priceText=product.childNodes[3].childNodes[5].innerText;
            let priceValue=Number(priceText.replace("tk",""));
            list.innerText=itemNumber+". "+productTitle.innerText;
            total+=priceValue;
            
            document.querySelector("#purchaseList").childNodes[1].innerText="Cart List";
            
        
            if(total>0) document.querySelector("#parchase-button").disabled=false;
            if(total>200) document.querySelector("#cupponButton").disabled=false;
            document.querySelector("#purchaseList").append(list);
            document.querySelector("#total-price").innerText=total;
            if(!couponApplied) document.querySelector("#final-price").innerText=total;
           
            checkCoupon();
        });
    }); 
}
addToCart();

document.querySelector("#goHome").addEventListener("click",(evt)=>{
total=0;
cartItem=0;
couponApplied=false;
document.querySelector("#discount").innerText="0";
document.querySelector("#total-price").innerText="0";
document.querySelector("#final-price").innerText="0";
document.querySelector("#purchaseList").innerHTML="<h2 >Cart is Empty !</h2>";
if(total<=0){
document.querySelector("#parchase-button").disabled=true;
}
if(total<200)
{
document.querySelector("#cupponButton").disabled=true;   
}
addToCart();
});
