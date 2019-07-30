/*
 * Script for index.html
 * Requires user.js
 * 
 * Note: This example App was previously written in Native JS, so most of the JS code is Native - with some new jquery thrown in.
 *       A good exercies for Students would be to conert to jQuery where applicable.
 */

// Force Strict Mode
"use strict";

// GLOBAL Array to hold User Objects (Objects)
var users = [];
// GLOBAL Var to hold User to delete when editing
var userToDelete = '';

/*
 * Function to validate User Input and return vaildity
 *
 * @param userName     - Input element with User-entered User Name
 * @param email     - Input element with User-entered Email Address
 * @param msg          - HTML element to display error message if required
 *
 * @return valid       - true if all input is vaild, false if input is missing
 */
function validateInput(userName, email, msg) {
    var valid = false;

    // Valdiate input and set error msg if required
    if (userName.value === '') {
        msg.innerHTML = 'Please enter a User Name.';
        userName.focus();
    } else if (email.value === '') {
        msg.innerHTML = 'Please enter a email.';
        email.focus();
    } else {
        // All input is valid
        valid = true;
    }

    return valid;
}

// Wait for DOM to load
$(document).ready(function() {
    // Get DOM Elements
    var userForm = document.getElementById('userForm');
    var userName = document.getElementById('userName');
    var email = document.getElementById('email');
    var isAdmin = document.getElementById('isAdmin');
    var editBtn = document.getElementById('editBtn');
    var cancelBtn = document.getElementById('cancelBtn');

    // <span> to hold error message
    var msg = document.getElementById('msg');
    // <ul> element to hold dynamically created <li> elements
    var usersList = document.getElementById('usersList');

    // Bind Submit Event Listener to userForm
    userForm.addEventListener('submit', function(evt) {
        // prevent default form submission
        evt.preventDefault();

        // Validate input data
        if (validateInput(userName, email, msg)) {
            var isAdminSelected = isAdmin.checked ? 1 : 0;
            var userObj = { userName: userName.value, email: email.value, isAdmin: isAdminSelected };
            // call funct to persist to DB
            persistUser(this, userObj, usersList);
        } else {
            // invalid data, so show alert
            alertSection.classList.remove('hidden');
        }
    });

    // Bind Reset Event Listener to userForm
    userForm.addEventListener('reset', function() {
        // hide alert
        alertSection.classList.add('hidden');
        msg.innerHTML = '';

        // put cursor in userName field
        userName.focus();
    });

    // Edit Button (on edit form) Click Event
    editBtn.addEventListener('click', function() {
        var isAdminSelected = isAdmin.checked ? 1 : 0;
        var userObj = { id: parseInt(userToDelete), userName: userName.value, email: email.value, isAdmin: isAdminSelected };
        // call funct to update in DB
        updateUser(userForm, userObj, usersList);
    });

    // Cancel Button (on edit form) Click Event
    cancelBtn.addEventListener('click', function() {
        toggleButtons(); // utils.js
        userForm.reset();
    });

    document.addEventListener('click', function(evt) {
        // get event Target (element that was clicked on document)
        var target = evt.target;
        var value = target.value;
        var className = target.className;

        // check to see if it was edit or delete btn (or another element - skip)
        if (value && (className.indexOf('btn-info') > 0) || className.indexOf('btn-danger') > 0) {
            if (target.innerText == 'Edit') {
                // Filter out selected User to edit
                var filteredUser = users.filter((user) => {
                    userToDelete = value;
                    return user.getId() == value;
                });

                // Populate Form with User data - first (only) Element in filteredUser Array
                userName.value = filteredUser[0].userName;
                email.value = filteredUser[0].email;
                isAdmin.checked = filteredUser[0].isAdmin;

                toggleButtons(); // utils.js
                userName.focus();
            } else { // Delete
                // deleteUser() function is in utils.js
                deleteUser(value, usersList);
            }
        } // else skip element
    });

    // Call function (in utils.js) to get Users from DB
    loadPersistedUsers(usersList);
});