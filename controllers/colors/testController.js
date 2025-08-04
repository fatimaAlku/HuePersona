const Color = require('../../models/color')
const Result = require('../../models/result')

// Predefined color palettes for each personality type
const palettes = {
  calm: [
    { name: 'Sky Blue', hexValue: '#87CEEB', description: 'A calming light blue reminiscent of the sky.' },
    { name: 'Lavender', hexValue: '#E6E6FA', description: 'A gentle, soft purple associated with relaxation.' },
    { name: 'Mint', hexValue: '#98FF98', description: 'Fresh and soothing, like a morning breeze.' }
  ],
  bold: [
    { name: 'Crimson', hexValue: '#DC143C', description: 'Fierce and passionate red.' },
    { name: 'Gold', hexValue: '#FFD700', description: 'Bold and radiant gold.' },
    { name: 'Electric Blue', hexValue: '#7DF9FF', description: 'Striking, energetic blue.' }
  ],
  balanced: [
    { name: 'Olive Green', hexValue: '#808000', description: 'Grounded and natural, symbolizing balance.' },
    { name: 'Taupe', hexValue: '#483C32', description: 'Neutral and reliable with warm undertones.' },
    { name: 'Slate Blue', hexValue: '#6A5ACD', description: 'Blends stability and creativity perfectly.' }
  ]
}

const testController = {
  // GET /test – show the test form
  showTestForm: (req, res) => {
    res.render('colors/test', { token: req.query.token })
  },

  // POST /results – process test, generate palette
  handleResults: async (req, res) => {
    try {
      const userId = req.user._id
      const answers = Object.values(req.body)

      // Count frequency of each personality type
      const counts = { calm: 0, bold: 0, balanced: 0 }
      answers.forEach((answer) => {
        if (counts[answer]) counts[answer]++
      })

      // Find the highest scoring type
      const resultType = Object.keys(counts).reduce((a, b) =>
        counts[a] > counts[b] ? a : b
      )

      const selectedPalette = palettes[resultType]

      // Add colors to the database for the user
      const createdColors = await Promise.all(
        selectedPalette.map((color) =>
          Color.create({ ...color, user: userId })
        )
      )

      // Optionally store result model (for analytics or tracking)
      await Result.create({
        user: userId,
        personalityType: resultType,
        answers,
        colors: createdColors.map((c) => c._id)
      })

      // Redirect back to color index with token
      const token = req.query.token
      res.redirect(`/colors?token=${token}`)
    } catch (err) {
      console.error('Test result processing failed:', err)
      res.status(500).send('Something went wrong. Please try again.')
    }
  }
}

module.exports = testController

