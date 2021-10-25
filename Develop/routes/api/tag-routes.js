const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: Product,
    });
    res.json(tagData);
  } catch (error) {
    res.status(500).json('Error with route');
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagDataById = await Tag.findAll({
      include: Product,
      where: {
        id: req.params.id,
      },
    });
    res.json(tagDataById);
  } catch (error) {
    res.status(500).json('Error with route');
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create(req.body);
    res.json(newTag);
  } catch (error) {
    res.status(500).json('Error with route');
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
