import User from "@/interfaces/user";

class UserService {

    users: User[] = [
        {
            id: 1,
            fname: 'Rodrigo',
            sname: 'Belo',
            email: 'rodrigootario019@gmail.com',
            password: '1234',
            menus: []
        }
    ];

    getAll() : Promise<User[]> {
        return new Promise((resolve) => {
            resolve(this.users);
        });
    }

    get(id:number) : Promise<User> {
        return new Promise((resolve,reject) => {
            const user: User | undefined = this.users.find(x => x.id === id);
            if (user) resolve(user);
            else reject('User not found!');
        })
    }

    getByCredentials(email: string, password: string) : Promise<User> {
        return new Promise((resolve,reject) => {
            const user = this.users.find(x => x.email === email && x.password === password);
            if (user) resolve(user);
            else reject('User not found!');
        });
    }
}

export default new UserService();