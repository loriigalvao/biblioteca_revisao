import User from '../models/userModel.js';

export const store = async (req, res) => {
    try {
        const user = await User.create(req.body);
        return res.status(201).json(user);
    } catch {
        return res.status(400).json({ error: 'User creation failed' });
    }
};

export const index = async (req, res) => {
    try {
        const users = await User.find().exec();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(400).json({ error: 'User search failed' });
    }
};

export const update = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body,).exec();
        return res.status(200).json(user);
    } catch (error) {
        return res.status(400).json({ error: 'User update failed' });
    }
};

export const destroy = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id).exec();
        return res.status(204).send();
    } catch (error) {
        return res.status(400).json({ error: 'User deletion failed' });
    }
};