document.querySelector(".cross").style.display = "none";

document.querySelector(".sliding").addEventListener("click", function () {
    document.querySelector(".sidebar").classList.toggle("sidebarGo");

    if (document.querySelector(".sidebar").classList.contains("sidebarGo")) {
        document.querySelector(".ham").style.display = "inline";
        document.querySelector(".main").style.marginLeft = "0px";
        document.querySelector(".cross").style.display = "none";
    } else {
        document.querySelector(".ham").style.display = "none";
        setTimeout(function () {
            document.querySelector(".cross").style.display = "inline";
            document.querySelector(".main").style.marginLeft = "250px";
        }, 350);
    }
})