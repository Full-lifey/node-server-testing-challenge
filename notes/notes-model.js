const db = require('../data/db-Config.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById
};

async function insert(note) {
  return db('notes').insert(note);
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

function getAll() {
  return db('hobbits');
}

function findById(id) {
  return null;
}
