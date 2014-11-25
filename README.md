moveTo.js
======

Is JQuery plugin based on jQuery-animate_from_to. The difference is that now he really brings your object from one place to another.

It works according to the principle "Where to get? Where to put?"


Usage
------

Arguments and construction:

	$(sourceElm).moveTo(targetElm [, options]);

Basic, bare bones example with real arguments:

	$("#area-1").moveTo("#area-2");
    
------------

Slow the speed of the animation:

    $('#prod_123').animate_from_to('#cart', {
        pixels_per_second: 1000
    });

Slow the speed and make the animated element blue:

    $('#prod_123').animate_from_to('#cart', {
        pixels_per_second: 1000,
        initial_css: {
            'background': 'blue'
        }
    });

Call the function of your choice when the animation finishes:

    $('#prod_123').animate_from_to('#cart', {
        callback: function(){
			alert('Animation done');
		}
    });

Options
=======

This is what the different arguments mean:

**`sourceElm`** (*required*)

Element to start the animation from. Can be either a selector or a DOM element.

**`targetElm`** (*required*)

Element where the animation ends

**options** (*optional*, default: {})

- **pixels_per_second** (optional, default: 3000).
Speed of the animation, in number of pixels per elapsed second. This makes the
animation move with constant same speed no matter where on the page the
element is.

- **initial_css** (optional, default: [See source]).
Object literal. A way to override the default CSS of the "shadow" element that is part of the
animation.

- **callback** (optional, default: [Dummy function that does nothing]).
Function. A callback that will be called when the animation finishes.

Many thanks to Emil Stenstrom <http://friendlybit.com>

Copyright (c)
-------------
2014 Anton Gorshenin
