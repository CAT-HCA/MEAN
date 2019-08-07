"use strict";

$(document).ready(function() {
    // Get HTML Elements
    var registerForm = $('#registerForm');
    var username = $('#username');
    var email = $('#email');
    var password = $('#password');
    var confirm = $('#confirm');
    var errMsg = $('#errMsg');

    // Bind Event Handlers
    registerForm.submit(function(event) {
        event.preventDefault();
        if (password.val().length < 8) {
            errMsg.html('Password must be at least 8 characters.');
            errMsg.show();
            password.focus();
        } else if (password.val() !== confirm.val()) {
            confirm.val('');
            confirm.focus();
            errMsg.html('Passwords do not match.');
            errMsg.show();
        } else {
            // AJAX POST request - Register
            $.ajax({
                type: 'POST',
                url: '/users',
                data: JSON.stringify({
                    'userName': $(username).val(),
                    'userEmail': $(email).val(),
                    'userPassword': $(password).val()
                }),
                success: (user) => {
                    if (user.error) {
                        errMsg.html('An error has occured. Please try again.');
                        errMsg.show();
                    } else {
                        document.location.href = "/login";
                    }
                },
                contentType: "application/json",
                dataType: 'json'
            });
        }
    });

    $(registerForm).bind("reset", function() {
        errMsg.html('');
        errMsg.hide();
        userName.focus();
    });
});