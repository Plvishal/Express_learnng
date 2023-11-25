export  const vailidateRequest = (req, res, next) => {
  // vailidate  name
  const { name, price, imgUrl } = req.body;
  let errors = [];
  if (!name || name.trim() == '') {
    errors.push('Name is required');
  }
  if (!price || parseFloat(price) < 1) {
    errors.push('Price must be a positive value');
  }
  try {
    const validUrl = new URL(imgUrl);
  } catch (err) {
    errors.push('URL is invailid');
  }
  if (errors.length > 0) {
    return res.render('new-product.ejs', { errorMessage: errors[0] });
  }
  next();
};
