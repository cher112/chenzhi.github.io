<!--浏览器搞笑标题-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/img/favicon.png");
         document.title = '😒哼赶紧走,不要回来了！';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/img/favicon.png");
         document.title = '😳不是因为你回来才开心哦！';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });