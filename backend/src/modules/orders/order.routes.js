import { Router } from 'express';
import { createOrder, listOrders } from "./order.controller.js";

const router = Router();

router.post('/', createOrder);
router.get('/', listOrders);

export default router;