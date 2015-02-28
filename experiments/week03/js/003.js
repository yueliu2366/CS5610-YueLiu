$(function () {
    $("#addParagraph").click(function () {
        addParagraph("New Paragraph", 150, 150);
    })
    $("#save").click(save);
    $("#load").click(load);
});
function save() {
    var allPs = $("p");
    var paragraphs = [];
    allPs.each(function (index, item) {
        var p = $(item);
        var pos = p.position();
        var text = p.text();
        var pObj = {
            text: text,
            x: pos.left,
            y: pos.top
        };
        paragraphs.push(pObj);
    });
    pStr = JSON.stringify(paragraphs);
    localStorage.setItem("page123", pStr);
    console.log("has been saved");
}

function load() {
    var page = localStorage.getItem("page123");
    console.log("has been loaded");

    if (page == null)
        return;
    page = JSON.parse(page);
    console.log(page);
    for (var p in page) {
        var par = page[p];
        var text = par.text;
        var x = par.x;
        var y = par.y;
        addParagraph(text, x, y);
    }

}

function addParagraph(text, x, y) {
    var p = $("<p contenteditable='true'>");
    p
    .html(text)
    .draggable({ grid: [20, 20] })
    .resizable()
    .css({
        "position": "relative",
        "left": x,
        "top": y
    });
    $("body").append(p);
}