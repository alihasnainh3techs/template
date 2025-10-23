$(document).ready(function () {
    function greeting() {
        const hour = new Date().getHours();
        let greeting;

        if (hour < 12) {
            greeting = "Good Morning,";
        } else if (hour < 18) {
            greeting = "Good Afternoon,";
        } else {
            greeting = "Good Evening,";
        }

        $(".greeting span").text(greeting);
    } greeting();
});
