
////////////////////////////////
// Banners vars
////////////////////////////////
'use strict';


// local click tag var in index.html head
// stores local vars
var localVar = {};

/// local vars pushed into localVar object EXAMPLES
localVar.saveDiv;
//global Tween easing
localVar.theEase = Elastic.easeInOut.config(1, 5);
///timers to call each frame animation
localVar.go1;
//store dom elements
localVar.bannerBtn = document.getElementById("banner_btn");
localVar.ctaBtn = document.getElementById("cta_btn");

// declare  objects for each DIV
var truck;
var copy;
var copy_1;
var copy_2;
// var copy_3;
var pea;
var pea_1;
var pea_2;
var product;
var cta;
var umbrella;
var hood_green;
var hood_grey;
var buildings;
var lightning;
var quake;
var container_rain;
var container_rain_bg;
var timeRatio = .5;

/* onUpdate */
var updateCount = 0;

function updateHandler() {
        updateCount++;
        // console.log("onUpdate fired " + updateCount);
}

function endRain () {
    tRain.pause();
}

var tRain = new TimelineLite();


////////////////////////////////
// onload init function called on html body tag
////////////////////////////////

function initBanner (id) {

    // adds the banner button     
    // addEvent("click", localVar.bannerBtn, ctaClick);

    //sets whole banner to be visible _ prevents fouc
    localVar.bannerBtn.style.visibility = "visible";

    //calls frame one animation with delay
	var tInitBanner = new TimelineLite();
    tInitBanner.call (initFrame, [])
	
}

function initFrame () {

    // sets init values
    // console.log ("initFrame ()");

    // assigns DIV ID'S to each object
    truck = document.getElementById("truck");
    copy = document.getElementById("copy");
    copy_1 = document.getElementById("copy_1");
    copy_2 = document.getElementById("copy_2");
    // copy_3 = document.getElementById("copy_3");
    umbrella = document.getElementById("umbrella");
    hood_green = document.getElementById("hood_green");
    hood_grey = document.getElementById("hood_grey");
    buildings = document.getElementById("buildings");
    lightning = document.getElementById("lightning");
    quake = document.getElementById("quake");
    pea = document.getElementById("pea");
    pea_1 = document.getElementById("pea_1");
    pea_2 = document.getElementById("pea_2");
    product = document.getElementById("product");
    cta = document.getElementById("cta");
    container_rain = document.getElementById("container_rain");
    container_rain_bg = document.getElementById("container_rain_bg");

    // calls frame one animation with delay
    var tInitFrame = new TimelineLite();
    tInitFrame.call (frame1, [])
}

//////////////////////////////////////////
/// animations functions for each frame
//////////////////////////////////////////


function frame1 () {

    // console.log("frame 1");

    tRain.to("#container_rain", 14, {top:"1000px", delay: 0, ease:Power0.easeOut})
        .to("#container_rain_bg", 23, {top:"1000px", delay: -13.5, ease:Power0.easeOut})

    var t1 = new TimelineLite();
    // t1.staggerTo([copy_1, copy_2, copy_3], 1, {opacity:1}, .5);
    t1.to(truck, .4, {left:"7px", delay: 0, ease:Power4.easeOut})
        .to(copy_1, .5, {left:"13px", delay: -.1, ease:Power4.easeOut})
        .to(copy_2, .5, {left:"13px", delay: -.3, ease:Power4.easeOut})
        // .to(copy_3, .5, {left:"87px", delay: -.3, ease:Power4.easeOut})

        .to(copy, .1, {autoAlpha: 0,
            delay: 1.75,
            ease: Linear.easeOut, 
            onStart: null,
            onComplete: frame2, 
            onCompleteParams: ["parameters from frame 1 onComplete callback", "param2"]
        })

    /*
    t1.timeScale(timeRatio);
    t1.restart();
    t1.play();
    t1.pause();
    t1.resume();
    t1.reverse();
    t1.restart();
    */

}

