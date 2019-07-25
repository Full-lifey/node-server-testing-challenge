const request = require('supertest');

const server = require('./server.js');
const Notes = require('../notes/notes-model.js');
const db = require('../data/db-config.js');

describe('server endpoints', () => {
  beforeEach(async () => {
    await db('notes').truncate();
  });

  describe('GET /', () => {
    it('should return 200', () => {
      return request(server)
        .get('/')
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it('should return { api: "running"} as the body', () => {
      return request(server)
        .get('/')
        .then(res => {
          expect(res.body).toEqual({ api: 'running' });
          expect(res.body.api).toBe('running');
        });
    });
  });

  describe('GET /api/notes', () => {
    it('should return 200', () => {
      return request(server)
        .get('/api/notes')
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
    it('should return notes', async () => {
      await Notes.insert({ note: 'Remember Separation of concerns!' });
      await Notes.insert({ note: 'Do not forget to test!' });

      return request(server)
        .get('/api/notes')
        .then(res => {
          console.log('res.body', res.body);
          expect(res.status).toBe(200);
          expect(res.body).toHaveLength(2);
        });
    });
  });
});
