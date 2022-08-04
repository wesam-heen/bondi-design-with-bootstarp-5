
let navLink=document.querySelectorAll('.nav-link');

navLink.forEach(e=>{
    e.addEventListener('click',function(){
        navLink.forEach(e=>e.classList.remove('active'))
        this.classList.add('active')
    })
})

$(document).ready(()=>{
    $('.our-work ul li').click(function(){
        $('.our-work ul li').removeClass('active');
        $(this).addClass('active rounded-pill');
        if($(this).text()==='All'){
            $('.our-work .box').fadeIn()
        }else{
            $('.our-work .box').fadeOut();
            $('.'+$(this).text()).fadeIn();   
        }
    })
    
    $(window).scroll(function(){
        if($(this).scrollTop() > $('.our-work').offset().top){
            $('.our-work .box').fadeIn(500)
        }else{
            $('.our-work .box').fadeOut()
        }
        
      
    })
})