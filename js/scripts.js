$(document).ready(function () {
    $("#DESIGN-img").click(function () {
        $("#DESIGN-img").fadeOut("slow").hide('1000')
        $("#DESIGNS").fadeIn("slow")
    });
    $("#DESIGNS").click(function () {
        $("#DESIGNS").toggle("slow").hide('1000')
        $("#DESIGN-img").fadeIn("slow")
    });
});
$(document).ready(function () {
    $("#dev-img").click(function () {
        $("#dev-img").fadeOut("slow").hide('1000')
        $("#dev").fadeIn("slow")
    });
    $("#dev").click(function () {
        $("#dev").toggle("slow").hide('1000')
        $("#dev-img").fadeIn("slow")
    });
});
$(document).ready(function () {
    $("#product-img").click(function () {
        $("#product-img").fadeOut("slow").hide('1000')
        $("#product").fadeIn("slow")
    });
    $("#product").click(function () {
        $("#product").toggle("slow").hide('1000')
        $("#product-img").fadeIn("slow")
    });
});

$(document).ready(function () {
    $("#work0").mouseover(function () {
        $("#overlay0").show();
    }).mouseout(function () {
        $("#overlay0").hide();
    });
});
$(document).ready(function () {
    $("#work1").mouseover(function () {
        $("#overlay1").show();
    }).mouseout(function () {
        $("#overlay1").hide();
    });
});
$(document).ready(function () {
    $("#work2").mouseover(function () {
        $("#overlay2").show();
    }).mouseout(function () {
        $("#overlay2").hide();
    });
});
$(document).ready(function () {
    $("#work3").mouseover(function () {
        $("#overlay3").show();
    }).mouseout(function () {
        $("#overlay3").hide();
    });
});
$(document).ready(function () {
    $("#work4").mouseover(function () {
        $("#overlay4").show();
    }).mouseout(function () {
        $("#overlay4").hide();
    });
});
$(document).ready(function () {
    $("#work5").mouseover(function () {
        $("#overlay5").show();
    }).mouseout(function () {
        $("#overlay5").hide();
    });
});
$(document).ready(function () {
    $("#work6").mouseover(function () {
        $("#overlay6").show();
    }).mouseout(function () {
        $("#overlay6").hide();
    });
});
$(document).ready(function () {
    $("#work7").mouseover(function () {
        $("#overlay7").show();
    }).mouseout(function () {
        $("#overlay7").hide();
    });
});
$(document).ready(function () {
    $("form#form").submit(function (event) {
        event.preventDefault()
    });
    $("#sub").click(function () {
        var name = $("input#name").val()
        var email = $("input#email").val()
        var message = $("textarea#comment").val()
        if ($("input#name").val() && $("input#email").val()) {
            alert("Please enter a valid email.")
        } else {
            alert("Thank you for your feedback, our personnel will reach out to you.")
        }
    });
});