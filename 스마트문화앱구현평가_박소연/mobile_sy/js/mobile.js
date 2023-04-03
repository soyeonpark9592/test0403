// const ham = document.querySelector("#button");
// const mn = document.querySelector("#menu");
// const x = document.querySelector(".x")

// ham.addEventListener("click",function(){
//     mn.style.left="0"
// }
// )

// x.addEventListener("click",function(){
//     mn.style.left="-100%"
// })

// const down = document.querySelectorAll(".down");
// const up = document.querySelectorAll(".up");
// const sub = document.querySelectorAll(".sub1");

// for (let i=0; i<down.length; i++){
//     down[i].addEventListener("click",function(){
//         sub[i].style.display="block"
//         down[i].style.display="none"
//         up[i].style.display="block"
//     })

//     up[i].addEventListener("click",function(){
//         sub[i].style.display="none"
//         up[i].style.display="none"
//         down[i].style.display="block"

//     })



// }

$(function(){
    $(".foot3 span").click(function(){
        $(this).parent().next().stop().slideToggle(800);
    });


    $(".hamburger").click(function(){
        $("#menu").animate({marginLeft:"100%"},600);
    });

    $(".x").click(function(){
        $("#menu").animate({marginLeft:0},600);
    });



    $(".function").click(function(){
        if($(this).children(".sub1").is("visible")){
            $(this).children(".sub1").stop().slideUp(500);
            $(this).children(".up").attr("src","img/arrow-down.png");

        } else {
            $(".sub1").stop().slideUp(500);
            $(".function img").attr("src","img/arrow-down.png");
            $(this).children(".sub1").stop().slideDown(500);
            $(this).children(".down").attr("src","img/arrow_up.png");
        };
    });


});


