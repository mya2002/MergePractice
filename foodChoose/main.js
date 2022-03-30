$(function(){
    $("input").on("click",function(){
       // var x = 5;
       // debugger;
       // alert("yo");
      // $("h1").text("Hello");
      var numberOfListItem = $("li").length;//取li的長度 -> 3
      var randomChildNumber = Math.floor(Math.random()*numberOfListItem);//random的範圍會在0-3之間的小數->用floor讓他取最小整數
      $("h1").text($("li").eq(randomChildNumber).text());
      $("img").attr("src",`pic/${randomChildNumber}.jpg`).attr("width","300");
      // if(randomChildNumber == 0){
      //   document.write(' <div><img src="pic/laman.jpg"></div> ');
      // }else if(randomChildNumber == 1){
      //   document.write(' <div><img src="pic/rice.jpg"></div> ');
      // }else{
      //   document.write(' <div><img src="pic/dumpling.jpg"></div> ');
      // }
    });
});