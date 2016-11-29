$(function() {
   'use strict';
    //$('#address').height(200);
    setHeightAddress();
    $(window).resize(function() {
        setHeightAddress();
    });
    function setHeightAddress() {
        $('#address').css('height',$('#feedback').innerHeight()+'px');
    }
});