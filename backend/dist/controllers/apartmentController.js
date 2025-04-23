"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApartment = exports.getApartmentById = exports.listApartments = void 0;
const client_1 = __importDefault(require("../db/client"));
const library_1 = require("../../generated/prisma/runtime/library");
const listApartments = async (req, res) => {
    try {
        const apartments = await client_1.default.apartment.findMany();
        return res.status(200).json(apartments);
    }
    catch (error) {
        console.error('Get Apartments Error:', error);
        return res.status(500).json({ error: 'Internal server error.' });
    }
};
exports.listApartments = listApartments;
const getApartmentById = async (req, res) => {
    try {
        const { id } = req.params;
        const apartment = await client_1.default.apartment.findUnique({ where: { id: Number(id) } });
        if (!apartment) {
            return res.status(404).json({ error: 'Apartment not found.' });
        }
        return res.status(200).json(apartment);
    }
    catch (error) {
        console.error('Get Apartment By ID Error:', error);
        return res.status(500).json({ error: 'Internal server error.' });
    }
};
exports.getApartmentById = getApartmentById;
const createApartment = async (req, res) => {
    try {
        const { address, city, country, unitName, unitNumber, project, squareFeet, rentPrice } = req.body;
        // Validate the req body params are not null
        if (!address || !city || !country || !unitName ||
            unitNumber === undefined || !project || squareFeet === undefined ||
            rentPrice === undefined) {
            return res.status(400).json({ error: 'All fields are required.' });
        }
        // Create apartment
        const newApartment = await client_1.default.apartment.create({
            data: {
                address,
                city,
                country,
                unitName,
                unitNumber,
                project,
                squareFeet,
                rentPrice: (0, library_1.Decimal)(rentPrice)
            },
        });
        return res.status(201).json(newApartment);
    }
    catch (error) {
        if (error instanceof library_1.PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                // Unique constraint failed
                return res.status(409).json({ error: 'Unit name must be unique.' });
            }
        }
        console.error('Create Apartment Error:', error);
        return res.status(500).json({ error: 'Internal server error.' });
    }
};
exports.createApartment = createApartment;
