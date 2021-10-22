const { getDatabase, ref, set } = require("firebase/database");

function storeUserData(userId, data) {
  const db = getDatabase();
  try {
    set(ref(db, "users/" + userId), data);
  } catch (e) {
    console.log(e)
  }
}

module.exports = storeUserData;
