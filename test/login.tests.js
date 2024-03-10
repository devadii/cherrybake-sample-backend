import { use, expect as _expect } from "chai";
import chaiHttp from "chai-http";
import { app } from "../src/server.js";

const chai = use(chaiHttp);
const expect = _expect;

describe("User API", () => {
  describe("POST /api/users/login", () => {
    it("should handle admin login", (done) => {
      chai
        .request(app)
        .post("/api/users/login")
        .send({ username: "admin@gmail.com", password: "123" })
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
});
