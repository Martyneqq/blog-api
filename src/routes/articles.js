const express = require('express');
const router = express.Router();
const articlesController = require('../controllers/articlesController');

// GET all articles
router.get('/', articlesController.getAll);

// GET article by ID
router.get('/:id', articlesController.getById);

// CREATE new article
router.post('/', articlesController.create);

// UPDATE article
router.put('/:id', articlesController.update);

// DELETE article
router.delete('/:id', articlesController.delete);

module.exports = router;
