import User from "@/interfaces/user";
import { resolveComponent } from "@vue/runtime-core";


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
            var user: User | undefined = this.users.find(x => x.id === id);
            if (user) resolve(user);
            else reject('User not found');
        })
    }
}

export default new UserService();