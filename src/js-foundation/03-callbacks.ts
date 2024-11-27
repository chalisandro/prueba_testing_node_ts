interface User{
    id: number;
    name: string;
}
const users: User[] = [
    {
        id: 1,
        name: 'Alisandro'
    },
    {
        id: 2,
        name: 'Dexali'
    }
]

export function getUserByid( id: number,callback: (err?: string, user?: User) => void) {
    const user = users.find(function (user) {
        return user.id === id;
    })
    if(!user){
        return callback(`Usuario no encontrado con el id: ${id}`);
    }
    return callback(undefined, user);
}
