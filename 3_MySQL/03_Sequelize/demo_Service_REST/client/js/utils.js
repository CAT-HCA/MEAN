/*
 * Script for index.html
 * Requires user.js
 * Required by scripts.js
 * 
 * Note: This example App was previously written in Native JS, so most of the JS code is Native - with some new jquery thrown in.
 *       A good exercies for Students would be to conert to jQuery where applicable.
 */

// Force Strict Mode
"use strict";

/*
 * This function displays Users on the page
 * it is called from yserForm.submit() in scripts.js and deleteuser() below
 *
 * @param users      - Array of User Objects
 * @param usersList  - HTML <ul> Element to append dynamically created <li> Elements
 */
function displayUsers(users, usersList) {
    // Traverse User Object Literals in users Array and display on page
    for (var indx = 0; indx < users.length; indx++) {
        // get current User from Array
        var user = users[indx];

        // Create new Elements and Append to DOM
        var li = document.createElement('li');
        li.className = 'list-group-item  list-group-item-dark text-right';

        var span = document.createElement('span');
        span.className = 'text-left';
        var userName = document.createTextNode(user.userName);
        span.appendChild(userName);

        var editBtn = document.createElement('button');
        editBtn.className = 'btn btn-info';
        editBtn.value = user.getId();
        var editBtnTxt = document.createTextNode('Edit');
        editBtn.appendChild(editBtnTxt);

        var btnSpacer = document.createElement('span');
        btnSpacer.innerHTML = '&nbsp;';

        var deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger';
        deleteBtn.value = user.getId();
        var deletetBtnTxt = document.createTextNode('Delete');
        deleteBtn.appendChild(deletetBtnTxt);

        // Append new Elements to new <li>
        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(btnSpacer);
        li.appendChild(deleteBtn);

        // Append new <li> to usersList <ul>
        usersList.appendChild(li);
    }
}

/*
 * Function to add User to the DB
 * it is called from document 'click' EventListener and editBtn.click() in scripts.js
 *
 * @param userForm
 * @param userObj   - Object with User data to be persisted
 * @param users     -  Array of User Objects
 * @param usersList - HTML UL Element to append dynamically created LI Elements to
 
 */
function persistUser(userForm, userObj, users, usersList) {
    $.post("http://localhost:3000/users/register", userObj, function() {})
        .done(function(user) {
            loadPersistedUsers(users, usersList);
            userForm.reset();
        })
        .fail(function(e) {
            $('#msg').html('Error saving User to DB.');
            $('#msg').show();
        })
}

/*
 * Function to update an existing User in the DB
 * it is called from document 'click' EventListener and editBtn.click() in scripts.js
 *
 * @param userForm
 * @param userObj   - Object with User data to be persisted
 * @param users     -  Array of User Objects
 * @param usersList - HTML UL Element to append dynamically created LI Elements to
 
 */
function updateUser(userForm, userObj, users, usersList) {
    $.ajax({
        type: 'PUT',
        url: 'http://localhost:3000/users/',
        data: JSON.stringify(userObj),
        success: () => {
            loadPersistedUsers(users, usersList, true);
            toggleButtons();
            userForm.reset();
        },
        fail: () => {
            $('#msg').html('Error updating User in DB.');
            $('#msg').show();
        },
        contentType: "application/json",
        dataType: 'json'
    });
}

/*
 * Function to delete a User and return a new Array of users
 * it is called from document 'click' EventListener and editBtn.click() in scripts.js
 *
 * @param id        - Id of User to delete
 * @param users     -  Array of User Objects
 * @param usersList - HTML UL Element to append dynamically created LI Elements to
 */
function deleteUser(id, users, usersList) {
    $.ajax({
        type: 'DELETE',
        url: `http://localhost:3000/users/${id}`,
        data: JSON.stringify(),
        success: () => {
            loadPersistedUsers(users, usersList);
        },
        contentType: "application/json",
        dataType: 'json'
    });
}

/*
 * Function to load existing Users from DB
 * @param users          - Array of User Objects
 * @param usersList      - HTML UL Element to append dynamically created LI Elements to
 */
function loadPersistedUsers(users, usersList) {
    // clear existing list of Users
    usersList.innerHTML = '';

    // try and get item from DB
    $.getJSON('http://localhost:3000/users/', function() {})
        .done(function(pseristedUsers) {
            if (pseristedUsers.length > 0) {
                // clear existing users form Array - will reload from DB
                users = [];

                // loop through persisted Users
                for (var indx = 0; indx < pseristedUsers.length; indx++) {
                    // get current Object in Array
                    var pseristedUser = pseristedUsers[indx];
                    // create new user Object
                    var newUser = new User(pseristedUser.id, pseristedUser.user_name, pseristedUser.email, pseristedUser.is_admin);
                    // push to Array
                    users.push(newUser);
                }

                // Display users
                displayUsers(users, usersList);
            } // else no persisted users found
        })
        .fail(function() {
            $('#msg').html('Error getting Users form DB.');
            $('#alertSection').show();
        });
}

/*
 * Function to show/hide (toggle) Buttons
 * Doesn't apply to all Buttons on page, so apply individually
 */
function toggleButtons() {
    $('#submitBtn').toggle();
    $('#resetBtn').toggle();
    $('#editBtn').toggle();
    $('#cancelBtn').toggle();
}