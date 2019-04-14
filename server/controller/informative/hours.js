const { hours } = require('../../database/informativeModel');

exports.get = async (req, res) => {
    try {
        const result = await hours.findAll();
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send('Internal Server Error')
    }
}

exports.update = async (req, res) => {
    try {
        const data = req.body;
        await hours.update(data, {where: {}});
        res.status(200).send({message: 'Openning hours have been updated'})
    } catch (error) {
        res.status(500).send('Internal Server Error')
    }
}