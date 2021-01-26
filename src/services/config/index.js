const firebaseadmin = require("firebase-admin");

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE);

firebaseadmin.initializeApp({
  credential: firebaseadmin.credential.cert(serviceAccount),
  storageBucket: "fir-playground-nodejs.appspot.com"
});

module.exports = firebaseadmin;
