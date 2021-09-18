import Menu from '../interfaces/menu'
//import http from './httpclient'

class MenuService {

    menus: Menu[] = [
        {
            name: 'Home',
            icon: '',
            url: '/'
        },
        {
            name: 'About',
            icon: '',
            url: '/about'
        },
        {
            name: 'Users',
            icon: '',
            url: '/users'
        }
    ]

    getAll() : Promise<Menu[]> {
        return new Promise(resolve => resolve(this.menus));
        //return http.get('/menu');
    }

    insert(menu: Menu) : Promise<boolean> {
        return new Promise((resolve) => {
            this.menus.push(menu);
            resolve(true);
        });
    }
}

export default new MenuService();