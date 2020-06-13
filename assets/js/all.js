$(function() {

    let currentDate = new Date();
    let launchDate = new Date('2020/06/13 18:55');


    if (currentDate >= launchDate) {
        hideCountdown();
        showVideo();
    } else {
        $('#countdown').countdown(launchDate, function(event) {
            var totalHours = event.offset.totalDays * 24 + event.offset.hours;
            $(this).html(event.strftime(totalHours + ' hr %M min %S sec'));
        })
        .on('finish.countdown', function(){
            hideCountdown();
            showVideo();
        });
    }

});

function showVideo(){
    $('#video').show();
}

function hideCountdown(){
    $('#timer').hide();
}
