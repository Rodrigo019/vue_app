import Menu from '../interfaces/menu'
import http from './httpclient'

class MenuService {

    getAll() : Promise<Menu[]> {
        return http.get('/menu');
    }
}

export default new MenuService();