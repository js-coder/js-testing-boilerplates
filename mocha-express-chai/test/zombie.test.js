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

  it("testing with the help of zombie", function(done) {
    var browser = this.browser;
    browser.success.should.be.true;
    browser.text("title").should.eql('Hello world');
    browser
      .fill("email", "test@exmple.com")
      .pressButton("Save", function() {
        // Form submitted, new page loaded.
        browser.success.should.be.true;
        done();
      })
  });
});
