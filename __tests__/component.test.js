const request = require('supertest');
const app = require('../app');

describe('Components Test', () => {
    it('should respond with the requested component', async () => {
        const res = await request(app)
            .get('/component/header');

        expect(res.statusCode).toBe(200);
        expect(res.text).toContain('site.local');
    });

    it('should respond with not found when component is unrecognised', async () => {
        const res = await request(app)
            .get('/component/foobar');

        expect(res.statusCode).toBe(404);
        expect(res.text).toContain('Not Found');
    });
});

describe('Preview Test', () => {
    it('should respond with preview page for requested component', async () => {
        const res = await request(app)
            .get('/preview/header');

        expect(res.statusCode).toBe(200);
        expect(res.text).toContain('bootstrap.min.css');
        expect(res.text).toContain('bootstrap.min.js');
        expect(res.text).toContain('popper.min.js');
        expect(res.text).toContain('jquery.slim.min.js');
        expect(res.text).toContain('site.local');
    });

    it('should respond with not found when component is unrecognised', async () => {
        const res = await request(app)
            .get('/preview/foobar');

        expect(res.statusCode).toBe(404);
        expect(res.text).toContain('Not Found');
    });
});
