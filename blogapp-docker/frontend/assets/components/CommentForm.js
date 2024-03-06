"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var blogs_1 = require("../reducers/blogs");
var react_bootstrap_1 = require("react-bootstrap");
var CommentForm = function (_a) {
    var blogId = _a.blogId, loginUser = _a.loginUser;
    var contentRef = (0, react_1.useRef)(null);
    var isAnonymousRef = (0, react_1.useRef)(null);
    var handleSubmit = function (e) {
        e.preventDefault();
        var content = contentRef.current.value;
        var isAnonymous = isAnonymousRef.current.checked;
        if (isAnonymous) {
            var comment = { content: content, blog: blogId };
            void dispatch((0, blogs_1.createCommentInBlog)(comment));
        }
        else {
            var comment = { content: content, blog: blogId, user: loginUser };
            void dispatch((0, blogs_1.createCommentInBlog)(comment));
        }
        contentRef.current.value = "";
    };
    var dispatch = (0, react_redux_1.useDispatch)();
    return ((0, jsx_runtime_1.jsxs)(react_bootstrap_1.Form, { onSubmit: handleSubmit, className: "container", children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Row, { className: "mb-3", children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, { children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.InputGroup, { children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.FormControl, { placeholder: "Enter your comment...", "aria-label": "Comment", "aria-describedby": "basic-addon2", ref: contentRef }) }) }) }), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Row, { className: "mb-3 row d-flex align-items-center", children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, { sm: "8", md: "10", children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Group, { controlId: "formBasicCheckbox", children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Check, { type: "checkbox", label: "Post as anonymous", ref: isAnonymousRef, disabled: !loginUser }) }) }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, { sm: "auto", children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { variant: "primary", type: "submit", children: "Submit" }) })] })] }));
};
exports.default = CommentForm;
