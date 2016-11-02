//FontSize
(function (doc, win) {
    var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;          
      if (!clientWidth) return;
      docEl.style.fontSize =100 * (clientWidth / 1242) + 'px';
    };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
// 滚屏参数
$(function(){
    $("#fullpage").fullpage({
        verticalCentered:false,
        scrollBar:true,
        // anchors: ['home', 'about', 'introduction', 'skill', 'course', 'contact'],
        // menu:"#nav-warp",
        afterLoad:function(onchorLink,index){
            (index==1) ?  pageOne() : pageOneAfter();
            (index==2) ?  pageTwo() : pageTwoAfter();
            (index==3) ?  pageThree() : pageThreeAfter();
            (index==4) ?  pageFore() : pageForeAfter();
            (index==5) ?  pageFive() : pageFiveAfter();
            (index==6) ?  pageSix() : pageSixAfter();
        }
});
    //第一页背景轮播图
    //banner轮换
    var i = 0;
    setInterval(function(){
        i++;
        i%= $(".banner-01").length;
        $(".banner-01").eq(i).fadeIn(1500).siblings(".banner-01").fadeOut();
    }, 4000);
    //第三页数据展示轮播图
    swiperShow("pageTwoData","dataLeft","dataRight");
    function swiperShow(oClass,oLeft,oRight,oNum){
            oNum = oNum || 1;
        var mySwiper = new Swiper('.'+oClass, {
                slidesPerView: oNum,
                loop:true,
                autoplay: 3000
        });
        $('.'+oLeft).on('click', function(e){
            e.preventDefault()
            mySwiper.swipePrev()
        })
        $('.'+oRight).on('click', function(e){
            e.preventDefault()
            mySwiper.swipeNext()
        })
    }
    //第四页点击按钮切换轮播
    var $tabLi = $('.btn-box ul li');
        var $picUl = $('.content-container ul');
        var imgWidth = $('.listImg').width();
        var index = 0;
        $tabLi.click(function(){
        index = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $picUl.animate({
            marginLeft : -imgWidth*(index) + 'px'
        },300);
    });
    //第四页按钮点击样式
    $(".list-btn").each(function(i){
        $(this).click(function(){
            $(this).addClass("active").siblings().removeClass("active");
        })
    })

    // 第一页动画
    function pageOne(){
        $(".page-01 .content").addClass("LeftMove");
        // $("#page01-music").get(0).play();
    };
    function pageOneAfter(){
        $(".page-01 .content").removeClass("LeftMove");
        // $("#page01-music").get(0).pause();
    };
    //第二页动画
    function pageTwo(){
         $(".page-02 .left-top").addClass("BottomMove01");
         $(".page-02 .left-bottom").addClass("BottomMove02");
         $(".page-02 .content-right").addClass("LeftMove");
    }
    function pageTwoAfter(){
         $(".page-02 .left-top").removeClass("BottomMove01");
         $(".page-02 .left-bottom").removeClass("BottomMove02");
         $(".page-02 .content-right").removeClass("LeftMove");
    }
     //第三页动画
    function pageThree(){
         // $("#page03-music").get(0).play();
    }
    function pageThreeAfter(){
         // $("#page03-music").get(0).pause();
    }
    //第四页页动画
    function pageFore(){
         $(".page-04 .rightDD").addClass("RightMove");
         $(".page-04 .leftDD").addClass("LeftMove");
    }
    function pageForeAfter(){
        $(".page-04 .rightDD").removeClass("RightMove");
        $(".page-04 .leftDD").removeClass("LeftMove");
    }
     //第五页页动画
    function pageFive(){
        $(".ring-text").each(function(i){
            $(".text-0"+(i+1)).addClass("text-0"+(i+1)+"-show");
        });
         $(".ring-img").each(function(i){
            $(".ring-0"+(i+1)).addClass("ring-0"+(i+1)+"-show");
        });
    }
    function pageFiveAfter(){
        $(".ring-text").each(function(i){
            $(".text-0"+(i+1)).removeClass("text-0"+(i+1)+"-show");
        });
        $(".ring-img").each(function(i){
            $(".ring-0"+(i+1)).removeClass("ring-0"+(i+1)+"-show");
        });
    }
    //第六页页动画
    function pageSix(){
        $(".imgtext-list").each(function(i){
            $(".imgtext-list").eq(i).addClass("imgtext-list-0"+(i+1));
        });
    }
    function pageSixAfter(){
        $(".imgtext-list").each(function(i){
           $(".imgtext-list").eq(i).removeClass("imgtext-list-0"+(i+1));
        });
    }
})
