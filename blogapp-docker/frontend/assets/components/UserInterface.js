"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./styles/UserInterface.css");
var Menu_1 = __importDefault(require("./Menu"));
var react_router_dom_1 = require("react-router-dom");
var BlogList_1 = __importDefault(require("./BlogList"));
var UserList_1 = __importDefault(require("./UserList"));
var Blog_1 = __importDefault(require("./Blog"));
var react_router_dom_2 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var User_1 = __importDefault(require("./User"));
var NotFound_1 = __importDefault(require("./NotFound"));
var UserInterface = function (_a) {
    var loginUser = _a.loginUser;
    var blogs = (0, react_redux_1.useSelector)(function (state) { return __spreadArray([], state.blogs, true).sort(function (a, b) { return b.likes - a.likes; }); });
    var users = (0, react_redux_1.useSelector)(function (state) { return __spreadArray([], state.users, true); });
    var blogMatch = (0, react_router_dom_2.useMatch)("/blogs/:id");
    var blog = blogMatch ? blogs.find(function (blog) { return blog.id === blogMatch.params.id; }) : null;
    var userMatch = (0, react_router_dom_2.useMatch)("/users/:id");
    var user = userMatch ? users.find(function (user) { return user.id === userMatch.params.id; }) : null;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "user-interface d-flex flex-column", children: [(0, jsx_runtime_1.jsx)("div", { className: "container fixed-top menu-container", children: (0, jsx_runtime_1.jsx)(Menu_1.default, { user: loginUser }) }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(BlogList_1.default, { loginUser: loginUser, blogs: blogs }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/blogs/:id", element: blog ?
                            (0, jsx_runtime_1.jsx)(Blog_1.default, { blog: blog, loginUser: loginUser }, blog.id) :
                            (0, jsx_runtime_1.jsx)(NotFound_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/users", element: (0, jsx_runtime_1.jsx)(UserList_1.default, { users: users }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/users/:id", element: user ?
                            (0, jsx_runtime_1.jsx)(User_1.default, { user: user }, user.id) :
                            (0, jsx_runtime_1.jsx)(NotFound_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "*", element: (0, jsx_runtime_1.jsx)(NotFound_1.default, {}) })] })] }));
};
exports.default = UserInterface;
