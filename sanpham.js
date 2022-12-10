const bigImg = document.querySelector(".product-content-left-big-img img")
const smallImg = document.querySelectorAll(".product-content-left-small-img img")
smallImg.forEach(function(imgItem,x) {
    imgItem.addEventListener("click",function() {
        bigImg.src = imgItem.src
    })
})




const baoquan = document.querySelector(".baoquan")
const chitiet = document.querySelector(".chitiet")
if(baoquan) {
    baoquan.addEventListener("click",function(){
        document.querySelector(".product-content-right-bottom-content-chi-tiet").style.display = "none"
        document.querySelector(".product-content-right-bottom-content-bao-quan").style.display = "block"
    })
}
if(chitiet) {
    chitiet.addEventListener("click",function(){
        document.querySelector(".product-content-right-bottom-content-chi-tiet").style.display = "block"
        document.querySelector(".product-content-right-bottom-content-bao-quan").style.display = "none"
    })
}

const button = document.querySelector(".product-content-right-bottom-top")
if(button) {
    button.addEventListener("click",function(){
        document.querySelector(".product-content-right-bottom-content-big").classList.toggle("active")
    })
}