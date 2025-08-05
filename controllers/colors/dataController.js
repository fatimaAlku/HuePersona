const Color = require('../../models/color.js')


const dataController = {
  index(req, res, next) {
    Color.find({ user: req.user._id }) // ✅ Must filter by logged-in user
      .then((colors) => {
        res.locals.data.colors = colors;
        next();
      })
      .catch((err) => {
        console.error('Color fetch error:', err);
        res.status(500).send('Could not fetch colors.');
      });
  }
};

dataController.destroy = async (req, res, next ) => {
    try {
         await Color.findOneAndDelete({'_id': req.params.id }).then(() => {
            next()
         })
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
}


dataController.update = async (req, res, next) => {
  try {
    const updatedColor = await Color.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedColor) {
      return res.status(404).send({ message: 'Color not found' });
    }

    res.locals.data.color = updatedColor;
    next();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};


dataController.create = async (req, res, next) => {
  try {
    // ✅ Attach the logged-in user's ID to the color
    req.body.user = req.user._id;

    const color = await Color.create(req.body);

    // Optional: Add to user's favorites, if you're using this
    if (req.user.favoriteColors) {
      req.user.favoriteColors.addToSet(color._id);
      await req.user.save();
    }

    res.locals.data.color = color;
    next();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};



dataController.show = async (req, res, next) => {
    try {
        res.locals.data.color = await Color.findById(req.params.id)
        if(!res.locals.data.color){
            throw new Error(`could not locate a color with the id ${req.params.id}`)
        }
        next()
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
}


module.exports = dataController