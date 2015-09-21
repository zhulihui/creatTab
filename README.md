1 使用方法：
  <div class="tabPlug_JS2" >
         <div class="plug_tab_JS"></div>
         <div class="plug_content_JS">这是第一个标签new</div>
         <div class="plug_content_JS">这是第二个标签new</div>
         <div class="plug_content_JS">这是第三个标签</div>
     </div>    
  其中 tabPlug_JS2 是插件的父级，里面的元素查找，需要依赖于该父级元素。  实例化的时候可以传改class名字。
2 各个参数的说明：
   creatNum:"4",  //需要生成的标签的个数
   currentIndex:"0",  //初始的时候默认选中的标签，从0开始，默认的是0
   tabPlugParent:"tabPlug_JS", //插件的外轮廓
   tabTagUlClass:"tab_plug_ul",  //tab切换ul的class名字，默认的是tabPlugUl
   tabTagClass:"tab_tag",   //tab切换li的class名字，默认的是tabTag 
   currentTabClass:"active",    //当前激活的li的新增的class名字，默认的是active
   tagHover:"tab_tag_hover",   //标签划过的时候，tag增加的class名字，默认的是 tab_tag_hover
   tabTagParentName:"plug_tab_JS",
   tabContentName:"plug_content_JS",
   tabActiveClass:"tab_active_content",  //当前激活的content新增的class名字，默认的是tabActiveContent
   tabPlugData:[{"tabName":"标签23"},{"tabName":"标签二"},{"tabName":"标签三"},{"tabName":"<a href='http://www.baidu.com'>更多</a>"}],
   callbackBeforeFunction:function(){
       console.log("点击前执行的方法");
   },
   callbackAfterFunction:function(){
       console.log("点击后执行的方法");   
   }
3 实例化改插件：
   var plug_one = new tabPlug({
                            creatNum:len,    //需要生成的标签的个数
                            currentIndex:"1",  //初始的时候默认选中的标签，从0开始，默认的是0
                         });
   plug_one.init();
