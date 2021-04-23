const request = require('supertest');
const app = require('./app');

describe('system tests', () => {
  describe('snippet', () => {
    it('has status code', async () => {
      expect.assertions(1);

      const res = await request(app).get('/snippet');

      expect(res.status).toBe(200);
    });

    it('has content', async () => {
      expect.assertions(1);

      const res = await request(app).get('/snippet');

      expect(res.text).toContain('This is my first snippet');
    });
  });

  describe('snippet-from-cache', () => {
    it('has status code', async () => {
      expect.assertions(1);

      const res = await request(app).get('/snippet-from-cache');

      expect(res.status).toBe(200);
    });

    it('has content', async () => {
      expect.assertions(1);

      const res = await request(app).get('/snippet-from-cache');

      expect(res.text).toContain('This is my first snippet');
    });
  });

  describe('snippet-with-params', () => {
    it('has status code', async () => {
      expect.assertions(1);

      const res = await request(app).get('/snippet-with-params');

      expect(res.status).toBe(200);
    });

    it('has content', async () => {
      expect.assertions(1);

      const res = await request(app).get('/snippet-with-params');

      expect(res.text).toContain('This foo is bar');
    });
  });

  describe('snippets', () => {
    it('has status code', async () => {
      expect.assertions(1);

      const res = await request(app).get('/snippets');

      expect(res.status).toBe(200);
    });

    it('has content', async () => {
      expect.assertions(2);

      const res = await request(app).get('/snippets');

      expect(res.text).toContain('This is my first snippet');
      expect(res.text).toContain('This is ');
    });
  });

  describe('snippets-from-cache', () => {
    it('has status code', async () => {
      expect.assertions(1);

      const res = await request(app).get('/snippets');

      expect(res.status).toBe(200);
    });

    it('has content', async () => {
      expect.assertions(2);

      const res = await request(app).get('/snippets-from-cache');

      expect(res.text).toContain('This is my first snippet');
      expect(res.text).toContain('This is ');
    });
  });

  describe('snippets-with-params', () => {
    it('has status code', async () => {
      expect.assertions(1);

      const res = await request(app).get('/snippets-with-params');

      expect(res.status).toBe(200);
    });

    it('has content', async () => {
      expect.assertions(2);

      const res = await request(app).get('/snippets-with-params');

      expect(res.text).toContain('This is my first snippet');
      expect(res.text).toContain('This foo is bar');
    });
  });
});
