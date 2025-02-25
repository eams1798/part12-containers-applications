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
exports.loadUsers = exports.removeBlogFromUser = exports.removeUser = exports.addBlogToUser = exports.updateUser = exports.addUser = exports.setUsers = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var users_1 = __importDefault(require("../services/users"));
var usersSlice = (0, toolkit_1.createSlice)({
    name: "users",
    initialState: [],
    reducers: {
        setUsers: function (_state_, action) {
            return action.payload;
        },
        addUser: function (state, action) {
            state.push(action.payload);
        },
        updateUser: function (state, action) {
            var index = state.findIndex(function (user) { return user.id === action.payload.id; });
            state[index] = __assign(__assign({}, state[index]), action.payload);
        },
        addBlogToUser: function (state, action) {
            var index = state.findIndex(function (user) { return user.id === action.payload.id; });
            state[index].blogs.push(action.payload.blog);
        },
        removeUser: function (state, action) {
            return state.filter(function (user) { return user.id !== action.payload.id; });
        },
        removeBlogFromUser: function (state, action) {
            var index = state.findIndex(function (user) { return user.id === action.payload.id; });
            var blogIndex = state[index].blogs.findIndex(function (blog) { return blog.id === action.payload.blogId; });
            state[index].blogs.splice(blogIndex, 1);
        }
    },
});
exports.setUsers = (_a = usersSlice.actions, _a.setUsers), exports.addUser = _a.addUser, exports.updateUser = _a.updateUser, exports.addBlogToUser = _a.addBlogToUser, exports.removeUser = _a.removeUser, exports.removeBlogFromUser = _a.removeBlogFromUser;
var loadUsers = function () { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, users_1.default.getAll()];
            case 1:
                users = _a.sent();
                dispatch((0, exports.setUsers)(users));
                return [2 /*return*/];
        }
    });
}); }; };
exports.loadUsers = loadUsers;
exports.default = usersSlice.reducer;
