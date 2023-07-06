"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
let numbers = [1, 2, 3];
console.log("🚀 ~ file: definetelyTyped.ts:4 ~ numbers:", numbers);
let shuffled = lodash_1.default.shuffle(numbers);
console.log("🚀 ~ file: definetelyTyped.ts:6 ~ shuffled:", shuffled);
let reversed = lodash_1.default.reverse(numbers);
console.log("🚀 ~ file: definetelyTyped.ts:8 ~ reversed:", reversed);
