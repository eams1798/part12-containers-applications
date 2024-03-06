"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setAxiosErrorMessage = exports.setNotification = exports.setAxiosError = exports.setCurrentNotification = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var notificationSlice = (0, toolkit_1.createSlice)({
    name: "notification",
    initialState: {
        message: "",
        type: null,
    },
    reducers: {
        setCurrentNotification: function (_state_, action) {
            return action.payload;
        },
        setAxiosError: function (_state_, action) {
            var axiosError = action.payload;
            var errorResponse = axiosError.response.data;
            return {
                type: "error",
                message: errorResponse.error,
            };
        },
    },
});
exports.setCurrentNotification = (_a = notificationSlice.actions, _a.setCurrentNotification), exports.setAxiosError = _a.setAxiosError;
var setNotification = function (notification) { return function (dispatch) {
    dispatch((0, exports.setCurrentNotification)(notification));
    setTimeout(function () {
        dispatch((0, exports.setCurrentNotification)({ message: "", type: null }));
    }, 5000);
}; };
exports.setNotification = setNotification;
var setAxiosErrorMessage = function (error) { return function (dispatch) {
    dispatch((0, exports.setAxiosError)(error));
    setTimeout(function () {
        dispatch((0, exports.setCurrentNotification)({ message: "", type: null }));
    }, 5000);
}; };
exports.setAxiosErrorMessage = setAxiosErrorMessage;
exports.default = notificationSlice.reducer;
