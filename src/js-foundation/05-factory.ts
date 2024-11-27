interface buildMakPersonOptions{
    getId: () => string;
    getAge: (birthdate: string)=> number;
}
interface personOptions {
    name: string;
    birthdate: string;
}
import { getAge, getId } from "../plugins/index";

export const buildMakePerson = ({getId, getAge}: buildMakPersonOptions) => {

    return ({name,birthdate}: personOptions) => {
        return {
            id: getId(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate)
        }
    }
}





