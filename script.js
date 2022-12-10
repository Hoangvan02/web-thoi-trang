const slide = document.querySelectorAll(".slider-content-item")
const neXt = document.querySelector(".fa-chevron-right")
const prev = document.querySelector(".fa-chevron-left")
let index = 0;
 
neXt.addEventListener("click",function(){
    slide[index].classList.remove('active')
    index = (index + 1) % slide.length
    slide[index].classList.add('active')    
})

prev.addEventListener("click",function(){
    slide[index].classList.remove('active')
    index = (index -1 + slide.length) % slide.length
    slide[index].classList.add('active')    
})


var colors=document.querySelectorAll(".colors>img");
        for(var i =0;i<colors.length;i++){
            colors[i].onmouseover = function(e){
                e.preventDefault();
                var maining = document.querySelectorAll(".main>img")[0];
                maining.src = this.src;
            }
        }
        var maining = document.querySelectorAll(".main>img")[0];
        maining.onclick=function(){
            var lightbox = document.querySelectorAll(".lightbox")[0];
            lightbox.style.display="block";

            lightbox.getElementsByTagName("img")[0].src=this.src;
            lightbox.getElementsByTagName("div")[0].onclick=function(){
                lightbox.style.display="none";
            }
        }
        /*Hàm Mở Form*/
function moForm() {
  document.getElementById("myForm").style.display = "block";
}
/*Hàm Đóng Form*/
function dongForm() {
  document.getElementById("myForm").style.display = "none";
}
