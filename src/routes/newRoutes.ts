import { Router } from 'express';

import newCtrl from '../controllers/newController';

class NewRoutes {

    public router: Router;

    constructor() {
        this.router = Router();
        this.config();
    }

    private config(): void {
        this.router.get('/', newCtrl.getNews)

        this.router.get('/:id', newCtrl.getNew)

        this.router.post('/', newCtrl.createNew)

        this.router.put('/:id', newCtrl.editNew)

        this.router.delete('/:id', newCtrl.removeNew)
    }

}

const newRoutes = new NewRoutes();

export default newRoutes.router;