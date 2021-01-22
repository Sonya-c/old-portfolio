const HOST = location.hostname;

if (HOST == "127.0.0.1") {
    const link = [
        "index.html",
        "projects.html",
        "galery.html"
    ]
    const NAV = (document.getElementsByTagName("nav"))[0];
    const NAV_link = NAV.getElementsByTagName("a");

    for (let i = 0; i < NAV_link.length; i++) {
        NAV_link[i].href = link[i]; 
    }
}