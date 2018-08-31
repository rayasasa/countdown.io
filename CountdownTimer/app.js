    var now = new Date();
    var later = new Date();
    later.setDate(now.getDate()+2);

    // Update the count down every 1 second
    var result = setInterval(function() {
        now = new Date();
        var distance = later.getTime() - now.getTime();

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
        if(distance > 0){
            document.getElementById("p_days").innerHTML = days;
            document.getElementById("p_hours").innerHTML = hours;
            document.getElementById("p_minutes").innerHTML = minutes;
            document.getElementById("p_seconds").innerHTML = seconds;
        }
        else{
            document.getElementById("p_days").innerHTML = -1;
            document.getElementById("p_hours").innerHTML = -1;
            document.getElementById("p_minutes").innerHTML = -1;
            document.getElementById("p_seconds").innerHTML = -1;           
        }
    
    }, 1000);


