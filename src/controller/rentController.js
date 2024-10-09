import Rent from '../models/rentModel.js';

export const store = async (req, res) => {
    try {
        const rent = await Rent.create(req.body);
        return res.status(201).json(rent);
    } catch {
        return res.status(400).json({ error: 'Rent creation failed' });
    }
};

export const index = async (req, res) => {
    try {
        const rents = await Rent.find().exec();
        return res.status(200).json(rents);
    } catch (error) {
        return res.status(400).json({ error: 'Rent search failed' });
    }
};

export const update = async (req, res) => {
    try {
        const rent = await Rent.findByIdAndUpdate(req.params.id, req.body,).exec();
        return res.status(200).json(rent);
    } catch (error) {
        return res.status(400).json({ error: 'Rent update failed' });
    }
}

export const destroy = async (req, res) => {
    try {
        await Rent.findByIdAndDelete(req.params.id).exec();
        return res.status(204).send();
    } catch (error) {
        return res.status(400).json({ error: 'Rent deletion failed' });
    }
};