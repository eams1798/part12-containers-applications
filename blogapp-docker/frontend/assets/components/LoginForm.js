"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var axios_1 = __importDefault(require("axios"));
var react_redux_1 = require("react-redux");
var notification_1 = require("../reducers/notification");
var loginUser_1 = require("../reducers/loginUser");
var react_bootstrap_1 = require("react-bootstrap");
var Togglable_1 = __importDefault(require("./Togglable"));
require("./styles/LoginForm.css");
var LoginForm = function (_a) {
    var toggleVisibility = _a.toggleVisibility;
    var _b = (0, react_1.useState)(""), username = _b[0], setUsername = _b[1];
    var _c = (0, react_1.useState)(""), password = _c[0], setPassword = _c[1];
    var dispatch = (0, react_redux_1.useDispatch)();
    var handleLogin = function (e) {
        e.preventDefault();
        try {
            void dispatch((0, loginUser_1.login)({ username: username, password: password }));
            setUsername("");
            setPassword("");
        }
        catch (error) {
            if (axios_1.default.isAxiosError(error)) {
                dispatch((0, notification_1.setAxiosErrorMessage)(error));
            }
            else {
                console.log(error);
            }
        }
    };
    return ((0, jsx_runtime_1.jsxs)(react_bootstrap_1.Form, { className: "login-form bg-light", onSubmit: function (e) { e.preventDefault(); handleLogin(e); }, children: [(0, jsx_runtime_1.jsxs)(react_bootstrap_1.Form.Group, { controlId: "formUsername", children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Label, { children: "Username" }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Control, { type: "text", value: username, onChange: function (_a) {
                            var target = _a.target;
                            return setUsername(target.value);
                        } })] }), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Form.Group, { controlId: "formPassword", children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Label, { children: "Password" }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Control, { type: "password", value: password, onChange: function (_a) {
                            var target = _a.target;
                            return setPassword(target.value);
                        } })] }), (0, jsx_runtime_1.jsxs)("div", { className: "form-buttons d-flex justify-content-evenly", children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { variant: "primary", type: "submit", id: "btn-login", children: "Login" }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { variant: "primary", onClick: function () { return toggleVisibility(); }, children: "Cancel" })] })] }));
};
var Login = function () {
    var togglableRef = (0, react_1.useRef)(null);
    return ((0, jsx_runtime_1.jsxs)(Togglable_1.default, { openButtonLabel: "Login", closeButtonLabel: "_nobutton", ref: togglableRef, children: [(0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}), (0, jsx_runtime_1.jsx)("div", { className: "responsive-controller", children: (0, jsx_runtime_1.jsx)(LoginForm, { toggleVisibility: function () { return togglableRef.current.toggleVisibility(); } }) })] }));
};
exports.default = Login;
