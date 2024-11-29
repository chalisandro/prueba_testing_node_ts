"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByid = void 0;
const users = [
    { id: 1, name: 'Alisandro' },
    { id: 2, name: 'Dexali' }
];
const getUserByid = (id, callback) => {
    const user = users.find(user => user.id === id);
    if (!user) {
        return callback(`Usuario no encontrado con el id: ${id}`);
    }
    return callback(undefined, user);
};
exports.getUserByid = getUserByid;
