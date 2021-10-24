const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: Product,
    });
    res.json(categoryData);
  } catch (error) {
    res.status(500).json('Error with route');
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryDataById = await Category.findAll({
      include: Product,
      where: {
        id: req.params.id,
      },
    });
    res.json(categoryDataById);
  } catch (error) {
    res.status(500).json('Error with route');
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCat = await Category.create(req.body);
    res.json(newCat);
  } catch (error) {
    res.status(500).json('Error with route');
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updateCat = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.json(updateCat);
  } catch (error) {
    res.status(500).json('Error with route');
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deleteCat = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(deleteCat);
  } catch (error) {
    res.status(500).json('Error with route');
  }
});

module.exports = router;
