/////////////////////////////
// JavaScript for posts page
////////////////////////////


$(function() {
    // Expected when js-menu-icon js cliced
    $('.js-menu-icon').click(function() {
        // $( this) : self element, namely dev.js-menu-icon
        // next() : next to div.js-menu-icin, namely div.menu
        // toggle() : Switch show and hide
        $(this).next().toggle();


    })
})