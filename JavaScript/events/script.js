function ShowAlert(){
    alert("click me using html");

}
document.getElementById("clickbutton").addEventListener("click" ,ShowAlert2)

function ShowAlert2(){
    alert("click me using JS");

}
document.getElementById("box").addEventListener("click",() => {
    document.getElementById("box").innerText ="The box Was Clicked"
})

document.getElementById("pointer").addEventListener("mouseover" , () =>{
    document.getElementById("pointer").addEventListener("mouseout", () =>{
      document.getElementById("pointer").innerText ="Pointer is over the paragraph"   

    })
})

document.getElementById("multi").addEventListener("mousedown" ,()=>{
    document.getElementById("multi").innerText ="Mouse button pressed!" 
})
document.getElementById("multi").addEventListener("mouseup" ,()=>{
    document.getElementById("multi").innerText ="Mouse button released!"
})

document.getElementById("nameSubmit").addEventListener('click' , ()=>{
    console.log(document.getElementById("fullname").addEventListener("keydown").value.trim());
    
})
