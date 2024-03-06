"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var KEY = "loggedBlogAppUser";
var saveLoggedUser = function (user) {
    window.localStorage.setItem(KEY, JSON.stringify(user));
};
var getLoggedUser = function () {
    var loggedUserJSON = window.localStorage.getItem(KEY);
    if (loggedUserJSON) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return JSON.parse(loggedUserJSON);
    }
    else {
        return null;
    }
};
var getToken = function () {
    return getLoggedUser().token;
};
var removeLoggedUser = function () {
    window.localStorage.clear();
};
exports.default = {
    saveLoggedUser: saveLoggedUser,
    getLoggedUser: getLoggedUser,
    getToken: getToken,
    removeLoggedUser: removeLoggedUser
};
