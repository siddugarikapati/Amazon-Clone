const imgs=document.querySelectorAll(".header-slider ul img")

const prevBut=document.querySelector(".control_prev")

const nextBut=document.querySelector(".control_next")


let n=0;
function changeSlide(){
    for (let i =0;i < imgs.length;i++) {
       imgs[i].style.display='none';
        
    }
    imgs[n].style.display='block';

}

changeSlide();

prevBut.addEventListener('click',(e)=>{
    if(n>0){
        n--;
    }
    else{
        n=imgs.length-1;
    }
    changeSlide();
})

nextBut.addEventListener('click',(e)=>{
    if(n<imgs.length-1){
        n++;
    }
    else{
        n=0;
    }
    changeSlide();
})


const scroll=document.querySelectorAll('.products');

for (const i of scroll )
{
    i.addEventListener('wheel',(e)=>{
        e.preventDefault();
        i.scrollLeft+=e.deltaY;
    })
}

