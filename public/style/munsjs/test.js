define(['jquery'],function ($){
  var add = function (x,y){
    alert(111);
  };
  alert($("#albutton").length);
  $("#albutton").on('click',function(){

    alert("test success ,you know ,day day up");
  });

 // alert(11);
  return {//return module method
    add: add
  };
});

//alert(11);
