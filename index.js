window.onscroll = function(){
    console.info(document.documentElement.scrollTop);
    var gototop = document.getElementById("gototop");
    var header_bot = document.getElementById("myheader");
    var logo = document.getElementById("logo-small");
    var icon = document.getElementById("icon");
    if(document.documentElement.scrollTop > 350 || document.body.scrollTop > 350){
        gototop.style.display = "block"; 
        header_bot.style.position = "fixed";
        header_bot.style.left = 0;
        header_bot.style.right = 0;
        header_bot.style.top = 0;
        header_bot.style.zIndex = 1000;
        header_bot.style.background = "rgba(153, 187, 85, 0.85)"
        logo.style.display = "block";
        icon.style.display = "block";
    }else{
        gototop.style.display = "none";
        header_bot.style.position = "relative";
        logo.style.display = "none";
        icon.style.display = "none";
    }
}

function gotoTop(){
    var times = setInterval(function() {
        document.documentElement.scrollTop-=15;
        if(document.documentElement.scrollTop==0){
            clearInterval(times);
        }
    }, 1);
}

// var dem=1;
// changeImgs =function(){
//     var imgs = ["img2.jpg","img1.webp","img3.webp"];
//     document.getElementById('img').src = imgs[dem];
//     dem++;
//     if(dem==3){
//         dem=0;
//     }
// }
// setInterval(changeImgs, 3000);