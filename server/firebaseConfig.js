const { initializeApp } = require("firebase/app");
const { getDatabase } = require("firebase/database");

const firebaseConfig = {
  apiKey: "AIzaSyDgwZ4zibAuJxllUTRHEYp5PCyMKjA-4yg",
  authDomain: "foodlab-c3e12.firebaseapp.com",
  databaseURL: "https://foodlab-c3e12-default-rtdb.firebaseio.com",
  projectId: "foodlab-c3e12",
  storageBucket: "foodlab-c3e12.appspot.com",
  messagingSenderId: "437076809275",
  appId: "1:437076809275:web:6e49ff83b0739c91e86e1e",
};

const app = initializeApp(firebaseConfig);

module.exports = app;
const database = getDatabase(app);
