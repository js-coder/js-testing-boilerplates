describe("supertest suite", function() {
  it("testing with the help of super-agen", function(done) {
    user
      .get('/')
      .end(function (res) {
        res.should.be.html;
        res.should.have.status(200);
        res.should.have.header('Content-Length', '12');
        res.text.should.equal('Hello world!');
        done();
    });
  });
});
