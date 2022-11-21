console.log("hello")
const totalBtn = document.getElementById("totalBtn")
const display = document.getElementById("display")

const addBtn = document.getElementById("addBtn");
const subBtn = document.getElementById("subtractBtn");
let count=0;

addBtn.addEventListener("click", () =>{
  count+=1;
  display.innerHTML=count;

});

subBtn.addEventListener("click",()=>{
  count-=1;
  display.innerHTML=count;
});


totalBtn.addEventListener("click", ()=>{
  let bill = document.getElementById("input-bill").value;
  let tip = document.getElementById("input-tip").value
  let  total = document.getElementById("per-person")
  let result =  (Number(bill)+(0.01*tip*bill))/count;
  console.log(result)
  total.innerText = result
})
