function check() {
  var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var result = 0;
  //Question 1
    if (question1 == "Yes alot!"){result+=85}
    else if (question1 = "Am not sure."){result+=75}
    else if (question1 =="Sometimes." )  {result*=55;}
    //Question 2
    if (question2 == "Of course!"){result1+=60}
    else if (question2 == "Nah.The cat comes first."){result2+=200}
    else if (question2 =="I don't like pets" )  {result2+=30;}

    //Question 3
     if (question3 == "No"){result3+=46;}
     else if (question3 == "Sometimes, that's if there is silence"){result3+=140}
     else if (question3 =="I like it!" )  {result3+=180;}

     //Question 4
      if (question4 == "I believe love is a virtual aspect"){ result4+=90;}
      else if (question4 == "I believe it is."){result4=190}
      else if (question4 =="No, it's confusing as f***k!") {result4=150;}

      var messages = ["GENIUS","Quite high!", "Slightly above average", "Average","What are you!?"];
     <var Total=result1+result2+result3+result4;
//Will add the range specs
    var range;
      if (Total>436 && Total <1000){
range = 0;
}
if (Total <328 && Total<=436){
range = 1;
}
if (result>280 && Total<=328){
range = 2;
}
if (result>0 && Total<280){
range = 3;
}

  document.getElementById("quiz").style.visibility = "hidden"
  document.getElementById("after_submit").style.visibility = "visible";

  document.getElementById("message").innerHTML = messages[range];
  document.getElementById("turnout").innerHTML = "Your score is " + Total+ "!";

                }
