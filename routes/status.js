const express = require("express");
const {
  adoptPet,
  returnPet,
  fosterPet,
  savePet,
  unsavePet,
  getSavedByUser,
} = require("../data/status");
const router = express.Router();
const { checkToken } = require("../middleware/checkToken");
const { userOwnPet } = require("../middleware/userOwnPet");

router.get("/", checkToken, async (req, res) => {
  // const allPets = await getPets();
  // res.send(allPets);
});

router.post("/adopt/:id", async (req, res) => {
  const { user_id, pet_id } = req.body;
  const adoptingPet = await adoptPet(user_id, pet_id);
  res.send(`The ${user_id} adopted ${pet_id} successfully.`);
});

router.post("/foster/:id", async (req, res) => {
  const { user_id, pet_id } = req.body;
  const fosteringPet = await fosterPet(user_id, pet_id);
  res.send(fosteringPet, `The ${user_id} adopted ${pet_id} successfully.`);
});

router.post("/save/:id", async (req, res) => {
  const { user_id, pet_id } = req.body;
  const savingPet = await savePet(user_id, pet_id);
  res.send(savingPet, `The pet ${pet_id} was saved.`);
});
router.post("/unsave/:id", async (req, res) => {
  const { user_id, pet_id } = req.body;
  const savingPet = await unsavePet(user_id, pet_id);
  res.send(savingPet, `The pet ${pet_id} was saved.`);
});

router.get("/checksaved/:id", async (req, res) => {
  const { user_id, pet_id } = req.body;
  const savingPet = await getSavedByUser(user_id, pet_id);
  res.send(savingPet);
});

router.put("/return/:id", userOwnPet, async (req, res) => {
  const { user_id, pet_id } = req.body;
  const returningPet = await returnPet(user_id, pet_id);
  res.send(returningPet);
});

module.exports = router;
