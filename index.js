$(function () {
    var links = [{
            name: "JRR Tolkien's The Hobbit DEC 2015 FINAL.mp4",
            hash: "f4799d3bc7f1d69b45789f8eed1386f8541e544a"
        },
        {
            name: "ubuntu-20.10-desktop-amd64.iso",
            hash: "5fff0e1c8ac414860310bcc1cb76ac28e960efbe"
        },
        {
            name: "Harry Potter Audio Books 1-7; Read by Stephen Fry [MP3]",
            hash: "66132602c1981e3e77489086f8af35b903d0643c"
        },
        {
            name: "2021-01-11-raspios-buster-armhf-lite.zip",
            hash: "ec7a402ff515d80f30f6244847b672ae9fbe5d7a"
        },
    ]
    buildTable(links);
});

function getUri(hash,name) {
    var magnet = "magnet:?xt=urn:btih:" + hash + "&dn=" + encodeURIComponent(name);
    console.log(magnet);
    return magnet;
};
function buildTable(links) {
    $.each(links, function (index, value) {
        $("#magTable").append("<tr>")
        $("#magTable").append("<td>" + value.name + "</td>")
        $("#magTable").append("<td>" + value.hash + "</td>")
        $("#magTable").append("<td><a href=" + getUri(value.hash, value.name) + "> &#x1F9F2 </a></td>");
        $("#magTable").append("</tr>")
    })
};
