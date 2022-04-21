const chai = require("chai");
const chaiHTTP = require("chai-http");
const res = require("express/lib/response");
const server = require("../bin/www")

chai.should();

chai.use(chaiHTTP);

describe('routes', () => {
    describe('GET /', () => {
        chai.request(server)
            .get("/")
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a("html")
            })
            .done
    })
})