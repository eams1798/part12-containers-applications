"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var loginUser_1 = require("../reducers/loginUser");
var react_bootstrap_1 = require("react-bootstrap");
require("./styles/Menu.css");
var LoginForm_1 = __importDefault(require("./LoginForm"));
var Menu = function (_a) {
    var user = _a.user;
    var dispatch = (0, react_redux_1.useDispatch)();
    return ((0, jsx_runtime_1.jsxs)(react_bootstrap_1.Navbar, { expand: "lg", className: "container menu", children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Navbar.Brand, { href: "/", children: "BlogApp" }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Navbar.Toggle, { "aria-controls": "basic-navbar-nav", className: "mx-3" }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Navbar.Collapse, { id: "basic-navbar-nav", className: "justify-content-end", children: (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Nav, { className: "mr-auto", children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Nav.Link, { as: react_router_dom_1.Link, to: "/", className: "m-2", children: "Blogs" }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Nav.Link, { as: react_router_dom_1.Link, to: "/users", className: "m-2", children: "Users" }), user ? ((0, jsx_runtime_1.jsxs)(react_bootstrap_1.Nav.Item, { className: "login-info m-2", children: [(0, jsx_runtime_1.jsxs)("span", { children: [user.name, " logged in"] }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { onClick: function () { return dispatch((0, loginUser_1.logout)()); }, children: "Logout" })] })) : ((0, jsx_runtime_1.jsx)(react_bootstrap_1.Nav.Item, { className: "m-2", children: (0, jsx_runtime_1.jsx)(LoginForm_1.default, {}) }))] }) })] }));
};
exports.default = Menu;
