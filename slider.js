let slide =document.getElementById("slider")
let btn1 =document.getElementById("btn1")
let btn2 =document.getElementById("btn2")
let btn3 =document.getElementById("btn3")
let btn4 =document.getElementById("btn4")


btn1.onclick=function(){
    slide.style.transform = "translateX(0px)"
}
btn2.onclick=function(){
    slide.style.transform = "translateX(-100%)"
}
btn3.onclick=function(){
    slide.style.transform = "translateX(-200%)"
}
btn4.onclick=function(){
    slide.style.transform = "translateX(-300%)"
}












