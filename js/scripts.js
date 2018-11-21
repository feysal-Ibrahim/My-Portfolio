$(document).ready(function() {
    window.onscroll = function() { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 2850) {
            document.getElementById("top").style.display = "block";
        } else {
            document.getElementById("top").style.display = "none";
        }
    }

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    $("#top").click(function(event) {
        event.preventDefault();
        topFunction();
    })
});