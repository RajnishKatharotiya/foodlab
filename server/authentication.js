const {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} = require("firebase/auth");
const storeUserData = require("./user/controller");

const router = require("express").Router();

router.post("/register", (req, res) => {
  const { email, password, passwordConfirmation, ...rest } = req.body;
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      storeUserData(user.uid, { email, ...rest, role: 'standard', uid: user.uid });
      res.send(user);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      res.send(user);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

module.exports = router;
