// 改进，用面向对象的方法进行编写
function tabPlug(opts){
      var defaults = {
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
                      console.log("点击前");
                },
                callbackAfterFunction:function(){
                      console.log("点击后");   
                }
            }
      this.settings = $.extend({},defaults,opts);           
}  
tabPlug.prototype = {
            init: function(){  //初始的时候执行的方法
                  outerWidth = $("."+this.settings.tabPlugParent).width() || $("."+this.settings.tabPlugParent).parents().width();
                  insertTagNum = this.settings.creatNum;
                  this.insertTagHtml("."+this.settings.tabPlug);   
                  // this.setCssStyle();
                  this.changeTag(this.settings.currentIndex);
            },
            insertTagHtml:function(){  //初始的时候渲染html
                  var insertTagHtml = "<ul class='"+this.settings.tabTagUlClass+"'>";
                  if(insertTagNum > this.settings.tabPlugData.length){    //当要插入的标签多大于数组的长度的时候 自动补齐
                      insertTagNumFlag = this.settings.tabPlugData.length;
                  }else{
                      insertTagNumFlag = insertTagNum; 
                  }
                  for (var i = 0; i<insertTagNumFlag; i++){
                            if( i == this.settings.currentIndex){
                              insertTagHtml +="<li class='"+this.settings.currentTabClass+" "+ this.settings.tabTagClass+"' >"+this.settings.tabPlugData[i].tabName+"</li>";  
                            }else{
                              insertTagHtml +="<li class='"+this.settings.tabTagClass+"' >"+this.settings.tabPlugData[i].tabName+"</li>";
                           }
                  }
                  if(insertTagNum > this.settings.tabPlugData.length){    //自动补齐标签的个数
                      for(var i =0; i<insertTagNum - this.settings.tabPlugData.length; i++){
                           insertTagHtml +="<li class='"+this.settings.currentTabClass+" "+ this.settings.tabTagClass+"' >自定义标签</li>";  
                      }
                  }
                  
                  if(insertTagNum > $("."+this.settings.tabPlugParent).find(".plug_content_JS").length){   //自动补齐下面内容的个数
                      var insertContentHtml ="";
                      for(var i =0; i<insertTagNum-$("."+this.settings.tabPlugParent).find(".plug_content_JS").length; i++){
                           var insertContentNum = $("."+this.settings.tabPlugParent).find(".plug_content_JS").length+i+1
                           insertContentHtml +="<div class='plug_content_JS'>第"+insertContentNum +"个标签内容为空</div>";  
                      }   
                  }
                  insertTagHtml +="</ul>"
                  $("."+this.settings.tabPlugParent).find("."+this.settings.tabTagParentName).append(insertTagHtml);
                  $("."+this.settings.tabPlugParent).append(insertContentHtml);
                   this.clickEvent();   //绑定click事件
                   this.tabHover();     //绑定hover事件
            },
            // setCssStyle:function(){ 
            //        $("."+this.settings.tabPlugParent).find('.'+this.settings.tabTagUlClass).css("width",outerWidth);
            //         $("."+this.settings.tabPlugParent).find("."+this.settings.tabTagClass).css("width",outerWidth/insertTagNum); 
            // },
            clickEvent : function(){  //点击的时候执行的事件
                 var $this = this;
                 $("."+this.settings.tabPlugParent).find("."+this.settings.tabTagClass).click(function(){
                    $this.settings.callbackBeforeFunction()
                    var currentIndex = $(this).index();
                    $this.changeTag(currentIndex);
                    $this.settings.callbackAfterFunction();   
                  })
            },
            tabHover:function(){   //鼠标滑过的事件
                  var $this = this;
                  $("."+this.settings.tabPlug).find("."+this.settings.tabTagClass).hover(function(){
                       $(this).addClass($this.settings.tagHover);
                  },function(){
                       $(this).removeClass($this.settings.tagHover); 
                  });
            },
            changeTag:function(currentIndex){   //切换标签事件
                if(currentIndex<0){
                    currentIndex = 0;
                }else if(currentIndex > this.settings.creatNum-1 ){
                    currentIndex = this.settings.creatNum -1
                }
                $("."+this.settings.tabPlugParent).find("."+this.settings.tabTagClass).removeClass(this.settings.currentTabClass).eq(currentIndex).addClass(this.settings.currentTabClass); 
                $("."+this.settings.tabPlugParent).find("."+this.settings.tabContentName).hide().eq(currentIndex).show(); 
             
             }

          };







