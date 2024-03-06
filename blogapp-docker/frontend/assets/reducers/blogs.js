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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteComment = exports.removeBlog = exports.likeBlog = exports.createCommentInBlog = exports.createBlog = exports.initializeBlogs = exports.removeCommentFromBlog = exports.removeBlogById = exports.addCommentToBlog = exports.likeBlogById = exports.addBlog = exports.setBlogs = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var blogs_1 = __importDefault(require("../services/blogs"));
var users_1 = require("./users");
var notification_1 = require("./notification");
var axios_1 = require("axios");
var blogSlice = (0, toolkit_1.createSlice)({
    name: "blogs",
    initialState: [],
    reducers: {
        setBlogs: function (_state_, action) {
            return action.payload;
        },
        addBlog: function (state, action) {
            state.push(action.payload);
        },
        addCommentToBlog: function (state, action) {
            var comment = action.payload;
            var commentBlog = comment.blog;
            var blogId = state.findIndex(function (blog) { return blog.id === commentBlog.id; });
            state[blogId].comments.push(comment);
        },
        likeBlogById: function (state, action) {
            var blog = state.find(function (blog) { return blog.id === action.payload; });
            if (blog) {
                var index = state.indexOf(blog);
                state[index] = __assign(__assign({}, blog), { likes: blog.likes + 1 });
            }
        },
        removeBlogById: function (state, action) {
            return state.filter(function (blog) { return blog.id !== action.payload; });
        },
        removeCommentFromBlog: function (state, action) {
            var blogIndex = state.findIndex(function (blog) { return blog.id === action.payload.blog.id; });
            var commentIndex = state[blogIndex].comments.findIndex(function (comment) { return comment.id === action.payload.id; });
            state[blogIndex].comments.splice(commentIndex, 1);
        }
    },
});
exports.setBlogs = (_a = blogSlice.actions, _a.setBlogs), exports.addBlog = _a.addBlog, exports.likeBlogById = _a.likeBlogById, exports.addCommentToBlog = _a.addCommentToBlog, exports.removeBlogById = _a.removeBlogById, exports.removeCommentFromBlog = _a.removeCommentFromBlog;
var initializeBlogs = function () { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var blogs;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, blogs_1.default.getAll()];
            case 1:
                blogs = _a.sent();
                dispatch((0, exports.setBlogs)(blogs));
                return [2 /*return*/];
        }
    });
}); }; };
exports.initializeBlogs = initializeBlogs;
var createBlog = function (blog) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var newBlog, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, blogs_1.default.create(blog)];
            case 1:
                newBlog = _a.sent();
                dispatch((0, exports.addBlog)(newBlog));
                dispatch((0, users_1.addBlogToUser)({ id: newBlog.user.id, blog: newBlog }));
                dispatch((0, notification_1.setNotification)({
                    type: "ok",
                    message: "A new blog ".concat(newBlog.title, " by ").concat(newBlog.author, " added"),
                }));
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                if ((0, axios_1.isAxiosError)(error_1)) {
                    dispatch((0, notification_1.setAxiosErrorMessage)(error_1));
                }
                else {
                    console.log(error_1);
                }
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); }; };
exports.createBlog = createBlog;
var createCommentInBlog = function (comment) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var newComment, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, blogs_1.default.createComment(comment)];
            case 1:
                newComment = _a.sent();
                dispatch((0, exports.addCommentToBlog)(newComment));
                dispatch((0, notification_1.setNotification)({
                    type: "ok",
                    message: "A new comment added",
                }));
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                if ((0, axios_1.isAxiosError)(error_2)) {
                    dispatch((0, notification_1.setAxiosErrorMessage)(error_2));
                }
                else {
                    console.log(error_2);
                }
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); }; };
exports.createCommentInBlog = createCommentInBlog;
var likeBlog = function (blog) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var updatedBlog;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, blogs_1.default.update(blog.id, {
                    likes: blog.likes + 1,
                })];
            case 1:
                updatedBlog = _a.sent();
                dispatch((0, exports.likeBlogById)(updatedBlog.id));
                return [2 /*return*/];
        }
    });
}); }; };
exports.likeBlog = likeBlog;
var removeBlog = function (blog) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, blogs_1.default.remove(blog.id)];
            case 1:
                _a.sent();
                dispatch((0, exports.removeBlogById)(blog.id));
                dispatch((0, users_1.removeBlogFromUser)({ id: blog.user.id, blogId: blog.id }));
                dispatch((0, notification_1.setNotification)({
                    type: "ok",
                    message: "Blog ".concat(blog.title, " by ").concat(blog.author || "", " deleted succesfully")
                }));
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                if ((0, axios_1.isAxiosError)(error_3)) {
                    dispatch((0, notification_1.setAxiosErrorMessage)(error_3));
                }
                else {
                    console.log(error_3);
                }
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); }; };
exports.removeBlog = removeBlog;
var deleteComment = function (comment) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, blogs_1.default.removeComment(comment)];
            case 1:
                _a.sent();
                dispatch((0, exports.removeCommentFromBlog)(comment));
                dispatch((0, notification_1.setNotification)({
                    type: "ok",
                    message: "Comment deleted",
                }));
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                if ((0, axios_1.isAxiosError)(error_4)) {
                    dispatch((0, notification_1.setAxiosErrorMessage)(error_4));
                }
                else {
                    console.log(error_4);
                }
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); }; };
exports.deleteComment = deleteComment;
exports.default = blogSlice.reducer;
