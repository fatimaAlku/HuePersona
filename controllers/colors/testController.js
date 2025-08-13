const Color = require('../../models/color')
const Result = require('../../models/result')


const palettes = {
  calm: [
    { name: 'Sky Blue', hexValue: '#87CEEB', description: 'A calming light blue reminiscent of the sky.' },
    { name: 'Lavender', hexValue: '#E6E6FA', description: 'A gentle, soft purple associated with relaxation.' },
    { name: 'Seafoam', hexValue: '#9FE2BF', description: 'A tranquil greenish hue that evokes peaceful ocean vibes.' }
  ],
  bold: [
    { name: 'Crimson', hexValue: '#DC143C', description: 'Fierce and passionate red.' },
    { name: 'Yellow', hexValue: '#FAD920FF', description: 'Bold and radiant yellow.' },
    { name: 'Electric Blue', hexValue: '#071DA9FF', description: 'Striking, energetic blue.' }
  ],
  balanced: [
    { name: 'Olive Green', hexValue: '#808000', description: 'Grounded and natural, symbolizing balance.' },
    { name: 'Taupe', hexValue: '#483C32', description: 'Neutral and reliable with warm undertones.' },
    { name: 'Dusty Rose', hexValue: '#DCAE96', description: 'A muted pinkish tone that adds warmth and calm.' }
  ]
}

const testController = {
  // GET /test – show the test form
  showTestForm: (req, res) => {
    res.render('colors/test', { token: req.query.token })
  },

  // POST /results – process test
 handleResults: async (req, res) => {
  try {
    const userId = req.user._id;
    const answers = Object.values(req.body);

    // Count frequencies
    const counts = { calm: 0, bold: 0, balanced: 0 };
    for (let answer of answers) {
      if (counts.hasOwnProperty(answer)) {
        counts[answer]++;
      }
    }

    // Determine the resultType based on highest count
    let resultType = 'calm'; // default
    let maxCount = 0;

    for (const type in counts) {
      if (counts[type] > maxCount) {
        maxCount = counts[type];
        resultType = type;
      }
    }

    const selectedPalette = palettes[resultType];

    // Create the colors in DB
    const createdColors = await Promise.all(
      selectedPalette.map((color) =>
        Color.create({ ...color, user: userId })
      )
    );

    await Result.create({
      user: userId,
      answers,
      colors: createdColors.map((c) => c._id),
    });

    const token = req.query.token;
    res.redirect(`/colors?token=${token}`);
  } catch (err) {
    console.error('Test result processing failed:', err);
    res.status(500).send('Something went wrong. Please try again.');
  }
}


}

module.exports = testController

