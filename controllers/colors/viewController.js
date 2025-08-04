const RESOURCE_PATH = '/colors'
const viewController = {
  index(req, res, next){
    res.render('colors/Index', res.locals.data)
  },
  show(req, res, next){
    res.render('colors/Show', res.locals.data)
  },
  edit(req, res, next){
    res.render('colors/Edit', res.locals.data)
  },
  newView(req, res, next){
    res.render('colors/New', res.locals.data)
  },
  redirectHome(req, res, next){
    if(res.locals.data.token){
      res.redirect(`${RESOURCE_PATH}?token=${res.locals.data.token}`)
    }else {
      res.redirect(RESOURCE_PATH)
    } 
  },
  redirectShow(req, res, next){
     if(res.locals.data.token){
      res.redirect(`${RESOURCE_PATH}/${req.params.id}?token=${res.locals.data.token}`)
    }else {
      res.redirect(`${RESOURCE_PATH}/${req.params.id}`)
    } 
  }
}

module.exports = viewController