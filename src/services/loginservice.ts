import User from '@/interfaces/user';
import UserService from './userservice'

class LoginService {

    async authorize(user: User) : Promise<boolean | undefined> {
        try {
            const userFound = await UserService.getByCredentials(user.email,user.password);
            return userFound ? true : false;
        } catch (error) {
            console.log(error);
        }
    }
}

export default new LoginService();