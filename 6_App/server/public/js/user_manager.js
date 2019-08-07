"use strict";

/*
 * This function dynamically builds / displays Users on the page using data from AJAX call to server
 *
 * @param users Array of User data
 */
function displayUsers(users) {
    $.each(users, (user, index) => {
        var currentUser = users[user];
        $('#tbody').append(
            $('<tr/>').append(
                $('<td/>').text(currentUser.USER_NAME)
            ).append(
                $('<td/>').text(currentUser.EMAIL_ADDRESS)
            ).append(
                $('<td/>')
                .append(
                    $('<button/>')
                    .attr('type', 'button')
                    .attr('class', 'btn btn-info btn-sm btn-edit')
                    .attr('value', currentUser.ID)
                    .text('Edit')
                )
                .append(
                    $('<button/>')
                    .attr('type', 'button')
                    .attr('class', 'btn btn-danger btn-sm btn-delete')
                    .attr('value', currentUser.ID)
                    .text('Delete')
                )
            ));
    });
}

/*
 * This function binds the click event handler to the dynamically created Edit and Delete buttons
 *
function bindClickEventHandlers(errMsg) {
 Error Message Div * @param 
 */
function bindClickEventHandlers(errMsg) {
    // Edit Btns
    $('.btn-edit').on('click', (e) => {
        var id = e.target.value;
        // TBD - follow the Delete example below to implement Edit functionality.
    });

    // Delete Btns
    $('.btn-delete').on('click', (e) => {
        var id = e.target.value;

        // AJAX DELETE request - Delete User
        $.ajax({
            type: 'DELETE',
            url: `/users/${id}`,
            success: (user) => {
                if (user.error) {
                    errMsg.html('Delete unsuccessful.');
                    errMsg.show();
                } else {
                    document.location.href = "/user_manager";
                }
            },
            contentType: "application/json",
            dataType: 'json'
        });
    });
}

$(document).ready(function() {
    // Show / Hide Menu Items
    $('#registerLink').hide();
    $('#loginLink').hide();
    $('#logoutLink').show();

    // Get HTML Elements
    var errMsg = $('#errMsg');

    // Get Users
    $.ajax({
        type: 'GET',
        url: '/users',
        success: (users) => {
            if (users.error) {
                errMsg.html('Login An error has occured.');
                errMsg.show();
            } else {
                if (users.length == 0) {
                    errMsg.html('No Users found.');
                    errMsg.show();

                } else {
                    errMsg.html('');
                    errMsg.hide();

                    displayUsers(users);
                    bindClickEventHandlers(errMsg);
                }
            }
        },
        contentType: "application/json",
        dataType: 'json'
    });
});