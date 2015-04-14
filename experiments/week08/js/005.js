$(document).ready(function () {
    $("button").click(function () {
        $("div.myanimation").animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px',
           position: 'relative'
        });
       // console.log(hah);
    });
});