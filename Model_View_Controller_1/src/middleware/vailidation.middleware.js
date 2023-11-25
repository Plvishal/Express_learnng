import { body, validationResult } from 'express-validator';
export const vailidateRequest = async (req, res, next) => {
  // vailidate  name
  const { name, price, imgUrl } = req.body;
  //   ****************************************************************
  //   let errors = [];
  //   if (!name || name.trim() == '') {
  //     errors.push('Name is required');
  //   }
  //   if (!price || parseFloat(price) < 1) {
  //     errors.push('Price must be a positive value');
  //   }
  //   try {
  //     const validUrl = new URL(imgUrl);
  //   } catch (err) {
  //     errors.push('URL is invailid');
  //   }

  // ************************************************************************
  // Validation using the Express Validator
  //   1 . setup rules for the validators
  //   console.log(name,price,imgUrl);
  const rules = [
    body('name').notEmpty().withMessage('Name is Required'),
    body('desc').notEmpty().withMessage('Description  is Required'),
    body('price').isFloat({ gt: 0 }).withMessage('Price must be Positive'),
    body('imgUrl').isURL().withMessage('Invailid URL'),
  ];
  //   2. Run the rules
  await Promise.all(rules.map((rule) => rule.run(req)));
  //   3. Check if there are any error after running the rules
  var validatorError = validationResult(req);
  // 4.if any error then show
  if (!validatorError.isEmpty()) {
    return res.render('new-product.ejs', {
      errorMessage: validatorError.array()[0].msg,
    });
  }
  //   if (errors.length > 0) {
  //     return res.render('new-product.ejs', { errorMessage: errors[0] });
  //   }
  next();
};
