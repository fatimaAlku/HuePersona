const Color = require('../../models/color.js')

const dataController = {}
dataController.index = async (req,res,next) => {
   try {
    const user = await req.user.populate('colors')
    res.locals.data.colors = user.colors
    next()
   } catch(error) {
    res.status(400).send({ message: error.message })
  }
}

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
    // Create the color
    const color = await Color.create(req.body);

    // Add it to the user's favorite colors (if logged in and available)
    if (req.user) {
      req.user.favoriteColors.addToSet(color._id);
      await req.user.save();
    }

    // Pass to response
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
            throw new error(`could not locate a color with the id ${req.params.id}`)
        }
        next()
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
}


module.exports = dataController