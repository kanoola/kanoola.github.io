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
        $(".slide-2").delay(17000); //add this
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
        }, 1000)
        $(".masthead-bg").animate({
            backgroundColor: "#25bfc4"
        }, 1000);
        $(".slide-3").animate({
            opacity: "1"
        }, 1000);
        $(".slide-3").delay(15000);
        $(".slide-3").animate({
            opacity: "0"
        }, 1000);
    }, 42000); //equals this number
}

function fourthSlide() {
    setTimeout(function () {
        $(".slide-3").hide();
        $(".slide-4").show();
        $(".masthead-bg").animate({
            backgroundColor: "#ee931c"
        }, 1000)
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
    }, 59000);
}

function fifthSlide() {
    setTimeout(function () {
        $(".slide-4").hide();
        $(".slide-5").show();
        $(".masthead-bg").animate({
            backgroundColor: "#4385f6"
        }, 1000)
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
    }, 71000);

}

startSlides();

//Sub Slides
var subSlideOne = ['Save up to <strong>70%</strong> of your time and money in the hiring process with Intrideo automation.',
    'Assess soft skills with our <strong>20-second video introduction</strong> and experience fewer no-shows.',
    'View applications anytime, anywhere with our <strong>free app.</strong>',
    'Centralize your applicant flow from multiple sources in our <strong>easy-to-navigate</strong> dashboard.',
    'Unlimited job postings, unlimited managers means <strong>relief</strong> to your recruitment budget.'
];

var subSlideTwo = [
    'The worlds <strong>first ever</strong> question-less personality and team-fit assessment that is completely subconscious.',
    'Determine the right fit every time for your team with our <strong>easy, one-click psychometric</strong> – no lengthy questionnaires required.',
    'Our <strong>cutting-edge technology</strong> is based on almost century-old research using unbiased responses which is unlike any other tool available today!'

];

var subSlideThree = [
    'Redirect your precious time by leveraging our AI and process-focused recruitment solution which delivers qualified candidates <strong>ready-to-interview.</strong>',
    '<strong>Maintain exposure and control</strong> of your recruitment funnel at all times, while not having to worry about redundant tasks- our AI does all the heavy lifting!',
    '<strong>Clear your mind</strong> of the hassle and frustration of reading resumes and booking interview.'

];


var subSlideFive = [

    'Register for a no-obligation demo to see exactly what you have been missing out on and learn how our cutting-edge AI technology can rescue you from recruitment redundancy <strong>TODAY.</strong>'
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
    // Slide 2
    setTimeout(function () {
        $('#subslide1').hide();
        $('#subslide2').hide(function () {
            var div = $("<p id='subslide2'>" + subSlideTwo[0] + "</p>").hide();
            $(this).replaceWith(div);
            $('#subslide2').fadeIn("slow");
            $('#subslide2').delay(4500).fadeOut("slow", function () {
                var div = $("<p id='subslide2'>" + subSlideTwo[1] + "</p>").hide();
                $(this).replaceWith(div);
                $('#subslide2').fadeIn("slow");
                $('#subslide2').delay(4500).fadeOut("slow", function () {
                    var div = $("<p id='subslide2'>" + subSlideTwo[2] + "</p>").hide();
                    $(this).replaceWith(div);
                    $('#subslide2').fadeIn("slow");
                });
            });
        });
    }, 23500);

    // Slide 3
    setTimeout(function () {
        $('#subslide2').hide();
        $('#subslide3').hide(function () {
            var div = $("<p id='subslide3'>" + subSlideThree[0] + "</p>").hide();
            $(this).replaceWith(div);
            $('#subslide3').fadeIn("slow");
            $('#subslide3').delay(5000).fadeOut("slow", function () {
                var div = $("<p id='subslide3'>" + subSlideThree[1] + "</p>").hide();
                $(this).replaceWith(div);
                $('#subslide3').fadeIn("slow");
                $('#subslide3').delay(5000).fadeOut("slow", function () {
                    var div = $("<p id='subslide3'>" + subSlideThree[2] + "</p>").hide();
                    $(this).replaceWith(div);
                    $('#subslide3').fadeIn("slow");
                });
            });

        });
    }, 42000);

    // Slide 5
    setTimeout(function () {
        $('#subslide5').hide(function () {
            var div1 = $("<p id='subslide5'><span>" + "&#9676; No more applicant calls.</span><br>" +
                "<span>" + "&#9676; Fewer no-shows.</span><br>" +
                "<span>" + "&#9676;  Better team fits.</span><br>" +
                "<span>" + "&#9676;  Lower turnover.</span><br>" +
                "<span>" + "&#9676; More time spent on candidates and selecting the RIGHT fit.</span></p>").hide();
            $(this).replaceWith(div1);
            $('#subslide5').fadeIn("slow");
            $('#subslide5').delay(5000).fadeOut("slow", function () {
                var div2 = $("<p id='subslide5'>" + subSlideFive[0] + "</p>").hide();
                $(this).replaceWith(div2);
                $('#subslide5').fadeIn("slow");
            });
        });
    }, 70000);

};

$(".dictionary").css("display", "none");

$(".dictionary").delay(1000).show("slide", {
    direction: "down"
}, 1000).fadeIn(500);
$(".dictionary").delay(10000).hide("slide", {
    direction: "down"
}, 1000).fadeOut(500);
