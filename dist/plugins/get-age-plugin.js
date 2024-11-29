"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAge = void 0;
const getAgePlugin = require('get-age');
const getAge = (birthdate) => {
    return getAgePlugin(birthdate);
};
exports.getAge = getAge;
