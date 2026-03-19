const { dbRun, dbGet, dbAll } = require('../db');

class Article {
  // Get all articles
  static async getAll() {
    return await dbAll('SELECT * FROM articles ORDER BY created_at DESC');
  }

  // Get article by ID
  static async getById(id) {
    return await dbGet('SELECT * FROM articles WHERE id = ?', [id]);
  }

  // Create new article
  static async create(title, content, author) {
    const result = await dbRun(
      'INSERT INTO articles (title, content, author) VALUES (?, ?, ?)',
      [title, content, author || 'Anonymous']
    );
    return { id: result.lastID, title, content, author };
  }

  // Update article
  static async update(id, title, content, author) {
    await dbRun(
      'UPDATE articles SET title = ?, content = ?, author = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
      [title, content, author, id]
    );
    return this.getById(id);
  }

  // Delete article
  static async delete(id) {
    await dbRun('DELETE FROM articles WHERE id = ?', [id]);
  }
}

module.exports = Article;
