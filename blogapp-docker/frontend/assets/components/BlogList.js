"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var Togglable_1 = __importDefault(require("./Togglable"));
var BlogForm_1 = __importDefault(require("./BlogForm"));
var react_router_dom_1 = require("react-router-dom");
var DeleteBlogBtn_1 = __importDefault(require("./DeleteBlogBtn"));
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
require("./styles/BlogList.css");
var BlogList = function (_a) {
    var loginUser = _a.loginUser, blogs = _a.blogs;
    var togglableRef = (0, react_1.useRef)(null);
    return ((0, jsx_runtime_1.jsxs)("div", { id: "blogs", className: "pt-5", children: [loginUser ?
                (0, jsx_runtime_1.jsxs)(Togglable_1.default, { className: "mt-2 mb-2", openButtonLabel: "New blog", closeButtonLabel: "_nobutton", ref: togglableRef, children: [(0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}), (0, jsx_runtime_1.jsx)(BlogForm_1.default, { toggleVisibility: function () { return togglableRef.current.toggleVisibility(); } })] })
                : (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}), (0, jsx_runtime_1.jsx)(react_bootstrap_1.ListGroup, { id: "blog-list", className: "mt-2 mb-2", children: blogs.map(function (blog) {
                    var _a;
                    return ((0, jsx_runtime_1.jsxs)(react_bootstrap_1.ListGroup.Item, { id: blog.id, className: "blog container d-flex justify-content-between align-items-center align-content-center", children: [(0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { className: "m-2 col-xs-5", to: "/blogs/".concat(blog.id), children: [blog.title, " by ", blog.author] }), (0, jsx_runtime_1.jsxs)("div", { className: "m-2 col-xs-6 d-flex align-items-center row flex-column-reverse flex-sm-row", children: [(0, jsx_runtime_1.jsx)(DeleteBlogBtn_1.default, { blog: blog, loginUser: loginUser }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Badge, { className: "bg-info n-comments col", children: "".concat((_a = blog.comments) === null || _a === void 0 ? void 0 : _a.length, " comments") })] })] }, blog.id));
                }) })] }));
};
exports.default = BlogList;
