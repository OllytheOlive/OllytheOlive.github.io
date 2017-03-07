/*
This is comment block

JavaScript is a programming language that allows for a webpage to have user interaction.


*/
  //these are variables to hold the random numbers
  var operand1;
  var operand2;

function getCard(){

  
  //this is also a comment
  //make a random number below
  operand1 = Math.floor((Math.random () *10 ) + 1);
  operand2 = Math.floor((Math.random() * 10 ) + 1);
  
  document.getElementById("operand1").innerHTML=operand1;
  document.getElementById("operand2").innerHTML=operand2;
}

//this function will check the answer
function checkAnswer(){
  var sum = operand1 + operand2;
  var useranswer = document.getElementById("answerInput").value;
  
  if(sum == useranswer){
    document.getElementById("response").innerHTML="Correct";
  }
  else{
    document.getElementById("response").innerHTML="Incorret SUCKER You don't even know your addition go to KINDERGARDEN RIGHT NOW!!";
  }
  
}
  
  
  
  
  
  