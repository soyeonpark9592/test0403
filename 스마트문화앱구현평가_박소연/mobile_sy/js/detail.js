
const big = document.querySelector(".detail_main img");
const small = document.querySelectorAll("#small li a");

for(let i=0; i<small.length; i++) {
    small[i].addEventListener("click", function(e){
    const New= this.href;
    big.setAttribute("src",New);
    e.preventDefault();
    });
   

}

const arrow = document.querySelector(".order img")
const ck = document.querySelector(".order2")
const order = document.querySelector(".order2 img")

arrow.addEventListener("click", function(){
    ck.style.bottom="0px"
})

order.addEventListener("click", function(){
    ck.style.bottom="-1000px"
})

let price;
let amount; 

function init(){
    price = document.form.price.value;
    document.form.sum.value = parseInt(price).toLocaleString();
}

function add() {
    const hm= document.form.amount;
    const sum= document.form.sum;
    hm.value++;
    sum.value = parseInt((hm.value)*price).toLocaleString();
}

function del(){
    hm=document.form.amount;
    sum=document.form.sum;
    if(hm.value>1){
        hm.value--;
        sum.value = parseInt((hm.value)*price).toLocaleString();
    }
}