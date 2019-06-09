import server from 'supertest';
import app from '../app';

describe('Testing homepage', () => {
  it('Should redirect to the homepage with status 302', done => {
    server(app)
      .get('/')
      .end((err, res) => {
        expect(res.status).toEqual(302);
        done();
      });
  });
  it('Should fail and return status 404 if endpoint does not exist', done => {
    server(app)
      .get('/idontexistandiwillnever')
      .end((err, res) => {
        expect(res.status).toEqual(404);
        expect(res).toHaveProperty('status');
        expect(res).toHaveProperty('error');
        expect(res.body.error).toEqual('Sorry, no such endpoint resides here');
        done();
      })
  })
});