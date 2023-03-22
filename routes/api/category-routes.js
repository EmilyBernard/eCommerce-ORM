const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
      // attributes: {
      // },
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  router.get('/:id', async (req, res) => {
    try {
      const categoryData = await Category.findByPk(req.params.id, {
        include: [{ model: Product }],
        // attributes: {
        // },
      });
  
      if (!categoryData) {
        res.status(404).json({ message: 'No category found with that id!' });
        return;
      }
  
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
});
// create a new category
router.post('/', (req, res) => {
  Category.create({
    name: req.body.name,
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
  })
    .then((newCategory) => {
      // Send the newly created row as a JSON object
      res.json(newCategory);
    })
    .catch((err) => {
      res.json(err);
    });
});


// update a category by its `id` value
router.put('/:id', (req, res) => {
    Category.update(
      {
        // The field you can update and the data attached to the request body.
        name: req.body.name,
      },
      {
        // Gets the category based on the id given in the request parameters
        where: {
          id: req.params.id,
        },
      }
    )
      .then((updatedCategory) => {
        // Sends the updated category as a json response
        res.json(updatedCategory);
      })
      .catch((err) => res.json(err));
});

// delete a category by its `id` value
router.delete('/:id', (req, res) => {
  Category.destroy(
    {
      // The field you can delete and the data attached to the request body.
      name: req.body.name,
    },
    {
      // Gets the category based on the id given in the request parameters
      where: {
        id: req.params.id,
      },
    }
  )
    .then((deletedCategory) => {
      // Sends the updated category as a json response
      res.json(deletedCategory);
    })
    .catch((err) => res.json(err));
});


module.exports = router;
