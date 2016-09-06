/**
 * @desc Example of resizing text in a range based on container size range
 * @based-on: http://stackoverflow.com/a/17845473/189411
 * @author Domenico Monaco | @kiuzhack | monaco.kiuz.it
 * @required jQuery
 */


function inRange (x,min,max) {
    return Math.min(Math.max(x, min), max);
}

function resizeTextInRange(minW,maxW,textMinS,textMaxS, elementApply, elementCheck=0) {

    if(elementCheck==0){elementCheck=elementApply;}

    var ww = $(elementCheck).width();
    var difW = maxW-minW;
    var difT = textMaxS- textMinS;
    var rapW = (ww-minW);
    var out=(difT/100)*(rapW/(difW/100))+textMinS;
    var normalizedOut = inRange(out, textMinS, textMaxS);
    $(elementApply).css('font-size',normalizedOut+'px');

    console.log(normalizedOut);

}

$(function () {
    resizeTextInRange(500,960,19,25,'#size-2');
    resizeTextInRange(500,960,13,20,'#size-1','body');
    $(window).resize(function () {
        resizeTextInRange(500,960,19,25,'#size-2');
        resizeTextInRange(500,960,13,20,'#size-1','body');
    });
});
