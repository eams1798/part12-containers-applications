"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_redux_1 = require("react-redux");
var blogs_1 = require("../reducers/blogs");
var react_router_dom_1 = require("react-router-dom");
var react_bootstrap_1 = require("react-bootstrap");
require("./styles/DeleteBlogBtn.css");
var DeleteBlogBtn = function (_a) {
    var _b;
    var blog = _a.blog, loginUser = _a.loginUser;
    var dispatch = (0, react_redux_1.useDispatch)();
    var navigate = (0, react_router_dom_1.useNavigate)();
    var remove = function () {
        navigate("/");
        void dispatch((0, blogs_1.removeBlog)(blog));
    };
    if (!(((_b = blog.user) === null || _b === void 0 ? void 0 : _b.username) === (loginUser === null || loginUser === void 0 ? void 0 : loginUser.username))) {
        return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}));
    }
    return ((0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { className: "btn-deleteBlog m-2 col", variant: "danger", onClick: function () { return void remove(); }, children: "Delete" }));
};
exports.default = DeleteBlogBtn;
