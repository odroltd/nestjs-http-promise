"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = __importDefault(require("axios"));
const http_constants_1 = require("./http.constants");
let HttpService = class HttpService {
    instance;
    put;
    post;
    patch;
    head;
    delete;
    get;
    request;
    constructor(instance = axios_1.default) {
        this.instance = instance;
        this.put = this.instance.put;
        this.post = this.instance.post;
        this.patch = this.instance.patch;
        this.head = this.instance.head;
        this.head = this.instance.head;
        this.delete = this.instance.delete;
        this.get = this.instance.get;
        this.request = this.instance.request;
    }
    get axiosRef() {
        return this.instance;
    }
};
exports.HttpService = HttpService;
exports.HttpService = HttpService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(http_constants_1.AXIOS_INSTANCE_TOKEN)),
    __metadata("design:paramtypes", [Function])
], HttpService);
