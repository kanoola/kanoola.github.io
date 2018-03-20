 function startSlides() {
    firstSlide();
    secondSlide();
    thirdSlide();
    fourthSlide();
    fifthSlide();
    sixthSlide();
}

function firstSlide() {

    $(".slide-2").hide();
    $(".slide-3").hide();
    $(".slide-4").hide();
    $(".slide-5").hide();
    $(".slide-6").hide();
    $(".logo").animate({
        opacity: "1"
    }, 1000);
    $(".hbspt-form").animate({
        opacity: "1"
    }, 1000);
    $(".slide-1").animate({
        opacity: "1"
    }, 1000);
    $(".slide-1").delay(5000);
    $(".slide-1").animate({
        opacity: "0"
    }, 1000);

};

function secondSlide() {
    setTimeout(function() {
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
        }, 1000);
        $(".slide-2").delay(5000);
        $(".slide-2").animate({
            opacity: "0"
        }, 1000);
    }, 7000);
}

function thirdSlide() {
    setTimeout(function() {
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
        $(".slide-3").delay(5000);
        $(".slide-3").animate({
            opacity: "0"
        }, 1000);
    }, 14000);
}

function fourthSlide() {
    setTimeout(function() {
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
        $(".slide-4").delay(5000);
        $(".slide-4").animate({
            opacity: "0"
        }, 1000);
    }, 21000);
}

function fifthSlide() {
    setTimeout(function() {
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
        $(".slide-5").delay(5000);
        $(".slide-5").animate({
            opacity: "0"
        }, 1000);
        //setTimeout(function() {
        // startSlides();
        //}, 7000);
    }, 28000);

}

function sixthSlide() {
    setTimeout(function() {
        $(".slide-5").hide();
        $(".slide-6").show();
        $(".slide-6").animate({
            opacity: "1"
        }, 1000);


        //setTimeout(function() {
        // startSlides();
        //}, 7000);
    }, 35000);

}
startSlides();