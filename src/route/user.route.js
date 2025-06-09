import {userregister} from "../controller/user.controller.js"
import {Router} from "express"
const router = Router();
router.route('/signup').post(userregister);

export default router;