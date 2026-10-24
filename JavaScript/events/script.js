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
    
      document.getElementById("pointer").innerText ="Pointer is over the paragraph"   

    })

document.getElementById("pointer").addEventListener("mouseout", () =>{
      document.getElementById("pointer").innerText ="Move your pointer Here"   


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



const ShowAssBT =document.getElementById("show")
const ShowAttBT =document.getElementById("show2")
const StopAssBT =document.getElementById("Stop")

const asspara = document.getElementById("deadline")
const attpara = document.getElementById("attendance")

function ShowAssingment (){
    asspara.textContent = "Your assingment deadline is approaching"
};
ShowAssBT.addEventListener("click",ShowAssingment);
ShowAttBT.addEventListener("click",()=>{
    attpara.textContent = "Please check your Attendance status";
});
 StopAssBT.addEventListener("click",()=> {


 });


 const parent = document.getElementById("outer");
 const child = document.getElementById("inner");

 parent.addEventListener("click",()=>{
    console.log("Parent Clicked");
    
 })

 child.addEventListener("click",()=>{
    console.log("chlid Clickedstener");
    
 })




