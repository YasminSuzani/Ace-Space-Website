var b1shown = false;
var b2shown=false;
var b3shown=false;
var b1=document.getElementById("button1");
var b2=document.getElementById("button2");
var b3=document.getElementById("button3");
var div1=document.getElementById("q1div");
var div2=document.getElementById("q2div");
var div3=document.getElementById("q3div");
b1.addEventListener("click",changediv1);
b2.addEventListener("click",changediv2);
b3.addEventListener("click",changediv3);
function changediv1(){
  console.log("clicked");
  if (div1.style.display === "none" || div1.style.display==="") {
    div1.style.display = "block";
    b1.innerText="Hide";
  } 
  else {
    div1.style.display = "none";
    b1.innerText="Show";
  }
}
function changediv2(){
  console.log("clicked");
  if (div2.style.display === "none" || div2.style.display==="") {
    div2.style.display = "block";
    b2.innerText="Hide";
  } 
  else {
    div2.style.display = "none";
    b2.innerText="Show";
  }
}
function changediv3(){
  console.log("clicked");
  if (div3.style.display === "none" || div3.style.display==="") {
    div3.style.display = "block";
    b3.innerText="Hide";
  } 
  else {
    div3.style.display = "none";
    b3.innerText="Show";
  }
}