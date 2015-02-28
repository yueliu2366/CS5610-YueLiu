$(function () {
    var mainTitle = "This is a dynamic title";
    $("#mainTitle").html(mainTitle);
    var genres = ["Horror", "Comedy", "Drama"];
    var ul = $("ul#genres");
    ul.empty();
    for (var i in genres) {
        var li = $("<li>" + genres[i] + "</li>");
        ul.append(li);
    }
});