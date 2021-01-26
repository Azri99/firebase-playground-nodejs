const firebaseadmin = require('../config');

const storage = firebaseadmin.storage().bucket();

module.exports = storage;