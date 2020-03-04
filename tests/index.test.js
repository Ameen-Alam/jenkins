const request = require('supertest')

const app = require("../src/index")

test("Testing root endpoint", async () => {
    await request(app).get('/').send().expect(200)
})

