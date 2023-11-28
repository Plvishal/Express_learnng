import UserModel from '../features/user/user.model.js';
const basicAuthorizer = (req, res, next) => {
  // 1. Check if authorization header is empty
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).send('No authorization details found');
  }
  console.log(authHeader);
  //   2. Extract credentials.[Basic ]
  const base64credentials = authHeader.replace('Basic', '');
  console.log(base64credentials);
  //   3. Decode credentials
  const decodeCreds = Buffer.from(base64credentials, 'base64').toString('utf8');
  console.log(decodeCreds);
  // data
  const creds = decodeCreds.split(':');
  const user = UserModel.getAll().find(
    (u) => u.email == creds[0] && u.password == creds[1]
  );

  if (user) {
    next();
  } else {
    return res.status(401).send('Incorrect Credentials');
  }
};

export default basicAuthorizer;
