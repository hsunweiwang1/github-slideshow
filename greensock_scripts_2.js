
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
var copy_1;
var copy_2;
var copy_3;
var buildings;
var car;
var brush;
var snow_1;
var snow_2;
var snow_3;
var snow_4;
var pea;
var pea_1;
var pea_2;
var product;
var cta;

var timeRatio = .5;

/* onUpdate */
var updateCount = 0;

function updateHandler() {
        updateCount++;
        // console.log("onUpdate fired " + updateCount);
}


/*** PARTICLE GENERATOR ***/

var WIDTH = 300, // window.innerWidth,
    HEIGHT = 210, // window.innerHeight,

    // number of particles
    MAX_PARTICLES = 300, // 250,
    // relates to rate of how particles are drawn
    DRAW_INTERVAL = 100, // 60, 

    container_particles = document.querySelector('#container_particles'),
    canvas = document.querySelector('#pixie'),
    context = canvas.getContext('2d'),
    gradient = null,
    pixies = new Array();

function setDimensions(e) {
    WIDTH = 300, //window.innerWidth;
    HEIGHT = 210,  //window.innerHeight;
    container_particles.style.width = WIDTH+'px';
    container_particles.style.height = HEIGHT+'px';
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
}


function Circle() {

    this.settings = {ttl:8000, xmax:0, ymax:4, rmax:10, rt:1, xdef:960, ydef:540, xdrift:0, ydrift: 100, random:true, blink:true};

    // ymax - speed of y tween

    /*
    this.settings = {ttl:8000, xmax:5, ymax:2, rmax:10, rt:1, xdef:960, ydef:540, xdrift:4, ydrift: 4, random:true, blink:true};
    */

    this.reset = function() {
        this.x = (this.settings.random ? WIDTH*Math.random() : this.settings.xdef);

        this.y = 0;
        /*
        this.y = (this.settings.random ? HEIGHT*Math.random() : this.settings.ydef);
        */

        this.r = ((this.settings.rmax-1)*Math.random()) + 1;
        this.dx = (Math.random()*this.settings.xmax) * (Math.random() < .5 ? -1 : 1);
        this.dy = (Math.random()*this.settings.ymax) * (Math.random() < .5 ? -1 : 1);
        this.hl = (this.settings.ttl/DRAW_INTERVAL)*(this.r/this.settings.rmax);
        this.rt = Math.random()*this.hl;
        this.settings.rt = Math.random()+1;
        this.stop = Math.random()*.2+.4;
        this.settings.xdrift *= Math.random() * (Math.random() < .5 ? -1 : 1);
        this.settings.ydrift *= Math.random() * (Math.random() < .5 ? -1 : 1);
    }

    this.fade = function() {
        this.rt += this.settings.rt;
    }

    this.draw = function() {
        if(this.settings.blink && (this.rt <= 0 || this.rt >= this.hl)) {
            this.settings.rt = this.settings.rt*-1;
        } else if(this.rt >= this.hl) {
            this.reset();
        }

        var newo = 1-(this.rt/this.hl);

        /* 
        // draw an oval - rain
        context.save();
        context.scale(0.75, 1.2);
        */

        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, Math.PI*2, true);
        context.closePath();

        /* 
        // draw an oval - rain
        context.restore();
        */

        var cr = this.r*newo;
        gradient = context.createRadialGradient(this.x, this.y, 0, this.x, this.y, (cr <= 0 ? 1 : cr));
        gradient.addColorStop(0.0, 'rgba(255,255,255,'+newo+')');
        gradient.addColorStop(this.stop, 'rgba(209,211,212,'+(newo*.6)+')');
        gradient.addColorStop(1.0, 'rgba(209,211,212,0)');
        context.fillStyle = gradient;
        context.fill();
    }

    this.move = function() {
        this.x += (this.rt/this.hl)*this.dx;
        this.y += (this.rt/this.hl)*this.dy;

        /*
        below statements make the particles bounce back when they've reached the edge of the banner stage (width or height)
        how to delete the flakes - save processor speed?
        */
        // if(this.x > WIDTH || this.x < 0) this.dx *= -1;
        // if(this.y > HEIGHT || this.y < 0) this.dy *= -1;
    }

    this.getX = function() { return this.x; }
    this.getY = function() { return this.y; }
}

for (var i = 0; i < MAX_PARTICLES; i++) {
    pixies.push(new Circle());
    pixies[i].reset();
}

function draw() {
    context.clearRect(0, 0, WIDTH, HEIGHT);
    for(var i = 0; i < pixies.length; i++) {
        pixies[i].fade();
        pixies[i].move();
        pixies[i].draw();
    }
}


////////////////////////////////
// onload init function called on html body tag
////////////////////////////////

function initBanner(id) {

    // adds the banner button     
    // addEvent("click", localVar.bannerBtn, ctaClick);

    //sets whole banner to be visible _ prevents fouc
    localVar.bannerBtn.style.visibility = "visible";

    /*** PARTICLE GENERATOR ***/
    setDimensions();
    // setInterval(draw, DRAW_INTERVAL);

    //calls frame one animation with delay
	var tInitBanner = new TimelineLite();
    tInitBanner.call (initFrame, [])
	
}

