function userOwnPet(req, res, next) {
  const { user_id, ownerId } = req.body;
    if (user_id !== ownerId) {
      res.status(400).send('You can not return this pet, it´s not yours to retun.');
      return;
    }
    next();
  }
  
  
  module.exports = {userOwnPet}
  