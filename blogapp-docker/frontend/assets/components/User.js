"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
var react_bootstrap_1 = require("react-bootstrap");
var User = function (_a) {
    var _b;
    var user = _a.user;
    if (((_b = user.blogs) === null || _b === void 0 ? void 0 : _b.length) === 0) {
        return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h2", { children: user.name }), (0, jsx_runtime_1.jsx)("h3", { children: "No blogs" })] }));
    }
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h2", { children: user.name }), (0, jsx_runtime_1.jsx)("h3", { children: "Added blogs" }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.ListGroup, { children: user.blogs.map(function (blog) { return ((0, jsx_runtime_1.jsx)(react_bootstrap_1.ListGroup.Item, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/blogs/".concat(blog.id), children: blog.title }) }, blog.id)); }) })] }));
};
exports.default = User;
