describe("phantom suite", function() {

  before(function(done) {
    this.server = app.listen(3000);
    var self = this;
    phantom.create(function(ph){
      self.ph = ph;
      ph.createPage(function(page){
        self.page = page;
        done();
      })
    })
  });

  after(function(done){
    this.ph.exit();
    this.server.close(done);
  });

  it("testing with the help of phantom", function(done) {
    this.page.open("http://localhost:3000", function(status){
      status.should.be.eql("success");
      done();
    })
  });
});
