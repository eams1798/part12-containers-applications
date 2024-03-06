"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var UserInterface_1 = __importDefault(require("./components/UserInterface"));
var Notification_1 = __importDefault(require("./components/Notification"));
var react_redux_1 = require("react-redux");
var blogs_1 = require("./reducers/blogs");
var loginUser_1 = require("./reducers/loginUser");
require("./App.css");
var users_1 = require("./reducers/users");
var axios_1 = require("axios");
var notification_1 = require("./reducers/notification");
var react_bootstrap_1 = require("react-bootstrap");
var App = function () {
    var dispatch = (0, react_redux_1.useDispatch)();
    var user = (0, react_redux_1.useSelector)(function (state) { return state.loginUser; });
    (0, react_1.useEffect)(function () {
        try {
            void dispatch((0, blogs_1.initializeBlogs)());
            void dispatch((0, users_1.loadUsers)());
        }
        catch (error) {
            if ((0, axios_1.isAxiosError)(error)) {
                dispatch((0, notification_1.setAxiosErrorMessage)(error));
            }
            else {
                console.log(error);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    (0, react_1.useEffect)(function () {
        dispatch((0, loginUser_1.loadLoginUser)());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return ((0, jsx_runtime_1.jsxs)(react_bootstrap_1.Container, { children: [(0, jsx_runtime_1.jsx)(Notification_1.default, {}), (0, jsx_runtime_1.jsx)(UserInterface_1.default, { loginUser: user })] }));
};
exports.default = App;
