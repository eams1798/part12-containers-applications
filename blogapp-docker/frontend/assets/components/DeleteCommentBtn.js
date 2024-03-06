"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_redux_1 = require("react-redux");
var blogs_1 = require("../reducers/blogs");
var react_bootstrap_1 = require("react-bootstrap");
var DeleteCommentBtn = function (_a) {
    var blogId = _a.blogId, comment = _a.comment, loginUser = _a.loginUser;
    var dispatch = (0, react_redux_1.useDispatch)();
    var userComment = comment.user;
    if (!comment.blog) {
        comment.blog = {
            id: blogId,
            title: "",
            author: "",
            url: "",
        };
    }
    if (!(comment.user && userComment.username === (loginUser === null || loginUser === void 0 ? void 0 : loginUser.username))) {
        return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}));
    }
    return ((0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { className: "btn-deleteComment", variant: "danger", onClick: function () { return void dispatch((0, blogs_1.deleteComment)(comment)); }, children: "Delete" }));
};
exports.default = DeleteCommentBtn;
