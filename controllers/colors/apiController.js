const Color = require('../../models/color.js')

// API Color controllers returns JSON responses
const apiController = {
  // Get all colors for authenticated user
  index(req, res) {
    res.json(res.locals.data.colors)
  },

  // Get single color
  show(req, res) {
    res.json(res.locals.data.color)
  },

  // Create new color
  create(req, res) {
    res.status(201).json(res.locals.data.color)
  },

  // Update color
  update(req, res) {
    res.json(res.locals.data.color)
  },

  // Delete color
  destroy(req, res) {
    res.status(200).json({ message: 'Color successfully deleted' })
  }
}

module.exports = apiController 