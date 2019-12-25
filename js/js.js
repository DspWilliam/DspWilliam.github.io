// 改样式用
$(document).ready(function () {
    $("img[alt='箭头']").css("margin-left","4px");
});

// 做动画
$(document).ready(function () {
    //头部语言按钮部分
    $(".headerRight button").click(function () {
        $(".headerRight ul").toggle();
    });
    $(".headerRight ul li").mouseover(function () {
        $(this).stop();
        $(this).animate({backgroundColor:'#000'},300);
    });
    $(".headerRight ul li").mouseout(function () {
        $(this).stop();
        $(this).animate({backgroundColor:'#70c745'},100);
    })

    //导航栏部分
    $(".nav .clearfix li a.beWhite").hover(
        function () {
        $(this).stop(true,true);
        $(this).animate({color:'#70c745'});
        },
        function () {
            $(this).animate({color: '#fff'});
            $(this).stop(false, true);
        });

    $(".nav .downMenu li a").hover(
        function () {
            $(this).stop(true,true);
            $(this).animate({color:'#70c745'});
        },
        function () {
            $(this).animate({color: '#000'});
            $(this).stop(false, true);
        });
    $(".nav .parents").hover(
        function () {
            $(".nav .downMenu").fadeIn(600);
        },
        function () {
            $(".nav .downMenu").fadeOut(300);
        });
    $(".downShop").hover(
        function () {
            $(".shopDown").fadeIn(600);
        },
        function () {
            $(".shopDown").fadeOut(300);
        });
    $(".downPortfolio").hover(
        function () {
            $(".portfolioDown").fadeIn(600);
        },
        function () {
            $(".portfolioDown").fadeOut(300);
        });
    $(".downBlog").hover(
        function () {
            $(".blogDown").fadeIn(600);
        },
        function () {
            $(".blogDown").fadeOut(300);
        });
});

    //按钮变色
$(document).ready(function () {
    $(".acBtn").hover(
        function () {
            $(this).animate({backgroundColor :"rgba(0,0,0,0)" ,color : "#70c745"})
        },
        function () {
            $(this).animate({backgroundColor :"#70c745" ,color : "#fff"})
        }
    )
})

/*****************
    * 轮播部分*
 ****************/
$(document).ready(function () {
    var container = $("#lunboContainer");
    var timer = setInterval(move,3000);
    function move() {
        if (parseInt(container.css("marginLeft")) <= -2880) {
            container.css("marginLeft",0);
            move();
        } else {
            container.animate({marginLeft:"-=1440px"},1000)
        }
    }
    move();
});


/****************
    part4图片部分
 ****************/
$(document).ready(function () {
    $("#part4 button").hover(
        function () {
            $(this).animate({color : '#70c745'}, 300)
        },
        function () {
            $(this).animate({color : '#707070'}, 300)
        }
    );
    $("#part4 .imgBlock").hover(
        function () {
            $(this).siblings('.fontCover').css("zIndex","2").fadeIn(600).parent(".imgContainer").animate({top : "-20px"});
        }
    );
    $("#part4 .fontCover").mouseleave(
        function () {
            $(this).stop();
            $(this).fadeOut().parent('.imgContainer').animate({top : "0"});
        }
    )
});


/***************
    植物售价部分
 ***************/
$(document).ready(function () {
    $("#part5 .bar").css("display","none");
    $("#part5 .imgContainer").hover(
        function () {
            $(this).css({boxShadow:'1px 1px 40px'}).find(".bar").fadeIn();
        },
        function () {
            $(this).find(".bar").stop(false,true,true)
            $(this).css({boxShadow: 'none'}).find(".bar").fadeOut();
        }
    );
    $("#part5 .intro p").hover(
        function () {
            $(this).animate({color : "#70c745"})
    },
        function () {
            $(this).stop(false,true,true)
            $(this).animate({color : "#707070"},200)
        }
    );
    $("#part5 .bar a").hover(
        function () {
            $(this).animate({backgroundColor:"rgba(112,199,69,0.9)"})
        },
        function () {
            $(this).animate({backgroundColor:"rgba(0,0,0,0.9)"})
        }
    )
});

/***************
    part6部分
 ***************/
$(document).ready(function () {
    $("#part6 .pic").hover(
        function () {
            $(this).siblings(".text").find('h5').animate({color:'#70c745'})
        },
        function () {
            $(this).siblings(".text").find('h5').animate({color:'#303030'})
        }
    );
    $("#part6 .text h5").hover(
        function () {
            $(this).stop(false,true,true);
            $(this).animate({color:'#70c745'})
        },
        function () {
            $(this).animate({color:'#303030'})
        }
    )
    $("#part6 .text a").hover(
        function () {
            $(this).animate({color:'#70c745'})
        },
        function () {
            $(this).stop(false,true,true);
            $(this).animate({color:'#b7b7b7'},200)
        }
    )
});

/**************
    part8部分
 *************/
$(document).ready(function () {
    $("#part8 form input").focus(function () {
        $(this).animate({borderColor:"#70c745"})
    }).blur(function () {
        $(this).animate({borderColor:"#e1e1e1"})
    });
    $("#part8 form textarea").focus(function () {
        $(this).animate({borderColor:"#70c745"})
    }).blur(function () {
        $(this).animate({borderColor:"#e1e1e1"})
    });
});

/*************
    footer
 ************/
$(document).ready(function () {
    $("#footer .footer_2  a").hover(
        function () {
            $(this).animate({color:"#ffffff"})
        },
        function () {
            $(this).animate({color:"#b7b7b7"},200)
        }
    )
})

