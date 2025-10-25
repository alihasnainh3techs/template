$(document).ready(function () {

    // Initialize Perfect Scrollbar
    new PerfectScrollbar('.ps-container', {
        wheelPropagation: false,
    });

    $('.notification-scroller').each(function () {
        new PerfectScrollbar(this, {
            wheelPropagation: false,
        });
    });

    // metismenu plugin
    $("#metismenu").metisMenu();

    // apply icon according to theme
    $("html").attr("data-bs-theme") === "light" ? $("#btnTheme i").removeClass("ri-sun-line").addClass("ri-moon-line") : $("#btnTheme i").removeClass("ri-moon-line").addClass("ri-sun-line");

    const sidebar = $(".aside");
    const menuLinks = $(".sidebar-menu-link[data-sidebar-dropdown]");
    const SIDEBAR_KEY = "sidebar-state";

    // Apply saved sidebar state from localStorage
    const savedState = localStorage.getItem(SIDEBAR_KEY);
    if (savedState === "closed") {
        sidebar.removeClass("aside-open").addClass("aside-closed");
        menuLinks.removeClass("has-arrow");
    } else {
        sidebar.removeClass("aside-closed").addClass("aside-open");
        menuLinks.addClass("has-arrow");
    }

    // set current year
    $("#year").text(new Date().getFullYear());

    const overlay = $(".overlay");
    const btnCloseSidebar = $("#btnCloseSidebar");

    if (window.innerWidth <= 992) {
        sidebar.addClass("aside-mobile");
        sidebar.removeClass("aside-closed");
    }

    $(window).on("resize", function () {
        if (window.innerWidth <= 992) {
            sidebar.addClass("aside-mobile");
            sidebar.removeClass("aside-closed");
        }
    });

    // Toggle sidebar
    $("#btnSidebar").on("click", function () {
        if (window.innerWidth >= 992) {
            if (sidebar.hasClass("aside-open")) {
                sidebar.removeClass("aside-open").addClass("aside-closed");
                menuLinks.removeClass("has-arrow");
                localStorage.setItem(SIDEBAR_KEY, "closed");
            } else {
                sidebar.removeClass("aside-closed").addClass("aside-open");
                menuLinks.addClass("has-arrow");
                localStorage.setItem(SIDEBAR_KEY, "open");
            }
        } else {
            overlay.removeClass("d-none");
            $(".aside-mobile").addClass("active");
        }
    });

    btnCloseSidebar.on("click", function () {
        overlay.addClass("d-none");
        $(".aside-mobile").removeClass("active");
    })

    overlay.on("click", function () {
        overlay.addClass("d-none");
        $(".aside-mobile").removeClass("active");
    })

    // Sidebar hover (mouseenter / mouseleave)
    sidebar.on("mouseenter", function () {
        if (sidebar.hasClass("aside-closed")) {
            menuLinks.addClass("has-arrow");
            sidebar.addClass("aside-hovered");
        }
    });

    sidebar.on("mouseleave", function () {
        if (sidebar.hasClass("aside-closed")) {
            menuLinks.removeClass("has-arrow");
            sidebar.removeClass("aside-hovered");
        }
    });

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

    // notification menu
    const $notifMenu = $(".notification-menu");

    // hide initially
    $notifMenu.hide();

    // open/close on button click
    $("#btnNotification").on("click", function () {
        if ($notifMenu.is(":visible")) {
            $notifMenu.fadeOut();
        } else {
            $notifMenu.fadeIn();
        }
    });

    // close button click
    $("#btncloseNotification").on("click", function () {
        $notifMenu.fadeOut();
    });

});