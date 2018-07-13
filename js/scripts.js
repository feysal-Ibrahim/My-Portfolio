$(document).ready(function() {
      $("#blanks form").submit(function(event) {
        var firstnameInput = $("input#firstname").val();
        var lastnameInput = $("input#lastname").val();
        var countryInput= $("input#country").val();
        var subjectInput = $("input#subject").val();
       

        $(".firstname").text(firstnameInput);
        $(".lastname").text(lastnameInput);
        $(".country").text(countryInput);
        $(".subject").text(subjectInput);
        alert("Thank you for your feedack!");

        event.preventDefault();

      });
    });