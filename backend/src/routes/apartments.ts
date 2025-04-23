import express from 'express';
import { listApartments, getApartmentById, createApartment } from '../controllers/apartmentController';

const router = express.Router();

router.get('/', listApartments);
router.get('/:id', getApartmentById);
router.post('/', createApartment);

export default router;
