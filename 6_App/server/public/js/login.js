"use strict";

$(document).ready(function() {
    // Get HTML Elements
    var userName = $('#username');
    var password = $('#password');
    var loginForm = $('#loginForm');
    var errMsg = $('#errMsg');

    loginForm.submit(function(e) {
        e.preventDefault();

        // AJAX POST request - Login
        $.ajax({
            type: 'POST',
            url: '/users/login',
            data: JSON.stringify({
                'userName': $(username).val(),
                'userPassword': $(password).val()
            }),
            success: (user) => {
                if (user.error) {
                    errMsg.html('Login unsuccessful.');
                    errMsg.show();
                } else {
                    document.location.href = "/user_manager";
                }
            },
            contentType: "application/json",
            dataType: 'json'
        });
    });

    $(loginForm).bind("reset", function() {
        errMsg.html('');
        errMsg.hide();
        userName.focus();
    });
});