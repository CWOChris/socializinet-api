import Reaction from '../models/reaction';

exports.getAllReactions = async (_, res) => {
    try {
        const reactions = await Reaction.find();
        res.status(200).json(reactions);
    } catch (err) {
        res.status(500).json(err);
    }
};