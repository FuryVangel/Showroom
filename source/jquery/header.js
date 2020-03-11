$(document).ready(function() {
        $('.btn-trigger').click(function () {
                $('.btn-trigger, .menu__primary, .menu__overlay').toggleClass('active');
        });

        $('.sub-menu').click(function() {
                $(this).toggleClass('active');
        });
});