//jQuery
$(document).ready(function() {
  var output="";
  var currentInput="";
  var dec_count=0; //allow only one decimal per number in between operations
  var zero_count=0; //allow only one zero if zero is first digit
  var newNum;
  var curr_operator="" //current operator to be passed into output string
  
    $("#decimal").on("click", function(){
      if (dec_count==0 ) {
        dec_count=1;
        output+=".";
        currentInput += ".";
        $(".calc_output").html(output);
      }
    });
  
  function displayOutput (num) {
    console.log("current op:"+curr_operator);
    if(curr_operator!=="" && dec_count!== 1){
      output+=curr_operator;
    }
    output+=num;
    currentInput += num;
      $(".calc_output").html(output);
      $("#display").html(currentInput);
  }
  
    $("#one").on("click", function(){
      displayOutput (1);
    });
  
    $("#two").on("click", function(){
      displayOutput (2);
    });
  
    $("#three").on("click", function(){
      displayOutput (3);
    });
  $("#four").on("click", function(){
      displayOutput (4);
    });
    $("#five").on("click", function(){
      displayOutput (5);
    });
  $("#six").on("click", function(){
      displayOutput (6);
    });
    $("#seven").on("click", function(){
      displayOutput (7);
    });
  $("#eight").on("click", function(){
      displayOutput (8);
    });
    $("#nine").on("click", function(){
      displayOutput (9);
    });
  $("#zero").on("click", function(){
    //am i inputting a new number? allow one zero, otherwise do nothing
    //if other numbers pressed or decimal, allow multiple zeroes
    if(newNum && zero_count===0){
      displayOutput (0);
      newNum=false;
      zero_count++;
    }
    if(output!== "" && output !=="0"){
      displayOutput (0);
    }
    });
  
  //arithmetic
  function operatorPressed (operator) {
    //output += operator;
    curr_operator=operator;
    //alert(currentInput);
    currentInput="";
    newNum=true;
    dec_count=0;
      $("#display").html(operator);
    
  }
  
    $("#add").on("click", function(){
      operatorPressed (" + ");
    });
    $("#subtract").on("click", function(){
       operatorPressed (" - ");
    });
    $("#multiply").on("click", function(){
      operatorPressed (" x ");
     
    });
    $("#divide").on("click", function(){
      operatorPressed (" &divide ");
      
    });
  
    function calculate(fn) {
        
        return fn;
      }
  
  //PEMDAS
    $("#equals").on("click", function(){
      var f_output=0;
      var arr=[];
      arr=output.split(' ');
      parse=parseInt(arr[1],10);
      curr_operator="";
      
      for(i=0;i<arr.length;i++){
        if(isNaN(arr[i])===false){
          arr[i]=arr[i]*1;
        }
      }
      
      dec_count=0;
      output+="=";
      $(".calc_output").html(output);
      current_arr=[];
      for (i=0; i<arr.length;i++){
        if (arr[i]=="x"){
          arr[i+1]=arr[i-1]*arr[i+1];
          arr[i-1]=" ";
          arr[i]=" ";
        }        
      }
      //strip out new empty strings
      arr = arr.filter(function(val) {
        return val !== " ";
        });
      
      for (i=0; i<arr.length;i++){
        if (arr[i]=="&divide"){
          arr[i+1]=arr[i-1]/arr[i+1];
          arr[i-1]=" ";
          arr[i]=" ";
        }        
      }
      
      arr = arr.filter(function(val) {
        return val !== " ";
        });
   
      for (i=0; i<arr.length;i++){
        if (arr[i]=="-"){
          arr[i+1]=arr[i-1]-arr[i+1];
          arr[i-1]=" ";
          arr[i]=" ";
        }
        
      }
   
      arr = arr.filter(function(val) {
        return val !== " ";
        });
  
      for (i=0; i<arr.length;i++){
        if (arr[i]=="+"){
          arr[i+1]=arr[i-1]+arr[i+1];
          arr[i-1]=" ";
          arr[i]=" ";
        }        
      }
  
      arr = arr.filter(function(val) {
        return val !== " ";
        });
      
      $("#display").html(arr);  // arr can still be operated on +-/*
      output+=arr;
      
      $(".calc_output").html(output);
      output=arr;
      currentInput="";
      
    });
  $("#clear").on("click", function(){
      $(".calc_output").html("");
      $("#display").html("0");
      output="";
      currentInput="";
      dec_count=0;
    });
  
  });
