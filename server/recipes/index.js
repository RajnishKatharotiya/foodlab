const { getDatabase, ref, child, get } = require("@firebase/database");

const router = require("express").Router();

router.get("/fetch-all", (req, res) => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `recipes`)).then((snapshot) => {
        if (snapshot.exists()) {
            res.send(snapshot.val())
        } else {
            res.status(400).send("No data available")
        }
    }).catch((error) => {
        res.status(400).send(error);
    });
});


module.exports = router;
