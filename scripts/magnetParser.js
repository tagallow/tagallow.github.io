$(function () {
    //var magnetObject = parseMagnetLink("magnet:?xt=urn:btih:ec7a402ff515d80f30f6244847b672ae9fbe5d7a&dn=2021-01-11-raspios-buster-armhf-lite.zip&tr=http%3a%2f%2ftracker.raspberrypi.org%3a6969%2fannounce");
    //buildTable(magnetObject);
});

function runParse() {
    var link = $("#magnetInput").val();
    buildTable(parseMagnetLink(link));
};

function getUri(hash,name) {
    var magnet = "magnet:?xt=urn:btih:" + hash + "&dn=" + encodeURIComponent(name);
    return magnet;
};

function parseMagnetLink(link) {
    var magnetObject = {
        original: link,
        name: "",
        hash: "",
        trackers: []
    }
    var prefix = "magnet:?xt=urn:btih:";
    magnetObject.hash = link.substr(prefix.length, 40);
    link = link.substr(prefix.length + magnetObject.hash.length + "&dn=".length);
    if (link.indexOf("&tr=") < 0)
        magnetObject.name = link;
    else {
        magnetObject.name = link.substring(0, link.indexOf("&tr="));
        link = link.substr(magnetObject.name.length + "&tr=".length)
        console.log(link);
        magnetObject.trackers.push(link);
        // while (link.indexOf("&tr=") > 0) {
        //     var tracker = magnetObject.name = link.substring(0, link.indexOf("&tr="));
        // }
    }
    return magnetObject;
    //2021-01-11-raspios-buster-armhf-lite.zip&tr=http%3a%2f%2ftracker.raspberrypi.org%3a6969%2fannounce
};
function buildTable(magnetObject) {
    $("#magTable").html("");
    $("#magTable").append("<tr><td colspan='2' style='font-size: small'>" + magnetObject.original + "</td></tr>")
    $("#magTable").append("<tr><td>Name</td><td>" + magnetObject.name + "</td></tr>");
    $("#magTable").append("<tr><td>Hash</td><td style='font-family: monospace'>" + magnetObject.hash + "</td></tr>");
    $("#magTable").append("<tr>");
    $("#magTable").append("<td>Trackers</td>");
    $("#magTable").append("<td>");
    $.each(magnetObject.trackers, function (index, value) {
        $("#magTable ").append(decodeURIComponent(value)+"<br>");
    });
    $("#magTable").append("</td></tr>");
    // $("#result").append("<h3>trackers</h3><br>");

};

