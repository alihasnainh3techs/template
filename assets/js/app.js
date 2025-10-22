$(document).ready(function () {

    // apply icon according to theme
    $("html").attr("data-bs-theme") === "light" ? $("#btnTheme i").removeClass("ri-sun-line").addClass("ri-moon-line") : $("#btnTheme i").removeClass("ri-moon-line").addClass("ri-sun-line");

    // set current year
    $("#year").text(new Date().getFullYear());

    // metismenu plugin
    $("#metismenu").metisMenu();

    // toggle full screen
    $("#btnFullscreen").on("click", function () {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            $(this).attr("title", "Exit Full Screen");
            $("#btnFullscreen i").removeClass("ri-fullscreen-line").addClass("ri-fullscreen-exit-line");
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                $(this).attr("title", "Full Screen");
                $("#btnFullscreen i").removeClass("ri-fullscreen-exit-line").addClass("ri-fullscreen-line");
            }
        }
    });

    // change theme with local storage
    $("#btnTheme").on("click", function () {
        const theme = $("html").attr("data-bs-theme");
        if (theme === "light") {
            $("#btnTheme i").removeClass("ri-moon-line").addClass("ri-sun-line");
            $("html").attr("data-bs-theme", "dark");
            localStorage.setItem("data-bs-theme", "dark");
        } else {
            $("#btnTheme i").removeClass("ri-sun-line").addClass("ri-moon-line");
            $("html").attr("data-bs-theme", "light");
            localStorage.setItem("data-bs-theme", "light");
        }
    })

});