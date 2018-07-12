$(document).ready(function() {
      $("#blanks form").submit(function(event) {
        var person1Input = $("input#fname").val();
        var person2Input = $("input#lname").val();
        var animalInput= $("input#country").val();
        var exclamationInput = $("input#subject").val();
       

        $(".fname").text(fnameInput);
        $(".lname").text(lnameInput);
        $(".country").text(countryInput);
        $(".subject").text(subjectInput);
        alert("Thank you for your feedack");

        event.preventDefault();
      });
    });