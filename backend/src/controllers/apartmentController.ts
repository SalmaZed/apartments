import { Request, Response } from 'express';
import prisma from '../db/client';
import { Decimal, PrismaClientKnownRequestError } from '../../generated/prisma/runtime/library';

export const listApartments = async (req: Request, res: Response) => {
    try {
        const apartments = await prisma.apartment.findMany();
        return res.status(200).json(apartments);
    } catch (error) {
        console.error('Get Apartments Error:', error);
        return res.status(500).json({ error: 'Internal server error.' });
    }
};

export const getApartmentById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const apartment = await prisma.apartment.findUnique({ where: { id: Number(id) } });

        if (!apartment) {
            return res.status(404).json({ error: 'Apartment not found.' });
        }
        return res.status(200).json(apartment);
    } catch (error) {
        console.error('Get Apartment By ID Error:', error);
        return res.status(500).json({ error: 'Internal server error.' });
    }
};

export const createApartment = async (req: Request, res: Response) => {
    try {
        const { address, city, country, unitName, unitNumber, project, squareFeet, rentPrice } = req.body;

        // Validate the req body params are not null
        if (
            !address || !city || !country || !unitName ||
            unitNumber === undefined || !project || squareFeet === undefined ||
            rentPrice === undefined) {
            return res.status(400).json({ error: 'All fields are required.' });
        }

        // Create apartment
        const newApartment = await prisma.apartment.create({
            data: {
                address,
                city,
                country,
                unitName,
                unitNumber,
                project,
                squareFeet,
                rentPrice: Decimal(rentPrice)
            },
        });

        return res.status(201).json(newApartment);
    } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                // Unique constraint failed
                return res.status(409).json({ error: 'Unit name must be unique.' });
            }
        }
        console.error('Create Apartment Error:', error);
        return res.status(500).json({ error: 'Internal server error.' });
    }

};
