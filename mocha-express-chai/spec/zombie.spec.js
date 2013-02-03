describe("zombie suite", function() {

  before(function() {
    this.server = app.listen(3000);
    // initialize the browser using the same port as the test application
    this.browser = new Browser({ site: 'http://localhost:3000' });
  });

  before(function(done) {
    // load the page
    this.browser.visit('/', function(){
      // if you pass done directly and error occurs
      // it will fail and spoil report with stack trace
      done();
    });
  });

  after(function(done){
    this.server.close(done);
  });

  it("testing with the help of zombie", function() {
    this.browser.success.should.be.true;
  });
});
