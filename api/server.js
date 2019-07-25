const express = require('express');

const Notes = require('../notes/notes-model.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'running' });
});

server.get('/api/notes', (req, res) => {
  Notes.getAll()
    .then(notes => {
      res.status(200).json(notes);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = server;
