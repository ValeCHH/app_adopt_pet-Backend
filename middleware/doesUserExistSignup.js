const { getUserByEmail } = require('../data/users');


async function doesUserExistSignup(req, res, next) {
  const { email } = req.body;
  const user = await getUserByEmail(email);
  if (user) {
    res.status(400).send(alert('User Already Exist'));
    return;
  }
  next();
};


module.exports = {doesUserExistSignup}