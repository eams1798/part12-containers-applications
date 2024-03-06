"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var blogs_1 = __importDefault(require("./blogs"));
var notification_1 = __importDefault(require("./notification"));
var users_1 = __importDefault(require("./users"));
var loginUser_1 = __importDefault(require("./loginUser"));
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        blogs: blogs_1.default,
        notification: notification_1.default,
        users: users_1.default,
        loginUser: loginUser_1.default
    }
});
