function startSlides() {
    subSlides();
    firstSlide();
    secondSlide();
    thirdSlide();
    fourthSlide();
    fifthSlide();
}

function firstSlide() {
    $(".slide-1").show();
    $(".slide-2").hide();
    $(".slide-3").hide();
    $(".slide-4").hide();
    $(".slide-5").hide();
    $(".slide-6").hide();
    $('body').stop().fadeIn(1000);
    $(".hbspt-form").stop().animate({
        opacity: "1"

    }, 1000);
    $(".slide-1").stop().animate({
        opacity: "1"
    }, 1000);
    $(".slide-1").delay(13000);
    $(".slide-1").animate({
        opacity: "0"
    }, 1000);

};





function secondSlide() {
    setTimeout(function () {
        $(".slide-1").hide();
        $(".slide-3").hide();
        $(".slide-4").hide();
        $(".slide-5").hide();
        $(".slide-2").show();
        $(".masthead-bg").animate({
            backgroundColor: "#808080"
        }, 1000);
        $(".slide-2").animate({
            opacity: "1"
        }, 1000); //add this
        $(".slide-2").delay(5000); //add this
        $(".slide-2").animate({
            opacity: "0"
        }, 1000); //add this
    }, 15000); //add this should = next slides setTimeout
}

function thirdSlide() {
    setTimeout(function () {
        $(".slide-2").hide();
        $(".slide-3").show();
        $(".masthead-bg").animate({
            backgroundColor: "#25bfc4"
        }, 1000);
        $(".slide-3").animate({
            opacity: "1"
        }, 1000);
        $(".slide-3").delay(7000);
        $(".slide-3").animate({
            opacity: "0"
        }, 1000);
    }, 22000); //equals this number
}

function fourthSlide() {
    setTimeout(function () {
        $(".slide-3").hide();
        $(".slide-4").show();
        $(".masthead-bg").animate({
            backgroundColor: "#ee931c"
        }, 1000);
        $(".slide-4").animate({
            opacity: "1"
        }, 1000);
        $(".slide-4").delay(7500);
        $(".slide-4").animate({
            opacity: "0"
        }, 1000);
    }, 31000);
}

function fifthSlide() {
    setTimeout(function () {
        $(".slide-4").hide();
        $(".slide-5").show();
        $(".masthead-bg").animate({
            backgroundColor: "#4385f6"
        }, 1000);
        $(".slide-5").animate({
            opacity: "1"
        }, 1000);
        $(".slide-5").delay(10000);
        $(".slide-5").animate({
            opacity: "0"
        }, 1000);
        setTimeout(function () {
            startSlides();
        }, 12000);
    }, 40500);

}

startSlides();

//Sub Slides
var subSlideOne = ['Unlimited "Team Fit" assessments.',
    'Unlimited managers.',
    'Unlimited locations.',
    'Applicant communication automation.'
];





function subSlides() {
    // Slide 1
    $('#subslide1').hide(function () {
        var div = $("<p id='subslide1'>" + subSlideOne[0] + "</p>").hide();
        $(this).replaceWith(div);
        $('#subslide1').fadeIn("slow");
        $('#subslide1').delay(4000).fadeOut("slow", function () {
            var div = $("<p id='subslide1'>" + subSlideOne[1] + "</p>").hide();
            $(this).replaceWith(div);
            $('#subslide1').fadeIn("slow");
            $('#subslide1').delay(1500).fadeOut("slow", function () {
                var div = $("<p id='subslide1'>" + subSlideOne[2] + "</p>").hide();
                $(this).replaceWith(div);
                $('#subslide1').fadeIn("slow");
                $('#subslide1').delay(1500).fadeOut("slow", function () {
                    var div = $("<p id='subslide1'>" + subSlideOne[3] + "</p>").hide();
                    $(this).replaceWith(div);
                    $('#subslide1').fadeIn("slow");
              

                });

            });

        });

    });


};
