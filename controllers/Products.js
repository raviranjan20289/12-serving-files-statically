exports.getProduct = (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'add-product.hbs'));
    res.render('add-product');
  };

  exports.postProducts = (req, res, next) => {
    console.log(req.body);
    res.render('add-product');
  };

  exports.getContactus= (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'contactus.hbs'));
    res.render('contactus');
  };


  exports.postContactus= (req, res, next) => {
    console.log(req.body);
    res.redirect('/success');
  };

  exports.getSuccess= (req, res, next) =>{
    res.send("successfully added ");
  };

  exports.getHomePage = (req, res, next) => {
   res.render('shop');
  };




