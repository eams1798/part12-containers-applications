"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_bootstrap_1 = require("react-bootstrap");
var react_router_dom_1 = require("react-router-dom");
var UserList = function (_a) {
    var users = _a.users;
    return ((0, jsx_runtime_1.jsxs)("div", { id: "user-list", children: [(0, jsx_runtime_1.jsx)("h2", { children: "Users" }), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Table, { striped: true, bordered: true, hover: true, responsive: "md", children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", {}), (0, jsx_runtime_1.jsx)("th", { children: "blogs created" })] }) }), (0, jsx_runtime_1.jsx)("tbody", { children: users.map(function (user) { return ((0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/users/".concat(user.id), children: user.name }) }), (0, jsx_runtime_1.jsx)("td", { children: user.blogs.length })] }, user.id)); }) })] })] }));
};
exports.default = UserList;
