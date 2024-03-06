"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var blogs_1 = require("../reducers/blogs");
var react_bootstrap_1 = require("react-bootstrap");
var BlogForm = function (_a) {
    var toggleVisibility = _a.toggleVisibility;
    var _b = (0, react_1.useState)(""), title = _b[0], setTitle = _b[1];
    var _c = (0, react_1.useState)(""), url = _c[0], setURL = _c[1];
    var _d = (0, react_1.useState)(""), author = _d[0], setAuthor = _d[1];
    var _e = (0, react_1.useState)(0), likes = _e[0], setLikes = _e[1];
    var dispatch = (0, react_redux_1.useDispatch)();
    var addBlog = function (e) {
        e.preventDefault();
        var blogObject = { title: title, url: url, author: author, likes: likes };
        void dispatch((0, blogs_1.createBlog)(blogObject));
        setTitle("");
        setAuthor("");
        setURL("");
        setLikes(0);
    };
    var handleFieldChange = function (e, field) {
        if (field === "title")
            setTitle(e.target.value);
        if (field === "url")
            setURL(e.target.value);
        if (field === "author")
            setAuthor(e.target.value);
        if (field === "likes")
            setLikes(parseInt(e.target.value));
    };
    return ((0, jsx_runtime_1.jsxs)(react_bootstrap_1.Form, { id: "form-addBlog", onSubmit: function (e) { e.preventDefault(); addBlog(e); }, children: [(0, jsx_runtime_1.jsxs)(react_bootstrap_1.Form.Group, { controlId: "formTitle", children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Label, { children: "Title" }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Control, { type: "text", value: title, onChange: function (e) { return handleFieldChange(e, "title"); } })] }), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Form.Group, { controlId: "formAuthor", children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Label, { children: "Author" }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Control, { type: "text", value: author, onChange: function (e) { return handleFieldChange(e, "author"); } })] }), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Form.Group, { controlId: "formURL", children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Label, { children: "URL" }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Control, { type: "text", value: url, onChange: function (e) { return handleFieldChange(e, "url"); } })] }), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Form.Group, { controlId: "formLikes", children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Label, { children: "Likes" }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Control, { type: "number", value: likes, onChange: function (e) { return handleFieldChange(e, "likes"); } })] }), (0, jsx_runtime_1.jsxs)("div", { className: "form-buttons d-flex container", children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { className: "col-xs-6 m-2", variant: "primary", type: "submit", children: "Add Blog" }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { className: "col-xs-6 m-2", variant: "primary", onClick: function () { return toggleVisibility(); }, children: "Cancel" })] })] }));
};
exports.default = BlogForm;
