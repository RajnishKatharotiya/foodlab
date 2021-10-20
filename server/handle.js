const {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} = require("firebase/auth");
const storeUserData = require("./user/controller");

const router = require("express").Router();

router.post("/register", (req, res) => {
  console.log(req.params);
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      storeUserData(user._id, user);
      res.send(user);
    })
    .catch((error) => {
      res.send(error);
    });
});

router.post("/login", (req, res) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      res.send(user);
    })
    .catch((error) => {
      res.send(error);
    });
});

module.exports = router;
