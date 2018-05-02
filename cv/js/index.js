$(function(){
    $('#dowebok').fullpage({
        //设置每一屏幕的颜色
        sectionsColor:["#298ba8","#fafafa"],
        //设置菜单锚点
        anchors:['page1','page2','page3','page4','page5','page6'],
        //设置菜单id
        menu:"#menu",
        //设置屏幕加载完后的回调函数
        afterLoad:function(anchorLink,index){
           // console.log(index);
            $(".section").removeClass("current");
            //延迟动画执行时间 .current动画触发器
            setTimeout(function(){
                $(".section").eq(index-1).addClass("current");
            },100)
        }
    })
});
//
$(".btn").click(function(){
    $(".navbar-nav").toggle();
    $(".navbar-nav").children("li").click(function(){
        $(".navbar-nav").hide();
    })
});
