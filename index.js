//Brooklyn Tech Counter APP
let count=0
let track=0
let prev=document.getElementById("prev")
function increment() {
    document.getElementById("count-el").style.color="black"
    count++
    document.getElementById("count-el").innerHTML=count
}
function decrement() {
    if (count==0) {
        document.getElementById("count-el").innerHTML="Cant go below zero!"
        document.getElementById("count-el").style.color="darkred"
        count=0
    }
    if (count>0) {
        document.getElementById("count-el").style.color="black"
        count--
        document.getElementById("count-el").innerHTML=count
    }
}
function save() {
    track++
    if (track==1) {
        prev.innerHTML=prev.innerHTML+count
    } else {
        prev.innerHTML=prev.innerHTML+"-"+count
    }
}
