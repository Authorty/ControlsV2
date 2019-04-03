$(document).ready(function () {

    //On click it inactivates the last one
    $('.progressBar').on('click', 'li', function () {
        $('.progressBar li.active').removeClass('active');
        $(this).addClass('active');
    });

    //On click just makes next one active
    $('.progressBar').on('click', 'li', function () {
        $(this).addClass('active');
    });
})