$(function(){

  //body
  $(".menu , .srh_btn").click(function(e){
    e.preventDefault();
    console.log("click");

    $("body").addClass("hidden")
  });
  $(".mo_back_btn , .close").click(function(e){
    e.preventDefault();
    console.log("click");

    $("body").removeClass("hidden")
  });


  // top 버튼
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('.top_area').addClass("go_top");
            $('.quick_menu').addClass("view");
        } else {
            $('.top_area').removeClass("go_top");
            $('.quick_menu').removeClass("view");
        }
    });
    
    $(".btn_top").click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 400);
        return false;
    });



    var swiper = new Swiper(".txtSwiper", {
        direction: "vertical",
        autoplay:{delay:3000},
        loop:"true",
        speed:400,
    });


    // ~~ 슬라이더 ~~

    //메인 슬라이더
    var mswiper = new Swiper(".main_swiper", {
      /* autoplay:{delay:3000},
      loop:"true", */
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        },
      loop:"true",
      effect: "fade",
      pagination: {
        el: ".main_pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".main_btn_next",
        prevEl: " .main_btn_prev",
      },
    });

    $(".play_btn").click(function(){

      /* mswiper.autoplay.stop();
      $(this).addClass("start") */

      if($(this).hasClass('start')){ //만약에 strat라는 클래스가 있다면 재생 , 클래스 빼주기

        mswiper.autoplay.start();
        $(this).removeClass("start")

      }else{ //그렇지 않다는것... 첫클릭 상태
          mswiper.autoplay.stop();
            $(this).addClass("start")
      }
    })
    /* var mswiper = new Swiper(".main_swiper", {
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
          },
        loop:"true",
        pagination: {
          el: ".main_pagination",
          type: "progressbar",
        },
        navigation: {
          nextEl: ".main_btn_next",
          prevEl: " .main_btn_prev",
        },
      }); */

     /*  $(".play_btn").click(function(){

        if($(this).hasClass('start')){ //만약에 strat라는 클래스가 있다면 재생 , 클래스 빼주기

          mswiper.autoplay.start();
          $(this).removeClass("start")

        }else{ //그렇지 않다는것... 첫클릭 상태
            mswiper.autoplay.stop();
              $(this).addClass("start")
        }
      })
 */
      /* $(".play_btn").on('click',function(){
        mswiper.autoplay.stop();
        // return false;

        $(this).removeClass("start")
        $(this).addClass("start")
      })

      $(".start").on('click',function(){
        mswiper.autoplay.start();
        // return false;

        $(".play_btn").removeClass("start")
      }) */


      
      // 오토 진행되는 슬라이드
      var swiper = new Swiper(".auto_Swiper", {
        slidesPerView: 7,
        // spaceBetween: 10,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
          },
        loop:"true",
      });

      var swiper = new Swiper(".novel_swiper", {
        slidesPerView: 1,
        spaceBetween: 8,
        loop:"true",
        breakpoints: { //반응형 조건 속성
          320: {
            loop:"false",
            slidesPerView: 15,
            slidesPerView:2,
          },
          900: {
            loop:"false",
            slidesPerView: 15,
            slidesPerView:2,
          },
          1025: {
            slidesPerView:3,
          },
          1241: {
            slidesPerView: 4,
          },
        }
      });

      var swiper = new Swiper(".review_swiper", {
        slidesPerView: "auto",
        spaceBetween: 45,
        freeMode: true,
        pagination: {
          el: ".review_pagi",
          type: "progressbar",
        },
        navigation: {
          nextEl: ".best_btn_next",
          prevEl: ".best_btn_prev",
        },
        breakpoints: { //반응형 조건 속성
          320: {
            spaceBetween: 15,
            slidesPerView:"auto",
            freeMode: true,
            cssMode: true,

          },
          500: {
            cssMode: false,
          },
          600: {
            freeMode: false,
            slidesPerView: 1.1,
          },
          900: {
            freeMode: false,
            spaceBetween: 25,
            slidesPerView:1.1, //그렇다.. 0.1 단위도 쓸 수 있다... 그럼 옆에 쪼금 보여짐
          },
          1025: {
            slidesPerView: 3,
          },
          1241: {
            slidesPerView: 3,
          },
        }
      });

      var swiper = new Swiper(".bene_swiper", {
        slidesPerView: 1.1,
        spaceBetween: 10,
        navigation: {
          nextEl: ".bene_btn_next",
          prevEl: ".bene_btn_prev",
        },
        breakpoints: { //반응형 조건 속성
          900: {
            spaceBetween: 25,
            slidesPerView:1.1, //그렇다.. 0.1 단위도 쓸 수 있다... 그럼 옆에 쪼금 보여짐
          },
          1241: {
            slidesPerView: 3,
          },
        },
        pagination: {
          el: ".bene_pagi",
          type: "progressbar",
        },
      });

      var swiper = new Swiper(".qna_swiper", {
        slidesPerView: 1,
        spaceBetween: 18,
        loop:true,
        pagination: {
          el: ".qna_pagi",
          type: "progressbar",
        },
        navigation: {
          nextEl: ".qna_btn_next",
          prevEl: ".qna_btn_prev",
        },
        breakpoints: { //반응형 조건 속성
          320: {
            slidesPerView:2,
          spaceBetween: 15,
          },
          900: {
            slidesPerView:2.2,
          },
          1241: {
            slidesPerView: 4,
          },
        }
      });


      // gnb 메뉴 호버
      //gnb_list 마우스 오버하면 sub_menu의 높이가 아웃라인 헤이트 포함 높이만큼 늘어난다 

      /* $(".gnb_list").mouseover(function(){
        h = $(".sub_menu .wrap_box").outerHeight();
        console.log(h)
        $(".sub_menu").removeClass("on")
        $('.sub_menu').stop().animate({height:0},300)
      },function(){
        $(".sub_menu").addClass("on")
        $('.sub_menu').stop().animate({height:h},300)
      }) */

      $(".gnb_area .gnb_list").mouseover(function(){
        // h = $(".sub_menu .wrap_box").outerHeight();
        h = $(this).find(".wrap_box").outerHeight(); //개개인의 높이! 전체를 구하면 안되는게 개개인의 높이 가 다 다르니까
        console.log(h)
        
        // $(".sub_menu").addClass("on")
        /* $('.sub_menu').stop().animate({height:0},200)
        $('.sub_menu').stop().animate({height:h},200,function(){
          $('.sub_menu').css({height:'auto'})
        }) */
        
        $('.sub_menu').stop().animate({height:0},200)
        $(this).find(".sub_menu").stop().animate({height:h},200,function(){
          $(this).find(".sub_menu").css({height:'auto'}) /*  */
        })
      })

      $(".gnb_area .gnb_list").mouseleave(function(){
        $('.sub_menu').stop().animate({height:0},200)
        // $(".sub_menu").removeClass("on")
      })

      $(".gnb_area .gnb_list.not").mouseover(function(){
        $('.sub_menu').stop().animate({height:0},200)
      })

      $(".gnb_list").mouseover(function(){
        idx = $(this).index(); //내가 마우스 올린 인덱스 순서
        console.log(idx);

        $(".sub_menu").removeClass('on').eq(idx).addClass('on');
      })


      // 마이페이지

      $(".my_page").mouseover(function(){
        $(".my_page .my_list").addClass("on")
      })
      $(".my_page").mouseleave(function(){
        $(".my_page .my_list").removeClass("on")
      })

      //서치영역
      $(".srh_box").click(function(e){
        e.preventDefault();
        $(".srh_cont").addClass("on")
      })

      $(".pop_close_btn a").click(function(e){
        e.preventDefault();
        $(".srh_cont").removeClass("on")
      })

      // 코웨이 스토리 영역

      $(".cont_box .nav_area li").mouseover(function(){
        target = $(this).children('a').attr('href');
        console.log(target);

        $(".cont_box .nav_area li").removeClass("on")
        $(this).addClass("on")

        $(".img_area li").removeClass("on")
        $(target).addClass("on");
      })

      /* $(".cont_box .nav_area li").mouseover(function(){
        target = $(this).children('a').attr('href');
        console.log(target);

        if (matchMedia("screen and (min-width: 1024px)").matches){

        }else {
          $(".cont_box .nav_area li").removeClass("on")
          $(this).addClass("on")

          $(".img_area li").removeClass("on")
          $(target).addClass("on");
        }
      }) */


      //카테고리별 베스트 영역

      $(".nav_list ul li").click(function(e){
        e.preventDefault();
        target = $(this).children('a').attr('href');
        console.log(target);

        $(".nav_list ul li").removeClass("on")
        $(this).addClass("on")

        $(".sc_cate_area .list_area .wrap ul").removeClass("on")
        $(target).addClass("on");
      })

      

      
      
      //필요한 제품 선택

      $(".select_txt").click(function(){
        h = $(this).siblings("ul").find("li").outerHeight();
        cnt = $(this).siblings("ul").find("li").length; //갯수

        resultH = h*cnt;


        if($(this).siblings('ul').height() > 0){
          $(".select_box ul").stop().animate({height:0},100) //닫는 소스
        }else{
          $('.select_box ul').stop().animate({height:0},100)
          $(this).siblings("ul").stop().animate({height:resultH},300)
        }
      })


      $(".select_box label").click(function(){
        txt = $(this).text();

        $(this).parents(".select_box").find(".select_txt span").text(txt)

        $(".select_box ul").stop().animate({height:0},300)
      })

 

      //선택
      $(".water_part").click(function(){
        $(".select_wrap").removeClass('show')
        $(".select_wrap.water_box").addClass('show')
      })
      $(".air_part").click(function(){
        $(".select_wrap").removeClass('show')
        $(".select_wrap.air_box").addClass('show')
      })
      $(".mate_part").click(function(){
        $(".select_wrap").removeClass('show')
        $(".select_wrap.mate_box").addClass('show')
      })
      $(".bide_part").click(function(){
        $(".select_wrap").removeClass('show')
        $(".select_wrap.bide_box").addClass('show')
      })
      $(".water_sub1").click(function(){
        $(".select_wrap.water_box_sub2").removeClass('show')
        $(".select_wrap.water_box_sub1").addClass('show')
      })
      $(".water_sub2").click(function(){
        $(".select_wrap.water_box_sub1").removeClass('show')
        $(".select_wrap.water_box_sub2").addClass('show')
      })
      $(".air_sub1").click(function(){
        $(".select_wrap.air_box_sub2").removeClass('show')
        $(".select_wrap.air_box_sub1").addClass('show')
      })
      $(".air_sub2").click(function(){
        $(".select_wrap.air_box_sub1").removeClass('show')
        $(".select_wrap.air_box_sub2").addClass('show')
      })






