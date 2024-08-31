document.querySelector(".homebtn").addEventListener("click",()=>{
    location.href="index.html"
})


const gta5btn = document.getElementById("gta5btn")   //button code
const hidecont = document.getElementById("downloadcont")  //container code
const maincont = document.getElementById("maincont") //HOME MAIN CONTAINER CODE
const blackops = document.querySelector("#blackops")  //button code
const blackopscont = document.querySelector("#blackopscont") //container code
const sanbtn = document.querySelector("#gtasanbtn")  //button code
const gtasancont = document.querySelector("#gtasancont") //container code
const hitmanbtn = document.querySelector("#hitmanbtn")  //button code
const hitmancont = document.querySelector("#hitmancont") //container code
const fifabtn = document.querySelector("#fifabtn")  //button code
const fifacont = document.querySelector("#fifacont") //container code
const dogbtn = document.querySelector("#dogbtn")  //button code
const dogcont = document.querySelector("#dogcont") //container code

gta5btn.addEventListener("click",function(){

    window.scrollTo(0, 0);
    hidecont.style.display = "block"
    maincont.style.display = "none"
    document.getElementById("poster").style.display = "none";

})
blackops.addEventListener("click",function(){
    blackopscont.style.display = "block"
    maincont.style.display = "none"
    document.getElementById("poster").style.display = "none"
    window.scrollTo(0, 0);
})
gtasanbtn.addEventListener("click",function(){
    gtasancont.style.display = "block"
    maincont.style.display = "none"
    document.getElementById("poster").style.display = "none"
    window.scrollTo(0, 0);

})
hitmanbtn.addEventListener("click",function(){
    hitmancont.style.display = "block"
    maincont.style.display = "none"
    document.getElementById("poster").style.display = "none"
    window.scrollTo(0, 0);
})
fifabtn.addEventListener("click",function(){
    fifacont.style.display = "block"
    maincont.style.display = "none"
    document.getElementById("poster").style.display = "none"
    window.scrollTo(0, 0);
})
dogbtn.addEventListener("click",function(){
    dogcont.style.display = "block"
    maincont.style.display = "none"
    document.getElementById("poster").style.display = "none"
    window.scrollTo(0, 0);
})

document.querySelector("#cod_down_btn").addEventListener("click",()=>{
    document.querySelector("#cod_box").style.display="none";
    document.querySelector("#cod_conta").style.display="block";

})

document.querySelector("#gta_down_btn").addEventListener("click",()=>{
    window.open("https://drive.google.com/file/d/1EEyqA-dJgdXC_YVzC0tgyV6QpjHEepys/view")
})

document.querySelector("#gta5_down_btn").addEventListener("click",()=>{
    document.querySelector(".system").style.display="none";
    document.querySelector(".system2").style.display="block";
})
document.querySelector("#dog_down_btn").addEventListener("click",()=>{
    document.querySelector("#dog_box").style.display="none";
    document.querySelector("#dog_conta").style.display="block";
})
document.querySelector("#fifa_down_btn").addEventListener("click",()=>{
    document.querySelector("#fifa_box").style.display="none";
    document.querySelector("#fifa_conta").style.display="block";
})
document.querySelector("#hit_down_btn").addEventListener("click",()=>{
    document.querySelector("#hit_box").style.display="none";
    document.querySelector("#hit_conta").style.display="block";
})
