import Base from "./base";
import Menu from "./menu";

export default interface User extends Base {
    fname: string;
    sname: string;
    email: string;
    password: string;
    enable: boolean;
    menus: Menu[];
}