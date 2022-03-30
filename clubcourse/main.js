$(function(){
  $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>")  
//一秒鐘有1000毫秒
//每分鐘60秒
  let millisecsPerDay = 24*60*60*1000;
  
  var topicCount = topic.length;
  for(var x = 0; x < topicCount ;x++){
    $("#courseTable").append(
      "<tr>"+
      `<td>${x+1}</td>`+
      `<td>${(new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString().slice(5)}</td>`+
      `<td>${topic[x]}</td>`+
      "</tr>"
    );
  }
});
