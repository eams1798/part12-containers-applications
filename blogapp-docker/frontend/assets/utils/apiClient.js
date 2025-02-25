"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var apiClient = axios_1.default.create({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    baseURL: import.meta.env.VITE_BACKEND_URL,
});
exports.default = apiClient;
