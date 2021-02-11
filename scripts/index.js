$(function () {
    var links = [
        {
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
        {
            name: "Best of the Worst - Diamond Cobra vs. The White Fox-eEKKVSjw6JY.mkv",
            hash: "4795102b94b5190c30bada9a42694069ed6441d1"
        },
        {
            name: "Hello Internet",
            hash: "e76089e1de9c6cc836d033ec1761d6d620b6e2e2"
        },
        {
            name: "What.CD_Goodbye_Release",
            hash: "92cabe1f8b3a09fca44561b639ad6039163a4e53"
        },
        {
            name: "Mars Argo Torrent V3",
            hash: "d240f59ee4aa3a272f0c7c93b2798c9c111e29bf"
        },
        {
            name: "Star Wars The Original Trilogy 1977-1983 Despecialized Editions 720p x264 AC3 5.1",
            hash: "8b42d73d1e6e74db4ad5df70f35a99df65b94e94"
        },
        {
            name: "Doom-2",
            hash: "586d031fcc08575b98dca12a2e1c1e4f6fc8e411"
        },
        {
            name: "HowToToothpaste_ViHart.mp4",
            hash: "5307ebbaf5d444a9d961868a2aa601822760fbea"
        },
        {
            name: "SoundBraid_ViHart.mp4",
            hash: "269e1e4a6fece9db8295e67634b209cce3d0eb76"
        },
        {
            name: "Vi_Hart_Guide_To_Comments.mp4",
            hash: "6b9e1fca4985f15bbae75d852e56419006b341af"
        },
        {
            name: "linuxmint-20.1-cinnamon-64bit.iso",
            hash: "8df6e26142615621983763b729f640372cf1fc34"
        },
    ]
    links.sort((a, b) => {
        if (a.name > b.name)
            return 1;
        if (a.name < b.name)
            return -1;
        return 0;
    });
    buildTable(links);
});

function getUri(hash,name) {
    var magnet = "magnet:?xt=urn:btih:" + hash + "&dn=" + encodeURIComponent(name);
    return magnet;
};
function buildTable(links) {
    $.each(links, function (index, value) {
        $("#magTable").append("<tr>")
        $("#magTable").append("<td>" + value.name + "</td>")
        $("#magTable").append("<td style='font-family: monospace'>" + value.hash + "</td>")
        $("#magTable").append("<td><a href=" + getUri(value.hash, value.name) + "> &#x1F9F2 </a></td>");
        $("#magTable").append("</tr>")
    })
};

