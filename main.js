$(document).ready(function(){
    var myvalues=[];
    $("button").click(function(){
        
      $("form#ourform :input").each(function(){
            myvalues.push($(this).val()); 
        });
            $("tbody").append("<tr><td>"+myvalues[0]+"</td><td>"+myvalues[1]+"</td><td>"+myvalues[2]+"</td><td>"+myvalues[3]+"</td></tr>");
        });
})