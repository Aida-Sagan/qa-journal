import request from 'supertest';
import { expect } from 'chai';
import sinon from 'sinon';
import users from '../test-data/users.json' assert { type: "json" };

describe('Login API', () => {
    let clock;

    before(() => {
        clock = sinon.useFakeTimers();
    });

    after(() => {
        clock.restore();
    });

    it('should login successfully', async () => {
        const res = await request('https://reqres.in')
            .post('/api/login')
            .send(users[0]);

        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('token');
    });

    it('should fail login without password', async () => {
        const res = await request('https://reqres.in')
            .post('/api/login')
            .send({ email: users[0].email });

        expect(res.status).to.equal(400);
    });
});
