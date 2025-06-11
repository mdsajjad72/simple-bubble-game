var timer = 60;
var score = 0;
var hitrn = 0;


function increaseScore(){
    score += 10;
    document.querySelector("#scorenum").textContent = score;
}


function getNewhit(){
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitnum").textContent = hitrn;
      
}



function makebuble(){
    var clutter =""

for(var i = 1; i<=168; i++){
    var rn = Math.floor(Math.random()*10)
   clutter +=`<div class="buble">${rn}</div>` ;
}

document.querySelector("#pbotom").innerHTML =clutter;

}



function runtimer(){
   var timercnt= setInterval(function (){
        if (timer > 0) {
            timer--;
            document.querySelector("#timeval").textContent = timer;
        }
       else{
        clearInterval(timercnt);
        document.querySelector("#pbotom").innerHTML=`<h1>GAME OVER</h1>`;
       }

    },1000);
}

document.querySelector("#pbotom").addEventListener("click", function(dets) {
    var clicknum = Number(dets.target.textContent);
    if(clicknum === hitrn){
        increaseScore();
        getNewhit();
        makebuble();

    }
    else{
        
        document.querySelector("#pbotom").innerHTML=`<h1>GAME OVER</h1>`;
        document.querySelector("#hitnum").innerHTML=`0`;
        
    }
});


runtimer();
makebuble();
getNewhit();



