import Livros from '../models/livrosModel.js';

export const store = async (req, res) => {
    try {
        const livros = await Livros.create(req.body);
        return res.status(201).json(livros);
    } catch {
        return res.status(400).json({ error: 'Book creation failed' });
    }
};

export const index = async (req, res) => {
    try {
        const livros = await Livros.find().exec();
        return res.status(200).json(livros);
    } catch (error) {
        return res.status(400).json({ error: 'Book search failed' });
    }
};

export const update = async (req, res) => {
    try {
        const livros = await Livros.findByIdAndUpdate(req.params.id, req.body,).exec();
        return res.status(200).json(livros);
    } catch (error) {
        return res.status(400).json({ error: 'Book update failed' });
    }
};

export const destroy = async (req, res) => {
    try {
        await Livros.findByIdAndDelete(req.params.id).exec();
        return res.status(204).send();
    } catch (error) {
        return res.status(400).json({ error: 'Book deletion failed' });
    }
};