function startOpay(){    
three.addEventListener('click' , ()=>{ 
    let one = document.getElementById("one");
    let two = document.getElementById("two") ;
    let wel = document.getElementById("wel");
    let ede = document.getElementById("ede")
    let three = document.getElementById("three"); 
        let Username = "keiko" 
        let password = "chinedu"   
        if  ( one.value == Username && two.value == password) {  
            wel.style.display="none"
            dasher.style.display='block'
            ede.style.display="none"
        }
        else{
            console.log('wrong'); 
            alert('wrong password')
        }  
    })  
   let done = document.getElementById("done");
   let cliop = document.getElementById("cliop");
   let details = document.getElementById("details");
   let nai = document.getElementById("nai")
   let nais = document.getElementById("nais")
   let amount = document.getElementById("amount")
   let motor = document.getElementById("motor")
   let sec = document.getElementById("sec")
   let dasher = document.getElementById("dasher");
   let namert = document.getElementById("namert");
   let recer = document.getElementById("recer");
   let accna = document.getElementById("accna");
   let clicket = document.getElementById("clicket")
   let gover = document.getElementById("gover")
   let lucky = document.getElementById("lucky");
   let num = document.getElementById("num");
   let transert = document.getElementById("transert");
   let dater = document.getElementById("dater");
   let shoik = document.getElementById("shoik")
   let accnum =document.getElementById("accnum");
   let dateri = document.getElementById("dateri");
   let millions = document.getElementById("millions");
  lucky.addEventListener('click',()=>{
        let wel = document.getElementById("wel");
       gover.style.display="block"
       gover.style.zIndex="2222"
       dasher.style.display="none"
       wel.style.display='block'
       wel.style.zIndex='block'
  }) 


   motor.addEventListener('click',()=>{
      sec.style.display="block"
      sec.style.zIndex="212222"
      shoik.style.display="block"
      details.style.display="none"
   })
   clicket.addEventListener('click',()=>{
       sec.style.display="none";
       details.style.display="block";
   })
   cliop.addEventListener('click',()=>{ 
    let billing = true
    if (billing === true) {
        alert('Action dennied due to location terms and policy');
        details.style.display='none';
        window.location='bill.html';
    }
    else{
       details.style.display="block" 
        nai.innerHTML = amount.value 
        nais.innerHTML = amount.value
        gover.style.display="none"
        namert.innerHTML = recer.value
        accna.innerHTML =recer.value
        accnum.innerHTML =num.value
        dater.innerHTML= dateri.value
    }
   })  
   done.addEventListener("click",()=>{
      dasher.style.display="block"  
       details.style.display="none"  
    details.style.zIndex="0"
   })
   transert.addEventListener("click",()=>{
    details.style.display="block"  
    details.style.zIndex="22222"
   });
   let iam ='iam 22  years old'   
   const myname =`okechhukwu fank ${iam}`;
   console.log(myname);
}
startOpay()
