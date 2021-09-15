interface UserData {
    email: string;
    password: string;
}

interface IUser {
    name: string;
    email: string;
    id?: number; // opcional
    password?: string;
    age?: number
}

class User implements IUser {
    name: string;
    email: string;
    id: number;
    password: string;
    age: number

    login(username: string, password: string): void {
        console.log('Iniciando sesión');
    }

    logout(): void {

    }

    signup(data: UserData): UserData {
        return data;
    }

}