function initFrame() {

    // sets init values

    // console.log ("initFrame ()");

    // assigns DIV ID'S to each object
    copy_1 = document.getElementById("copy_1");
    copy_2 = document.getElementById("copy_2");
    copy_3 = document.getElementById("copy_3");
    car = document.getElementById("car");
    buildings = document.getElementById("buildings");
    brush = document.getElementById("brush");
    snow_1 = document.getElementById("snow_1");
    snow_2 = document.getElementById("snow_2");
    snow_3 = document.getElementById("snow_3");
    snow_4 = document.getElementById("snow_4");

    pea = document.getElementById("pea");
    pea_1 = document.getElementById("pea_1");
    pea_2 = document.getElementById("pea_2");
    product = document.getElementById("product");
    cta = document.getElementById("cta");

    // calls frame one animation with delay
    var tInitFrame = new TimelineLite();
    tInitFrame.call (frame1, [])
}

//////////////////////////////////////////
/// animations functions for each frame
//////////////////////////////////////////


function frame1() {

    // console.log("frame 1");

    /*** PARTICLE GENERATOR ***/    
    setInterval(draw, DRAW_INTERVAL);

    var t1 = new TimelineLite();

    // stagger
    /* 
    t1.staggerTo([copy_1, copy_2, copy_3], 1, {opacity:1}, .5);
    */

    t1.to(copy_1, 1, {autoAlpha: 1, delay: .3, ease:Power0.easeOut})
        .to(copy_2, 1, {autoAlpha: 1, delay: -.5, ease:Power0.easeOut})
        .to(copy_3, 1, {autoAlpha: 1, delay: -.5, ease:Power0.easeOut})
        .to(copy, .2, {autoAlpha: 0, 
            delay: 2, 
            ease: Linear.easeOut, 
            onStart: null,
            onComplete: frame2, 
            onCompleteParams: ["parameters from frame 1 onComplete callback", "param2"]
            })
    
    /*
    t2.restart();
    t2.play();
    t2.pause();
    t2.resume();
    t2.reverse();
    t2.restart();
    t2.timeScale(timeRatio);
    */

}

function frame2 (temp, temp2) {

    var tempVar = temp;
    var tempVar2 = temp2;
    
    // console.log("frame 2");
    // console.log("frame 2 / " + tempVar + " / " + tempVar2);

    var t2 = new TimelineLite();
    t2.to(car, .6, {top: "0", delay: 0, ease:Power4.easeOut})
        .to(snow_1, .5, {autoAlpha: 1, delay: -.5, ease:Power0.easeOut})
        .to(snow_2, .5, {autoAlpha: 1, delay: -.25, ease:Power0.easeOut})

        .to(snow_3, .5, {autoAlpha: 1, 
            delay: -.25, 
            ease:Power0.easeOut,
            onStart: null,
            onComplete: frame3, 
            onCompleteParams: []

        })
}

function frame3() {

    // console.log("frame 3");

    var t3 = new TimelineLite();
    t3.to(brush, .6, {autoAlpha: 1, scale:1, rotationZ: 45, transformOrigin: '50% 50%', delay: 0, ease:Bounce.easeOut})

        .to(brush, .2, {rotationZ: -35, transformOrigin: '50% 50%', delay: 0, ease:Power0.easeOut})
        .to(brush, .2, {rotationZ: 35, transformOrigin: '50% 50%', delay: 0, ease:Power0.easeOut})
        .to(brush, .2, {rotationZ: -35, transformOrigin: '50% 50%', delay: 0, ease:Power0.easeOut})
        .to(brush, .2, {rotationZ: 35, transformOrigin: '50% 50%', delay: 0, ease:Power0.easeOut})
        .to(brush, .2, {rotationZ: -45, transformOrigin: '50% 50%', delay: 0, ease:Power0.easeOut})

        .to(snow_4, .2, {delay: -.2, 
            /*
            clip: "rect(topLeft Y, topRight X, bottomRight Y, bottomLeft X)",
            */

            clip: "rect(0px 60px 55px 0px)",
            ease:Power0.easeOut,
            onStart: null,
            /*
            onComplete: frame4,
            */
            onCompleteParams: []

        })

        .call(frame4, [""], this, 1);


        // t3.timeScale(timeRatio);

        /* 
        .fromTo(brush, .5, {
            rotationZ: -35,
            transformOrigin: '75% 75%',
            },
            {
            rotationZ: 35,
            transformOrigin: '75% 75%',
            // ease:RoughEase.ease.config({strength:1, points:5, template:Linear.easeNone, randomize:false}),
            // clearProps:"rotationZ",
            delay: .6,
            force3D: true
        });
        */
}


function frame4() {

    // console.log("frame 4");

    var t4 = new TimelineLite();
    t4.to(pea, 2.5, {left:"-21px", top:"-22px", delay: 0, ease:Power1.easeOut})        
        .fromTo(pea_1, 1.8, {
            x:-4
            },
            {
            x:4, 
            ease:RoughEase.ease.config({strength:2, points:10, template:Linear.easeNone, randomize:false}),
            clearProps:"x",
            delay: -2.3,
            force3D: true
        })

        .to(pea_2, 1.5, {scale:1, rotationZ: 0, transformOrigin: '50% 50%', delay: -1, ease:Power4.easeOut})
        .to(pea_2, .5, {backgroundColor:"rgba(94, 160, 0, 1)", delay: -1, ease:Power0.easeOut})

        .to(product, .5, {
            left:"161px",
            delay: -1.2,
            ease:Power4.easeOut
        })
        
        .to(buildings, .3, {autoAlpha: 1, delay: -1})

        .to(container_particles, .1, {
            display:'none', 
            delay: -1,
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
