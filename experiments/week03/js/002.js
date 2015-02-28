$(function () {
    $(".reorderme").sortable({
        axis: "y"
    });
    $(".dragme").draggable({
        grid: [20, 20],
        start: function () { console.log("start drag"); },
        stop: function () { console.log("stop drag"); }
    });
    $(".resizeme").resizable({
        handles: "n, e, s, w, ne, se, sw, nw"
    });
});