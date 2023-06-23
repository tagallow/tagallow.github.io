function runParse() {
    var link = $("#magnetInput").val();
    buildTable(parseMagnetLink(link));
};

function getUri(hash,name) {
    var magnet = "magnet:?xt=urn:btih:" + hash + "&dn=" + encodeURIComponent(name);
    return magnet;
};
// parse a magnet link and return an object
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
        link = link.substr(magnetObject.name.length);
        //&tr=http%3a%2f%2ftracker.raspberrypi.org%3a6969%2fannounce
        while (link.indexOf("&tr=") >= 0) {
            //there is at least 1 tracker
            link = link.substr("&tr=".length);
            //http%3a%2f%2ftracker.raspberrypi.org%3a6969%2fannounce
            if (link.indexOf("&tr=") <= 0)
                magnetObject.trackers.push(link);
            else {
                var finaluri = link.substring(0, link.indexOf("&tr="))
                magnetObject.trackers.push(finaluri);
                link = link.substring(finaluri.length);
            }
        console.log(link);
        }
    }
    return magnetObject;
    //2021-01-11-raspios-buster-armhf-lite.zip&tr=http%3a%2f%2ftracker.raspberrypi.org%3a6969%2fannounce
};
// build a table from the magnet object
function buildTable(magnetObject) {
    $("#magTable").html("");
    $("#magTable").append("<p style='font-size: small'>" + magnetObject.original + "</p>")
    $("#magTable").append("<p>Name: " + decodeURIComponent(magnetObject.name) + "</p>");
    $("#magTable").append("<p>Hash: " + "<font style='font-family: monospace'>" + magnetObject.hash + "</font></p>");
    $("#magTable").append("<p>Trackers</p>");
    var trackerList = "<ul style='list-style: none;'>";
    $.each(magnetObject.trackers, function (index, value) {
        trackerList += "<li>" + decodeURIComponent(value) + "</li>";
    });
    trackerList += "</ul>"
    $("#magTable").append(trackerList);
    // $("#result").append("<h3>trackers</h3><br>");

};

