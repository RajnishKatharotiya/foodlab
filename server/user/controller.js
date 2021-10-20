const { getDatabase, ref, set } = require("firebase/database");

function storeUserData(userId, data) {
  const db = getDatabase();
  set(ref(db, "users/" + userId), {
    ...data,
  });
}

module.exports = storeUserData;
