// Welcome to the Fortune Teller!

// Directions: 
// Follow the instructions below to make the age and adjective appear in the fortune when you click the button.

var birthYear;
var age;
var adjective;
var verb;

$(".btn").click(function(){
  birthYear = $("#birth-year").val(); 
   var year;
   age =2050-birthYear;
   
     adjective = $("#adjective").val(); 
     $(".adjective").html(adjective);

 


       
      
     
   
   
   $(".age").html(age);
verb = $("#verb").val(); 
     $(".verb").html(verb);


  
});

// Double Bonus! Try setting up your own input box, variable and jQuery to take in a verb and make it apear on the page.

