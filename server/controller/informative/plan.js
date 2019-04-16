const { plan } = require('../../database/informativeModel');

exports.post = async (req, res) => {
  try {
    const data = req.body;
    await plan.create(data);
    res.status(200).send({ message: 'Partner has been added' });
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

exports.getAll = async (req, res) => {
  try {
    const result = await plan.findAll({
      order: [['id', 'DESC']]
    });
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    await plan.destroy({ where: { id } });
    res.status(200).send({ message: 'partner has been deleted' });
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

exports.getOne = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await plan.findAll({ where: { id } });
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

exports.update = async (request, response) => {
  try {
    const { id } = request.params;
    const data = request.body;
    await plan.update(data, { where: { id } });
    response.status(200).send({ message: 'Updated ...' });
  } catch (error) {
    return response.status(500).send({ message: 'Internal Server Error' });
  }
};
