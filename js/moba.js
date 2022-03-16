$(function(){
    $(window).scroll(function(){
        const curr = $(this).scrollTop();
    
        if(curr > 0){
          $("header").addClass("white")
        }else{
          $("header").removeClass("white")
        }
      })
       

    $(window).on('mousewheel',function(e){
        var wheel = e.originalEvent.wheelDelta;
        //스크롤값을 가져온다.
        if(wheel>0){
        //스크롤 올릴때
        $(".tool_bar").removeClass("down")
        } else {
        //스크롤 내릴때
        $(".tool_bar").addClass("down")
        }
        });

        $(".mo_back_btn").click(function(e){
          e.preventDefault();
      
          $(".srh_cont").removeClass("on")
        });


        var swiper = new Swiper(".moba", {
          // slidesPerView: 3,
          slidesPerView: "auto",
          // spaceBetween: 30,
          freeMode: true,
          cssMode: true,
        });

        
})//END