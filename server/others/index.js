const { getDatabase, ref, push } = require("@firebase/database");
const router = require("express").Router();


router.post("/contact-us", (req, res) => {
    const db = getDatabase();
    const data = req.body;
    try{
        push(ref(db, "queries/"),data);
        res.send(data);
    } catch(e){
        console.log(e);
        res.send('Firebase store failed!');
    }
});


module.exports = router;
