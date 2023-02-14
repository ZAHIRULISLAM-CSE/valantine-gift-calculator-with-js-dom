document.getElementById("kitkat-buy-btn").addEventListener("click",function(){
   const kitkatQuantity= getFieldQuantityValue("kitkat-quantity");
   if(kitkatQuantity<0){
    alert("provide positive input");
    document.getElementById("kitkat-quantity").value="";
    return;
   }
   if(isNaN(kitkatQuantity)){
    alert("provide valid input");
    document.getElementById("kitkat-quantity").value="";
    return;
   }
   const kitkatPrice = totalPrice(kitkatQuantity,200);
   setPrice("chocolate",kitkatPrice);
   setTotalPrice(kitkatPrice);
   document.getElementById("kitkat-quantity").value="";
})
document.getElementById("rose-buy-btn").addEventListener("click",function(){
    const roseQuantity= getFieldQuantityValue("rose-quantity");
    if(roseQuantity<0){
        alert("provide positive input");
        document.getElementById("rose-quantity").value="";
        return;
       }
       if(isNaN(roseQuantity)){
        alert("provide valid input");
        document.getElementById("rose-quantity").value="";
        return;
       }
    const rosePrice = totalPrice(roseQuantity,100);
    setPrice("rose",rosePrice);
    setTotalPrice(rosePrice);
    document.getElementById("rose-quantity").value="";
 })
 document.getElementById("diary-buy-btn").addEventListener("click",function(){
    const diaryQuantity= getFieldQuantityValue("diary-quantity");
    if(diaryQuantity<0){
        alert("provide positive input");
        document.getElementById("diary-quantity").value="";
        return;
       }
       if(isNaN(diaryQuantity)){
        alert("provide valid input");
        document.getElementById("diary-quantity").value="";
        return;
       }
    const diaryPrice = totalPrice(diaryQuantity,100);
    setPrice("diary",diaryPrice);
    setTotalPrice(diaryPrice);
    document.getElementById("diary-quantity").value="";
 })
 document.getElementById("btn-apply").addEventListener("click",function(){
    const promoCode=document.getElementById("promo-code").value;
    currentTotal= document.getElementById("all-total").innerText;
    if(promoCode == 101){
        discount=currentTotal*0.1;
        document.getElementById("btn-apply").setAttribute("disabled",true);
    }
    document.getElementById("all-total").innerText=currentTotal-discount;
 })
 document.getElementById("btn-clear").addEventListener("click",function(){
    clear("chocolate");
    clear("rose");
    clear("diary");
    clear("total");
    clear("all-total");
    document.getElementById("promo-code").value="";
    document.getElementById("btn-apply").removeAttribute("disabled");
 })

function getFieldQuantityValue(id){
   let quantity= document.getElementById(id).value;
   quantity=parseInt(quantity);
   return quantity;
}
function totalPrice(quantity,price){
    return quantity*price;
}
function setPrice(id,itemPrice){
    let previousValue=document.getElementById(id).innerText;
    previousValue=parseFloat(previousValue);
    const newPrice=previousValue+itemPrice;
    document.getElementById(id).innerText=newPrice;
}
function setTotalPrice(singleItemPrice){
    let previousTotal=document.getElementById("total").innerText;
    previousTotal=parseFloat(previousTotal);
    const currentTotal=previousTotal+singleItemPrice;
    document.getElementById("total").innerText=currentTotal;
    document.getElementById("all-total").innerText=currentTotal;
}
function clear(id){
    document.getElementById(id).innerText="00";
}