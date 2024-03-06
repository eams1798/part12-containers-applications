"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_redux_1 = require("react-redux");
var react_1 = require("react");
var Notification = function () {
    var notification = (0, react_redux_1.useSelector)(function (state) { return state.notification; });
    var textAndBorderColor = notification.type === "error" ? "red" : "green";
    var styleNotif = {
        color: textAndBorderColor,
        background: "lightgrey",
        fontStyle: "italic",
        fontSize: 20,
        borderStyle: "solid",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    };
    (0, react_1.useEffect)(function () {
        if (notification.message) {
            window.scrollTo(0, 0);
        }
    }, [notification]);
    return !notification.message ? ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {})) : ((0, jsx_runtime_1.jsx)("div", { id: "notification", style: styleNotif, children: notification.message }));
};
exports.default = Notification;
