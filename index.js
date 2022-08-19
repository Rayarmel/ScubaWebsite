"use strict";
$(document).ready(function() {
    $("#switch1").click( function() {
        
        // Redirect to explore page
        document.location.href = "explore_scuba.html";

    });

    $("#switch2").click( function() {
        
        // Redirect to safety page
        document.location.href = "safety.html";

    });

    $("#switch3").click( function() {
        
        // Redirect to gallery page
        document.location.href = "views_of_the_ocean.html";

    });

    $("#switch4").click( function() {
        
        // Redirect to get started page
        document.location.href = "get_started.html";

    });

    $("#switch5").click( function() {
        
        // Redirect to destinations page
        document.location.href = "your_next_destination.html";

    });

    $("#switch6").click( function() {
        
        // Redirect to home page
        document.location.href = "index.html";

    });

    $.getJSON("explore.json", function(data){
        $.each(data, function(){
            $.each(this, function(key, value){
                $("#explore").append(
                    "<p>" + value.about + "<br><br>" +
                    value.next + "<br><br>" + "</p>"
                );
            });
        });
    });

    $.getJSON("safe.json", function(data) {
        $.each(data, function() {
            $.each(this, function(key, value) {
                $("#safe").append(
                    "<p>" + value.tip1 + "<br> </p>" + 
                    "<p>" + value.tip2 + "<br> </p>" +
                    "<p>" + value.remainder + "<br> </p>"
                );
            });
        });
    });

});