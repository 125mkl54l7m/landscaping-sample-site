$(function () {
    $('.product-page-button').click(function () {
        const path = window.location.pathname;
        var buttonId = String("/products/"+this.id)
        $(this).attr('href', buttonId);  // setting href upon clicking, didn't want to expose the url
    });
});