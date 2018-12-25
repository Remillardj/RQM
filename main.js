$(document).ready(function(){
  
  function getQuote(){
    
    var quotes = ["Hello, World", "Hello, Ocean", "Hello, Space"];
    var authors = ["-Programmer", "-Marine Developer", "-Astronaut"];
    
    var randNum = Math.floor(Math.random()*quotes.length);
    var randQuote = quotes[randNum];
    var randAuthor = authors[randNum];
    
    $(".quote").text(randQuote);
    $(".author").text(randAuthor);
    
                      }
  
  $("#btn").on("click", function(){
    getQuote();
  });
  
});