function frame2 (temp, temp2) {

    var tempVar = temp;
    var tempVar2 = temp2;
    
    // console.log("frame 2 / " + tempVar + " / " + tempVar2);

    var t2 = new TimelineLite();
    t2.to(umbrella, .5, {autoAlpha: 1, scale:1, delay: 0, ease:Bounce.easeOut})
        .to(lightning, .1, {autoAlpha: 1, delay: 0, ease:Power4.easeOut})
        .to(lightning, .1, {autoAlpha: 0, delay: 0, ease:Power4.easeOut})
        .to(lightning, .1, {autoAlpha: 1, delay: 0, ease:Power4.easeOut})
        .to(lightning, .5, {autoAlpha: 0, delay: 0, ease:Power4.easeOut})
        
        .fromTo([umbrella, buildings], .5, {
            x:-2,
            },
            {
            x:2, 
            ease:RoughEase.ease.config({strength:4, points:10, template:Linear.easeNone, randomize:false}),
            // clearProps:"x",
            delay: -.7,
            force3D: true
        })

        .to(umbrella, .3, {top: "-8px", rotationZ: -50, transformOrigin: '50% 75%', delay: 0, ease:Power4.easeIn})
        .to(hood_green, .1, {autoAlpha: 0, delay: 0, ease:Power4.easeOut})
        .to(hood_grey, .1, {autoAlpha: 1, delay: -.1, ease:Power4.easeOut})
        .to(umbrella, .3, {left:"-150px", top:"-120px",
            delay: 0, 
            ease:Power4.easeOut,
            onStart: null,
            // onComplete: frame3, 
            onCompleteParams: []
        })

        .call(frame3, [""], this, .75);
}

function frame3 () {

    // console.log("frame 3");

    var t3 = new TimelineLite();
    t3.to(pea, 2.5, {left:"-23px", top:"-27px", delay: 0, ease:Power1.easeOut})
        .to(pea_2, 1.5, {scale:1, rotationZ: 0, transformOrigin: '50% 50%', delay: -1, ease:Power4.easeOut})
        .to(pea_2, .5, {backgroundColor:"rgba(94, 160, 0, 1)", delay: -1, ease:Power0.easeOut})

        .to(product, .5, {
            left:"160px",
            delay: -1.2,
            ease:Power4.easeOut,
            onStart: null,
            onComplete: endFrame, 
            onCompleteParams: []
        })
}

function endFrame() {

    // console.log("End Frame");

    var t5 = new TimelineLite();
    t5.call (ctaRoll,[])
        .call (ctaRollout,[], this,"+=.75" )

    // t5.call(func, ["param1"], this, "+= relative delay");

    ///adds cta rollover with delay and function
    var img = document.createElement('img');
    if (img.addEventListener) {
        addEvent("mouseover", localVar.bannerBtn, ctaRoll);
        addEvent("mouseout", localVar.bannerBtn, ctaRollout);
    } else {
        addEvent("onmouseover", localVar.bannerBtn, ctaRoll);
        addEvent("onmouseout", localVar.bannerBtn, ctaRollout);
    }
}

//////////////////////////////////////////
/// for banner btn clickTag
//////////////////////////////////////////
function ctaClick() {
    // console.log(clickTag);
    window.open(clickTag);
}

////////////////////////////////////
/// for cta rollover
////////////////////////////////////
function ctaRoll() {

    // console.log ("ctaRoll");

    var t6 = new TimelineLite();
    t6.to(cta_btn2, .2, {autoAlpha: 1, delay: 0, ease:Linear.easeOut})
        .to(lightning, .1, {autoAlpha: 1, delay: 0, ease:Power4.easeOut})
        .to(lightning, .1, {autoAlpha: 0, delay: 0, ease:Power4.easeOut})
        .to(lightning, .1, {autoAlpha: 1, delay: 0, ease:Power4.easeOut})
        .to(lightning, .5, {autoAlpha: 0, delay: 0, ease:Power4.easeOut})

        .fromTo([pea, product], .5, {
            x:-2,
            },
            {
            x:2, 
            ease:RoughEase.ease.config({strength:4, points:10, template:Linear.easeNone, randomize:false}),
            clearProps:"x",
            delay: -.7,
            force3D: true,
            onStart: null,
            onComplete: endRain, 
            onCompleteParams: []
        })
}

function ctaRollout() {

    // console.log ("ctaRollout");

    var t7 = new TimelineLite();
    t7.to(cta_btn2, .2, {autoAlpha: 0, delay: 0, ease:Linear.easeOut})
}

///////////////////////////////////////////////////
///
///add additional functions here helpers/methods and such
///
///////////////////////////////////////////////////

/// adds events to dom Elements
function addEvent(evnt, elem, func) {
    // console.log("EVENT ADDED");
    if (elem.addEventListener) // W3C DOM
        elem.addEventListener(evnt, func, false);
    else if (elem.attachEvent) { // IE DOM
        elem.attachEvent("on" + evnt, func);
    } else { // No much to do
        elem[evnt] = func;
    }
}
