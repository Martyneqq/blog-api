const Article = require('../models/Article');

// GET all articles
exports.getAll = async (req, res) => {
  try {
    const articles = await Article.getAll();
    res.json({
      success: true,
      data: articles,
      count: articles.length
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// GET article by ID
exports.getById = async (req, res) => {
  try {
    const article = await Article.getById(req.params.id);
    if (!article) {
      return res.status(404).json({ success: false, error: 'Article not found' });
    }
    res.json({ success: true, data: article });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// CREATE new article
exports.create = async (req, res) => {
  try {
    const { title, content, author } = req.body;

    // Validation
    if (!title || !content) {
      return res.status(400).json({
        success: false,
        error: 'Title and content are required'
      });
    }

    const article = await Article.create(title, content, author);
    res.status(201).json({ success: true, data: article });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// UPDATE article
exports.update = async (req, res) => {
  try {
    const { title, content, author } = req.body;

    // Check if article exists
    const article = await Article.getById(req.params.id);
    if (!article) {
      return res.status(404).json({ success: false, error: 'Article not found' });
    }

    // Validation
    if (!title || !content) {
      return res.status(400).json({
        success: false,
        error: 'Title and content are required'
      });
    }

    const updated = await Article.update(
      req.params.id,
      title,
      content,
      author || article.author
    );
    res.json({ success: true, data: updated });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// DELETE article
exports.delete = async (req, res) => {
  try {
    const article = await Article.getById(req.params.id);
    if (!article) {
      return res.status(404).json({ success: false, error: 'Article not found' });
    }

    await Article.delete(req.params.id);
    res.json({ success: true, message: 'Article deleted' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
