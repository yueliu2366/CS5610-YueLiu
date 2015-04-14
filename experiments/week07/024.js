$(function () {
    $("#getMovie").click(function () {
        var title = $("#title").val();
        $.ajax({
            url: "http://www.myapifilms.com/imdb?title=" + title + "&format=JSONP&aka=0&business=0&seasons=0&seasonYear=0&technical=0&filter=N&exactFilter=0&limit=10&lang=en-us&actors=N&biography=0&trailer=0&uniqueName=0&filmography=0&bornDied=0&starSign=0&actorActress=0&actorTrivia=0&movieTrivia=0&awards=0&moviePhotos=N&movieVideos=N",
            dataType: "jsonp",
            success: renderMovies
        });
    })
});
function renderMovies(movies) {
    console.log(movies);
    var ul = $("#movies");
    ul.empty();
    for (var m in movies) {
        var movie = movies[m];
        var title = movie.title;
        var plot = movie.plot;
        var urlPoster = movie.urlPoster;
        console.log(title);
        var li = $("<li>")
        .append(title);
        $("<p>")
        .append(plot)
        .appendTo(li);
        $("<img>")
        .attr("src", urlPoster)
        .appendTo(li);
        ul.append(li);
    }
}