import { Router } from 'express';
import controller from './controller.js';


const router = Router();


router.get('/new', controller.getNewUser);
router.get('/users',controller.getAllUsers);


export default router;