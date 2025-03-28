import request from 'supertest';
import { expect } from 'chai';

describe('Users API', () => {
    it('should fetch users list', async () => {
        const res = await request('https://reqres.in').get('/api/users?page=2');
        expect(res.status).to.equal(200);
        expect(res.body.data).to.be.an('array');
    });

    it('should fetch single user', async () => {
        const res = await request('https://reqres.in').get('/api/users/2');
        expect(res.status).to.equal(200);
        expect(res.body.data).to.have.property('id', 2);
    });

    it('should return 404 for non-existent user', async () => {
        const res = await request('https://reqres.in').get('/api/users/999');
        expect(res.status).to.equal(404);
    });
});