/* 
      $(".select_wrap .select_txt").click(function(e){
        e.preventDefault();

        hh = $(".select_wrap .select_box ul").outerHeight();
        // console.log(hh);
        $('.select_wrap .select_box ul').stop().animate({height:0},300);
        $('.select_wrap .select_box ul').stop().animate({height:hh},300,function(){
          $('.select_wrap .select_box ul').css({height:'auto'})
        },function(){
          $('.select_wrap .select_box ul').stop().animate({height:0},300);
        });
        })

        $(".select_wrap .select_txt").click(function(e){
          e.preventDefault();
          hh = $(".select_wrap .select_box ul").outerHeight();

        }) */

        /* $(".select_box1 .select_txt").click(function(e){
        e.preventDefault();
        hh = $(".select_box1  ul").outerHeight();
        console.log(hh)

          $(".select_box1  ul").stop().animate({height:0},300)
          $(".select_box1  ul").stop().animate({height:hh},300)
            $('.select_box1  ul').css({height:'auto'})
        }) */

        /* $(".select_box1 .select_txt").click(function(e){
          e.preventDefault();

          target = $(".select_box ul li label").attr('for');
          console.log(target);
  
          $(".cont_box .nav_area li").removeClass("on")
          $(this).addClass("on")
  
          $(".img_area li").removeClass("on")
          $(target).addClass("on");
        }) */


        //베스트 리뷰 마우스 오버하면 버튼 생성
        $(".review_slide").mouseover(function(){
          $(".best_btn_next , .best_btn_prev").addClass("on")
        })
        $(".review_slide").mouseleave(function(){
          $(".best_btn_next , .best_btn_prev").removeClass("on")
        })
        



        // side_gnb
        var swiper = new Swiper(".notic_slider", {
          autoplay: {
            delay: 4000,
            disableOnInteraction: false,
            },
          loop:"true",
          pagination: {
            el: ".notic_page",
            type: "fraction",
          },
        });

        // slide_gnb 메뉴


        //side_menu 오픈
        $(".menu").click(function(e){
          e.preventDefault();
          $(".side_gnb").addClass("on")
        })
        $(".close").click(function(e){
          e.preventDefault();
          $(".side_gnb").removeClass("on")
        })




        //위에꺼
        $(".dept_title1").click(function(e){ //dept_title를 클릭하면
          e.preventDefault();

          gnbH = $(this).siblings(".sub_dept_wrap").children('.dept2_ul').outerHeight();
          console.log(gnbH)

          if($(this).siblings(".sub_dept_wrap").height() > 0){
            $(this).removeClass("on") //아이콘
            $(".sub_dept_wrap").stop().animate({height:0},300)
          }else{
            $('.dept_wrap > a').removeClass("on") //아이콘
            $(this).addClass("on")
            $(".sub_dept_wrap").stop().animate({height:0},300)
            $(this).siblings(".sub_dept_wrap").stop().animate({height:gnbH},300)
          }
        })

        //아래꺼
        $(".dept_title2").click(function(e){ //dept_title를 클릭하면
          e.preventDefault();

          gnbH = $(this).siblings(".sub_dept_wrap").children('.dept2_ul2').outerHeight();
          console.log(gnbH)

          if($(this).siblings(".sub_dept_wrap").height() > 0){
            $(this).removeClass("on") //아이콘
            $(".sub_dept_wrap").stop().animate({height:0},300)
          }else{
            $('.dept_wrap > a').removeClass("on") //아이콘
            $(this).addClass("on")
            $(".sub_dept_wrap").stop().animate({height:0},300)
            $(this).siblings(".sub_dept_wrap").stop().animate({height:gnbH},300)
          }
        })


        //패밀리 사이트
        $(".box .title").click(function(e){
          e.preventDefault();
          // console.log("Ss")
          boxH = $(this).siblings("ul").outerHeight();
          console.log(boxH)

          if($(this).siblings("ul").height() > 0){
            $(this).removeClass("open")
            $(this).siblings("ul").removeClass("on")
            $(this).siblings("ul").stop().animate({height:0},3)
          }else{
            $(this).addClass("open")
            $(this).siblings("ul").addClass("on")
            $(this).siblings("ul").stop().animate({height:0},300)
            $(this).siblings("ul").stop().animate({height:250},300)
          }
        })

        $(".box").mouseleave(function(){
          $(this).children("ul").stop().animate({height:0},3)
          $(this).children("ul").removeClass("on")
          $(this).children(".title").removeClass("open")
        })



  
        //모바일 footer
        
        $(".mo_title").click(function(e){
          e.preventDefault();

          moH = $(this).siblings(".info_box").outerHeight();
          console.log(moH)

          if($(this).siblings(".info_box").hasClass("on")){
            $(this).removeClass("on")
            $(".info_box").removeClass("on")
            $(".info_box").stop().animate({height:0},300)
          }else{
            $(this).addClass("on")
            $(".info_box").addClass("on")
            $(".info_box").stop().animate({height:146},300)
          }
        })

        //카레고리 메뉴
        $(".nav_list2 ul li").click(function(e){
          e.preventDefault();
          target = $(this).children('a').attr('href');
          console.log(target);
  
          $(".nav_list2 ul li").removeClass("on")
          $(this).addClass("on")
  
          $(".sc_cate_area .mo_list_area ul").removeClass("on")
          $(target).addClass("on");
        })


        //카테고리 리스트 메뉴
        /* $(".close_area").click(function(e){
          e.preventDefault();

          listH = $(this).siblings(".open_area").outerHeight();
          console.log(listH)

          if($(this).siblings(".open_area").hasClass("open")){
            $(this).addClass("close")
            $(".open_area").removeClass("open")
            $(".open_area").stop().animate({height:0},300)
          }else{
            $(".close_area").removeClass("close")
            $(this).addClass("close")
            $(".open_area").removeClass("open")
            $(this).siblings(".open_area").addClass("open")
            $(this).siblings(".open_area").stop().animate({height:listH},300)

            //기존 열려있던 close_area에 붙은 close 태그를 어떻게 지우지 해결
          }
        }) */

        $(".close_area").click(function(e){ //dept_title를 클릭하면
          e.preventDefault();

          listH = $(this).siblings(".open_box").children('.open_area').outerHeight();
          console.log(listH)

          if($(this).siblings(".open_box").height() > 0){
            $(this).addClass("close")
            $(".open_box").stop().animate({height:0},300)
          }else{
            $(".close_area").removeClass("close")
            $(this).addClass('close')
            $(".open_box").removeClass("open")
            $(".open_box").stop().animate({height:0},300)
            $(this).siblings(".open_box").stop().animate({height:listH},300)
          }
        })

})//END


