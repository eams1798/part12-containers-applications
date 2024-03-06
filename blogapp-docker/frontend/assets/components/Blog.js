"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var blogs_1 = require("../reducers/blogs");
var react_redux_1 = require("react-redux");
require("./styles/Blog.css");
var DeleteBlogBtn_1 = __importDefault(require("./DeleteBlogBtn"));
var Comments_1 = __importDefault(require("./Comments"));
var react_bootstrap_1 = require("react-bootstrap");
var Blog = function (_a) {
    var id = _a.id, blog = _a.blog, loginUser = _a.loginUser;
    var dispatch = (0, react_redux_1.useDispatch)();
    return ((0, jsx_runtime_1.jsxs)("div", { id: id, className: "blog pt-5", children: [(0, jsx_runtime_1.jsxs)("ul", { className: "blog-content", children: [(0, jsx_runtime_1.jsxs)("div", { className: "blog-title-container d-flex align-items-center", children: [(0, jsx_runtime_1.jsx)("h3", { className: "col-5 col-sm-8 col-md-10", children: blog.title }), (0, jsx_runtime_1.jsx)("div", { className: "col-2", children: (0, jsx_runtime_1.jsx)(DeleteBlogBtn_1.default, { blog: blog, loginUser: loginUser }) })] }), (0, jsx_runtime_1.jsxs)("li", { children: ["Author: ", blog.author] }), (0, jsx_runtime_1.jsxs)("li", { children: ["URL: ", blog.url] }), (0, jsx_runtime_1.jsxs)("li", { className: "d-flex align-items-center", children: [(0, jsx_runtime_1.jsxs)("span", { className: "col-5 col-sm-8 col-md-10", children: ["Likes: ", blog.likes] }), loginUser ? ((0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { className: "mx-2 btn-like", variant: "primary", onClick: function () { return void dispatch((0, blogs_1.likeBlog)(blog)); }, children: "Like" })) : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}))] })] }), (0, jsx_runtime_1.jsx)(Comments_1.default, { blogId: blog.id, loginUser: loginUser, comments: blog.comments })] }));
};
exports.default = Blog;
