$(document).ready(function(){
    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');
    //Menu Toggler//
        burger.addEventListener('click',() => {
            nav.classList.toggle('nav-active');
    
    // Links Animate here // 
            navLinks.forEach((link,index)=>{
                if(link.style.animation){
                    link.style.animation = ''
                }
                else{
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.5}s`;
                }
                
            });    
            burger.classList.toggle('toggle');
            
        });
        
        
    }
    navSlide();


    $('#portfolio').mouseenter(function(){
        $('.text').addClass("animated slideInLeft");
    });
    $('#portfolio').mouseleave(function(){
        $('.text').removeClass("moggle");
        $('.text').addClass("moggle-exit");
    })




    navLinks.hover(function(){
        navLinks.addClass("navhover")
    });


});




