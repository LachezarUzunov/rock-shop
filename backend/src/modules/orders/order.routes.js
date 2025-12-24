import { Router } from 'express';
import { createOrder, listOrders } from "./order.controller.js";
import {authGuard} from "../../middleware/auth.js";

const router = Router();

router.post('/', authGuard, createOrder);
router.get('/', authGuard, listOrders);

export default router;