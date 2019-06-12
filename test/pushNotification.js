process.env.NODE_ENV = "test";

let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../dist/app").default;
let should = chai.should();

chai.use(chaiHttp);

/*
 * Test the /POST route
 */
describe("/POST push-notification", () => {
  it("it should not POST a book without pages field", done => {
    let notification = {
      title: "The Lord of the Rings",
      message: "author - J.R.R. Tolkien",
      tokenDevice: "testToken",
      data: { author: "J.R.R. Tolkien", someData: "somedata" }
    };

    chai
      .request(server)
      .post("/push-notification")
      .send(notification)
      .end(function(err, res) {
        const [data] = res.body.receipts;
        console.log(data);
        res.should.have.status(200);
        done();
      });
  });
});
