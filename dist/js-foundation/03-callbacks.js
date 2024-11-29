"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByid = getUserByid;
const users = [
    {
        id: 1,
        name: 'Alisandro'
    },
    {
        id: 2,
        name: 'Dexali'
    }
];
function getUserByid(id, callback) {
    const user = users.find(function (user) {
        return user.id === id;
    });
    if (!user) {
        setTimeout(() => {
            return callback(`Usuario no encontrado con el id: ${id}`);
        }, 2500);
        return;
    }
    return callback(undefined, user);
}
