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
    $(".slide-1").delay(21000);
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
    }, 23000); //add this should = next slides setTimeout
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
        $(".slide-3").delay(5000);
        $(".slide-3").animate({
            opacity: "0"
        }, 1000);
    }, 30000); //equals this number
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
        $(".slide-4").delay(10000);
        $(".slide-4").animate({
            opacity: "0"
        }, 1000);
    }, 37000);
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
    }, 49000);

}

startSlides();

//Sub Slides
var subSlideOne = ['Save up to <strong>70%</strong> of your time and money in the hiring process with Intrideo automation',
    'Assess soft skills with our <strong>20-second video introduction</strong> and experience fewer no-shows.',
    'View applications anytime, anywhere with our <strong>free app.</strong>',
    'Centralize your applicant flow from multiple sources in our <strong>easy-to-navigate</strong> dashboard.',
    'Unlimited job postings, unlimited managers means <strong>relief</strong> to your recruitment budget.'
];





function subSlides() {
    // Slide 1
    $('#subslide1').hide(function () {
        var div = $("<p id='subslide1'>" + subSlideOne[0] + "</p>").hide();
        $(this).replaceWith(div);
        $('#subslide1').fadeIn("slow");
        $('#subslide1').delay(3500).fadeOut("slow", function () {
            var div = $("<p id='subslide1'>" + subSlideOne[1] + "</p>").hide();
            $(this).replaceWith(div);
            $('#subslide1').fadeIn("slow");
            $('#subslide1').delay(3500).fadeOut("slow", function () {
                var div = $("<p id='subslide1'>" + subSlideOne[2] + "</p>").hide();
                $(this).replaceWith(div);
                $('#subslide1').fadeIn("slow");
                $('#subslide1').delay(3500).fadeOut("slow", function () {
                    var div = $("<p id='subslide1'>" + subSlideOne[3] + "</p>").hide();
                    $(this).replaceWith(div);
                    $('#subslide1').fadeIn("slow");
                    $('#subslide1').delay(3500).fadeOut("slow", function () {
                        var div = $("<p id='subslide1'>" + subSlideOne[4] + "</p>").hide();
                        $(this).replaceWith(div);
                        $('#subslide1').fadeIn("slow");

                    });
                });

            });

        });

    });


};
