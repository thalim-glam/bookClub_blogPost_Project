//Creating home routes for authentication
const router = require('express').Router();
const { Category } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const dbCategoryData = await Category.findAll({
      include: [
        {
          model: Painting,
          attributes: ['filename', 'description'],
        },
      ],
    });

    const categories = dbCategoryData.map((category) =>
      category.get({ plain: true })
    );

    res.render('homepage', {
      categories,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// login information
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});