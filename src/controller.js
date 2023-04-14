import service from './service.js';


class Controller {

    async getNewUser(req, res) {
        try {
            const user = await service.getNewUser();
            res.json(user);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAllUsers(req, res) {
        try {
        const users = await service.getAllUsers();
        res.json(users);
        }catch(e){
            console.log(e.message)
            res.status(500).json(e)
        }
    }
}


export default new Controller();