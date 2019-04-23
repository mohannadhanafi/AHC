const validatior = require('validator');
const { contactitems, titles } = require('../../database/informativeModel');

exports.getTitle = async (req, res) => {
  try {
    const result = await titles.findAll();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};
exports.update = async (req, res) => {
  try {
    const data = req.body;
    const updateResult = await titles.update(data, { where: { id: 1 } });
    if (updateResult.length) {
      res.status(200).send({ message: 'Updated' });
    }
  } catch (error) {
    res.status(500).send('Server Error');
  }
};
exports.get = async (req, res) => {
  try {
    const result = await contactitems.findAll({ order: [['id', 'DESC']] });
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

exports.post = async (req, res) => {
  try {
    const data = req.body;
    // const count = await contactitems.count({ where: {} });
    // if (count >= 3) {
    //   return res.status(400).send({ message: ' you can only add three contactitems items !' });
    // }
    await contactitems.create(data);
    return res.status(200).send({ message: 'contact item has been added' });
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

exports.delete = (req, res) => {
  try {
    const { id } = req.body;
    contactitems.destroy({
      where: {
        id,
      },
    });
    res.status(200).send({
      message: 'Success, contactitems item deleted',
    });
  } catch (error) {
    res.status(500).send({
      message: 'Internal Server Error',
    });
  }
};

exports.getcontactitems = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await contactitems.findAll({ where: { id } });
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({
      message: 'Internal Server Error',
    });
  }
};

exports.updatecontactitems = async (req, res) => {
  try {
    const {
      data,
      params: { id },
    } = req.body;
    const { title, desc } = data;
    if (
      !title.trim()
      || !desc.trim()
      || !validatior.isLength(title, { min: 1, max: 30 })
    ) {
      res.status(400).send({
        message: 'Invalid inputs, please note the type of each input',
      });
    } else {
      contactitems.update(data, { where: { id } });
      res.status(200).send({ message: 'Updated is done' });
    }
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
};
