'use strict';

var buttons = document.querySelectorAll('.js-toggle-button');
var lists = document.querySelectorAll('.js-toggle-group');

buttons.forEach(function (item, index) {
        item.addEventListener('click', function () {
                item.classList.toggle('closed');
                lists[index].classList.toggle('closed');
        });
});

$(document).ready(function () {
        $('.btn-trigger').click(function (event) {
                $('.btn-trigger, .menu__primary, .menu__overlay').toggleClass('active');
        });

        $('.sub-menu').click(function () {
                $(this).toggleClass('active');
        });
});