 // login button event handler
 const loginBtn = document.getElementById("login");
 loginBtn.addEventListener('click', function(){
     const loginArea = document.getElementById("login-area")
     loginArea.style.display = "none"
     const transectionArea = document.getElementById("transection-area")
     transectionArea.style.display = "block"
 })

 // deposit button event handler
 const deposit = document.getElementById("deposit")
 deposit.addEventListener("click", function(){
   
     const depositNum = getInputNum("depositAmount")

     updateSpan("currentDeposit", depositNum)
     updateSpan("currentBalance",depositNum);
     
     document.getElementById("depositAmount").value = "";
 })
     // withdraw button handler
     const withdrawbtn = document.getElementById("withdraw")
     withdrawbtn.addEventListener("click",function(){
       const withdrawNum = getInputNum("withdrawAmount")
       updateSpan("curWith", withdrawNum)
       updateSpan("currentBalance", -1 * withdrawNum)
       document.getElementById("withdrawAmount").value = ""
     })
     function getInputNum(id){
         const Amount = document.getElementById(id).value;
         const withdrawNum = parseFloat(Amount)
         return withdrawNum
     }

     function updateSpan(id,depositNum){
         const current = document.getElementById(id).innerText;
         const currentNum = parseFloat(current)
         const Balance = depositNum + currentNum;
         document.getElementById(id).innerText = Balance;

 }

 