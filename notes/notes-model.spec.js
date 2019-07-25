const db = require('../data/db-config.js');

const Notes = require('./notes-model.js');

describe('Notes Model', () => {
  beforeEach(async () => {
    await db('notes').truncate();
  });

  describe('Note Creation', () => {
    it('check valid note submission', async () => {
      await Notes.insert({ note: 'Remember Separation of concerns!' });
      await Notes.insert({ note: 'Do not forget to test!' });

      const notes = await db('notes');
      expect(notes).toHaveLength(2);
    });
  });
});
