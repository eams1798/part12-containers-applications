"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var DeleteCommentBtn_1 = __importDefault(require("./DeleteCommentBtn"));
var Comment = function (_a) {
    var _b;
    var blogId = _a.blogId, comment = _a.comment, loginUser = _a.loginUser, commentUsers = _a.commentUsers;
    if (!comment.user || commentUsers.length === 0) {
        return ((0, jsx_runtime_1.jsx)("div", { className: "comment d-flex", children: (0, jsx_runtime_1.jsx)("p", { className: "my-2", children: comment.content }) }));
    }
    if (typeof comment.user !== "string") {
        return ((0, jsx_runtime_1.jsxs)("div", { className: "comment d-flex align-items-center", children: [(0, jsx_runtime_1.jsxs)("p", { className: "col-sm-8 col-md-10 my-2", children: [comment.content, " ", (0, jsx_runtime_1.jsxs)("b", { children: ["- Added by ", (_b = comment.user) === null || _b === void 0 ? void 0 : _b.name] })] }), (0, jsx_runtime_1.jsx)(DeleteCommentBtn_1.default, { blogId: blogId, comment: comment, loginUser: loginUser })] }));
    }
    var user = commentUsers.find(function (user) { return user.id === comment.user; });
    return ((0, jsx_runtime_1.jsxs)("div", { className: "comment d-flex align-items-center", children: [(0, jsx_runtime_1.jsxs)("p", { className: "col-sm-8 col-md-10 my-2", children: [comment.content, " ", (0, jsx_runtime_1.jsxs)("b", { children: ["- Added by ", user.name] })] }), (0, jsx_runtime_1.jsx)(DeleteCommentBtn_1.default, { blogId: blogId, comment: __assign(__assign({}, comment), { user: user }), loginUser: loginUser })] }));
};
exports.default = Comment;
